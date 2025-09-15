import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, ShoppingCart, ExternalLink } from 'lucide-react'

const AmazonWidget = ({ 
  title, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  amazonLink, 
  badge,
  description,
  compact = false 
}) => {
  const handleAmazonClick = () => {
    // Adiciona parâmetros de tracking para afiliados
    const affiliateLink = `${amazonLink}?tag=chy1981-20&linkCode=as2&camp=1789&creative=9325`
    window.open(affiliateLink, '_blank')
  }

  if (compact) {
    return (
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <img 
              src={image} 
              alt={title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-sm mb-1">{title}</h4>
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-1 text-xs text-gray-600">
                  {rating} ({reviews.toLocaleString()})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-green-600">{price}</span>
                  {originalPrice && (
                    <span className="ml-1 text-xs text-gray-500 line-through">{originalPrice}</span>
                  )}
                </div>
                <Button 
                  size="sm" 
                  className="bg-orange-500 hover:bg-orange-600"
                  onClick={handleAmazonClick}
                >
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="relative mb-4">
          {badge && (
            <Badge className="absolute top-2 left-2 z-10" variant="default">
              {badge}
            </Badge>
          )}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        )}
        
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {rating} ({reviews.toLocaleString()} avaliações)
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-green-600">{price}</span>
            {originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">{originalPrice}</span>
            )}
          </div>
        </div>
        
        <Button
          className="w-full bg-orange-500 hover:bg-orange-600"
          onClick={handleAmazonClick}
        >
          Comprar Agora
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
        
        <p className="text-xs text-gray-500 mt-2 text-center">
          * Link de afiliado - Podemos receber uma comissão
        </p>
      </CardContent>
    </Card>
  )
}

export default AmazonWidget

