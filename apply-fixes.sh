#!/bin/bash
# ============================================================
# apply-fixes.sh — Chạy script này trong thư mục gốc project
# Ví dụ: cd /path/to/soquy && bash apply-fixes.sh
# ============================================================
set -e

echo "🔧 Bắt đầu apply fixes..."

# ── 1. src/app/page.tsx ──────────────────────────────────────
mkdir -p src/app
cat > src/app/page.tsx << 'ENDOFFILE'
import { redirect } from 'next/navigation'
import { createClient } from '@/infrastructure/supabase/server'

export default async function RootPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) redirect('/dashboard')
  else redirect('/login')
}
ENDOFFILE
echo "✅ src/app/page.tsx"

# ── 2. src/app/api/dashboard-summary/route.ts ────────────────
mkdir -p src/app/api/dashboard-summary
cat > src/app/api/dashboard-summary/route.ts << 'ENDOFFILE'
// src/app/api/dashboard-summary/route.ts
import { NextResponse } from 'next/server'
import { getOrderRepository } from '@/infrastructure/container/DIContainer'

export async function GET() {
  try {
    const orderRepo = getOrderRepository()
    const [todaySummary, monthlyRevenue, topProducts, lowStockCount, recentActivities] = await Promise.all([
      orderRepo.findTodaySummary(),
      orderRepo.findMonthlyRevenue(),
      orderRepo.findTopSellingProducts(),
      orderRepo.findLowStockCount(),
      orderRepo.findRecentActivities(),
    ])
    return NextResponse.json({ todaySummary, monthlyRevenue, topProducts, lowStockCount, recentActivities })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
ENDOFFILE
echo "✅ src/app/api/dashboard-summary/route.ts"

# ── 3. src/app/(admin)/hang-hoa/page.tsx ─────────────────────
mkdir -p "src/app/(admin)/hang-hoa"
cat > "src/app/(admin)/hang-hoa/page.tsx" << 'ENDOFFILE'
// src/app/(admin)/hang-hoa/page.tsx
import { Suspense } from 'react'
import { getProductsUseCase } from '@/application/use-cases/product/ProductUseCases'
import ProductTable from '@/presentation/components/product/ProductTable'

export const dynamic = 'force-dynamic'

export default async function HangHoaPage() {
  const products = await getProductsUseCase()
  return (
    <Suspense>
      <ProductTable initialProducts={products} />
    </Suspense>
  )
}
ENDOFFILE
echo "✅ src/app/(admin)/hang-hoa/page.tsx"

# ── 4. src/domain/repositories/IOrderRepository.ts ───────────
mkdir -p src/domain/repositories
cat > src/domain/repositories/IOrderRepository.ts << 'ENDOFFILE'
// src/domain/repositories/IOrderRepository.ts

export interface IOrderRepository {
  findAll(): Promise<any[]>
  findTodaySummary(): Promise<{
    totalRevenue:  number
    totalOrders:   number
    pendingOrders: number
  }>
  findMonthlyRevenue(): Promise<{ month: string; revenue: number }[]>
  findTopSellingProducts(): Promise<{ code: string; name: string; totalSold: number }[]>
  findLowStockCount(): Promise<number>
  findRecentActivities(): Promise<{
    id: number
    staff_id: string
    action: string
    target_id: string | null
    note: string | null
    created_at: string
  }[]>
  findConflictedOrders(productCode: string): Promise<{
    order_id:       string
    customer_id:    string
    customer_name:  string
    customer_tier:  string
    ordered_at:     string
    quantity:       number
    priority_score: number
  }[]>
  resolveConflict(conflictId: string, resolution: {
    confirmOrderId:  string
    cancelOrderIds:  string[]
    handledBy:       string
    note?:           string
  }): Promise<void>
}
ENDOFFILE
echo "✅ src/domain/repositories/IOrderRepository.ts"

# ── 5. src/infrastructure/supabase/repositories/SupabaseOrderRepository.ts ──
mkdir -p src/infrastructure/supabase/repositories
cat > src/infrastructure/supabase/repositories/SupabaseOrderRepository.ts << 'ENDOFFILE'
// src/infrastructure/supabase/repositories/SupabaseOrderRepository.ts

import { createClient } from '@/infrastructure/supabase/server'
import { revalidatePath } from 'next/cache'
import type { IOrderRepository } from '@/domain/repositories/IOrderRepository'

export class SupabaseOrderRepository implements IOrderRepository {

  async findAll() {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('ordered_at', { ascending: false })
    if (error) throw error
    return data ?? []
  }

  async findTodaySummary() {
    const supabase = await createClient()
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const { data, error } = await supabase
      .from('orders')
      .select('total, workflow_status')
      .gte('ordered_at', today.toISOString())

    if (error) throw error

    const completed = (data ?? []).filter(o => o.workflow_status === 'Hoàn thành')
    const totalRevenue  = completed.reduce((s, o) => s + Number(o.total), 0)
    const totalOrders   = (data ?? []).length
    const pendingOrders = (data ?? []).filter(o =>
      ['Chờ xác nhận', 'Đã xác nhận', 'Đang giao'].includes(o.workflow_status)
    ).length

    return { totalRevenue, totalOrders, pendingOrders }
  }

  async findMonthlyRevenue() {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('orders')
      .select('total, ordered_at')
      .eq('workflow_status', 'Hoàn thành')
      .order('ordered_at', { ascending: true })

    if (error) throw error

    const map = new Map<string, number>()
    for (const row of data ?? []) {
      const month = new Date(row.ordered_at)
        .toLocaleDateString('vi-VN', { month: 'short', year: '2-digit' })
      map.set(month, (map.get(month) ?? 0) + Number(row.total))
    }
    return Array.from(map.entries()).map(([month, revenue]) => ({ month, revenue }))
  }

  async findTopSellingProducts() {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('order_items')
      .select('product_name, product_code, quantity')

    if (error) throw error

    const map = new Map<string, { name: string; total: number }>()
    for (const row of data ?? []) {
      const existing = map.get(row.product_code) ?? { name: row.product_name, total: 0 }
      map.set(row.product_code, { ...existing, total: existing.total + Number(row.quantity) })
    }
    return Array.from(map.entries())
      .map(([code, val]) => ({ code, name: val.name, totalSold: val.total }))
      .sort((a, b) => b.totalSold - a.totalSold)
      .slice(0, 5)
  }

  async findLowStockCount(): Promise<number> {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('products')
      .select('id, stock, min_stock')
      .gt('min_stock', 0)
    if (error) throw error
    return (data ?? []).filter(p => Number(p.stock) < Number(p.min_stock)).length
  }

  async findRecentActivities() {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('activity_logs')
      .select('id, staff_id, action, target_id, note, created_at')
      .order('created_at', { ascending: false })
      .limit(6)
    if (error) throw error
    return data ?? []
  }

  async findConflictedOrders(productCode: string) {
    const supabase = await createClient()
    const { data, error } = await supabase
      .rpc('get_conflicted_orders', { p_product_code: productCode })
    if (error) throw new Error(error.message)
    return data ?? []
  }

  async resolveConflict(conflictId: string, resolution: {
    confirmOrderId: string
    cancelOrderIds: string[]
    handledBy: string
    note?: string
  }): Promise<void> {
    const supabase = await createClient()

    await supabase.from('order_conflicts').update({
      status:      'resolved',
      resolution:  'confirmed_high',
      handled_by:  resolution.handledBy,
      note:        resolution.note ?? null,
      resolved_at: new Date().toISOString(),
      resolved_by_priority: true,
    }).eq('id', conflictId)

    await supabase.from('orders')
      .update({ workflow_status: 'Đã xác nhận' })
      .eq('id', resolution.confirmOrderId)

    if (resolution.cancelOrderIds.length > 0) {
      await supabase.from('orders')
        .update({ workflow_status: 'Đã hủy' })
        .in('id', resolution.cancelOrderIds)
    }

    revalidatePath('/giao-dich/dat-hang/khach-hang')
  }
}
ENDOFFILE
echo "✅ src/infrastructure/supabase/repositories/SupabaseOrderRepository.ts"

# ── 6. src/presentation/hooks/useDashboard.ts ────────────────
mkdir -p src/presentation/hooks
cat > src/presentation/hooks/useDashboard.ts << 'ENDOFFILE'
// src/presentation/hooks/useDashboard.ts
'use client'

import { useEffect, useState } from 'react'

export interface ActivityLog {
  id: number
  staff_id: string
  action: string
  target_id: string | null
  note: string | null
  created_at: string
}

export interface DashboardData {
  todaySummary: {
    totalRevenue:  number
    totalOrders:   number
    pendingOrders: number
  }
  monthlyRevenue: { month: string; revenue: number }[]
  topProducts: { code: string; name: string; totalSold: number }[]
  lowStockCount: number
  recentActivities: ActivityLog[]
}

export function useDashboard() {
  const [data, setData]       = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/dashboard-summary')
      .then(res => res.json())
      .then(setData)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
ENDOFFILE
echo "✅ src/presentation/hooks/useDashboard.ts"

# ── 7. Dashboard.tsx ──────────────────────────────────────────
mkdir -p src/presentation/components/dashboard
cat > src/presentation/components/dashboard/Dashboard.tsx << 'ENDOFFILE'
'use client'

import { JSX } from 'react'
import { useDashboard } from '@/presentation/hooks/useDashboard'
import { MonthlyRevenueSection } from './MonthlyRevenueSection'
import { RecentActivitiesSection } from './RecentActivitiesSection'
import { SalesPerformanceSection } from './SalesPerformanceSection'

const fmt = (n: number) =>
  n >= 1_000_000
    ? (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'tr'
    : n >= 1_000
    ? (n / 1_000).toFixed(0) + 'k'
    : String(n)

export const Dashboard = (): JSX.Element => {
  const { data, loading } = useDashboard()

  const totalRevenue  = data?.todaySummary.totalRevenue  ?? 0
  const totalOrders   = data?.todaySummary.totalOrders   ?? 0
  const lowStockCount = data?.lowStockCount              ?? 0

  const statCards = [
    {
      label: loading ? '...' : `${totalOrders} hóa đơn hôm nay`,
      value: loading ? '—' : fmt(totalRevenue) + '₫',
      iconBg: 'bg-[#FFF5D9]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0 2c-5.33 0-8 2.686-8 4v1h16v-1c0-1.314-2.67-4-8-4z" fill="#FFBB38"/>
        </svg>
      ),
    },
    {
      label: 'Đơn đang xử lý',
      value: loading ? '—' : String(data?.todaySummary.pendingOrders ?? 0),
      iconBg: 'bg-[#FFE0EB]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" fill="#FF82AC"/>
        </svg>
      ),
    },
    {
      label: 'Sắp hết hàng',
      value: loading ? '—' : String(lowStockCount),
      iconBg: 'bg-[#DCFAF8]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#16DBCC"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-['Inter',sans-serif] w-full">
      <div className="max-w-[1440px] mx-auto px-6 py-6">

        <h2 className="text-[#343C6A] text-[22px] font-semibold mb-6">
          Kết quả bán hàng hôm nay
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {statCards.map((card) => (
            <div key={card.label} className="bg-white rounded-[25px] px-8 py-5 flex items-center gap-4 shadow-sm">
              <div className={`${card.iconBg} w-14 h-14 rounded-full flex items-center justify-center shrink-0`}>
                {card.icon}
              </div>
              <div>
                <p className="text-[#718EBF] text-sm">{card.label}</p>
                <p className="text-[#232323] text-2xl font-semibold">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <MonthlyRevenueSection monthlyRevenue={data?.monthlyRevenue ?? []} loading={loading} />
          </div>
          <div className="lg:col-span-1">
            <RecentActivitiesSection activities={data?.recentActivities ?? []} loading={loading} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="w-full">
            <SalesPerformanceSection topProducts={data?.topProducts ?? []} loading={loading} />
          </div>
        </div>

      </div>
    </div>
  )
}
ENDOFFILE
echo "✅ src/presentation/components/dashboard/Dashboard.tsx"

# ── 8. SalesPerformanceSection.tsx ───────────────────────────
cat > src/presentation/components/dashboard/SalesPerformanceSection.tsx << 'ENDOFFILE'
'use client'

import { JSX } from "react"

interface TopProduct {
  code: string
  name: string
  totalSold: number
}

interface Props {
  topProducts: TopProduct[]
  loading: boolean
}

const gridLabels = ['0', '25%', '50%', '75%', '100%']

export const SalesPerformanceSection = ({ topProducts, loading }: Props): JSX.Element => {
  const maxValue = Math.max(...topProducts.map(p => p.totalSold), 1)
  const skeletonRows = Array.from({ length: 5 })

  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-[#333B69] text-[22px] font-semibold">Top mặt hàng bán chạy</h3>
        <span className="text-[#333B69] text-[22px] font-semibold">tháng này</span>
      </div>

      <div className="bg-white rounded-[25px] p-6">
        <div className="flex justify-between pl-[120px] pr-4 mb-2">
          {gridLabels.map(label => (
            <span key={label} className="text-[rgba(42,51,81,0.42)] text-xs">{label}</span>
          ))}
        </div>

        <div className="flex flex-col gap-0">
          {loading
            ? skeletonRows.map((_, i) => (
                <div key={i} className="flex items-center h-16">
                  <div className="w-[116px] pr-3 text-right shrink-0">
                    <div className="h-3 bg-gray-100 rounded ml-auto w-20 animate-pulse" />
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="h-6 bg-gray-100 rounded animate-pulse" style={{ width: `${30 + i * 15}%` }} />
                  </div>
                </div>
              ))
            : topProducts.length === 0
            ? (
                <div className="flex items-center justify-center h-24 text-[#718EBF] text-sm">
                  Chưa có dữ liệu bán hàng
                </div>
              )
            : topProducts.map((item) => {
                const widthPct = (item.totalSold / maxValue) * 100
                const label = item.name.length > 18 ? item.name.slice(0, 16) + '…' : item.name
                return (
                  <div key={item.code} className="flex items-center h-16 relative">
                    <div className="absolute inset-0 pl-[120px] pr-4 flex justify-between pointer-events-none">
                      {gridLabels.map((_, i) => (
                        <div key={i} className="w-px h-full bg-[rgba(53,82,151,0.1)]" />
                      ))}
                    </div>
                    <div className="w-[116px] pr-3 text-right shrink-0 z-10">
                      <span className="text-[rgba(37,43,65,0.64)] text-xs leading-tight">{label}</span>
                    </div>
                    <div className="flex-1 flex items-center gap-2 z-10">
                      <div
                        className="h-6 bg-[#1AA367] rounded transition-all duration-700"
                        style={{ width: `${widthPct}%`, minWidth: widthPct > 0 ? 4 : 0 }}
                      />
                      <span className="text-[rgba(37,43,65,0.64)] text-[10px] font-medium whitespace-nowrap">
                        {item.totalSold.toLocaleString('vi-VN')}
                      </span>
                    </div>
                  </div>
                )
              })
          }
        </div>
      </div>
    </div>
  )
}
ENDOFFILE
echo "✅ src/presentation/components/dashboard/SalesPerformanceSection.tsx"

# ── 9. MonthlyRevenueSection.tsx ─────────────────────────────
cat > src/presentation/components/dashboard/MonthlyRevenueSection.tsx << 'ENDOFFILE'
'use client'

import { JSX } from "react"

interface MonthlyRevenue {
  month: string
  revenue: number
}

interface Props {
  monthlyRevenue: MonthlyRevenue[]
  loading: boolean
}

function buildPolyline(pts: { x: number; y: number }[], w: number, h: number) {
  return pts.map(p => `${(p.x / 100) * w},${(p.y / 100) * h}`).join(' ')
}

function buildFill(pts: { x: number; y: number }[], w: number, h: number) {
  const line = pts.map(p => `${(p.x / 100) * w},${(p.y / 100) * h}`).join(' L ')
  const first = `${(pts[0].x / 100) * w},${h}`
  const last  = `${(pts[pts.length - 1].x / 100) * w},${h}`
  return `M ${first} L ${line} L ${last} Z`
}

function fmtRevenue(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(0) + 'tr'
  if (n >= 1_000)     return (n / 1_000).toFixed(0) + 'k'
  return String(n)
}

export const MonthlyRevenueSection = ({ monthlyRevenue, loading }: Props): JSX.Element => {
  const W = 480
  const H = 160

  const maxRev = Math.max(...monthlyRevenue.map(d => d.revenue), 1)
  const points = monthlyRevenue.map((d, i) => ({
    x: monthlyRevenue.length === 1 ? 50 : (i / (monthlyRevenue.length - 1)) * 96 + 2,
    y: 95 - (d.revenue / maxRev) * 90,
  }))
  const yLabels = [maxRev, maxRev * 0.75, maxRev * 0.5, maxRev * 0.25, 0]
    .map(v => fmtRevenue(Math.round(v)))
  const showChart = !loading && monthlyRevenue.length >= 2

  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-[#333B69] text-[22px] font-semibold">Doanh thu thuần</h3>
        <span className="text-[#333B69] text-[22px] font-semibold">tháng này</span>
      </div>
      <div className="bg-white rounded-[25px] px-8 py-6">
        {loading ? (
          <div className="flex items-center justify-center h-[160px]">
            <div className="w-8 h-8 border-4 border-[#FCAA0B] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : monthlyRevenue.length === 0 ? (
          <div className="flex items-center justify-center h-[160px] text-[#718EBF] text-sm">
            Chưa có dữ liệu doanh thu
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="flex flex-col justify-between text-right pr-2 shrink-0" style={{ height: H }}>
              {yLabels.map((label, i) => (
                <span key={i} className="text-[#718EBF] text-[13px]">{label}</span>
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
                {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
                  <line key={i} x1="0" y1={t * H} x2={W} y2={t * H}
                    stroke="#DFE5EE" strokeWidth="1" strokeDasharray="4 4" />
                ))}
                {showChart && (
                  <>
                    <path d={buildFill(points, W, H)} fill="#FCAA0B" fillOpacity="0.08" />
                    <polyline points={buildPolyline(points, W, H)}
                      fill="none" stroke="#FCAA0B" strokeWidth="3" strokeLinejoin="round" />
                    {points.map((p, i) => (
                      <circle key={i} cx={(p.x / 100) * W} cy={(p.y / 100) * H}
                        r="5" fill="white" stroke="#EDA10D" strokeWidth="3" />
                    ))}
                  </>
                )}
              </svg>
              <div className="flex justify-between">
                {monthlyRevenue.map((d) => (
                  <span key={d.month} className="text-[#718EBF] text-[13px] text-center">{d.month}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
ENDOFFILE
echo "✅ src/presentation/components/dashboard/MonthlyRevenueSection.tsx"

# ── 10. RecentActivitiesSection.tsx ──────────────────────────
cat > src/presentation/components/dashboard/RecentActivitiesSection.tsx << 'ENDOFFILE'
'use client'

import { JSX } from "react"
import type { ActivityLog } from '@/presentation/hooks/useDashboard'

interface Props {
  activities: ActivityLog[]
  loading: boolean
}

function getActivityStyle(action: string): { iconBg: string; icon: JSX.Element } {
  const a = action.toLowerCase()
  if (a.includes('đặt hàng') || a.includes('order') || a.includes('tạo đơn')) {
    return {
      iconBg: 'bg-[#FFF5D9]',
      icon: <svg viewBox="0 0 24 24" fill="#FFBB38" className="w-5 h-5">
        <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
      </svg>,
    }
  }
  if (a.includes('xuất kho') || a.includes('giao hàng') || a.includes('ship')) {
    return {
      iconBg: 'bg-[#FADCF0]',
      icon: <svg viewBox="0 0 24 24" fill="#C62BB1" className="w-5 h-5">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
      </svg>,
    }
  }
  if (a.includes('nhập kho') || a.includes('nhập')) {
    return {
      iconBg: 'bg-[#E7EDFF]',
      icon: <svg viewBox="0 0 24 24" fill="#396AFF" className="w-5 h-5">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2.01 2s-2.01-.9-2.01-2H5V5h14v9z"/>
      </svg>,
    }
  }
  if (a.includes('thanh toán') || a.includes('thu') || a.includes('chi')) {
    return {
      iconBg: 'bg-[#DCFAF8]',
      icon: <svg viewBox="0 0 24 24" fill="#16DBCC" className="w-5 h-5">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>,
    }
  }
  if (a.includes('hủy') || a.includes('cancel')) {
    return {
      iconBg: 'bg-[#FFE0EB]',
      icon: <svg viewBox="0 0 24 24" fill="#FF82AC" className="w-5 h-5">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
      </svg>,
    }
  }
  return {
    iconBg: 'bg-[#F0F0F0]',
    icon: <svg viewBox="0 0 24 24" fill="#94A3B8" className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>,
  }
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins  = Math.floor(diff / 60_000)
  const hours = Math.floor(diff / 3_600_000)
  const days  = Math.floor(diff / 86_400_000)
  if (mins  < 1)  return 'vừa xong'
  if (mins  < 60) return `${mins} phút trước`
  if (hours < 24) return `${hours} giờ trước`
  return `${days} ngày trước`
}

export const RecentActivitiesSection = ({ activities, loading }: Props): JSX.Element => {
  return (
    <div>
      <h3 className="text-[#343C6A] text-[22px] font-semibold mb-3">Các hoạt động gần đây</h3>
      <div className="bg-white rounded-[25px] p-5 flex flex-col gap-4" style={{ minHeight: 280 }}>
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gray-100 animate-pulse shrink-0" />
              <div className="flex-1 space-y-1.5">
                <div className="h-3 bg-gray-100 rounded animate-pulse w-4/5" />
                <div className="h-2.5 bg-gray-100 rounded animate-pulse w-1/3" />
              </div>
            </div>
          ))
        ) : activities.length === 0 ? (
          <div className="flex items-center justify-center flex-1 text-[#718EBF] text-sm">
            Chưa có hoạt động nào
          </div>
        ) : (
          activities.map((activity) => {
            const { iconBg, icon } = getActivityStyle(activity.action)
            const label = activity.note ? `${activity.action} — ${activity.note}` : activity.action
            return (
              <div key={activity.id} className="flex items-center gap-3">
                <div className={`${iconBg} w-11 h-11 rounded-full flex items-center justify-center shrink-0`}>
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black text-sm font-medium truncate">{label}</p>
                  <p className="text-[#718EBF] text-xs">{timeAgo(activity.created_at)}</p>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
ENDOFFILE
echo "✅ src/presentation/components/dashboard/RecentActivitiesSection.tsx"

# ── 11. Header.tsx — search có chức năng ─────────────────────
mkdir -p src/presentation/components/layout
cat > src/presentation/components/layout/Header.tsx << 'ENDOFFILE'
'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface NavChild {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

const navItems: NavItem[] = [
  { label: 'Tổng quan', href: '/dashboard' },
  { label: 'Hàng hóa', href: '/hang-hoa' },
  {
    label: 'Giao dịch',
    href: '/giao-dich/dat-hang/khach-hang',
    children: [
      {
        label: 'Đặt hàng',
        href: '/giao-dich/dat-hang/khach-hang',
        children: [
          { label: 'Khách hàng', href: '/giao-dich/dat-hang/khach-hang' },
          { label: 'Nhà phân phối', href: '/giao-dich/dat-hang/nha-phan-phoi' },
        ],
      },
      {
        label: 'Hóa đơn',
        href: '/giao-dich/hoa-don/khach-hang',
        children: [
          { label: 'Khách hàng', href: '/giao-dich/hoa-don/khach-hang' },
          { label: 'Nhà phân phối', href: '/giao-dich/hoa-don/nha-phan-phoi' },
        ],
      },
    ],
  },
  {
    label: 'Đối tác',
    href: '/khach-hang',
    children: [
      { label: 'Khách hàng', href: '/khach-hang' },
      { label: 'Nhà phân phối', href: '/nha-phan-phoi' },
    ],
  },
  {
    label: 'Nhân viên',
    href: '/nhan-vien',
    children: [
      { label: 'Thông tin', href: '/nhan-vien' },
      { label: 'Danh sách tài khoản', href: '/tai-khoan' },
    ],
  },
  { label: 'Sổ quỹ', href: '/so-quy' },
  { label: 'Báo cáo', href: '/bao-cao' },
]

const CLOSE_DELAY = 150

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [openLabel, setOpenLabel] = useState<string | null>(null)
  const [openSubLabel, setOpenSubLabel] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const subCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current) }
  const clearSubClose = () => { if (subCloseTimer.current) clearTimeout(subCloseTimer.current) }

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setOpenLabel(null)
      setOpenSubLabel(null)
    }, CLOSE_DELAY)
  }, [])

  const scheduleSubClose = useCallback(() => {
    subCloseTimer.current = setTimeout(() => setOpenSubLabel(null), CLOSE_DELAY)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenLabel(null); setOpenSubLabel(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
      if (subCloseTimer.current) clearTimeout(subCloseTimer.current)
    }
  }, [])

  const isActive = (item: NavItem): boolean => {
    if (item.children) {
      return item.children.some(c =>
        c.children
          ? c.children.some(gc => pathname.startsWith(gc.href))
          : pathname.startsWith(c.href)
      )
    }
    return pathname === item.href || pathname.startsWith(item.href + '/')
  }

  return (
    <>
      <div style={{
        height: 40, background: '#1a2560',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', fontSize: 13, color: '#fff',
      }}>
        <span style={{ fontWeight: 700, letterSpacing: 1 }}>DGFarm Admin</span>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            Bán online
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
            <div style={{ width: 26, height: 26, background: '#253584', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>A</div>
            Admin
          </span>
        </div>
      </div>

      <div style={{
        height: 56, background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}>
        <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <div style={{ width: 32, height: 32, background: '#253584', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, color: '#253584', letterSpacing: '-0.5px' }}>DGFarm</span>
        </Link>

        <nav ref={navRef} style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {navItems.map(item => {
            const active = isActive(item)
            const isOpen = openLabel === item.label
            return (
              <div key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => { clearClose(); if (item.children) setOpenLabel(item.label) }}
                onMouseLeave={() => { if (item.children) scheduleClose() }}
              >
                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    padding: '6px 12px', borderRadius: 6, cursor: 'pointer',
                    fontWeight: active ? 700 : 500, fontSize: 14,
                    color: active ? '#253584' : '#444',
                    background: active ? '#eef2ff' : isOpen ? '#f5f7ff' : 'transparent',
                    userSelect: 'none', transition: 'background 0.15s',
                  }}
                  onClick={() => { router.push(item.href); if (!item.children) setOpenLabel(null); setOpenSubLabel(null) }}
                >
                  {item.label}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', opacity: 0.6 }}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>

                {item.children && isOpen && (
                  <div
                    style={{
                      position: 'absolute', top: '100%', left: 0, minWidth: 160, background: '#fff',
                      borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                      border: '1px solid #e5e7eb', zIndex: 500, marginTop: 2,
                      paddingTop: 4, paddingBottom: 4,
                    }}
                    onMouseEnter={() => { clearClose(); clearSubClose() }}
                    onMouseLeave={() => { scheduleClose() }}
                  >
                    {item.children.map(child => {
                      const childActive = child.children
                        ? child.children.some(gc => pathname.startsWith(gc.href))
                        : pathname.startsWith(child.href)
                      const subOpen = openSubLabel === child.label
                      return (
                        <div key={child.label} style={{ position: 'relative' }}
                          onMouseEnter={() => { clearClose(); clearSubClose(); if (child.children) setOpenSubLabel(child.label); else setOpenSubLabel(null) }}
                          onMouseLeave={() => { if (child.children) scheduleSubClose() }}
                        >
                          <div
                            style={{
                              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                              gap: 8, padding: '10px 16px', fontSize: 14,
                              fontWeight: childActive ? 700 : 500,
                              color: childActive ? '#253584' : '#333',
                              background: childActive ? '#eef2ff' : subOpen ? '#f5f7ff' : 'transparent',
                              cursor: 'pointer', whiteSpace: 'nowrap', borderRadius: 4, margin: '0 4px',
                            }}
                            onClick={() => { router.push(child.href); setOpenLabel(null); setOpenSubLabel(null) }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <span style={{ width: 6, height: 6, borderRadius: '50%', background: childActive ? '#253584' : '#ccc', flexShrink: 0 }} />
                              {child.label}
                            </div>
                            {child.children && (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" opacity={0.5}>
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            )}
                          </div>

                          {child.children && subOpen && (
                            <div
                              style={{
                                position: 'absolute', top: -4, left: '100%', minWidth: 160, background: '#fff',
                                borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                border: '1px solid #e5e7eb', zIndex: 600, marginLeft: -4,
                                paddingTop: 4, paddingBottom: 4,
                              }}
                              onMouseEnter={() => { clearClose(); clearSubClose() }}
                              onMouseLeave={() => { scheduleSubClose(); scheduleClose() }}
                            >
                              {child.children.map(grandchild => {
                                const gcActive = pathname.startsWith(grandchild.href)
                                return (
                                  <Link key={grandchild.href} href={grandchild.href}
                                    onClick={() => { setOpenLabel(null); setOpenSubLabel(null) }}
                                    style={{
                                      display: 'flex', alignItems: 'center', gap: 8,
                                      padding: '10px 16px', fontSize: 14,
                                      fontWeight: gcActive ? 700 : 500,
                                      color: gcActive ? '#253584' : '#333',
                                      background: gcActive ? '#eef2ff' : 'transparent',
                                      textDecoration: 'none', borderRadius: 4, margin: '0 4px',
                                    }}
                                    onMouseEnter={e => { if (!gcActive) (e.currentTarget as HTMLElement).style.background = '#f5f7ff' }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = gcActive ? '#eef2ff' : 'transparent' }}
                                  >
                                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: gcActive ? '#253584' : '#ddd', flexShrink: 0 }} />
                                    {grandchild.label}
                                  </Link>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Search — nhấn Enter để tìm hàng hóa */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"
            style={{ position: 'absolute', left: 10, pointerEvents: 'none' }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Tìm hàng hóa..."
            style={{
              height: 34, paddingLeft: 32, paddingRight: 12,
              border: '1px solid #e5e7eb', borderRadius: 8,
              fontSize: 13, outline: 'none', color: '#333',
              background: '#f9fafb', width: 180,
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const q = (e.target as HTMLInputElement).value.trim()
                if (q) router.push(`/hang-hoa?q=${encodeURIComponent(q)}`)
              }
            }}
          />
        </div>
      </div>
    </>
  )
}
ENDOFFILE
echo "✅ src/presentation/components/layout/Header.tsx"

# ── 12. ProductTable.tsx — đọc ?q= từ URL ────────────────────
# File này lớn nên chỉ patch 2 chỗ nhỏ bằng sed
# Thêm import useSearchParams và useEffect
sed -i "s/import React, { useState, useTransition } from 'react'/import React, { useState, useTransition, useEffect } from 'react'\nimport { useSearchParams } from 'next\/navigation'/" \
  src/presentation/components/product/ProductTable.tsx

# Thêm useSearchParams + init search từ URL (thay dòng khai báo state search)
sed -i "s/const \[search, setSearch\]           = useState('')/const searchParams = useSearchParams()\n  const [search, setSearch]           = useState(searchParams.get('q') ?? '')\n\n  useEffect(() => {\n    const q = searchParams.get('q') ?? ''\n    setSearch(q)\n    setPage(1)\n  }, [searchParams])/" \
  src/presentation/components/product/ProductTable.tsx

echo "✅ src/presentation/components/product/ProductTable.tsx"

echo ""
echo "🎉 Xong! Tất cả 12 file đã được apply."
echo "Chạy: npm run dev"
