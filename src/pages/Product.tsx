
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { ShoppingBag, Star, Heart, Share2, Truck, Shield, ArrowLeft, Plus, Minus, Zap, RotateCcw } from "lucide-react";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Thunder Strike Hoodie",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isOnSale: true,
    description: "Unleash your divine style with our Thunder Strike Hoodie. Crafted with premium materials and featuring our signature tagless design for ultimate comfort. This hoodie combines street-ready aesthetics with divine comfort.",
    features: [
      "100% Premium Cotton Blend",
      "Tagless Design for Ultimate Comfort",
      "Reinforced Stitching",
      "Machine Washable",
      "Unisex Fit",
      "Limited Edition Design"
    ],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=700&fit=crop"
    ],
    colors: [
      { name: 'black', label: 'Midnight Black', hex: '#000000' },
      { name: 'white', label: 'Divine White', hex: '#FFFFFF' },
      { name: 'gray', label: 'Thunder Gray', hex: '#6B7280' },
      { name: 'gold', label: 'Royal Gold', hex: '#FFD700' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Lightning Bolt Tee",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      rating: 4.9
    },
    {
      id: 3,
      name: "Storm Rider Jacket",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop",
      rating: 4.7
    },
    {
      id: 4,
      name: "Divine Essence Sweatshirt",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f3a23?w=300&h=400&fit=crop",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="h-6 w-6 text-black" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  THE GODS
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => window.history.back()}
                variant="ghost"
                className="text-white hover:text-yellow-400"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
          <Link to="/" className="hover:text-yellow-600">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-yellow-600">Shop</Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black">
                  New
                </Badge>
              )}
              {product.isOnSale && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                  Sale
                </Badge>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg ${
                    selectedImage === index ? 'ring-2 ring-yellow-500' : ''
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium">{product.rating}</span>
                  <span className="ml-2 text-slate-600">({product.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-yellow-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-slate-500 line-through">${product.originalPrice}</span>
                )}
                {product.isOnSale && (
                  <Badge className="bg-red-100 text-red-800">
                    Save ${(product.originalPrice! - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div>
              <Label className="text-base font-medium text-slate-900 mb-3 block">
                Color: {product.colors.find(c => c.name === selectedColor)?.label}
              </Label>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color.name 
                        ? 'border-yellow-600 ring-2 ring-yellow-200' 
                        : 'border-slate-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.label}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <Label className="text-base font-medium text-slate-900 mb-3 block">
                Size: {selectedSize}
              </Label>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 border rounded-md text-center font-medium ${
                      selectedSize === size
                        ? 'border-yellow-600 bg-yellow-50 text-yellow-600'
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <Label className="text-base font-medium text-slate-900 mb-3 block">Quantity</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-slate-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-slate-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-slate-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black text-lg py-3 font-semibold"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              
              <div className="flex space-x-4">
                <Button variant="outline" className="flex-1 border-slate-300 hover:bg-slate-50">
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" className="flex-1 border-slate-300 hover:bg-slate-50">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Features */}
            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200">
              <h3 className="font-bold text-slate-900 mb-4">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Zap className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Shipping & Returns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-yellow-200">
                <Truck className="h-6 w-6 text-yellow-600" />
                <div>
                  <p className="font-medium text-slate-900">Free Shipping</p>
                  <p className="text-sm text-slate-600">Orders over $75</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-yellow-200">
                <RotateCcw className="h-6 w-6 text-yellow-600" />
                <div>
                  <p className="font-medium text-slate-900">Easy Returns</p>
                  <p className="text-sm text-slate-600">30-day policy</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-yellow-200">
                <Shield className="h-6 w-6 text-yellow-600" />
                <div>
                  <p className="font-medium text-slate-900">Secure Payment</p>
                  <p className="text-sm text-slate-600">SSL protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button className="bg-white text-slate-900 hover:bg-slate-100">
                      Quick View
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-yellow-600">${relatedProduct.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm text-slate-600">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
