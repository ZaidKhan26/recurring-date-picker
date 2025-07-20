'use client'
import React from 'react'
import { useRecurringStore } from '@/store/useRecurringStore'

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurringStore()

  return (
    <div className="flex gap-4 items-center">
      <div>
        <label htmlFor="start-date">Start Date </label>
        <input className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="start-date"
          data-testid="start-date"
          type="date"
          value={startDate ? startDate.toISOString().split('T')[0] : ''}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />

        <label htmlFor="end-date"> End Date </label>
        <input className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="end-date"
          data-testid="end-date"
          type="date"
          value={endDate ? endDate.toISOString().split('T')[0] : ''}
          onChange={(e) => setEndDate(new Date(e.target.value))}
        />
      </div>
    </div>
  )
}
