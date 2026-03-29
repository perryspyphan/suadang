'use client'

import { JSX } from 'react'
import { MonthlyRevenueSection } from './MonthlyRevenueSection'
import { RecentActivitiesSection } from './RecentActivitiesSection'
import { SalesChannelsSection } from './SalesChannelsSection'
import { SalesPerformanceSection } from './SalesPerformanceSection'
import Header from '@/presentation/components/layout/Header'

const statCards = [
  {
    label: '6 hóa đơn',
    value: '$12,750',
    iconBg: 'bg-[#FFF5D9]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0 2c-5.33 0-8 2.686-8 4v1h16v-1c0-1.314-2.67-4-8-4z" fill="#FFBB38"/>
      </svg>
    ),
  },
  {
    label: 'Đơn online',
    value: '$3,460',
    iconBg: 'bg-[#FFE0EB]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" fill="#FF82AC"/>
      </svg>
    ),
  },
  {
    label: 'Sắp hết hạn',
    value: '9',
    iconBg: 'bg-[#DCFAF8]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#16DBCC"/>
      </svg>
    ),
  },
]

export const Dashboard = (): JSX.Element => {
  return (
    <div className="relative min-h-screen bg-[#F5F7FA] font-['Inter',sans-serif]">
      <Header />

      {/* ── Main content ── */}
      <div className="max-w-[1440px] mx-auto px-6 py-6">

        {/* Tiêu đề */}
        <h2 className="text-[#343C6A] text-[22px] font-semibold mb-6">
          Kết quả bán hàng hôm nay
        </h2>

        {/* Stat Cards */}
        <div className="flex gap-4 mb-8">
          {statCards.map((card) => (
            <div key={card.label} className="bg-white rounded-[25px] px-8 py-5 flex items-center gap-4 shadow-sm min-w-[220px]">
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

        {/* Charts row */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Monthly Revenue - chiếm 2/3 */}
          <div className="col-span-2">
            <MonthlyRevenueSection />
          </div>
          {/* Recent Activities - chiếm 1/3 */}
          <div className="col-span-1">
            <RecentActivitiesSection />
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-3 gap-6">
          {/* Top sản phẩm - chiếm 2/3 */}
          <div className="col-span-2">
            <SalesPerformanceSection />
          </div>
          {/* Kênh bán hàng - chiếm 1/3 */}
          <div className="col-span-1">
            <SalesChannelsSection />
          </div>
        </div>

      </div>
    </div>
  )
}