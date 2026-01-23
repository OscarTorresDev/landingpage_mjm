"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfonos",
    details: ["(602) 889-5271", "(602) 485-2318"],
    action: { href: "tel:+576028895271", label: "Llamar ahora" }
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    details: ["administrador@marthajmejia.com"],
    action: { href: "mailto:administrador@marthajmejia.com", label: "Enviar correo" }
  },
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Cali, Valle del Cauca", "Colombia"],
    action: { href: "#", label: "Ver mapa" }
  },
  {
    icon: Clock,
    title: "Horario de Atención",
    details: ["Lunes a Viernes", "8:00 AM - 6:00 PM"],
    action: null
  }
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/administrador@marthajmejia.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        ;(e.target as HTMLFormElement).reset()
      }
    } catch {
      alert("Error al enviar el formulario. Por favor, intente de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-[#0d2a61] via-[#164191] to-[#1264ad] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
            Contacto
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Estamos Aquí Para Ayudarle
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Contáctenos hoy mismo para una asesoría personalizada. 
            Estamos comprometidos con encontrar la mejor solución para usted.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white/80 text-sm">{detail}</p>
                  ))}
                  {info.action && (
                    <a 
                      href={info.action.href}
                      className="inline-block mt-3 text-accent text-sm font-medium hover:underline"
                    >
                      {info.action.label} →
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="font-serif font-bold text-lg mb-4">Ubicación</h3>
              <div className="aspect-video rounded-xl bg-white/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                  <p className="text-white/60">Cali, Valle del Cauca, Colombia</p>
                  <p className="text-white/40 text-sm">Zona central con fácil acceso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Gracias por contactarnos. Nos pondremos en contacto con usted pronto.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="text-foreground"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Envíenos un Mensaje
                </h3>
                <p className="text-muted-foreground mb-8">
                  Complete el formulario y nos pondremos en contacto con usted.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-foreground">Nombre Completo *</Label>
                      <Input 
                        id="nombre" 
                        name="nombre" 
                        required 
                        className="bg-muted border-border text-foreground"
                        placeholder="Su nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-foreground">Teléfono *</Label>
                      <Input 
                        id="telefono" 
                        name="telefono" 
                        type="tel" 
                        required 
                        className="bg-muted border-border text-foreground"
                        placeholder="Su teléfono"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Correo Electrónico *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="bg-muted border-border text-foreground"
                      placeholder="su@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-foreground">Mensaje</Label>
                    <Textarea 
                      id="mensaje" 
                      name="mensaje" 
                      rows={4}
                      className="bg-muted border-border text-foreground resize-none"
                      placeholder="¿En qué podemos ayudarle?"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-[#0d4a8a] text-white py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
