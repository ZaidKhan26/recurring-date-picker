import React from 'react'
import DateRangePicker from '@/components/DateRangePicker'
import RecurrenceSelector from '@/components/RecurrenceSelector'
import WeeklySelector from '@/components/WeeklySelector'
import MonthlySelector from '@/components/MonthlySelector'
import CalendarPreview from '@/components/CalendarPreview'

export default function Home() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Recurring Date Picker</h1>
      <DateRangePicker />
      <RecurrenceSelector />
      <WeeklySelector />
      <MonthlySelector />
      <CalendarPreview />
    </main>
  )
}
