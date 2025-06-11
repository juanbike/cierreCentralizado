import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, BarChart3, Users } from "lucide-react"

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">

      {/* Logo - Ahora es un enlace */}
      <div className="flex items-center space-x-2">
        <a 
          href="https://www.consulbank.com.ve"  
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="/images/logooficial.webp" 
            alt="Consulbank - Inicio" 
            className="h-9 w-auto md:block"
          />
        </a>
      </div>

      {/* Menú de navegación */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#inicio" className="text-white/90 hover:text-white transition-colors">Inicio</a>
        <a href="#servicios" className="text-white/90 hover:text-white transition-colors">Servicios</a>
        <a href="#contacto" className="text-white/90 hover:text-white transition-colors">Contacto</a>
      </div>
	   {/* Redes sociales */}
      <div className="flex items-center space-x-3">
        {/* Twitter/X - Ocultar en móvil */}
        <a 
          href="https://twitter.com/consulbank"     
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition md:block hidden"
          aria-label="Twitter"
        >
          <img src="/images/x.svg" alt="Twitter" className="h-4 w-4 m-3" />
        </a>

        {/* LinkedIn - Ocultar en móvil */}
        <a 
          href="https://linkedin.com/company/consulbank"     
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition md:block hidden"
          aria-label="LinkedIn"
        >
          <img src="/images/linkedin.svg" alt="LinkedIn" className="h-4 w-4 m-3" />
        </a>

         {/* Facebook - Ocultar en móvil */}
        <a 
          href="https://facebook.com/consulbank"     
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition md:block hidden"
          aria-label="Facebook"
        >
          <img src="/images/facebook.svg" alt="Facebook" className="h-4 w-4 m-3" />
        </a>
		
		{/* Instagram - Visible siempre */}
        <a 
          href="https://instagram.com/consulbank"     
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition"
          aria-label="Instagram"
        >
          <img src="/images/instagram.svg" alt="Instagram" className="h-4 w-4" />
        </a>

        {/* WhatsApp - Visible siempre */}
        <a 
          href="https://wa.me/584143162574"     
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition"
          aria-label="WhatsApp"
        >
          <img src="/images/whatsapp.svg" alt="WhatsApp" className="h-4 w-4" />
        </a>
      </div>
	  
	</div>
  </div>
</nav>	   
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 m-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight space-y-4">
                                Revoluciona tus procesos de
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> Interconexión</span> 
                <br />con nuestro Cierre Centralizado
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                Es una tecnología avanzada para el procesamiento centralizado de millones de transacciones que permite la liquidación y compensación de operaciones financieras entre múltiples bancos y redes, principalmente transacciones de los canales ATM, P2P, P2C de manera eficiente y segura a través de un sistema interbancario.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-blue-200">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>Informes en Tiempo Real</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Multi-usuario</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Demo Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-blue-200 text-sm">
                ✅ Sin compromiso • ✅ Instalación en 30-60 días • ✅ Soporte 24/7
              </p>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/sistema-general.png" 
                alt="Dashboard del Sistema de Cierre Centralizado" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Overlay Stats */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                70% Reducción de Tiempo
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                99.9% Precisión
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
