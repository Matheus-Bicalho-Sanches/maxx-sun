import logo from './assets/images/logo.png'
import solarSunset from './assets/images/solar-sunset.jpg'
import { FaSolarPanel, FaTools, FaClock, FaMoneyBillWave } from 'react-icons/fa'

function App() {
  return (
    <main className="w-full min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative group inline-block">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/10 rounded-full blur-md group-hover:bg-white/20 transition-all duration-300"></div>
            {/* Logo with outline effect */}
            <img 
              src={logo} 
              alt="Maxx Sun Logo" 
              className="h-16 md:h-28 lg:h-40 w-auto relative transition-all duration-300 logo-outline" 
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="absolute min-w-full min-h-full object-cover opacity-0 transition-opacity duration-500"
            onLoadedData={(e) => {
              const video = e.target as HTMLVideoElement;
              video.classList.remove('opacity-0');
              video.classList.add('opacity-100');
            }}
          >
            <source src="/src/assets/images/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
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
            <div className="flex justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                Solicitar Orçamento GRATUITAMENTE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-12 text-center">
            Diferenciais da Maxx Sun
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Column - Hidden on mobile */}
            <div className="hidden lg:block lg:w-1/3">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img 
                  src={solarSunset} 
                  alt="Painéis solares ao pôr do sol" 
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>
            </div>

            {/* Cards Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-zinc-900 rounded-xl p-8 transition-all duration-300 hover:bg-zinc-800 hover:transform hover:-translate-y-1">
                <div className="text-yellow-500 text-4xl mb-4">
                  <FaSolarPanel />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Equipamentos de ponta
                </h3>
                <p className="text-gray-300">
                  Trabalhamos apenas com o melhor! Temos inversores com 20 anos de garantia e até 47 anos de vida útil.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-zinc-900 rounded-xl p-8 transition-all duration-300 hover:bg-zinc-800 hover:transform hover:-translate-y-1">
                <div className="text-yellow-500 text-4xl mb-4">
                  <FaTools />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Time de pós venda especializado
                </h3>
                <p className="text-gray-300">
                  Temos uma equipe dedicada para o monitoramento da sua usina 24/7.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-zinc-900 rounded-xl p-8 transition-all duration-300 hover:bg-zinc-800 hover:transform hover:-translate-y-1">
                <div className="text-yellow-500 text-4xl mb-4">
                  <FaMoneyBillWave />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Pagamento Facilitado
                </h3>
                <p className="text-gray-300">
                  Trabalhamos com as principais instituições de pagamento do Brasil.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-zinc-900 rounded-xl p-8 transition-all duration-300 hover:bg-zinc-800 hover:transform hover:-translate-y-1">
                <div className="text-yellow-500 text-4xl mb-4">
                  <FaClock />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Entrega ágil
                </h3>
                <p className="text-gray-300">
                  Nossos fornecedores entregam o seu equipamento com segurança e em tempo recorde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
