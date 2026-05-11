export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Contractors
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Drowning in Receipts at{' '}
          <span className="text-[#58a6ff]">Tax Season</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your receipts and let AI automatically categorize expenses, track deductions, and generate a clean tax-ready PDF report — in minutes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📤', title: 'Upload Receipts', desc: 'Drag and drop images or PDFs. We extract text via OCR instantly.' },
            { icon: '🤖', title: 'AI Categorization', desc: 'OpenAI automatically tags each expense: travel, software, meals, and more.' },
            { icon: '📄', title: 'Tax-Ready Reports', desc: 'Export a clean PDF summary sorted by category, ready for your accountant.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited receipt uploads',
              'AI-powered expense categorization',
              'OCR text extraction',
              'Monthly PDF tax reports',
              'Deduction tracking dashboard',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What file types can I upload?',
              a: 'You can upload JPEG, PNG, and PDF files. Our OCR engine handles both scanned documents and digital receipts.',
            },
            {
              q: 'How accurate is the AI categorization?',
              a: 'Powered by OpenAI, categorization accuracy is over 95% for common expense types. You can always manually adjust any category.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel with one click from your account settings. You keep access until the end of your billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} TaxReceipt. Built for freelancers.
      </footer>
    </main>
  )
}
