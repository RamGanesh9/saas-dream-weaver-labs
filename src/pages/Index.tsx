
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Star, Truck, Shield, Zap, Menu, X } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Thunder Strike Hoodie",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: "Lightning Bolt Tee",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      rating: 4.9,
      isNew: false
    },
    {
      id: 3,
      name: "Storm Rider Jacket",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      rating: 4.7,
      isNew: true
    },
    {
      id: 4,
      name: "Divine Essence Sweatshirt",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f3a23?w=400&h=500&fit=crop",
      rating: 4.6,
      isNew: false
    }
  ];

  const collections = [
    {
      name: "Street Legends",
      description: "Urban streetwear for the modern rebel",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      color: "from-yellow-400 to-amber-500"
    },
    {
      name: "Divine Casual",
      description: "Comfortable everyday wear with divine style",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
      color: "from-amber-500 to-yellow-600"
    },
    {
      name: "Thunder Collection",
      description: "Bold designs that make a statement",
      image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&h=400&fit=crop",
      color: "from-yellow-600 to-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                THE GODS
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/shop" className="text-white hover:text-yellow-400 font-medium transition-colors">
                Shop
              </Link>
              <Link to="/collections" className="text-white hover:text-yellow-400 font-medium transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-white hover:text-yellow-400 font-medium transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-yellow-400 font-medium transition-colors">
                Contact
              </Link>
              <Button
                onClick={() => navigate('/cart')}
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-yellow-400">
              <div className="flex flex-col space-y-4">
                <Link to="/shop" className="text-white hover:text-yellow-400 font-medium">
                  Shop
                </Link>
                <Link to="/collections" className="text-white hover:text-yellow-400 font-medium">
                  Collections
                </Link>
                <Link to="/about" className="text-white hover:text-yellow-400 font-medium">
                  About
                </Link>
                <Link to="/contact" className="text-white hover:text-yellow-400 font-medium">
                  Contact
                </Link>
                <Button
                  onClick={() => navigate('/cart')}
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black w-fit"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div 
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="text-center text-white z-10 px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              THE GODS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
              Unleash Your Divine Style - Cool & Trendy Designs, No Tags, Pure Freedom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black shadow-xl font-semibold"
                onClick={() => navigate('/shop')}
              >
                Shop Collection
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-slate-900"
                onClick={() => navigate('/about')}
              >
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">No Tags Policy</h3>
                <p className="text-slate-600">Pure comfort without annoying tags. Feel the freedom of tagless clothing.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-xl bg-gradient-to-br from-amber-50 to-yellow-50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Trendy Designs</h3>
                <p className="text-slate-600">Cool and contemporary styles that keep you ahead of fashion trends.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Premium Quality</h3>
                <p className="text-slate-600">High-quality materials and craftsmanship for divine comfort and durability.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Collection</h2>
            <p className="text-xl text-slate-600">Discover our most divine pieces</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button className="bg-white text-slate-900 hover:bg-slate-100">
                      Quick View
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-600">${product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm text-slate-600">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold"
              onClick={() => navigate('/shop')}
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Divine Collections</h2>
            <p className="text-xl text-slate-600">Explore our curated collections for every style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                      <p className="text-lg opacity-90">{collection.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl font-bold mb-4">Join the Divine Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive access to new collections, special offers, and divine style tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button className="bg-black text-yellow-400 hover:bg-slate-800 px-8 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-black" />
                </div>
                <span className="text-xl font-bold">THE GODS</span>
              </div>
              <p className="text-slate-400">
                Unleashing divine style with trendy, tagless clothing for the modern generation.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/shop" className="hover:text-yellow-400 transition-colors">All Products</Link></li>
                <li><Link to="/collections" className="hover:text-yellow-400 transition-colors">Collections</Link></li>
                <li><Link to="/new" className="hover:text-yellow-400 transition-colors">New Arrivals</Link></li>
                <li><Link to="/sale" className="hover:text-yellow-400 transition-colors">Sale</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/shipping" className="hover:text-yellow-400 transition-colors">Shipping Info</Link></li>
                <li><Link to="/returns" className="hover:text-yellow-400 transition-colors">Returns</Link></li>
                <li><Link to="/size-guide" className="hover:text-yellow-400 transition-colors">Size Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center">
                  <Truck className="h-4 w-4 mr-2" />
                  Free Shipping
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Secure Payment
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  No Tags Policy
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 THE GODS. All rights reserved. Unleash your divine style.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
