import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import RecurrenceSelector from '@/components/RecurrenceSelector'
import { useRecurringStore } from '@/store/useRecurringStore'

beforeEach(() => {
  const { setRecurrenceType } = useRecurringStore.getState()
  setRecurrenceType('none')
})

describe('RecurrenceSelector', () => {
  it('renders the recurrence options correctly', () => {
    render(<RecurrenceSelector />)
    expect(screen.getByText('Recurrence')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveValue('none')
  })

  it('changes recurrence type when a new option is selected', () => {
    render(<RecurrenceSelector />) // ✅ Add this
    const select = screen.getByRole('combobox')

    fireEvent.change(select, { target: { value: 'weekly' } })
    expect(useRecurringStore.getState().recurrenceType).toBe('weekly')

    fireEvent.change(select, { target: { value: 'monthly' } })
    expect(useRecurringStore.getState().recurrenceType).toBe('monthly')
  })
})
