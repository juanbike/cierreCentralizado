import { Database, FileBarChart, Shield, Users, BarChart3, Smartphone } from "lucide-react"

const KeyFeatures = () => {
  const features = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "💾 Integración nativa con sistemas IBM i (AS/400)",
      description: "Funciona directamente en su infraestructura existente sin necesidad de migración de datos o cambios en su ambiente actual.",
      color: "bg-blue-500"
    },
    {
      icon: <FileBarChart className="h-8 w-8" />,
      title: "📋 Generación automática de informes detallados y exportables",
      description: "Reportes completos en múltiples formatos (PDF, Excel, XML) que cumplen con todas las normativas bancarias locales e internacionales.",
      color: "bg-green-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "🛡️ Cumplimiento con normativas bancarias y auditorías",
      description: "Sistema diseñado para cumplir con regulaciones financieras, incluyendo trazabilidad completa y logs de auditoría detallados.",
      color: "bg-purple-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "👥 Acceso seguro por roles para múltiples usuarios",
      description: "Sistema de permisos granular que permite definir roles específicos para diferentes niveles de acceso y responsabilidades.",
      color: "bg-orange-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "📊 Dashboard intuitivo con indicadores clave en tiempo real",
      description: "Monitoreo continuo de KPIs bancarios con alertas automáticas y visualización de datos en tiempo real para toma de decisiones ágil.",
      color: "bg-red-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "🔄 Interfaz amigable para usuarios técnicos y no técnicos",
      description: "Diseño intuitivo que permite a cualquier usuario operar el sistema eficientemente, independientemente de su nivel técnico.",
      color: "bg-cyan-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="caracteristicas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades que te ayudan a optimizar operaciones de beneficios:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro sistema integral ofrece todas las herramientas necesarias para transformar 
            completamente sus procesos de cierre centralizado bancario.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-lg text-white mb-6`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Features Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Tecnología de Vanguardia
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Procesamiento en Tiempo Real</h4>
                    <p className="text-gray-600 text-sm">
                      Actualización instantánea de datos y generación de reportes sin demoras
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Backup Automático</h4>
                    <p className="text-gray-600 text-sm">
                      Respaldo continuo de información crítica con recuperación instantánea
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Escalabilidad Enterprise</h4>
                    <p className="text-gray-600 text-sm">
                      Diseñado para crecer con su institución sin límites de transacciones
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">APIs de Integración</h4>
                    <p className="text-gray-600 text-sm">
                      Conectividad con sistemas de terceros y plataformas externas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Implementación Sin Interrupciones</h4>
                <p className="text-blue-800 text-sm">
                  Nuestro equipo especializado garantiza una transición suave sin afectar 
                  sus operaciones diarias. Implementación completa en 30-60 días.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Analytics Avanzados</h3>
              
              <img 
                src="/images/banking-analytics.png" 
                alt="Dashboard de analytics bancarios" 
                className="w-full rounded-lg shadow-2xl mb-6"
              />

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Métricas en Vivo</h4>
                  <p className="text-blue-100 text-sm">
                    Monitoreo continuo de volúmenes, tiempos de procesamiento y tasas de error
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Alertas Inteligentes</h4>
                  <p className="text-blue-100 text-sm">
                    Notificaciones automáticas ante discrepancias o situaciones que requieren atención
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Reportes Personalizados</h4>
                  <p className="text-blue-100 text-sm">
                    Generación de informes específicos según las necesidades de cada departamento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
