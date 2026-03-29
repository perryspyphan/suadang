// src/app/api/dashboard-summary/route.ts
import { NextResponse } from 'next/server'
import { getOrderRepository } from '@/infrastructure/container/DIContainer'

export async function GET() {
  try {
    const orderRepo = getOrderRepository()
    const [todaySummary, monthlyRevenue, topProducts] = await Promise.all([
      orderRepo.findTodaySummary(),
      orderRepo.findMonthlyRevenue(),
      orderRepo.findTopSellingProducts(),
    ])
    return NextResponse.json({ todaySummary, monthlyRevenue, topProducts })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
