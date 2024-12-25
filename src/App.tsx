import logo from './assets/images/logo.png'
import solarSunset from './assets/images/solar-sunset.jpg'
import { FaSolarPanel, FaTools, FaClock, FaMoneyBillWave, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

function App() {
  const [energyBill, setEnergyBill] = useState(400)
  const monthlySavings = energyBill * 0.5 // 50% savings

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <main className="w-full min-h-screen">
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
            <source src="/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Logo */}
        <div className="absolute top-4 left-4 lg:left-8 z-10">
          <div className="relative">
            {/* Glowing circle background */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-xl transform scale-150"></div>
            <img 
              src={logo} 
              alt="Maxx Sun Logo" 
              className="h-16 md:h-28 lg:h-40 w-auto logo-outline relative" 
            />
          </div>
        </div>
        
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

      {/* Savings Calculator Section */}
      <section className="bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Calcule Sua Economia
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Advantages Checklist */}
            <div className="w-full lg:w-1/2 bg-zinc-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-500 mb-8">
                Por que escolher energia solar?
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Economia Imediata</h4>
                    <p className="text-gray-300">Reduza sua conta de energia desde o primeiro mês de instalação</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Valorização do Imóvel</h4>
                    <p className="text-gray-300">Aumente o valor do seu imóvel com energia limpa e sustentável</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Energia Limpa</h4>
                    <p className="text-gray-300">Contribua com o meio ambiente usando energia renovável</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Retorno Garantido</h4>
                    <p className="text-gray-300">Investimento com payback entre 3 a 5 anos em média</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Manutenção Mínima</h4>
                    <p className="text-gray-300">Sistema de alta durabilidade com manutenção simples e econômica</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Calculator */}
            <div className="w-full lg:w-1/2 bg-zinc-800 rounded-2xl p-6 lg:p-8">
              {/* Bill Input */}
              <div className="mb-6">
                <label className="block text-gray-300 text-lg mb-4">
                  Qual sua conta de energia mensal?
                </label>
                <input
                  type="range"
                  min="400"
                  max="10000"
                  step="100"
                  value={energyBill}
                  onChange={(e) => setEnergyBill(Number(e.target.value))}
                  className="mb-2"
                />
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>R$ 400</span>
                  <span className="text-yellow-500 font-medium">
                    {formatCurrency(energyBill)}
                  </span>
                  <span>R$ 10.000</span>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-xl p-4">
                  <p className="text-gray-300 text-sm mb-1">Sua conta atual:</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(energyBill)}
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-4">
                  <p className="text-gray-300 text-sm mb-1">Economia mensal estimada:</p>
                  <p className="text-2xl font-bold text-yellow-500">
                    {formatCurrency(monthlySavings)}
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-4">
                  <p className="text-gray-300 text-sm mb-1">Estimativa de investimento:</p>
                  <p className="text-2xl font-bold text-yellow-500">
                    {formatCurrency(monthlySavings * 30)}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 text-center">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg text-base transition-colors inline-flex items-center space-x-2">
                  <span>Fazer Simulação Detalhada</span>
                  <FaSolarPanel className="text-lg" />
                </button>
              </div>
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

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - Company Info */}
            <div>
              <img 
                src={logo} 
                alt="Maxx Sun Logo" 
                className="h-20 w-auto mb-6" 
              />
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1" />
                  <p className="text-gray-300">
                    Av. Higienópolis, 1080 - Sala 1<br />
                    Londrina - PR 86020-080
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-yellow-500 text-xl" />
                  <a href="mailto:contato@maxxsun.com.br" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    contato@maxxsun.com.br
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Nossos Serviços</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Energia Solar Residencial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Energia Solar Comercial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Energia Solar Industrial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Manutenção de Sistemas
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h3 className="text-xl font-bold mb-6">Empresa</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Projetos Realizados
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Trabalhe Conosco
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Legal */}
            <div>
              <h3 className="text-xl font-bold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Garantia
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Maxx Sun. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
