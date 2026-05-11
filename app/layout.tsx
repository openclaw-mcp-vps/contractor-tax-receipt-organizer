import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaxReceipt — Organize Contractor Receipts for Tax Season',
  description: 'Automatically categorize receipts, track deductible expenses, and generate tax-ready reports. Built for freelancers and contractors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5fa71851-fa52-4be5-b837-da05c125b295"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
