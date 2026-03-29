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