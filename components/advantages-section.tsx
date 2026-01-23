"use client"

import { CheckCircle, Scale, BarChart3, Briefcase, Shield, Clock, Award, Users } from "lucide-react"

const advantages = [
  {
    icon: Clock,
    title: "Experiencia Comprobada",
    description: "Más de 20 años recuperando cartera con un historial probado de éxito y profesionalismo.",
    highlight: "20+ años"
  },
  {
    icon: Scale,
    title: "Enfoque Ético y Legal",
    description: "Cumplimos todas las normativas vigentes, garantizando un trato respetuoso al consumidor.",
    highlight: "100% legal"
  },
  {
    icon: BarChart3,
    title: "Reportes Detallados",
    description: "Sistema de seguimiento y reportes en tiempo real para mantenerlo informado.",
    highlight: "Tiempo real"
  },
  {
    icon: Briefcase,
    title: "Sin Riesgo Inicial",
    description: "Modelo de comisión por éxito, solo paga cuando recuperamos su cartera.",
    highlight: "Por éxito"
  }
]

const stats = [
  { value: "20+", label: "Años de experiencia", icon: Award },
  { value: "95%", label: "Tasa de recuperación", icon: CheckCircle },
  { value: "1000+", label: "Clientes satisfechos", icon: Users },
  { value: "24/7", label: "Soporte disponible", icon: Shield }
]

export function AdvantagesSection() {
  return (
    <section id="ventajas" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Nuestras Ventajas
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos su aliado estratégico en la recuperación de cartera. Nuestra experiencia 
            y compromiso nos distinguen en el mercado.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group relative bg-muted rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Highlight badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">
                  {advantage.highlight}
                </span>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-5 transition-all duration-300">
                <advantage.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {advantage.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#0d2a61] to-[#1264ad] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Operamos con total apego a la ley</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="flex items-center gap-2 text-foreground">
              <Shield className="w-6 h-6" />
              <span className="font-medium">Datos Protegidos</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Scale className="w-6 h-6" />
              <span className="font-medium">Cumplimiento Legal</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Award className="w-6 h-6" />
              <span className="font-medium">Ética Profesional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
