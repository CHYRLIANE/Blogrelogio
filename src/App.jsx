import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Star, Watch, Smartphone, Heart, Battery, Wifi, Shield } from 'lucide-react'
import AmazonWidget from './components/AmazonWidget.jsx'
import AmazonBanner from './components/AmazonBanner.jsx'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('reviews')

  const featuredProducts = [
    {
      title: "Apple Watch Series 9",
      price: "R$ 3.299,00",
      originalPrice: "R$ 3.999,00",
      rating: 4.8,
      reviews: 15420,
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop",
      amazonLink: "https://www.amazon.com.br/s?k=apple+watch+series+9",
      badge: "Mais Vendido",
      description: "O smartwatch mais avançado da Apple com recursos de saúde e fitness."
    },
    {
      title: "Samsung Galaxy Watch 6",
      price: "R$ 1.899,00",
      originalPrice: "R$ 2.299,00",
      rating: 4.6,
      reviews: 8930,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/119119595/BlgrJkyCNHfBrCze.jpg",
      amazonLink: "https://www.amazon.com.br/s?k=samsung+galaxy+watch+6",
      badge: "Oferta",
      description: "Smartwatch Android com excelente autonomia e recursos de saúde."
    },
    {
      title: "Xiaomi Redmi Watch 5 Active",
      price: "R$ 299,00",
      originalPrice: "R$ 399,00",
      rating: 4.3,
      reviews: 5670,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      amazonLink: "https://www.amazon.com.br/s?k=xiaomi+redmi+watch+5+active",
      badge: "Custo-Benefício",
      description: "Smartwatch acessível com ótimas funcionalidades básicas."
    }
  ]

  const compactProducts = [
    {
      title: "Garmin Forerunner 255",
      price: "R$ 2.199,00",
      rating: 4.7,
      reviews: 3420,
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=200&h=200&fit=crop",
      amazonLink: "https://www.amazon.com.br/s?k=garmin+forerunner+255"
    },
    {
      title: "Fitbit Versa 4",
      price: "R$ 1.599,00",
      rating: 4.4,
      reviews: 2890,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=200&h=200&fit=crop",
      amazonLink: "https://www.amazon.com.br/s?k=fitbit+versa+4"
    },
    {
      title: "Huawei Watch GT 4",
      price: "R$ 1.299,00",
      rating: 4.5,
      reviews: 4120,
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=200&h=200&fit=crop",
      amazonLink: "https://www.amazon.com.br/s?k=huawei+watch+gt+4"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <Watch className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">O Mundo dos Smartwatches</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            👉 Encontre o Smartwatch Ideal em Minutos
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed text-center">
            Comparativos claros, análises completas e as melhores ofertas em um só lugar. Decida com segurança e aproveite descontos exclusivos!
          </p>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AmazonBanner
          title="🔥 Ofertas Relâmpago de Smartwatches!"
          subtitle="Descontos de até 40% nos melhores modelos"
          countdown="23h 45min"
          discount="40% OFF"
          amazonLink="https://www.amazon.com.br/s?k=smartwatch"
          ctaText="Ver Todas as Ofertas"
        />
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-transparent border-0 h-auto p-0">
              <TabsTrigger 
                value="reviews" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white bg-gray-100 text-gray-700 border border-gray-300 rounded-none first:rounded-l-lg last:rounded-r-lg py-3 px-4 font-medium transition-all duration-200 hover:bg-gray-200 data-[state=active]:hover:bg-blue-700"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger 
                value="comparison"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white bg-gray-100 text-gray-700 border border-gray-300 rounded-none py-3 px-4 font-medium transition-all duration-200 hover:bg-gray-200 data-[state=active]:hover:bg-orange-700"
              >
                Comparações
              </TabsTrigger>
              <TabsTrigger 
                value="guides"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white bg-gray-100 text-gray-700 border border-gray-300 rounded-none py-3 px-4 font-medium transition-all duration-200 hover:bg-gray-200 data-[state=active]:hover:bg-purple-700"
              >
                Guias
              </TabsTrigger>
              <TabsTrigger 
                value="offers"
                className="data-[state=active]:bg-teal-600 data-[state=active]:text-white bg-gray-100 text-gray-700 border border-gray-300 rounded-none first:rounded-l-lg last:rounded-r-lg py-3 px-4 font-medium transition-all duration-200 hover:bg-gray-200 data-[state=active]:hover:bg-teal-700"
              >
                Ofertas
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="reviews" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Reviews Detalhados
              </h3>
              <p className="text-lg text-gray-600">
                Análises completas dos melhores smartwatches do mercado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <AmazonWidget key={index} {...product} />
              ))}
            </div>

            {/* Compact Products Section */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Outros Modelos Recomendados</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {compactProducts.map((product, index) => (
                  <AmazonWidget key={index} {...product} compact={true} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Comparações Detalhadas
              </h3>
              <p className="text-lg text-gray-600">
                Compare especificações e encontre o melhor smartwatch para você
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Apple Watch Series 9 vs Samsung Galaxy Watch 6</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">Apple Watch Series 9</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Battery className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Bateria: 18 horas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-red-600" />
                        <span className="text-sm">Monitoramento cardíaco avançado</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Wifi className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">GPS + Cellular</span>
                      </div>
                    </div>
                    <AmazonWidget
                      title="Apple Watch Series 9"
                      price="R$ 3.299,00"
                      originalPrice="R$ 3.999,00"
                      rating={4.8}
                      reviews={15420}
                      image="https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop"
                      amazonLink="https://www.amazon.com.br/s?k=apple+watch+series+9"
                      compact={true}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">Samsung Galaxy Watch 6</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Battery className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Bateria: 40 horas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-red-600" />
                        <span className="text-sm">Sensor BioActive</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Compatível com Android</span>
                      </div>
                    </div>
                    <AmazonWidget
                      title="Samsung Galaxy Watch 6"
                      price="R$ 1.899,00"
                      originalPrice="R$ 2.299,00"
                      rating={4.6}
                      reviews={8930}
                      image="https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=400&h=300&fit=crop"
                      amazonLink="https://www.amazon.com.br/s?k=samsung+galaxy+watch+6"
                      compact={true}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guides" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Guias de Compra
              </h3>
              <p className="text-lg text-gray-600">
                Tudo que você precisa saber antes de comprar seu smartwatch
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Como Escolher o Smartwatch Ideal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Descubra os principais fatores a considerar na hora de escolher seu smartwatch perfeito.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Compatibilidade com seu smartphone</li>
                    <li>• Autonomia da bateria</li>
                    <li>• Recursos de saúde e fitness</li>
                    <li>• Design e materiais</li>
                    <li>• Preço e custo-benefício</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Smartwatches para Esportes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Os melhores modelos para quem pratica atividades físicas regularmente.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• GPS preciso para corrida</li>
                    <li>• Resistência à água</li>
                    <li>• Monitoramento de múltiplos esportes</li>
                    <li>• Análise de recuperação</li>
                    <li>• Bateria de longa duração</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="offers" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Melhores Ofertas
              </h3>
              <p className="text-lg text-gray-600">
                Promoções e descontos imperdíveis em smartwatches
              </p>
            </div>

            <AmazonBanner
              type="product-showcase"
              title="Ofertas Especiais da Semana"
              subtitle="Descontos exclusivos nos melhores smartwatches"
              products={[
                {
                  name: "Apple Watch SE",
                  price: "R$ 2.299,00",
                  image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=200&h=200&fit=crop"
                },
                {
                  name: "Galaxy Watch 5",
                  price: "R$ 1.599,00",
                  image: "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=200&h=200&fit=crop"
                },
                {
                  name: "Amazfit GTR 4",
                  price: "R$ 899,00",
                  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop"
                }
              ]}
              amazonLink="https://www.amazon.com.br/s?k=smartwatch+oferta"
              ctaText="Ver Todas as Ofertas"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product, index) => (
                <AmazonWidget key={index} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Watch className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-bold">O Mundo dos Smartwatches</h3>
              </div>
              <p className="text-gray-400">
                Seu guia completo para o mundo dos smartwatches. Reviews, comparações e as melhores ofertas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Reviews de Smartwatches</li>
                <li>Comparações</li>
                <li>Guias de Compra</li>
                <li>Ofertas e Promoções</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Marcas Populares</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Apple Watch</li>
                <li>Samsung Galaxy Watch</li>
                <li>Garmin</li>
                <li>Fitbit</li>
                <li>Xiaomi</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 O Mundo dos Smartwatches. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">
              * Links de afiliado - Podemos receber uma comissão pelas compras realizadas através dos nossos links.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

