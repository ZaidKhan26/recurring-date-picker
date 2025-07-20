'use client'
import React from 'react'
import { useRecurringStore } from '@/store/useRecurringStore'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function WeeklySelector() {
  const { selectedWeekDays, setSelectedWeekDays, recurrenceType } = useRecurringStore()

  if (recurrenceType !== 'weekly') return null

  const toggleDay = (index: number) => {
    if (selectedWeekDays.includes(index)) {
      setSelectedWeekDays(selectedWeekDays.filter((d) => d !== index))
    } else {
      setSelectedWeekDays([...selectedWeekDays, index])
    }
  }

  return (
    <div className="mt-4">
      <p className="text-sm font-medium mb-1">Select Weekdays</p>
      <div className="flex gap-2">
        {days.map((day, idx) => (
          <button
            key={day}
            onClick={() => toggleDay(idx)}
            className={`px-3 py-1 rounded border ${
              selectedWeekDays.includes(idx) ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  )
}
