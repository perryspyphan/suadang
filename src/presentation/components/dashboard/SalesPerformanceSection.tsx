'use client'

import { JSX } from "react"

// ============================================================
// SalesPerformanceSection.tsx - Top sản phẩm bán chạy
// KHÔNG cần import SVG - dùng inline SVG + Tailwind thuần
// ============================================================

// Dữ liệu mẫu — sau kết nối Supabase thay bằng useDashboard()
const barData = [
  { label: 'Táo (kg)',       value: 76962, display: '76,962' },
  { label: 'Xà lách (kg)',   value: 74779, display: '74,779' },
  { label: 'Mận (kg)',       value: 45125, display: '45,125' },
  { label: 'Hồng giòn (kg)', value: 43887, display: '43,887' },
  { label: 'Cà rốt (kg)',    value: 8142,  display: '8,142'  },
]

const gridLabels = ['0', '20K', '40K', '60K', '80K']
const maxValue = Math.max(...barData.map(d => d.value))

export const SalesPerformanceSection = (): JSX.Element => {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-[#333B69] text-[22px] font-semibold">Top mặt hàng bán chạy</h3>
        <span className="text-[#333B69] text-[22px] font-semibold">tháng này</span>
      </div>

      <div className="bg-white rounded-[25px] p-6">
        {/* Grid labels (X-axis) */}
        <div className="flex justify-between pl-[90px] pr-4 mb-2">
          {gridLabels.map(label => (
            <span key={label} className="text-[rgba(42,51,81,0.42)] text-xs">{label}</span>
          ))}
        </div>

        {/* Bars */}
        <div className="flex flex-col gap-0">
          {barData.map((item, index) => {
            const widthPct = (item.value / maxValue) * 100
            return (
              <div
                key={index}
                className="flex items-center h-16 relative"
              >
                {/* Background grid lines */}
                <div className="absolute inset-0 pl-[90px] pr-4 flex justify-between pointer-events-none">
                  {gridLabels.map((_, i) => (
                    <div key={i} className="w-px h-full bg-[rgba(53,82,151,0.1)]" />
                  ))}
                </div>

                {/* Label bên trái */}
                <div className="w-[86px] pr-3 text-right shrink-0 z-10">
                  <span className="text-[rgba(37,43,65,0.64)] text-xs leading-tight">
                    {item.label}
                  </span>
                </div>

                {/* Bar */}
                <div className="flex-1 flex items-center gap-2 z-10">
                  <div
                    className="h-6 bg-[#1AA367] rounded transition-all duration-500"
                    style={{ width: `${widthPct}%` }}
                  />
                  <span className="text-[rgba(37,43,65,0.64)] text-[10px] font-medium whitespace-nowrap">
                    {item.display}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
