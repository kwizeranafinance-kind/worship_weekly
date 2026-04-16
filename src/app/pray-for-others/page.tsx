import Link from 'next/link';

const prayerRequests = [
  {
    id: 1,
    name: 'Sarah',
    request: 'Healing and strength for my family during a difficult season',
    date: '2 days ago',
    prays: 47,
  },
  {
    id: 2,
    name: 'James',
    request: 'Guidance and wisdom for a major life decision',
    date: '4 days ago',
    prays: 32,
  },
  {
    id: 3,
    name: 'Maria',
    request: 'Peace and recovery as I work through health challenges',
    date: '1 week ago',
    prays: 89,
  },
  {
    id: 4,
    name: 'Community',
    request: 'Unity and love for everyone in our Worship Weekly family',
    date: '1 week ago',
    prays: 156,
  },
];

export default function PrayForOthers() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-ink-900 to-ink-800 py-16 md:py-24">
        <div className="section-inner text-center">
          <p className="section-label">✦ Prayer Ministry</p>
          <h1 className="section-title mb-4">Pray for Others</h1>
          <div className="section-divider justify-center">
            <div className="section-divider-line" />
            <span className="section-divider-icon">♦</span>
            <div className="section-divider-line" />
          </div>
          <p className="section-desc">
            Lift up those in need. Intercede with compassion. Join our community in prayer for healing, guidance, and transformation.
          </p>
        </div>
      </section>

      {/* Prayer Requests */}
      <section className="bg-ink-900 py-16 md:py-24">
        <div className="section-inner">
          <h2 className="text-3xl font-cinzel font-bold text-white mb-12 text-center">Community Prayer Requests</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {prayerRequests.map((request) => (
              <div key={request.id} className="card group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-cinzel font-bold text-white mb-1">{request.name}</h3>
                    <p className="text-xs text-text-dim">{request.date}</p>
                  </div>
                  <span className="text-2xl">🙏</span>
                </div>
                <p className="text-lavender-300 mb-4 leading-relaxed">{request.request}</p>
                <div className="flex items-center gap-2 text-sm text-gold-400 font-semibold">
                  <span>❤️</span>
                  <span>{request.prays} people praying</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lavender-300 mb-6">Have a prayer request? Share it with our community.</p>
            <Link href="/request-prayer" className="btn btn-primary">
              💌 &nbsp;Submit a Prayer Request
            </Link>
          </div>
        </div>
      </section>

      {/* Prayer Guide */}
      <section className="bg-gradient-to-b from-ink-800 to-ink-900 py-16 md:py-24">
        <div className="section-inner max-w-3xl">
          <h2 className="text-3xl font-cinzel font-bold text-white mb-8 text-center">How to Pray Effectively</h2>

          <div className="space-y-6">
            <div className="glass rounded-lg p-6">
              <h3 className="flex items-center gap-3 font-cinzel font-bold text-gold-300 mb-3 text-lg">
                <span>1️⃣</span> Listen
              </h3>
              <p className="text-lavender-300">
                Take a moment to quiet your heart and listen to the Holy Spirit. What is He placing on your heart about this request?
              </p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="flex items-center gap-3 font-cinzel font-bold text-gold-300 mb-3 text-lg">
                <span>2️⃣</span> Pray with Compassion
              </h3>
              <p className="text-lavender-300">
                Intercede with genuine compassion. Lift the person up, ask for healing, guidance, or whatever their need may be.
              </p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="flex items-center gap-3 font-cinzel font-bold text-gold-300 mb-3 text-lg">
                <span>3️⃣</span> Believe in God's Power
              </h3>
              <p className="text-lavender-300">
                Trust that God hears and answers. Pray with faith, knowing that our prayers matter and His love is infinite.
              </p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="flex items-center gap-3 font-cinzel font-bold text-gold-300 mb-3 text-lg">
                <span>4️⃣</span> Follow Up
              </h3>
              <p className="text-lavender-300">
                Continue to pray for those requests. Check back on testimonies and answered prayers to celebrate God's faithfulness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="bg-ink-900 py-8">
        <div className="section-inner text-center">
          <Link href="/#community" className="btn btn-outline">
            ← Back to Community
          </Link>
        </div>
      </section>
    </main>
  );
}
