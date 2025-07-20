import { create } from 'zustand'

interface RecurringState {
  startDate: Date | null
  endDate: Date | null
  recurrenceType: 'none' | 'daily' | 'weekly' | 'monthly'
  selectedWeekDays: number[]
  selectedMonthDates: number[]
  resultDates: Date[]
  setStartDate: (date: Date | null) => void
  setEndDate: (date: Date | null) => void
  setRecurrenceType: (type: 'none' | 'daily' | 'weekly' | 'monthly') => void
  setSelectedWeekDays: (days: number[]) => void
  setSelectedMonthDates: (dates: number[]) => void
  setResultDates: (dates: Date[]) => void
}

export const useRecurringStore = create<RecurringState>((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: 'none',
  selectedWeekDays: [],
  selectedMonthDates: [],
  resultDates: [], // ✅ initialize here

  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setSelectedWeekDays: (days) => set({ selectedWeekDays: days }),
  setSelectedMonthDates: (dates) => set({ selectedMonthDates: dates }),
  setResultDates: (dates) => set({ resultDates: dates }),
}))
