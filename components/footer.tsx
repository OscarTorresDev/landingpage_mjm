"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, FileText, ExternalLink } from "lucide-react"

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#conocenos", label: "Conócenos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#ventajas", label: "Por qué elegirnos" },
  { href: "#contacto", label: "Contacto" },
]

const legalLinks = [
  { href: "#", label: "Política de Privacidad" },
  { href: "#", label: "Tratamiento de Datos" },
  { href: "#", label: "Términos y Condiciones" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-lg">
                MJM
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Martha J. Mejía</h3>
                <p className="text-xs text-white/60">Abogados & Asociados</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Despacho jurídico comprometido con la defensa responsable de los derechos de 
              nuestros clientes, ofreciendo soluciones legales claras, éticas y eficientes.
            </p>
            <p className="text-white/50 text-sm">
              Operamos con total apego a la ley.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+576028895271"
                  className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>(602) 889-5271</p>
                    <p>(602) 485-2318</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:administrador@marthajmejia.com"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>administrador@marthajmejia.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Cali, Valle del Cauca</p>
                    <p>Colombia</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Martha J. Mejía Abogados & Asociados. Todos los derechos reservados.
            </p>
            <a 
              href="https://marthajmejia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent transition-colors text-sm flex items-center gap-1"
            >
              marthajmejia.com
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
