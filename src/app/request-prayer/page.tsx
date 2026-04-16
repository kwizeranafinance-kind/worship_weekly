'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RequestPrayer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'healing',
    request: '',
    isAnonymous: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Prayer request submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', category: 'healing', request: '', isAnonymous: false });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-ink-900 to-ink-800 py-16 md:py-24">
        <div className="section-inner text-center">
          <p className="section-label">✦ Prayer Request</p>
          <h1 className="section-title mb-4">Share Your Need</h1>
          <div className="section-divider justify-center">
            <div className="section-divider-line" />
            <span className="section-divider-icon">♦</span>
            <div className="section-divider-line" />
          </div>
          <p className="section-desc">
            We are here to intercede for you. Share what's on your heart, and our community will lift you up in prayer.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-ink-900 py-16 md:py-24">
        <div className="section-inner max-w-2xl">
          {submitted ? (
            <div className="glass rounded-lg p-12 text-center mb-12">
              <div className="text-6xl mb-4">✨</div>
              <h2 className="font-cinzel font-bold text-white text-2xl mb-3">Thank You for Sharing</h2>
              <p className="text-lavender-300 mb-6">
                Your prayer request has been received. Our community will lift you up in intercession. May God's peace and healing flow over you.
              </p>
              <div className="text-gold-400 text-lg font-semibold animate-pulse">🙏 Prayers ascending...</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-lavender-300 mb-2">
                  Your Name (or leave blank for anonymous)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-ink-800 border border-lavender-300/30 text-white placeholder-text-dim focus:outline-none focus:border-gold-400 transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-lavender-300 mb-2">
                  Email (optional - for prayer updates)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-ink-800 border border-lavender-300/30 text-white placeholder-text-dim focus:outline-none focus:border-gold-400 transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-lavender-300 mb-2">
                  Prayer Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-ink-800 border border-lavender-300/30 text-white focus:outline-none focus:border-gold-400 transition"
                >
                  <option value="healing">🏥 Healing & Health</option>
                  <option value="guidance">🧭 Guidance & Wisdom</option>
                  <option value="strength">💪 Strength & Courage</option>
                  <option value="family">👨‍👩‍👧‍👦 Family & Relationships</option>
                  <option value="work">💼 Work & Career</option>
                  <option value="finances">💰 Finances</option>
                  <option value="spiritual">✨ Spiritual Growth</option>
                  <option value="other">❓ Other</option>
                </select>
              </div>

              {/* Prayer Request */}
              <div>
                <label htmlFor="request" className="block text-sm font-semibold text-lavender-300 mb-2">
                  Your Prayer Request
                </label>
                <textarea
                  id="request"
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-ink-800 border border-lavender-300/30 text-white placeholder-text-dim focus:outline-none focus:border-gold-400 transition resize-none"
                  placeholder="Share what's on your heart. Be specific so we can pray with clarity and intention..."
                  required
                />
              </div>

              {/* Anonymous Checkbox */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isAnonymous"
                  name="isAnonymous"
                  checked={formData.isAnonymous}
                  onChange={handleChange}
                  className="w-4 h-4 accent-gold-400 cursor-pointer"
                />
                <label htmlFor="isAnonymous" className="text-sm text-lavender-300 cursor-pointer">
                  Keep my prayer request anonymous
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-full text-lg justify-center">
                💌 &nbsp;Submit Prayer Request
              </button>
            </form>
          )}

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link href="/pray-for-others" className="btn btn-outline">
              ← Back to Pray for Others
            </Link>
          </div>
        </div>
      </section>

      {/* Prayer Promise */}
      <section className="bg-gradient-to-b from-ink-800 to-ink-900 py-16 md:py-24">
        <div className="section-inner max-w-2xl text-center">
          <h2 className="text-2xl font-cinzel font-bold text-white mb-6">Our Prayer Promise</h2>
          <p className="text-lg font-garamond italic text-lavender-300 leading-relaxed">
            "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours."
            <span className="block text-gold-400 mt-3">— Mark 11:24</span>
          </p>
        </div>
      </section>
    </main>
  );
}
