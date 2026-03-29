'use client'

// ============================================================
// SalesChannelsSection.tsx - KHÔNG cần import SVG
// ============================================================

// Dữ liệu giả - sau thay bằng useDashboard()
const channelData = [
  { month: 'T1', online: 12000, offline: 8000 },
  { month: 'T2', online: 18000, offline: 10000 },
  { month: 'T3', online: 15000, offline: 12000 },
  { month: 'T4', online: 22000, offline: 9000 },
  { month: 'T5', online: 28000, offline: 14000 },
  { month: 'T6', online: 24000, offline: 16000 },
]

const maxVal = Math.max(...channelData.flatMap(d => [d.online, d.offline]))

export const SalesChannelsSection = () => {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-[#333B69] text-[22px] font-semibold">Hiệu suất kênh bán hàng</h3>
        <span className="text-[#333B69] text-[22px] font-semibold">tháng này</span>
      </div>

      <div className="bg-white rounded-[25px] p-6">
        {/* Legend */}
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-[#FCAA0B]" style={{ boxShadow: 'inset 0 0 6px rgba(172,13,108,0.4)' }} />
            <span className="text-[#718EBF] text-sm">Online</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-[#16DBCC]" style={{ boxShadow: 'inset 0 0 6px rgba(17,52,133,0.4)' }} />
            <span className="text-[#718EBF] text-sm">Tại quầy</span>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-3 h-40">
          {channelData.map((d) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex gap-0.5 items-end" style={{ height: 120 }}>
                {/* Online bar */}
                <div
                  className="flex-1 bg-[#FCAA0B] rounded-t"
                  style={{ height: `${(d.online / maxVal) * 100}%` }}
                />
                {/* Offline bar */}
                <div
                  className="flex-1 bg-[#16DBCC] rounded-t"
                  style={{ height: `${(d.offline / maxVal) * 100}%` }}
                />
              </div>
              <span className="text-[#718EBF] text-xs">{d.month}</span>
            </div>
          ))}
        </div>

        {/* Y-axis reference */}
        <div className="flex justify-between mt-2 border-t border-dashed border-[#DFE5EE] pt-2">
          {['0', '10K', '20K', '30K'].map(l => (
            <span key={l} className="text-[#718EBF] text-[11px]">{l}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
