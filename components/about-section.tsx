"use client"

import { Building2, Target, Eye, Users, MapPin, Award } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Misión",
    description: "Brindar a nuestros clientes soluciones de cobranzas integrales a través de la efectividad de nuestros servicios, garantizando siempre la seguridad de la información y buena atención al consumidor financiero."
  },
  {
    icon: Eye,
    title: "Visión",
    description: "Ser la empresa mejor referenciada para la recuperación de cartera vencida en la ciudad de Cali, su área metropolitana y el suroccidente del país."
  },
  {
    icon: Building2,
    title: "Infraestructura",
    description: "Ubicados en la zona central de Cali con fácil acceso. Nuestras instalaciones cuentan con infraestructura de informática y telecomunicaciones óptima y moderna."
  },
  {
    icon: Users,
    title: "Recurso Humano",
    description: "Gestores de cobranza capacitados y en constante actualización legal. Área jurídica integrada por profesionales especializados con amplia experiencia."
  }
]

export function AboutSection() {
  return (
    <section id="conocenos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Conócenos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Más de 20 Años de Experiencia en Recuperación de Cartera
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            MARTHA J. MEJÍA Y ASOCIADOS ofrece a las diversas entidades financieras y comerciales 
            privadas y públicas, recuperar su cartera con calidad y efectividad.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0d2a61] to-[#1264ad] overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Award className="w-20 h-20 mx-auto mb-6 text-accent" />
                  <h3 className="font-serif text-3xl font-bold mb-4">Compromiso y Excelencia</h3>
                  <p className="text-white/80 max-w-md">
                    Gestión de cobranza persuasiva y jurídica de cartera activa actual, 
                    con menor y mayor cuantía.
                  </p>
                </div>
              </div>
              {/* Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-tr-full" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Cali, Colombia</p>
                  <p className="text-sm text-muted-foreground">Zona central con fácil acceso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                ¿Quiénes Somos?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Somos un despacho jurídico comprometido con la defensa responsable de los derechos 
                de nuestros clientes, ofreciendo soluciones legales claras, éticas y eficientes 
                en recuperación de cartera.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Con vasta experiencia adquirida durante más de 20 años, garantizamos siempre la 
                seguridad de la información y buena atención al consumidor financiero.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground font-medium">Cobranza Persuasiva</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground font-medium">Cobranza Jurídica</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground font-medium">Menor Cuantía</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground font-medium">Mayor Cuantía</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-muted rounded-2xl p-6 hover:bg-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-white mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
