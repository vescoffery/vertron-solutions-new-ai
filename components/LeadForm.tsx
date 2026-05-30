'use client';

import { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="full-name"
        placeholder="Full Name"
        required
        className="w-full p-3 border rounded"
      />
      <input
        type="email"
        name="work-email"
        placeholder="Work Email"
        required
        className="w-full p-3 border rounded"
      />
      <textarea
        name="message"
        placeholder="Tell us about your current operations and automation goals..."
        required
        rows={5}
        className="w-full p-3 border rounded"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-black text-white py-3 rounded font-medium disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Request Strategy Call'}
      </button>

      {status === 'success' && (
        <p className="text-green-600">Thank you! We’ll reach out within 24 hours.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
