import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingBag, Star, Filter, Search, Grid, List, Zap, ArrowLeft } from "lucide-react";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Thunder Strike Hoodie",
      price: 89.99,
      originalPrice: 109.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 124,
      category: "hoodies",
      isNew: true,
      isOnSale: true,
      colors: ['black', 'white', 'gray'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: "Lightning Bolt Tee",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 89,
      category: "t-shirts",
      isNew: false,
      isOnSale: false,
      colors: ['black', 'white', 'navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      name: "Storm Rider Jacket",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 67,
      category: "jackets",
      isNew: true,
      isOnSale: false,
      colors: ['black', 'brown'],
      sizes: ['M', 'L', 'XL']
    },
    {
      id: 4,
      name: "Divine Essence Sweatshirt",
      price: 69.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f3a23?w=400&h=500&fit=crop",
      rating: 4.6,
      reviews: 156,
      category: "sweatshirts",
      isNew: false,
      isOnSale: true,
      colors: ['purple', 'pink', 'white'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 5,
      name: "Mystic Urban Jeans",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      rating: 4.5,
      reviews: 203,
      category: "jeans",
      isNew: false,
      isOnSale: false,
      colors: ['blue', 'black'],
      sizes: ['28', '30', '32', '34', '36']
    },
    {
      id: 6,
      name: "Phoenix Rise Tank",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop",
      rating: 4.4,
      reviews: 78,
      category: "tanks",
      isNew: true,
      isOnSale: false,
      colors: ['white', 'black', 'gray'],
      sizes: ['S', 'M', 'L', 'XL']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'hoodies', name: 'Hoodies' },
    { id: 't-shirts', name: 'T-Shirts' },
    { id: 'jackets', name: 'Jackets' },
    { id: 'sweatshirts', name: 'Sweatshirts' },
    { id: 'jeans', name: 'Jeans' },
    { id: 'tanks', name: 'Tank Tops' }
  ];

  const filteredProducts = products.filter(product => 
    filterCategory === 'all' || product.category === filterCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                  THE GODS
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => window.history.back()}
                variant="ghost"
                className="text-slate-600 hover:text-emerald-600"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Button
                variant="outline"
                className="border-emerald-300 text-emerald-600 hover:bg-emerald-50"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Divine Collection</h1>
          <p className="text-xl text-slate-600">Discover trendy, tagless clothing that defines your divine style</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 border-slate-300 focus:border-emerald-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Label className="text-slate-700 font-medium">Category:</Label>
              <select 
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <Label className="text-slate-700 font-medium">Sort by:</Label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === 'grid' ? 'h-80' : 'h-64'
                  }`}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  )}
                  {product.isOnSale && (
                    <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sale
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100">
                      Quick View
                    </Button>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-slate-600">{product.rating}</span>
                    <span className="ml-1 text-sm text-slate-500">({product.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-emerald-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

                {/* Color Options */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-slate-600">Colors:</span>
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full border-2 border-slate-300 ${
                          color === 'black' ? 'bg-black' :
                          color === 'white' ? 'bg-white' :
                          color === 'gray' ? 'bg-gray-400' :
                          color === 'navy' ? 'bg-blue-900' :
                          color === 'purple' ? 'bg-purple-500' :
                          color === 'pink' ? 'bg-pink-500' :
                          color === 'brown' ? 'bg-amber-700' :
                          color === 'blue' ? 'bg-blue-500' :
                          'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-emerald-300 text-emerald-600 hover:bg-emerald-50"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
