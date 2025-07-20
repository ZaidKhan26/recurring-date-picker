import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import DateRangePicker from '@/components/DateRangePicker'
import { useRecurringStore } from '@/store/useRecurringStore'

describe('DateRangePicker', () => {
  it('renders start and end date inputs', () => {
    render(<DateRangePicker />)

    const startInput = screen.getByLabelText('Start Date')
    const endInput = screen.getByLabelText('End Date')

    expect(startInput).toBeInTheDocument()
    expect(endInput).toBeInTheDocument()
  })

  it('updates start and end dates correctly', () => {
    render(<DateRangePicker />) // <- You were missing this!

    const startInput = screen.getByLabelText('Start Date')
    const endInput = screen.getByLabelText('End Date')

    fireEvent.change(startInput, { target: { value: '2025-07-01' } })
    fireEvent.change(endInput, { target: { value: '2025-07-15' } })

    expect(useRecurringStore.getState().startDate?.toISOString()).toContain('2025-07-01')
    expect(useRecurringStore.getState().endDate?.toISOString()).toContain('2025-07-15')
  })
})
