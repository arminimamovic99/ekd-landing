'use client'
import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Rocket, PhoneCall, ChartColumn, HeartPlus, Presentation } from 'lucide-react'
import { useState } from 'react'
import Aurora from '@/components/ui/aurora';
import ShinyText from '@/components/ui/ShinyText'
import ChromaGrid from '@/components/ChromaGrid'

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false)

  const services = [
    {
      icon: <PhoneCall className="w-16 h-16" />,
      title: 'Callcenter-Lösungen',
      description: '24/7 Inbound- & Outbound-Support, Kundenbindung und technische Unterstützung für internationale Kunden.',
      borderColor: '#8ab2a7',
      gradient: 'linear-gradient(160deg, rgba(188, 211, 205, 0.95), rgba(150, 181, 173, 0.9))'
    },
    {
      icon: <ChartColumn className="w-16 h-16" />,
      title: 'Digitales Marketing',
      description: 'SEO, Social Media und Content-Marketing zur Stärkung Ihrer Marke und Steigerung der Kundenbindung.',
      borderColor: '#8ab2a7',
      gradient: 'linear-gradient(160deg, rgba(188, 211, 205, 0.95), rgba(150, 181, 173, 0.9))'
    },
    {
      icon: <HeartPlus className="w-16 h-16" />,
      title: 'Unterstützung bei der Kundenakquise',
      description: 'Gezielte, datenbasierte Kommunikation, um relevante Geschäftskontakte und Meetings für Ihr Team zu ermöglichen.',
      borderColor: '#8ab2a7',
      gradient: 'linear-gradient(160deg, rgba(188, 211, 205, 0.95), rgba(150, 181, 173, 0.9))'
    },
    {
      icon: <Presentation className="w-16 h-16" />,
      title: 'Backoffice-Unterstützung',
      description: 'Effiziente Datenverarbeitung, administrative Unterstützung und Optimierung interner Prozesse.',
      borderColor: '#8ab2a7',
      gradient: 'linear-gradient(160deg, rgba(188, 211, 205, 0.95), rgba(150, 181, 173, 0.9))'
    }
  ];


  const playAnimationAndRedirect = () => {
    setIsAnimating(true);

    setTimeout(() => {
      window.open('https://calendly.com', '_blank');
      setIsAnimating(false);
    }, 500);
  }

  const redirect = () => {
    window.open('https://calendly.com', '_blank');
  }
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

      <main className="flex flex-col min-h-screen bg-[#141f1e] text-[#08415c] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none w-screen h-screen">
          <Aurora
            colorStops={['#141f1e', '#ddeae5', '#141f1e']}
            amplitude={1}
            blend={0.5}
          />
        </div>
        <div className="absolute inset-0 bg-[#0f1716]/60 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-28 -left-28 w-[500px] h-[500px] rounded-full bg-[#6a978c] opacity-30 blur-3xl animate-float1" />
          <div className="absolute top-150 left-90 w-[500px] h-[500px] -skew-10 rounded-xl bg-[#6a978c] opacity-30 blur-3xl animate-float2" />
          <div className="absolute -bottom-10 right-25 w-[600px] h-[600px] rounded-full bg-[#6a978c] opacity-20 blur-3xl animate-float1" />
          <div className="absolute top-30 right-40 w-[500px] h-[500px] rounded-xl skew-20 bg-[#6a978c] opacity-20 blur-3xl animate-float2" />
          <div className="absolute -bottom-20 left-50 w-[600px] h-[600px] rounded-full bg-[#6a978c] opacity-20 blur-3xl animate-float2" />
        </div>

        {/* Navbar */}
        <nav className="w-full flex justify-center md:justify-between items-center px-3 bg-transparent fixed top-0 z-50">
          {/* <h1 className="text-2xl font-extrabold tracking-tight text-white">EKD Solutions</h1> */}
          <img src="/logo1.png" alt="" className="w-[250px] h-[125px] md:w-[350px] md:h-[175px] object-cover" />
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center pt-32 px-6 py-12 h-[550px] text-shadow-lg bg-transparent text-[#bbd4cc]">

          <div className="mx-auto max-w-2xl text-center">
            {/* <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl md:text-6xl/16 font-bold mb-4 mt-8 text-[#8ab2a7]"
            >
              <span className="text-white">Vertrauen </span> aufbauen, das <span className="text-white">Kunden</span> bindet       
            </motion.h1> */}

            <ShinyText
              text="Vertrauen aufbauen, das Kunden bindet"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className='text-6xl/16 w-full font-bold mb-24 mx-auto mt-8'
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg md:text-xl max-w-2xl mb-8 text-white/90"
            >
              Ihr verlässlicher partner für support, assistenz und datenverarbeitung im backoffice
            </motion.p>

            <Button onClick={redirect} className="bg-[#bbd4cc] text-[#35504b] hover:bg-[#8ab2a7] hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-full px-6 py-3 text-xl font-semibold cursor-pointer shadow-xl">
              Jetzt kostenlos beraten lassen
            </Button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="relative z-10 py-16 px-6 bg-transparent text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#8ab2a7]">
            Über <span className="text-white">Uns</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              EKD Solutions ist ein junges, dynamisches Unternehmen mit Sitz in Zenica, das sich auf professionelle
              Callcenter- und Backoffice-Lösungen für B2B-Kunden spezialisiert hat. Wir setzen auf flexible,
              effiziente und individuell angepasste Dienstleistungen, um den Erfolg und das Wachstum Ihrer Projekte zu
              fördern.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 px-8 py-20 bg-transparent text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#8ab2a7]">
            Unsere <span className='text-white'>Kernleistungen</span>
          </h2>
          <ChromaGrid
            items={services}
            columns={4}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </section>

        <section className="relative z-10 py-16 px-6 bg-transparent text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#8ab2a7]">
            Warum <span className="text-white">Uns</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Engagiertes und motiviertes Team, das auf B2B spezialisiert ist * Mehrsprachige Fachkräfte, bereit für Ihre individuellen Anforderungen * Fokus auf Qualität, Professionalität und maßgeschneiderte Lösungen * Transparente Kommunikation, flexible Prozesse und schnelle Umsetzung.
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative z-10 py-16 text-center bg-transparent text-white">
          <Rocket className={`w-12 h-12 mx-auto mb-4 text-[#bbd4cc] ${isAnimating ? 'animate-flyAway' : 'animate-wiggle'}`} />
          {/* <img className={`w-20 h-20 mx-auto mb-4 text-[#bbd4cc] ${isAnimating ? 'animate-flyAway' : 'animate-wiggle'}`} src="/rocket.png" alt="" /> */}
          <h2 className="text-4xl font-semibold mb-4 text-[#8ab2a7]">Interessiert an einer <span className="text-white">Zusammenarbeit</span>?</h2>
          <p className="mb-6 text-lg text-white/90">Lassen Sie uns Kundenloyalität stärken, Conversions steigern und Ihre Marketingwirkung skalieren.</p>
          <Button onClick={playAnimationAndRedirect} className="z-50 bg-[#bbd4cc] text-[#35504b] hover:bg-[#8ab2a7] hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-full px-6 py-3 text-xl font-semibold cursor-pointer shadow-xl">
          Jetzt ein Gespräch vereinbaren
          </Button>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-10 bg-transparent text-center text-sm border-t border-[#6b818c]/40">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="/logo1.png" className='w-[250px] h-[125px] object-cover' alt="" />
            <p className="text-[#bbd4cc]">© {new Date().getFullYear()} EKD Solutions. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
