"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Scale, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2a61] via-[#164191] to-[#1264ad]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container relative mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Más de 20 años de experiencia</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Recuperación de Cartera con{" "}
              <span className="text-accent">Excelencia</span> y{" "}
              <span className="text-accent">Ética</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Somos especialistas en gestión de cobranzas con una comunicación directa, 
              clara y respetuosa de la normativa vigente hacia el consumidor financiero.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-6 text-lg"
              >
                <Link href="#contacto">
                  Solicitar Asesoría
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
              >
                <Link href="#conocenos">Conocer Más</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">20+</p>
                <p className="text-sm text-white/70">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">100%</p>
                <p className="text-sm text-white/70">Compromiso ético</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent">1000+</p>
                <p className="text-sm text-white/70">Casos resueltos</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <Scale className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-serif font-semibold text-white text-lg mb-2">Gestión Jurídica</h3>
                <p className="text-white/70 text-sm">Acompañamiento legal especializado en procesos de cobranza judicial.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <Shield className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-serif font-semibold text-white text-lg mb-2">Seguridad Legal</h3>
                <p className="text-white/70 text-sm">Garantizamos el cumplimiento de todas las normativas vigentes.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <Users className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-serif font-semibold text-white text-lg mb-2">Equipo Experto</h3>
                <p className="text-white/70 text-sm">Profesionales capacitados y en constante actualización legal.</p>
              </div>
              <div className="bg-accent/90 rounded-2xl p-6 hover:bg-accent transition-all duration-300 hover:-translate-y-1">
                <p className="font-serif font-bold text-foreground text-2xl mb-2">¿Necesita recuperar su cartera?</p>
                <p className="text-foreground/80 text-sm mb-4">Contáctenos hoy mismo</p>
                <Button asChild variant="secondary" className="w-full bg-white hover:bg-white/90 text-foreground">
                  <Link href="#contacto">Contactar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
