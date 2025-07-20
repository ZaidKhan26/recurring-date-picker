'use client'
import React from 'react'
import { useEffect } from 'react'
import { useRecurringStore } from '@/store/useRecurringStore'

export default function CalendarPreview() {
  const {
    startDate,
    endDate,
    recurrenceType,
    selectedWeekDays,
    selectedMonthDates,
    setResultDates,
    resultDates,
  } = useRecurringStore()

  useEffect(() => {
    if (!startDate || !endDate || startDate > endDate) {
      setResultDates([])
      return
    }

    const result: Date[] = []
    let current = new Date(startDate)

    while (current <= endDate) {
      const day = current.getDay()
      const date = current.getDate()

      const match =
        recurrenceType === 'daily' ||
        (recurrenceType === 'weekly' && selectedWeekDays.includes(day)) ||
        (recurrenceType === 'monthly' && selectedMonthDates.includes(date))

      if (recurrenceType !== 'none' && match) {
        result.push(new Date(current))
      }

      current.setDate(current.getDate() + 1)
    }

    setResultDates(result)
  }, [startDate, endDate, recurrenceType, selectedWeekDays, selectedMonthDates])

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Generated Dates</h2>
      {resultDates.length === 0 ? (
        <p className="text-sm text-gray-500">No dates to display</p>
      ) : (
        <ul className="list-disc ml-4 text-sm">
          {resultDates.map((d, i) => (
            <li key={i}>{d.toDateString()}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
