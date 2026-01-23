"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  BarChart3, 
  Phone, 
  Mail, 
  MessageSquare, 
  FileText, 
  Scale,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Marco Estratégico",
    description: "Personal altamente capacitado y calificado para la recuperación de cartera a partir de diferentes estrategias de gestión.",
    features: ["Gestión Administrativa", "Indicadores de Rendimiento", "Estrategias Prejurídicas", "Procesos Jurídicos"]
  },
  {
    icon: MessageSquare,
    title: "Medios de Comunicación",
    description: "Centro administrativo de contacto con diversos canales, cumpliendo la confidencialidad y el estricto cumplimiento legal.",
    features: ["Llamadas Telefónicas", "Correo Electrónico", "SMS y Chat", "Visitas Presenciales"]
  },
  {
    icon: Scale,
    title: "Asesoría Legal",
    description: "Acompañamiento legal especializado en procesos de cobranza judicial con profesionales expertos en el área.",
    features: ["Análisis de Casos", "Estrategias Legales", "Procesos Judiciales", "Seguimiento Continuo"]
  }
]

const communicationChannels = [
  { icon: Phone, label: "Telefónico (móvil y fijo)" },
  { icon: Mail, label: "E-Mail y Web" },
  { icon: MessageSquare, label: "Chat y SMS" },
  { icon: FileText, label: "Correspondencia física" }
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Soluciones Integrales de Cobranza
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ofrecemos un servicio completo de recuperación de cartera, desde la gestión 
            persuasiva hasta el acompañamiento jurídico especializado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Communication Channels Banner */}
        <div className="bg-gradient-to-r from-[#0d2a61] to-[#1264ad] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Múltiples Canales de Contacto
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Empleamos diversos canales de comunicación para las carteras asignadas, 
                siempre con la confidencialidad y discreción del estricto cumplimiento legal 
                hacia el consumidor financiero.
              </p>
              <Button 
                asChild 
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold"
              >
                <Link href="#contacto">
                  Contactar Ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {communicationChannels.map((channel, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <channel.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{channel.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
