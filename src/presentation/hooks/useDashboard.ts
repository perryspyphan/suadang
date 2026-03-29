// src/presentation/hooks/useDashboard.ts
'use client'

import { useEffect, useState } from 'react'

interface DashboardData {
  todaySummary: {
    totalRevenue:  number
    totalOrders:   number
    pendingOrders: number
  }
  monthlyRevenue: { month: string; revenue: number }[]
  topProducts: { code: string; name: string; totalSold: number }[]
}

export function useDashboard() {
  const [data, setData]     = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState<string | null>(null)

  useEffect(() => {
    // Gọi server action qua fetch thay vì dùng browser supabase trực tiếp
    fetch('/api/dashboard-summary')
      .then(res => res.json())
      .then(setData)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
