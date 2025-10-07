'use client'
import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { PhoneCall, BarChart3, Users, Rocket, Menu } from 'lucide-react'

// Brand palette (new)
// indigo-dye: #08415c
// persian-red: #cc2936
// slate-gray: #6b818c
// peach: #f1bf98
// lavender-blush: #eee5e9

export default function Home() {
  return (
    <>
      <Head>
        <title>EKD Solutions | Call Center & Digital Marketing</title>
        <meta
          name="description"
          content="EKD Solutions helps businesses grow through high-quality call center operations and modern digital marketing strategies."
        />
        <meta name="keywords" content="call center, digital marketing, BPO, customer service, lead generation" />
        <meta name="theme-color" content="#08415c" />
      </Head>

      <main className="flex flex-col min-h-screen bg-[#eee5e9] text-[#08415c] relative overflow-hidden">
        {/* Navbar */}
        <nav className="w-full flex justify-center md:justify-between items-center px-3 bg-transparent fixed top-0 z-50">
          {/* <h1 className="text-2xl font-extrabold tracking-tight text-white">EKD Solutions</h1> */}
          <img src="/logo1.png" alt="" className="w-[250px] h-[125px] md:w-[350px] md:h-[175px] object-cover" />
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center pt-32 px-6 py-12 h-[550px] text-shadow-lg bg-[#141f1e] text-[#bbd4cc]">
        
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] rounded-full bg-[#6a978c] opacity-30 blur-3xl animate-float1"></div>
        <div className="absolute top-150 left-90 w-[500px] h-[500px] -skew-10 rounded-xl bg-[#6a978c] opacity-30 blur-3xl animate-float2"></div>
        <div className="absolute -bottom-10 right-25 w-[600px] h-[600px] rounded-full bg-[#6a978c] opacity-20 blur-3xl animate-float1"></div>
        <div className="absolute top-30 right-40 w-[500px] h-[500px] rounded-xl skew-20 bg-[#6a978c] opacity-20 blur-3xl animate-float2"></div>
        <div className="absolute -bottom-20 left-50 w-[600px] h-[600px] rounded-full bg-[#6a978c] opacity-20 blur-3xl animate-float2"></div>

          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl md:text-6xl/16 font-bold mb-4 mt-8 text-[#8ab2a7]"
            >
              <span className="text-white">Vertrauen </span> aufbauen, das <span className="text-white">Kunden</span> bindet       
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg md:text-xl max-w-2xl mb-8 text-white/90"
            >
              Ihr verlässlicher partner für support, assistenz und datenverarbeitung im backoffice
            </motion.p>

            <Button className="bg-[#bbd4cc] text-[#35504b] hover:bg-[#8ab2a7] hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-full px-6 py-3 text-xl font-semibold cursor-pointer shadow-xl">
              Jetzt kostenlos beraten lassen
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 bg-[#141f1e] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#8ab2a7]">
            Unsere <span className='text-white'>Kernleistungen</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              <Card className="shadow-xl bg-white  transition delay-150 duration-300 ease-in">
                <CardContent className="flex flex-col items-center py-10">
                  <PhoneCall className="w-12 h-12 text-[#507c72] mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[#08415c]">Callcenter-Lösungen</h3>
                  <p className="text-[#6b818c] max-w-xs">
                    24/7 Inbound- & Outbound-Support, Kundenbindung und technische Unterstützung für internationale Kunden.                
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
            >
              <Card className="shadow-xl bg-white  transition delay-300 duration-300 ease-in">
                <CardContent className="flex flex-col items-center py-10">
                  <BarChart3 className="w-12 h-12 text-[#507c72] mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[#08415c]">Digitales Marketing</h3>
                  <p className="text-[#6b818c] max-w-xs">
                    SEO, Social Media und Content-Marketing zur Stärkung Ihrer Marke und Steigerung der Kundenbindung.                
                  </p>
                </CardContent>
              </Card>
            </motion.div>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
            >
              <Card className="shadow-xl bg-white  transition delay-450 duration-300 ease-in">
                <CardContent className="flex flex-col items-center py-10">
                  <Users className="w-12 h-12 text-[#507c72] mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[#08415c]">Leadgenerierung</h3>
                  <p className="text-[#6b818c] max-w-xs">
                    Gezielte Ansprache auf Basis von Daten und Insights, um qualifizierte Leads direkt zu Ihnen zu bringen.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 text-center bg-[#141f1e] text-white">
          <Rocket className="w-12 h-12 mx-auto mb-4 text-[#bbd4cc] animate-wiggle" />
          <h2 className="text-3xl font-semibold mb-4 text-[#8ab2a7]">Bereit, Ihre <span className="text-white">Marke</span> auf das nächste <span className="text-white">Level</span> zu bringen?</h2>
          <p className="mb-6 text-lg text-white/90">Lassen Sie uns Kundenloyalität stärken, Conversions steigern und Ihre Marketingwirkung skalieren.</p>
          <Button className="bg-[#bbd4cc] text-[#35504b] hover:bg-[#8ab2a7] hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-full px-6 py-3 text-xl font-semibold cursor-pointer shadow-xl">
          Jetzt ein Gespräch vereinbaren
          </Button>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-[#141f1e] text-center text-sm border-t border-[#6b818c]/40">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="/logo1.png" className='w-[250px] h-[125px] object-cover' alt="" />
            <p className="text-[#bbd4cc]">© {new Date().getFullYear()} EKD Solutions. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}