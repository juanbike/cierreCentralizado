import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Send, User, Building, Mail, Phone } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es obligatorio'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'La empresa es obligatoria'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ fullName: '', company: '', email: '', phone: '' })
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-green-800 mb-4">
                ¡Solicitud Enviada Exitosamente!
              </h3>
              <p className="text-green-700 text-lg mb-6">
                Gracias por su interés en nuestro Sistema de Cierre Centralizado Bancario.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">Próximos Pasos:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>✅ Nuestro equipo revisará su solicitud en las próximas 2 horas</div>
                  <div>📞 Lo contactaremos para agendar una demo personalizada</div>
                  <div>🎯 Prepararemos una propuesta adaptada a sus necesidades</div>
                  <div>⚡ Tiempo estimado de respuesta: Menos de 24 horas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Descubre cómo podemos ayudarte
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Solicite una demostración personalizada de nuestro Sistema de Cierre Centralizado 
                y descubra cómo puede transformar las operaciones de su banco.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Demo Personalizada</h3>
                  <p className="text-gray-600 text-sm">
                    Presentación adaptada a las necesidades específicas de su institución bancaria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Análisis Sin Costo</h3>
                  <p className="text-gray-600 text-sm">
                    Evaluación gratuita de sus procesos actuales y oportunidades de mejora
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Propuesta Técnica</h3>
                  <p className="text-gray-600 text-sm">
                    Plan de implementación detallado con cronograma y especificaciones técnicas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">¿Por qué elegirnos?</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <div>🏆 +15 años de experiencia en sistemas bancarios</div>
                <div>🔧 Soporte técnico especializado 24/7</div>
                <div>⚡ Implementación rápida (30-60 días)</div>
                <div>✅ Cumplimiento garantizado con normativas</div>
                <div>🚀 ROI comprobado en menos de 6 meses</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Solicitar Información
                </h3>
                <p className="text-gray-600">
                  Complete el formulario y nos pondremos en contacto inmediatamente
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Nombre completo *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`mt-1 ${errors.fullName ? 'border-red-500' : ''}`}
                    placeholder="Ej: Juan Carlos Rodríguez"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700 flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Empresa *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className={`mt-1 ${errors.company ? 'border-red-500' : ''}`}
                    placeholder="Ej: Banco Nacional de España"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Correo electrónico *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="ejemplo@banco.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Teléfono (opcional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="+34 600 123 456"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar información y agendar demo
                  </div>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario, acepta ser contactado por nuestro equipo comercial. 
                Sus datos están protegidos según nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
