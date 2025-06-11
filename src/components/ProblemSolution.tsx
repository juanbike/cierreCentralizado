import { Clock, AlertTriangle, TrendingDown, FileText, CheckCircle, Zap, Shield, BarChart  } from "lucide-react"

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white" id="problema-solucion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué los Bancos Necesitan Automatizar sus Procesos de Cierre?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los métodos tradicionales de cierre centralizado generan ineficiencias críticas 
            que impactan la operación diaria y el cumplimiento regulatorio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problema Section */}
          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <AlertTriangle className="h-7 w-7 mr-3" />
                Problemas Actuales
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">✅ Pérdida de tiempo valioso</h4>
                    <p className="text-red-700 text-sm mt-1">
                      Procesos manuales que consumen horas de trabajo especializado diariamente
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">❌ Alto riesgo de error humano</h4>
                    <p className="text-red-700 text-sm mt-1">
                      Manipulación manual de datos que genera inconsistencias y errores costosos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">⏳ Dificultad para cumplir con regulaciones</h4>
                    <p className="text-red-700 text-sm mt-1">
                      Complejidad para generar reportes precisos que cumplan normativas locales e internacionales
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">📉 Informes lentos e imprecisos</h4>
                    <p className="text-red-700 text-sm mt-1">
                      Generación tardía de reportes que afecta la toma de decisiones estratégicas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg ">
              <h4 className="font-bold text-gray-800 mb-11">Impacto Económico</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-red-600">€250K</div>
                  <div className="text-sm text-gray-600">Costo anual promedio de errores</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-red-600">40hrs</div>
                  <div className="text-sm text-gray-600">Tiempo semanal en procesos manuales</div>
                </div>
              </div>
            </div>
          </div>

          {/* Solución Section */}
          <div className="space-y-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <CheckCircle className="h-7 w-7 mr-3" />
                Nuestra Solución
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-3">Sistema de Conciliaciones Electrónicas</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Automatiza completamente desde la extracción de datos hasta el análisis final, 
                    con integración directa con ambiente AS/400 sin necesidad de infraestructura adicional.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Automatización Completa</h4>
                      <p className="text-green-700 text-sm mt-1">
                        Eliminación de procesos manuales y reducción del 70% en tiempo de operación
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Integración Nativa AS/400</h4>
                      <p className="text-green-700 text-sm mt-1">
                        Funciona directamente en su infraestructura existente sin cambios
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <BarChart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Cumplimiento Regulatorio</h4>
                      <p className="text-green-700 text-sm mt-1">
                        Generación automática de reportes que cumplen normativas bancarias
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800"> Soluciones Especializadas</h4>
                      <p className="text-green-700 text-sm mt-1">
                        Somos especialistas en una amplia gama de sistemas bancarios centrales, incluyendo IBS, Paradise y SIAF.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800"> Integración de switches</h4>
                      <p className="text-green-700 text-sm mt-1">
                        Contamos con una extensa trayectoria en la conexión con diversos switches transaccionales como Postilion, Catus y Catsw.
                      </p>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-3">Beneficios Medibles</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-green-600">70%</div>
                  <div className="text-sm text-gray-600">Reducción de tiempo</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-gray-600">Precisión en reportes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Tecnología Probada en el Sector Bancario</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Más de 50 bancos confían en nuestro sistema para optimizar sus operaciones de cierre centralizado
            </p>
            <img 
              src="/images/fintech-interface.jpg" 
              alt="Interfaz del sistema bancario" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
