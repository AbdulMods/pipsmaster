'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ManageSignals() {
  const [signal, setSignal] = useState({ pair: '', type: 'BUY', entry: '', takeProfit: '', stopLoss: '' })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/signals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signal),
    })
    if (response.ok) {
      setSignal({ pair: '', type: 'BUY', entry: '', takeProfit: '', stopLoss: '' })
      router.refresh()
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Manage Signals</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label htmlFor="pair" className="block text-sm font-medium text-gray-700">Pair</label>
          <input
            type="text"
            id="pair"
            value={signal.pair}
            onChange={(e) => setSignal({ ...signal, pair: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
          <select
            id="type"
            value={signal.type}
            onChange={(e) => setSignal({ ...signal, type: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
        </div>
        <div>
          <label htmlFor="entry" className="block text-sm font-medium text-gray-700">Entry</label>
          <input
            type="text"
            id="entry"
            value={signal.entry}
            onChange={(e) => setSignal({ ...signal, entry: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>
        <div>
          <label htmlFor="takeProfit" className="block text-sm font-medium text-gray-700">Take Profit</label>
          <input
            type="text"
            id="takeProfit"
            value={signal.takeProfit}
            onChange={(e) => setSignal({ ...signal, takeProfit: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>
        <div>
          <label htmlFor="stopLoss" className="block text-sm font-medium text-gray-700">Stop Loss</label>
          <input
            type="text"
            id="stopLoss"
            value={signal.stopLoss}
            onChange={(e) => setSignal({ ...signal, stopLoss: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
          Add Signal
        </button>
      </form>
    </div>
  )
}

