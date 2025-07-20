'use client'
import React from 'react'
import { useRecurringStore } from '../store/useRecurringStore'

export default function MonthlySelector() {
  const { recurrenceType, selectedMonthDates, setSelectedMonthDates } = useRecurringStore()

  if (recurrenceType !== 'monthly') return null

  const toggleDate = (date: number) => {
    if (selectedMonthDates.includes(date)) {
      setSelectedMonthDates(selectedMonthDates.filter((d) => d !== date))
    } else {
      setSelectedMonthDates([...selectedMonthDates, date])
    }
  }

  return (
    <div className="grid grid-cols-7 gap-2">
      <p className="text-sm font-medium mb-1">Select Dates (1–31)</p>
      <div className="grid grid-cols-8 gap-1">
        {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
          <button
            key={d}
            onClick={() => toggleDate(d)}
            className={`px-3 py-2 text-sm bg-gray-100 hover:bg-blue-500 hover:text-white rounded-md transition ${
              selectedMonthDates.includes(d) ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  )
}
