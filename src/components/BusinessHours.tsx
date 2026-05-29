import { useState, useEffect } from 'react'
import { storeData } from '../data/store'

type HoursSlot = {
  day: string
  time: string
  lastOrder?: string | null
}

type GroupedHours = {
  day: string
  slots: HoursSlot[]
}

function groupByDay(slots: HoursSlot[]): GroupedHours[] {
  return slots.reduce<GroupedHours[]>((acc, slot) => {
    const last = acc[acc.length - 1]
    if (last && last.day === slot.day) {
      last.slots.push(slot)
    } else {
      acc.push({ day: slot.day, slots: [slot] })
    }
    return acc
  }, [])
}

export default function BusinessHours() {
  const [slots, setSlots] = useState<HoursSlot[]>(storeData.businessHours)
  const [closedDays, setClosedDays] = useState(storeData.closedDays)

  useEffect(() => {
    fetch('/api/businesshours')
      .then((r) => r.json())
      .then((data: HoursSlot[]) => setSlots(data))
      .catch(() => {})

    fetch('/api/closeddays')
      .then((r) => r.json())
      .then((data: { text: string }) => setClosedDays(data.text))
      .catch(() => {})
  }, [])

  const grouped = groupByDay(slots)

  return (
    <section id="hours" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <p className="section-subtitle">HOURS</p>
        <h2 className="section-title">営業時間</h2>
        <div className="section-divider" />

        <div className="space-y-4 mb-8">
          {grouped.map((group, i) => (
            <div
              key={i}
              className="bg-warm-50 rounded-lg px-6 py-5 border border-stone-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary-700 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  {group.day}
                </span>
              </div>
              <div className="space-y-2">
                {group.slots.map((slot, j) => (
                  <div key={j} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                    <span className="text-xl font-bold font-serif text-stone-800">
                      {slot.time}
                    </span>
                    {slot.lastOrder && (
                      <div className="flex items-center gap-2 text-sm text-stone-500">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>ラストオーダー</span>
                        <span className="font-bold text-stone-700">{slot.lastOrder}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-100 rounded-lg px-6 py-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div>
            <p className="text-sm font-bold text-stone-700 mb-0.5">定休日</p>
            <p className="text-stone-600">{closedDays}</p>
          </div>
        </div>

        <p className="mt-4 text-xs text-stone-400 text-center">
          ※祝日・年末年始・お盆期間は営業時間が変更になる場合がございます。
          <br />
          最新情報はお知らせ欄またはお電話にてご確認ください。
        </p>
      </div>
    </section>
  )
}
