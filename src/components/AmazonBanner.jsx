import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ShoppingCart, Clock, Zap } from 'lucide-react'

const AmazonBanner = ({ 
  type = 'promotion', 
  title, 
  subtitle, 
  ctaText = 'Ver Ofertas',
  amazonLink,
  discount,
  timeLimit,
  products = []
}) => {
  const handleClick = () => {
    const affiliateLink = `${amazonLink}?tag=chy1981-20&linkCode=as2&camp=1789&creative=9325`
    window.open(affiliateLink, '_blank')
  }

  if (type === 'flash-sale') {
    return (
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-lg shadow-lg mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-red-100">{subtitle}</p>
              {timeLimit && (
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">Termina em: {timeLimit}</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-right">
            {discount && (
              <Badge className="bg-yellow-400 text-black text-lg px-3 py-1 mb-2">
                {discount}% OFF
              </Badge>
            )}
            <Button 
              className="bg-white text-red-500 hover:bg-gray-100 font-bold"
              onClick={handleClick}
            >
              {ctaText}
              <ShoppingCart className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'product-showcase') {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-blue-100">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {products.slice(0, 3).map((product, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-sm mb-1">{product.name}</h4>
              <p className="text-lg font-bold text-yellow-300">{product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 font-bold"
            onClick={handleClick}
          >
            {ctaText}
            <ShoppingCart className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    )
  }

  // Default promotion banner
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg shadow-lg mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-green-100">{subtitle}</p>
        </div>
        <Button 
          size="lg"
          className="bg-white text-green-600 hover:bg-gray-100 font-bold"
          onClick={handleClick}
        >
          {ctaText}
          <ShoppingCart className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default AmazonBanner

