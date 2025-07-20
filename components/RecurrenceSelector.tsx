'use client'
import React from 'react'
import { useRecurringStore } from '@/store/useRecurringStore'

export default function RecurrenceSelector() {
  const { recurrenceType, setRecurrenceType } = useRecurringStore()

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium mb-1">Recurrence</label>
      <select
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value as any)}
        className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="none">None</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
  )
}
