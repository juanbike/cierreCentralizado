import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Send, User, Building, Mail, Phone } from "lucide-react"
import { useTranslation } from 'react-i18next';



const ContactForm = () => {
  const { t, i18n } = useTranslation(); // Initialize translation hook
   const handleClick = () => {
    // Ejemplo de cómo cambiar el idioma desde cualquier componente
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };



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
                {t('contactTitle')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('contactSubTitle')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('contactTitleOne')}</h3>
                  <p className="text-gray-600 text-sm">
                    {t('ontactSubTitleOne')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('contactTitleTwo')}</h3>
                  <p className="text-gray-600 text-sm">
                    {t('contactSubTitleTwo')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('contactTitleThree')}</h3>
                  <p className="text-gray-600 text-sm">
                    {t('contactSubTitleThree')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3"> {t('chooseTitle')}</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <div>🏆  {t('chooseSubTitleOne')}</div>
                <div>🔧  {t('chooseSubTitleTwo')}</div>
                <div>⚡  {t('chooseSubTitleThree')}</div>
                <div>✅  {t('chooseSubTitleFour')}</div>
                <div>🚀  {t('chooseSubTitleFive')}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('chooseSubTitleSix')}
                </h3>
                <p className="text-gray-600">
                  {t('chooseSubTitleSeven')}
                </p>
              </div>

              <div className="space-y-6 px-4 py-6 max-w-md mx-auto">
  {/* Campo: Nombre completo */}
  <div className="w-full">
    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 flex items-center">
      <User className="h-4 w-4 mr-2 text-gray-500" />
      <span>{t('contactFormL1')} *</span>
    </Label>
    <Input
      id="fullName"
      name="fullName"
      type="text"
      value={formData.fullName}
      onChange={handleChange}
      className={`w-full mt-1 rounded-lg ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
      placeholder="Ej: Juan Carlos Rodríguez"
    />
    {errors.fullName && (
      <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
    )}
  </div>
  {/* Campo: Empresa */}
  <div className="w-full">
    <Label htmlFor="company" className="text-sm font-medium text-gray-700 flex items-center">
      <Building className="h-4 w-4 mr-2 text-gray-500" />
      <span>{t('contactFormL2')} </span>
    </Label>
    <Input
      id="company"
      name="company"
      type="text"
      value={formData.company}
      onChange={handleChange}
      className={`w-full mt-1 rounded-lg ${errors.company ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
      placeholder="Ej: Banco Nacional de España"
    />
    {errors.company && (
      <p className="text-red-500 text-xs mt-1">{errors.company}</p>
    )}
  </div>
  {/* Campo: Correo electrónico */}
  <div className="w-full">
    <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
      <Mail className="h-4 w-4 mr-2 text-gray-500" />
      <span>{t('contactFormL3')}</span>
    </Label>
    <Input
      id="email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      className={`w-full mt-1 rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
      placeholder="ejemplo@banco.com"
    />
    {errors.email && (
      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
    )}
  </div>
   {/* Campo: Teléfono */}
  <div className="w-full">
    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center">
      <Phone className="h-4 w-4 mr-2 text-gray-500" />
      <span>{t('contactFormL4')}</span>
    </Label>
    <Input
      id="phone"
      name="phone"
      type="tel"
      value={formData.phone}
      onChange={handleChange}
      className="w-full mt-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
                    {t('contactFormL5')}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    {t('contactFormL6')}
                  </div>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                {t('contactFormL7')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
