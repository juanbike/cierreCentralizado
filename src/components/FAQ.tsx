import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems: FAQItem[] = [
    {
      question: "¿El sistema requiere migración de datos?",
      answer: "No, está diseñado para operar dentro del entorno AS/400 existente sin afectar tu infraestructura actual. El sistema se integra nativamente con sus bases de datos y aplicaciones actuales, permitiendo una implementación sin interrupciones en sus operaciones diarias."
    },
    {
      question: "¿Es compatible con cualquier versión de IBM i?",
      answer: "Sí, funciona con las versiones más utilizadas, desde la 7.2 en adelante. Nuestro sistema ha sido probado y certificado para trabajar con todas las versiones actuales de IBM i, incluyendo las últimas actualizaciones y parches de seguridad."
    },
    {
      question: "¿Ofrecen soporte técnico post-implementación?",
      answer: "Por supuesto, contamos con un equipo especializado disponible 24/7 para resolver cualquier incidencia. Nuestro soporte incluye monitoreo proactivo, actualizaciones automáticas, mantenimiento preventivo y acceso directo a ingenieros especializados en sistemas bancarios."
    },
    {
      question: "¿Cuánto tiempo toma la implementación?",
      answer: "Depende del tamaño del banco, pero en promedio entre 30 y 60 días. Este tiempo incluye: análisis inicial, configuración personalizada, migración de configuraciones, pruebas exhaustivas, capacitación del personal y puesta en producción. Garantizamos una transición sin interrupciones."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro Sistema de Cierre Centralizado Bancario
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de especialistas está listo para resolver todas sus dudas 
            y brindarle la información técnica que necesita.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-semibold mb-2">Consulta Telefónica</h4>
              <p className="text-blue-100 text-sm">Línea directa con expertos técnicos</p>
              <p className="text-yellow-300 font-semibold mt-2">+34 900 123 456</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-semibold mb-2">Chat en Vivo</h4>
              <p className="text-blue-100 text-sm">Respuesta inmediata en línea</p>
              <p className="text-yellow-300 font-semibold mt-2">24/7 Disponible</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">📧</div>
              <h4 className="font-semibold mb-2">Email Técnico</h4>
              <p className="text-blue-100 text-sm">Soporte técnico especializado</p>
              <p className="text-yellow-300 font-semibold mt-2">soporte@sistemacc.com</p>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="font-bold text-lg mb-3">Recursos Adicionales</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="text-left">
                <h5 className="font-semibold mb-2">Documentación Técnica</h5>
                <ul className="space-y-1 text-blue-100">
                  <li>• Guías de implementación</li>
                  <li>• Manuales de usuario</li>
                  <li>• Especificaciones técnicas</li>
                </ul>
              </div>
              <div className="text-left">
                <h5 className="font-semibold mb-2">Capacitación</h5>
                <ul className="space-y-1 text-blue-100">
                  <li>• Webinars especializados</li>
                  <li>• Certificaciones oficiales</li>
                  <li>• Sesiones personalizadas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
