import SubscriberCount from '../components/SubscriberCount'
import Features from '../components/Features'
import CTAButton from '../components/CTAButton'
import GoldChart from '../components/GoldChart'
import MechaBackground from '../components/MechaBackground'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <MechaBackground />
      <div className="relative z-10 container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">Welcome to PIPS MASTER</h1>
          <p className="text-xl text-gray-300">Mecha-Powered Gold Trading Signals</p>
        </section>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <SubscriberCount />
          <div className="h-[400px] bg-gray-900 rounded-lg border-2 border-red-600 p-4 shadow-lg shadow-red-500/50">
            <GoldChart />
          </div>
        </div>
        <Features />
        <CTAButton />
      </div>
    </div>
  )
}

