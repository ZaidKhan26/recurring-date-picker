import React from 'react'
import { render, screen } from '@testing-library/react'
import CalendarPreview from '@/components/CalendarPreview'
import { useRecurringStore } from '@/store/useRecurringStore'

describe('CalendarPreview', () => {
  beforeEach(() => {
    const store = useRecurringStore.getState()
    store.setStartDate(new Date('2025-07-01'))
    store.setEndDate(new Date('2025-07-10'))
    store.setRecurrenceType('daily')
    store.setSelectedWeekDays([])
    store.setSelectedMonthDates([])
  })

  it('renders generated dates when conditions are valid', async () => {
    render(<CalendarPreview />)

    // It should display 10 dates from July 1 to 10
    const items = await screen.findAllByRole('listitem')
    expect(items).toHaveLength(10)
    expect(items[0].textContent).toContain('Tue Jul 01')
  })

  it('shows message when no dates to display', () => {
    const store = useRecurringStore.getState()
    store.setStartDate(null)
    store.setEndDate(null)

    render(<CalendarPreview />)
    expect(screen.getByText(/No dates to display/i)).toBeInTheDocument()
  })
})
