'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('full-name') as HTMLInputElement).value,
      email: (form.elements.namedItem('work-email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('https://vertronsolutions.app.n8n.cloud/webhook/vertron-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="full-name"
        placeholder="Full Name"
        required
        className="w-full bg-zinc-900 border border-white/10 text-black placeholder:text-zinc-400 p-4 rounded-2xl focus:outline-none focus:border-[#67e8f9]"
      />
      <input
        type="email"
        name="work-email"
        placeholder="Work Email"
        required
        className="w-full bg-zinc-900 border border-white/10 text-black placeholder:text-zinc-400 p-4 rounded-2xl focus:outline-none focus:border-[#67e8f9]"
      />
      <textarea
        name="message"
        placeholder="Tell us about your current operations and automation goals..."
        required
        rows={6}
        className="w-full bg-zinc-900 border border-white/10 text-black placeholder:text-zinc-400 p-4 rounded-3xl focus:outline-none focus:border-[#67e8f9] resize-y"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-10 py-5 bg-white text-[#0A0A0F] font-semibold rounded-3xl text-xl hover:bg-[#67e8f9] transition-all flex items-center justify-center gap-x-3 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Request Strategy Call'} <ArrowRight className="inline" />
      </button>

      {status === 'success' && (
        <p className="text-[#67e8f9] text-center">Thank you! We’ll reach out within 24 hours.</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-center">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  );
}
