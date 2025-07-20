import React from 'react'
import DateRangePicker from '@/components/DateRangePicker'
import RecurrenceSelector from '@/components/RecurrenceSelector'
import WeeklySelector from '@/components/WeeklySelector'
import MonthlySelector from '@/components/MonthlySelector'
import CalendarPreview from '@/components/CalendarPreview'

export default function Home() {
  return (
    <main className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Recurring Date Picker</h1>
      <p className="text-sm text-gray-600">Choose your dates and recurring schedule below</p>
      <DateRangePicker />
      <RecurrenceSelector />
      <WeeklySelector />
      <MonthlySelector />
      <CalendarPreview />
    </main>
  )
}
