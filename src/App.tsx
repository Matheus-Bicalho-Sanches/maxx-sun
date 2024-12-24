import heroImage from './assets/images/hero-bg.jpg'
import logo from './assets/images/logo.png'

function App() {
  return (
    <main className="w-full min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative group inline-block">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/10 rounded-full blur-md group-hover:bg-white/20 transition-all duration-300"></div>
            {/* Logo with drop shadow */}
            <img 
              src={logo} 
              alt="Maxx Sun Logo" 
              className="h-16 md:h-24 lg:h-32 w-auto relative drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300" 
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative h-full w-full px-4 flex items-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Transforme o Sol em Economia com a Maxx Sun
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Reduza sua conta de energia em até 95% com nossas soluções em energia solar. 
              Investimento inteligente com retorno garantido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
