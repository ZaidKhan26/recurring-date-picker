import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import MonthlySelector from '@/components/MonthlySelector'
import { useRecurringStore } from '@/store/useRecurringStore'

beforeEach(() => {
  const { setRecurrenceType, setSelectedMonthDates } = useRecurringStore.getState()
  setRecurrenceType('monthly')
  setSelectedMonthDates([])
})

describe('MonthlySelector', () => {
  it('renders 31 buttons when monthly is selected', () => {
    render(<MonthlySelector />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(31)
  })

  it('toggles month date buttons correctly', () => {
    render(<MonthlySelector />)
    const day15 = screen.getByText('15')

    fireEvent.click(day15)
    expect(useRecurringStore.getState().selectedMonthDates).toContain(15)

    fireEvent.click(day15)
    expect(useRecurringStore.getState().selectedMonthDates).not.toContain(15)
  })
})
