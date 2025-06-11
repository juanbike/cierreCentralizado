import { Shield, Mail, Phone, MapPin, Clock, Award, Users, Building } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              
              <div>
                 {/* Logo */}
              <img src="/images/logooficial.webp" alt="https://consulbank.com.ve" className="h-12 w-auto" />
                <p className="text-gray-400 text-sm">Cierre Centralizado Bancario</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Líderes en soluciones de automatización para sistemas de cierre centralizado bancario. 
              Especializados en integración nativa con IBM i (AS/400) para el sector financiero.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">15+ años de experiencia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">50+ bancos implementados</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">Certificación IBM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">Soporte 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Navegación</h4>
            <nav className="space-y-3">
              <a href="#inicio" className="block text-gray-300 hover:text-white transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="block text-gray-300 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#contacto" className="block text-gray-300 hover:text-white transition-colors">
                Contacto
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Política de privacidad
              </a>
            </nav>

            <div className="pt-4 border-t border-gray-700">
              <h5 className="font-medium mb-3">Recursos</h5>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-400 hover:text-gray-300 transition-colors">
                  Documentación técnica
                </a>
                <a href="#" className="block text-gray-400 hover:text-gray-300 transition-colors">
                  Casos de éxito
                </a>
                <a href="#" className="block text-gray-400 hover:text-gray-300 transition-colors">
                  Webinars
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Información de Contacto</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Oficina Principal</p>
                  <p className="text-gray-400 text-sm">
                    Callejon Machado, El Paraiso, Centro Profesional Oeste, Piso 8, Ofinas 81 y 83.<br />
                    Caracas, Venezuela.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Movil</p>
                  <p className="text-gray-400 text-sm">+58 0414 316 2574</p>
                  <p className="text-gray-400 text-sm">Contacto: Luis Rigual</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Email</p>
                  <p className="text-gray-400 text-sm">info@sistemacc.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h5 className="font-medium mb-2">Horarios de Atención</h5>
              <div className="space-y-1 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Soporte Técnico:</span>
                  <span>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergencias:</span>
                  <span>24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Security */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-4">Certificaciones y Cumplimiento</h4>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">🏆</div>
                <h5 className="font-medium">ISO 27001</h5>
                <p className="text-xs text-gray-400">Seguridad de la información</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">🛡️</div>
                <h5 className="font-medium">PCI DSS</h5>
                <p className="text-xs text-gray-400">Estándares de seguridad</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">⚖️</div>
                <h5 className="font-medium">GDPR</h5>
                <p className="text-xs text-gray-400">Protección de datos</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">🏪</div>
                <h5 className="font-medium">Banco de España</h5>
                <p className="text-xs text-gray-400">Cumplimiento regulatorio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 SistemaCC. Todos los derechos reservados. | CIF: B-12345678
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-500">
              Este sitio web utiliza cookies para mejorar su experiencia. Al continuar navegando, 
              acepta el uso de cookies de acuerdo con nuestra política de privacidad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
