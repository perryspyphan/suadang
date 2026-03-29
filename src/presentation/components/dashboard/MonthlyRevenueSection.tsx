'use client'

import { JSX } from "react";

// ============================================================
// MonthlyRevenueSection.tsx - Biểu đồ doanh thu, KHÔNG SVG import
// ============================================================

const years = ['2016', '2017', '2018', '2019', '2020', '2021']
const yAxis = ['$40,000', '$30,000', '$20,000', '$10,000', '$0']

// Toạ độ % cho đường line chart (top% tính từ trên xuống trong vùng vẽ)
const points = [
  { x: 0,    y: 92 },
  { x: 19.7, y: 40 },
  { x: 38.2, y: 62 },
  { x: 58,   y: 0  },
  { x: 77.2, y: 47 },
  { x: 96.9, y: 23 },
]

// Tạo polyline SVG từ mảng điểm
function buildPolyline(pts: {x: number; y: number}[], w: number, h: number) {
  return pts.map(p => `${(p.x / 100) * w},${(p.y / 100) * h}`).join(' ')
}

// Tạo path fill bên dưới đường
function buildFill(pts: {x: number; y: number}[], w: number, h: number) {
  const line = pts.map(p => `${(p.x / 100) * w},${(p.y / 100) * h}`).join(' L ')
  const first = `${(pts[0].x / 100) * w},${h}`
  const last  = `${(pts[pts.length-1].x / 100) * w},${h}`
  return `M ${first} L ${line} L ${last} Z`
}

export const MonthlyRevenueSection = (): JSX.Element => {
  const W = 480
  const H = 160

  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-[#333B69] text-[22px] font-semibold">Doanh thu thuần</h3>
        <span className="text-[#333B69] text-[22px] font-semibold">tháng này</span>
      </div>

      <div className="bg-white rounded-[25px] px-8 py-6">
        <div className="flex gap-4">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between text-right pr-2 shrink-0" style={{ height: H }}>
            {yAxis.map(label => (
              <span key={label} className="text-[#718EBF] text-[13px]">{label}</span>
            ))}
          </div>

          {/* Chart area */}
          <div className="flex-1 flex flex-col gap-2">
            <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
              {/* Grid lines dashed */}
              {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
                <line
                  key={i}
                  x1="0" y1={t * H}
                  x2={W} y2={t * H}
                  stroke="#DFE5EE"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Fill area */}
              <path
                d={buildFill(points, W, H)}
                fill="#FCAA0B"
                fillOpacity="0.08"
              />

              {/* Line */}
              <polyline
                points={buildPolyline(points, W, H)}
                fill="none"
                stroke="#FCAA0B"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              {/* Dots */}
              {points.map((p, i) => (
                <circle
                  key={i}
                  cx={(p.x / 100) * W}
                  cy={(p.y / 100) * H}
                  r="5"
                  fill="white"
                  stroke="#EDA10D"
                  strokeWidth="3"
                />
              ))}
            </svg>

            {/* X-axis labels */}
            <div className="flex justify-between">
              {years.map(y => (
                <span key={y} className="text-[#718EBF] text-[13px] text-center">{y}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
