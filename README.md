# Recurring Date Picker 🔁📅

A modern, minimal recurring date picker built with:

- **Next.js 15** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Zustand** (state management)
- **Jest + React Testing Library** (unit tests)

## 🔧 Features

✅ Select start and end dates  
✅ Choose recurrence type (None / Weekly / Monthly)  
✅ Select weekdays or month dates  
✅ Live calendar preview of all generated recurring dates  
✅ Zustand for global state  
✅ Unit tested core components  

## 🖼️ Demo

👉 **Live:** (https://recurring-date-picker-sepia.vercel.app/)
🎥 **Loom Video:** [Loom Link](#) *(replace with your Loom recording URL)*

## 📁 Folder Structure

components/
├── DateRangePicker.tsx
├── RecurrenceSelector.tsx
├── WeeklySelector.tsx
├── MonthlySelector.tsx
└── CalendarPreview.tsx
tests/
└── All unit tests here

store/
└── useRecurringStore.ts

app/
├── page.tsx
└── layout.tsx

## 🚀 Run Locally

```bash
git clone https://github.com/ZaidKhan26/recurring-date-picker.git
cd recurring-date-picker
npm install
npm run dev

Run Tests
bash
Copy code
npm run test
