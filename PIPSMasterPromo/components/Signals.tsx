'use client'

import { useState, useEffect } from 'react'

export default function Signals() {
  const [signals, setSignals] = useState([])

  useEffect(() => {
    const fetchSignals = async () => {
      const response = await fetch('/api/signals')
      if (response.ok) {
        const data = await response.json()
        setSignals(data)
      }
    }
    fetchSignals()
  }, [])

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-500">Latest Trading Signals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {signals.map((signal: any, index: number) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg border border-red-500">
            <h3 className="text-xl font-semibold mb-2">{signal.pair}</h3>
            <p className={`text-lg font-bold ${signal.type === 'BUY' ? 'text-green-500' : 'text-red-500'}`}>
              {signal.type}
            </p>
            <p>Entry: {signal.entry}</p>
            <p>Take Profit: {signal.takeProfit}</p>
            <p>Stop Loss: {signal.stopLoss}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

