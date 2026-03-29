'use client'

import { JSX } from "react"

// ============================================================
// RecentActivitiesSection.tsx - KHÔNG cần import SVG
// ============================================================

interface Activity {
  id: number
  iconBg: string
  iconColor: string
  icon: JSX.Element
  label: string
  amount?: string
  time: string
}

const ShoppingIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" fill={color} className="w-5 h-5">
    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z"/>
  </svg>
)

const BoxIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" fill={color} className="w-5 h-5">
    <path d="M20 7l-8-4-8 4m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
  </svg>
)

const InboxIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" fill={color} className="w-5 h-5">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2.01 2s-2.01-.9-2.01-2H5V5h14v9z"/>
  </svg>
)

const StoreIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" fill={color} className="w-5 h-5">
    <path d="M20 4H4v2l8 5 8-5V4zM4 13h16v7H4z"/>
  </svg>
)

const TruckIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" fill={color} className="w-5 h-5">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
)

const activities: Activity[] = [
  {
    id: 1,
    iconBg: 'bg-[#FFF5D9]',
    iconColor: '#FFBB38',
    icon: <ShoppingIcon color="#FFBB38" />,
    label: 'Đơn hàng online mới (#102)',
    amount: '+$5,400',
    time: '2 phút trước',
  },
  {
    id: 2,
    iconBg: 'bg-[#FADCF0]',
    iconColor: '#C62BB1',
    icon: <BoxIcon color="#C62BB1" />,
    label: 'Đã xuất kho (Đơn #099)',
    time: '15 phút trước',
  },
  {
    id: 3,
    iconBg: 'bg-[#E7EDFF]',
    iconColor: '#396AFF',
    icon: <InboxIcon color="#396AFF" />,
    label: 'Nhập kho (Táo Envy)',
    time: '1 giờ trước',
  },
  {
    id: 4,
    iconBg: 'bg-[#DCFAF8]',
    iconColor: '#16DBCC',
    icon: <StoreIcon color="#16DBCC" />,
    label: 'DGFarm vừa bán đơn hàng tại quầy',
    amount: '+$5,400',
    time: '2 giờ trước',
  },
  {
    id: 5,
    iconBg: 'bg-[#DCFAF8]',
    iconColor: '#16DBCC',
    icon: <TruckIcon color="#16DBCC" />,
    label: 'Giao hàng thành công (#098)',
    time: '3 giờ trước',
  },
]

export const RecentActivitiesSection = (): JSX.Element => {
  return (
    <div>
      <h3 className="text-[#343C6A] text-[22px] font-semibold mb-3">
        Các hoạt động gần đây
      </h3>

      <div className="bg-white rounded-[25px] p-5 flex flex-col gap-4" style={{ minHeight: 280 }}>
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-3">
            {/* Icon */}
            <div className={`${activity.iconBg} w-11 h-11 rounded-full flex items-center justify-center shrink-0`}>
              {activity.icon}
            </div>

            {/* Label */}
            <div className="flex-1 min-w-0">
              <p className="text-black text-sm font-medium truncate">{activity.label}</p>
              <p className="text-[#718EBF] text-xs">{activity.time}</p>
            </div>

            {/* Amount */}
            {activity.amount && (
              <span className="text-[#41D4A8] text-sm font-medium whitespace-nowrap">
                {activity.amount}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
