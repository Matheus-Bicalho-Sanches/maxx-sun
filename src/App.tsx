import logo from './assets/images/logo.png'
import solarSunset from './assets/images/solar-sunset.jpg'
import { FaSolarPanel, FaTools, FaClock, FaMoneyBillWave, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [energyBill, setEnergyBill] = useState(400)
  const monthlySavings = energyBill * 0.9 // 90% savings

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  // Animation for numbers
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Animated number component
  const AnimatedNumber = ({ 
    end, 
    suffix = "", 
    duration = 2000 
  }: { 
    end: number;
    suffix?: string;
    duration?: number;
  }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (isVisible) {
        let startTime: number | null = null
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        requestAnimationFrame(animate)
      }
    }, [isVisible, end, duration])

    return <span>{count.toLocaleString()}{suffix}</span>
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
        
        {/* Content Container */}
        <div className="relative h-full w-full flex flex-col justify-center items-center px-4">
          {/* Logo */}
          <div className="mb-12">
            <div className="relative w-24 md:w-28 lg:w-40 aspect-square">
              {/* Glowing circle background */}
              <div className="absolute inset-0 rounded-full bg-white/10 blur-xl transform scale-150"></div>
              <div className="rounded-full overflow-hidden bg-white/5 backdrop-blur-sm w-full h-full">
                <img 
                  src={logo} 
                  alt="Maxx Sun Logo" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="max-w-3xl text-center">
            {/* Hero Content */}
            <h1 className="heading-xl hero-title text-white mb-6">
              Transforme o Sol em Economia com a Maxx Sun
            </h1>
            <p className="text-body-lg mb-8 text-gray-100">
              Reduza sua conta de energia em até 90% com nossas soluções em energia solar. Investimento inteligente com retorno de até 1,8% ao mês.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://wa.me/5543999030190" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <FaWhatsapp className="text-2xl" />
                Solicitar Orçamento GRATUITO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-orange-50 py-12">
        <div className="section-pattern"></div>
        <div className="section-content">
          <div className="max-w-4xl mx-auto px-4">
            {/* Calculator Section Title */}
            <h2 className="heading-lg section-title text-yellow-600 text-center mb-16">
              Calcule Sua Economia
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
              {/* Advantages Checklist */}
              <div className="w-full lg:w-[42%] bg-white/80 rounded-xl p-5 hover:bg-white transition-colors duration-300 shadow-lg">
                <h3 className="text-xl font-bold text-yellow-600 mb-4">
                  Por que escolher energia solar?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-300 ease-out">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1 animate-pulse">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="group">
                      <h4 className="text-gray-800 font-semibold text-sm mb-0.5 group-hover:text-yellow-600 transition-colors">Economia Imediata</h4>
                      <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">Reduza sua conta de energia desde o primeiro mês de instalação</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-300 ease-out">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1 animate-pulse">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="group">
                      <h4 className="text-gray-800 font-semibold text-sm mb-0.5 group-hover:text-yellow-600 transition-colors">Valorização do Imóvel</h4>
                      <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">Aumente o valor do seu imóvel com energia limpa e sustentável</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-300 ease-out">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1 animate-pulse">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="group">
                      <h4 className="text-gray-800 font-semibold text-sm mb-0.5 group-hover:text-yellow-600 transition-colors">Energia Limpa</h4>
                      <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
                        Contribua com o meio ambiente usando energia renovável
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-300 ease-out">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1 animate-pulse">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="group">
                      <h4 className="text-gray-800 font-semibold text-sm mb-0.5 group-hover:text-yellow-600 transition-colors">Retorno Garantido</h4>
                      <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">Investimento com payback entre 3 a 5 anos em média</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 hover:translate-x-1 transition-transform duration-300 ease-out">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1 animate-pulse">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="group">
                      <h4 className="text-gray-800 font-semibold text-sm mb-0.5 group-hover:text-yellow-600 transition-colors">Manutenção Mínima</h4>
                      <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">Sistema de alta durabilidade com manutenção simples e econômica</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Calculator */}
              <div className="w-full lg:w-[42%] bg-white/90 rounded-xl p-5 hover:bg-white transition-all duration-300 shadow-lg">
                {/* Bill Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-base mb-3 hover:text-yellow-600 transition-colors">
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
                  <div className="flex justify-between text-gray-500 text-xs">
                    <span>R$ 400</span>
                    <span className="text-yellow-600 font-medium animate-pulse">
                      {formatCurrency(energyBill)}
                    </span>
                    <span>R$ 10.000</span>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  <div className="bg-yellow-50 rounded-lg p-3 hover:bg-yellow-100/70 transition-colors duration-300 cursor-default">
                    <p className="text-gray-600 text-xs mb-1">Sua conta atual:</p>
                    <p className="text-xl font-bold text-gray-800">
                      {formatCurrency(energyBill)}
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-3 hover:bg-yellow-100/70 transition-colors duration-300 cursor-default">
                    <p className="text-gray-600 text-xs mb-1">Economia mensal estimada:</p>
                    <p className="text-xl font-bold text-yellow-600">
                      {formatCurrency(monthlySavings)}
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-3 hover:bg-yellow-100/70 transition-colors duration-300 cursor-default">
                    <p className="text-gray-600 text-xs mb-1">Estimativa de investimento:</p>
                    <p className="text-xl font-bold text-yellow-600">
                      A partir de R$ 7.000,00
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-4 text-center">
                  <a 
                    href="https://wa.me/5543999030190?text=Olá! Gostaria de uma simulação detalhada para energia solar." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 inline-flex items-center space-x-2"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Fazer Simulação Detalhada</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="bg-gradient-to-b from-orange-50 to-yellow-50 py-20 wave-pattern-bg">
        <div className="section-wave"></div>
        <div className="section-content">
          <div className="max-w-5xl mx-auto px-4">
            {/* Process Timeline Title */}
            <h2 className="heading-lg section-title text-yellow-600 text-center mb-20">
              Como Funciona
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-200"></div>

              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between mb-12 md:mb-24 reveal-on-scroll pl-12 md:pl-0">
                <div className="flex-1 md:text-right md:pr-12">
                  <h3 className="heading-md text-gray-800 mb-2">Contato Inicial</h3>
                  <p className="text-body">Entre em contato via WhatsApp ou formulário. Nossa equipe responderá rapidamente para entender suas necessidades.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-lg">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1 md:pl-12 hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between mb-12 md:mb-24 pl-12 md:pl-0">
                <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-lg">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="flex-1 md:pl-12">
                  <h3 className="heading-md text-gray-800 mb-2">Análise de Consumo</h3>
                  <p className="text-body">Envie sua conta de energia. Nossa equipe técnica fará uma análise detalhada para dimensionar o sistema ideal.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between mb-12 md:mb-24 pl-12 md:pl-0">
                <div className="flex-1 md:text-right md:pr-12">
                  <h3 className="heading-md text-gray-800 mb-2">Visita Técnica</h3>
                  <p className="text-body">Agendamos uma visita para avaliar o local, confirmar medidas e discutir os detalhes do projeto pessoalmente.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-lg">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="flex-1 md:pl-12 hidden md:block"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between mb-12 md:mb-24 pl-12 md:pl-0">
                <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-lg">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="flex-1 md:pl-12">
                  <h3 className="heading-md text-gray-800 mb-2">Proposta e Contrato</h3>
                  <p className="text-body">Apresentamos a proposta detalhada com todas as especificações técnicas e condições comerciais para sua aprovação.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between pl-12 md:pl-0">
                <div className="flex-1 md:text-right md:pr-12">
                  <h3 className="heading-md text-gray-800 mb-2">Instalação</h3>
                  <p className="text-body">Após a aprovação, agendamos a instalação que é realizada em aproximadamente 30 dias por nossa equipe especializada.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-lg">
                  <span className="text-white font-bold">5</span>
                </div>
                <div className="flex-1 md:pl-12 hidden md:block"></div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
              <a 
                href="https://wa.me/5543999030190?text=Olá! Gostaria de saber mais sobre o processo de instalação de energia solar." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Iniciar Processo Agora</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section ref={sectionRef} className="bg-gradient-to-b from-orange-100 to-yellow-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Sobre Nós Title */}
          <h2 className="heading-lg section-title text-yellow-600 text-center mb-20">
            Sobre Nós
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Stats */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Projects */}
              <div className="text-center bg-white/80 p-6 rounded-xl shadow-lg hover:bg-white transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                  {isVisible && <AnimatedNumber end={100} suffix="+" />}
                </div>
                <p className="text-gray-600">Projetos Completos</p>
              </div>

              {/* Experience */}
              <div className="text-center bg-white/80 p-6 rounded-xl shadow-lg hover:bg-white transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                  {isVisible && <AnimatedNumber end={2} suffix=" anos" />}
                </div>
                <p className="text-gray-600">de Experiência</p>
              </div>

              {/* Solar Panels */}
              <div className="text-center bg-white/80 p-6 rounded-xl shadow-lg hover:bg-white transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                  {isVisible && <AnimatedNumber end={1000} suffix="+" />}
                </div>
                <p className="text-gray-600">Placas Instaladas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gradient-to-b from-yellow-100 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Founder Description */}
          <div className="w-full space-y-6">
            <h2 className="heading-lg section-title text-yellow-600 text-center mb-20">
              Experiência e Compromisso
            </h2>
            <p className="text-body-lg leading-relaxed">
              Atuando no setor de forma exclusiva, nosso fundador construiu uma sólida reputação no mercado de Londrina e região.
            </p>
            <p className="text-body-lg leading-relaxed">
              Sua expertise técnica e compromisso com a qualidade garantem que cada projeto seja executado com excelência, utilizando os melhores equipamentos e seguindo rigorosos padrões de segurança. Trabalhamos com os principais inversores do mercado: Sungrow, Solis, Sofar, Weg, Growatt, Edeltec e Nexen.
            </p>
            <p className="text-body-lg leading-relaxed">
              Sob sua liderança, a Maxx Sun já realizou mais de 100 projetos bem-sucedidos, contribuindo para a economia e sustentabilidade de residências, comércios e indústrias da região.
            </p>
          </div>
        </div>
      </section>

      {/* Projetos Realizados Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Projects Section Title */}
          <h2 className="heading-lg section-title text-yellow-600 text-center mb-20">
            Projetos já Realizados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="hover-card group relative overflow-hidden rounded-xl shadow-lg bg-white">
              <div className="card-decoration"></div>
              <img 
                src="/Foto1.jpeg" 
                alt="Projeto Comercial" 
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-gray-600">Energia solar comercial</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="hover-card group relative overflow-hidden rounded-xl shadow-lg bg-white">
              <div className="card-decoration"></div>
              <img 
                src="/Foto2.jpeg" 
                alt="Projeto Rural" 
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-gray-600">Energia solar em zonas rurais</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="hover-card group relative overflow-hidden rounded-xl shadow-lg bg-white">
              <div className="card-decoration"></div>
              <img 
                src="/Foto3.jpeg" 
                alt="Projeto Residencial" 
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-gray-600">Energia Solar Residencial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="bg-gradient-to-b from-orange-50 to-yellow-50 py-12 md:py-16">
        <div className="section-pattern"></div>
        <div className="section-content">
        <div className="max-w-7xl mx-auto px-4">
            {/* Diferenciais Title */}
            <h2 className="heading-lg section-title text-yellow-600 text-center mb-20">
            Diferenciais da Maxx Sun
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Column - Hidden on mobile */}
            <div className="hidden lg:block lg:w-1/3">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
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
                <div className="hover-card bg-white/90 rounded-xl p-8 transition-all duration-300 hover:bg-white shadow-lg">
                  <div className="card-decoration"></div>
                <div className="text-yellow-500 text-4xl mb-4">
                  <FaSolarPanel />
                </div>
                  <h3 className="heading-md text-gray-800 mb-3">
                  Equipamentos de ponta
                </h3>
                  <p className="text-body">
                  Trabalhamos apenas com o melhor! Temos inversores com 20 anos de garantia e até 47 anos de vida útil.
                </p>
              </div>

              {/* Card 2 */}
                <div className="hover-card bg-white/90 rounded-xl p-8 transition-all duration-300 hover:bg-white shadow-lg">
                  <div className="card-decoration"></div>
                <div className="text-yellow-500 text-4xl mb-4">
                  <FaTools />
                </div>
                  <h3 className="heading-md text-gray-800 mb-3">
                  Time de pós venda especializado
                </h3>
                  <p className="text-body">
                  Temos uma equipe dedicada para o monitoramento da sua usina 24/7.
                </p>
              </div>

              {/* Card 3 */}
                <div className="hover-card bg-white/90 rounded-xl p-8 transition-all duration-300 hover:bg-white shadow-lg">
                  <div className="card-decoration"></div>
                <div className="text-yellow-500 text-4xl mb-4">
                  <FaMoneyBillWave />
                </div>
                  <h3 className="heading-md text-gray-800 mb-3">
                  Pagamento Facilitado
                </h3>
                  <p className="text-body">
                  Trabalhamos com as principais instituições de pagamento do Brasil.
                </p>
              </div>

              {/* Card 4 */}
                <div className="hover-card bg-white/90 rounded-xl p-8 transition-all duration-300 hover:bg-white shadow-lg">
                  <div className="card-decoration"></div>
                <div className="text-yellow-500 text-4xl mb-4">
                  <FaClock />
                  </div>
                  <h3 className="heading-md text-gray-800 mb-3">
                    Entrega e instalação rápida
                  </h3>
                  <p className="text-body">
                    Comece a economizar em sua conta de luz em aproximadamente 30 dias
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-orange-50 py-20">
        <div className="section-pattern"></div>
        <div className="section-wave"></div>
        <div className="section-content">
          <div className="max-w-4xl mx-auto px-4">
            {/* FAQ Title */}
            <h2 className="heading-lg section-title text-yellow-600 text-center mb-20">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">
              {/* Question 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="heading-md text-gray-800 mb-3">
                  Quanto tempo dura um sistema de energia solar?
                </h3>
                <p className="text-body">
                  Os painéis solares têm vida útil de 25 anos ou mais, mantendo eficiência acima de 80%. Os inversores têm garantia de até 20 anos, sendo um investimento duradouro e confiável.
                </p>
              </div>

              {/* Question 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="heading-md text-gray-800 mb-3">
                  Em quanto tempo terei retorno do investimento?
                </h3>
                <p className="text-body">
                  O payback médio é de 3 a 5 anos, dependendo do consumo e da tarifa de energia. Após esse período, você terá economia por mais de 20 anos.
                </p>
              </div>

              {/* Question 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="heading-md text-gray-800 mb-3">
                  Preciso fazer obras para instalar energia solar?
                </h3>
                <p className="text-body">
                  Não são necessárias grandes obras. A instalação é rápida e limpa, geralmente levando de 2 a 3 dias, sem interferir na estrutura da sua casa ou empresa.
                </p>
              </div>

              {/* Question 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="heading-md text-gray-800 mb-3">
                  Como funciona em dias nublados ou chuvosos?
                </h3>
                <p className="text-body">
                  O sistema continua gerando energia mesmo em dias nublados, apenas com eficiência reduzida. O dimensionamento já considera essas variações climáticas para garantir sua economia.
                </p>
              </div>

              {/* Question 5 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="heading-md text-gray-800 mb-3">
                  Qual manutenção é necessária?
                </h3>
                <p className="text-body">
                  A manutenção é mínima, consistindo principalmente na limpeza dos painéis a cada 6-12 meses. Nosso sistema de monitoramento 24/7 garante o máximo desempenho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <div className="mt-12 text-center mb-20">
        <p className="text-gray-600 mb-4">Ainda tem dúvidas? Fale com nossos especialistas!</p>
        <a 
          href="https://wa.me/5543999030190?text=Olá! Gostaria de tirar algumas dúvidas sobre energia solar." 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
        >
          <FaWhatsapp className="text-xl" />
          <span>Falar com Especialista</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-yellow-50 to-orange-50 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="rounded-full overflow-hidden bg-white/5 w-20 h-20 mb-8">
              <img 
                src={logo} 
                alt="Maxx Sun Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                <p className="text-gray-600">
                  Rua Espírito Santo 1806 sl.706, Londrina - PR 86020-420
                </p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaEnvelope className="text-yellow-500 text-xl" />
                <a href="mailto:edsontadeumello@gmail.com" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  edsontadeumello@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a 
                href="https://wa.me/5543999030190" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-yellow-100">
              <p className="text-gray-600 flex items-center justify-center gap-2">
                © {new Date().getFullYear()} Maxx Sun. Todos os direitos reservados. Feito por Matheus Bicalho Sanches
                <a 
                  href="https://github.com/matheusbcs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-yellow-600 transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
