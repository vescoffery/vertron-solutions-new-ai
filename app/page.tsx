'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export default function VertronSite() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Strategy Call Request - Vertron Solutions")
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:vertronsolutions@hotmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-screen-2xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-[#0A0A0F] font-bold text-3xl tracking-[-3px]">V</span>
            </div>
            <span className="font-semibold text-2xl tracking-tighter">Vertron</span>
          </div>

          <div className="hidden md:flex items-center gap-x-10 text-sm font-medium">
            <button onClick={() => scrollTo('capabilities')} className="hover:text-[#67e8f9] transition-colors">Capabilities</button>
            <button onClick={() => scrollTo('process')} className="hover:text-[#67e8f9] transition-colors">Process</button>
            <button onClick={() => scrollTo('why')} className="hover:text-[#67e8f9] transition-colors">Why Vertron</button>
          </div>

          <div className="flex items-center gap-x-3">
            <button onClick={() => scrollTo('contact')} className="px-6 py-3 text-sm font-semibold border border-white/20 hover:bg-white hover:text-[#0A0A0F] transition-all rounded-3xl">Book Call</button>
            <button onClick={() => scrollTo('contact')} className="px-7 py-3.5 bg-white text-[#0A0A0F] font-semibold rounded-3xl text-sm hover:bg-[#67e8f9] transition-all">Start Project</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-screen-2xl mx-auto px-8 pt-32 pb-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center px-5 py-1.5 rounded-3xl border border-white/10 mb-8 text-sm">
            <div className="flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-[#67e8f9] rounded-full animate-pulse" />
              <span className="font-medium tracking-[1.5px] text-xs">ACCEPTING NEW CLIENTS FOR Q2 2026</span>
            </div>
          </div>

          <h1 className="font-display text-[72px] md:text-[86px] leading-[0.95] tracking-[-4.8px]">
            Build your<br />
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#67e8f9] bg-clip-text text-transparent">AI workforce.</span>
          </h1>

          <p className="mt-6 max-w-md text-2xl text-white/70 tracking-tight">
            We design and operate autonomous agent systems that run your business operations with precision.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollTo('contact')} className="px-10 py-5 bg-white text-[#0A0A0F] font-semibold rounded-3xl text-xl hover:bg-[#67e8f9] transition-all flex items-center justify-center gap-x-3 group">
              Book Strategy Call <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            <button onClick={() => scrollTo('capabilities')} className="px-10 py-5 border border-white/25 hover:bg-white/5 font-semibold rounded-3xl text-xl transition-all">
              See What We Build
            </button>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-y border-white/10 py-8">
        <div className="max-w-screen-2xl mx-auto px-8 text-white/40 text-sm font-medium tracking-[2px] flex flex-wrap justify-center md:justify-between gap-x-12 gap-y-6">
          <div>HERMES GATEWAY</div>
          <div>N8N ENTERPRISE</div>
          <div>CUSTOM AGENT FLEETS</div>
          <div>TELEGRAM ORCHESTRATION</div>
        </div>
      </div>

      {/* Problem */}
      <div className="max-w-screen-2xl mx-auto px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="text-[#67e8f9] text-xs font-semibold tracking-[3px]">THE REALITY</div>
          <h2 className="font-display text-6xl tracking-tighter mt-3">Most AI implementations are expensive theater.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {[
            { title: "Fragile single agents", desc: "Break the moment real complexity appears." },
            { title: "Disconnected tools", desc: "No coordination between systems or agents." },
            { title: "Constant maintenance", desc: "Requires ongoing human oversight." }
          ].map((item, i) => (
            <div key={i} className="border border-white/10 p-8 rounded-3xl">
              <div className="text-red-400 mb-4 text-3xl">✕</div>
              <div className="font-semibold text-xl">{item.title}</div>
              <div className="text-white/60 mt-3">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div id="capabilities" className="max-w-screen-2xl mx-auto px-8 py-20 border-t border-white/10 bg-zinc-950/50">
        <div className="mb-12">
          <div className="text-[#67e8f9] text-xs font-semibold tracking-[3px]">CAPABILITIES</div>
          <h2 className="font-display text-6xl tracking-tighter mt-2">What we deliver</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🤖", title: "Autonomous Agent Fleets", desc: "Multi-agent systems that plan, execute, and coordinate complex operations." },
            { icon: "🛠️", title: "Hermes Gateway Infrastructure", desc: "Production-grade orchestration for running and scaling AI agents." },
            { icon: "🔗", title: "Enterprise n8n Automation", desc: "Robust workflow systems connecting your tools, data, and agents." }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="border border-white/10 bg-zinc-900/60 p-9 rounded-3xl">
              <div className="text-4xl mb-6">{item.icon}</div>
              <div className="font-semibold text-3xl tracking-tight">{item.title}</div>
              <div className="mt-5 text-white/70 leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div id="process" className="max-w-screen-2xl mx-auto px-8 py-24 border-t border-white/10">
        <div className="max-w-xl mb-16">
          <div className="text-[#67e8f9] text-xs font-semibold tracking-[3px]">THE VERTRON PROCESS</div>
          <h2 className="font-display text-6xl tracking-tighter mt-3">From concept to production in weeks.</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Discovery & Architecture", desc: "Deep operational analysis and AI workforce design." },
            { num: "02", title: "Agent Design & Testing", desc: "Specialized agents built and validated against real workflows." },
            { num: "03", title: "Production Deployment", desc: "Hermes Gateway infrastructure with monitoring and reliability." },
            { num: "04", title: "Continuous Evolution", desc: "Ongoing optimization and capability expansion." }
          ].map((step, i) => (
            <div key={i}>
              <div className="font-mono text-6xl font-bold text-white/10">{step.num}</div>
              <div className="font-semibold text-2xl mt-6 tracking-tight">{step.title}</div>
              <div className="text-white/60 mt-3">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Vertron */}
      <div id="why" className="max-w-screen-2xl mx-auto px-8 py-24 border-t border-white/10 bg-zinc-950/50">
        <div className="grid md:grid-cols-12 gap-x-16 items-center">
          <div className="md:col-span-7">
            <div className="text-[#67e8f9] text-xs font-semibold tracking-[3px]">THE VERTRON DIFFERENCE</div>
            <h2 className="font-display text-6xl tracking-tighter mt-3 leading-none">We don’t sell AI.<br />We build systems that work.</h2>
          </div>
          <div className="md:col-span-5 mt-12 md:mt-0 space-y-8">
            {["Production infrastructure, not demos", "True multi-agent coordination", "Full ownership & transparency"].map((item, i) => (
              <div key={i} className="flex gap-5">
                <Check className="text-[#67e8f9] mt-1" />
                <div className="font-semibold text-xl">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="max-w-screen-2xl mx-auto px-8 py-24 border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-6xl tracking-tighter">Ready to deploy your AI workforce?</h2>
            <p className="mt-6 text-2xl text-white/70">Let’s design a system that gives you a genuine operational advantage.</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-[#67e8f9]"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-[#67e8f9]"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <textarea
                placeholder="Tell us about your current operations and automation goals..."
                rows={6}
                required
                className="w-full bg-zinc-900 border border-white/10 rounded-3xl px-6 py-4 text-lg focus:outline-none focus:border-[#67e8f9] resize-y"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                className="w-full px-10 py-5 bg-white text-[#0A0A0F] font-semibold rounded-3xl text-xl hover:bg-[#67e8f9] transition-all flex items-center justify-center gap-x-3 mt-2"
              >
                Request Strategy Call <ArrowRight />
              </button>
            </form>
          ) : (
            <div className="text-center py-16 border border-white/10 rounded-3xl">
              <div className="text-[#67e8f9] text-7xl mb-6">✓</div>
              <h3 className="text-4xl font-semibold tracking-tight">Thank you.</h3>
              <p className="mt-4 text-xl text-white/70">We’ll review your request and get back to you within 24 hours.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
