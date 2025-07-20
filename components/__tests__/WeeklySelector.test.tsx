import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import WeeklySelector from '@/components/WeeklySelector'
import { useRecurringStore } from '@/store/useRecurringStore'

beforeEach(() => {
  useRecurringStore.setState({
    recurrenceType: 'none',
    selectedWeekDays: [],
    selectedMonthDates: [],
    startDate: null,
    endDate: null,
  })
  const { setRecurrenceType, setSelectedWeekDays } = useRecurringStore.getState()
  setRecurrenceType('weekly')
  setSelectedWeekDays([])
})

describe('WeeklySelector', () => {
  it('renders weekday buttons when recurrenceType is weekly', () => {
    render(<WeeklySelector />)
    expect(screen.getByText('Select Weekdays')).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(7)
  })

  it('toggles weekdays correctly', () => {
    render(<WeeklySelector />)

    const mondayButton = screen.getByText('Mon')
    fireEvent.click(mondayButton)

    expect(useRecurringStore.getState().selectedWeekDays).toContain(1)

    fireEvent.click(mondayButton)
    expect(useRecurringStore.getState().selectedWeekDays).not.toContain(1)
  })
})
