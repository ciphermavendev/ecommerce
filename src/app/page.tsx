"use client"

import Image from "next/image";
import { useState } from "react";
import { ShoppingCart, Heart, Search, Menu, X, Star, ChevronDown } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                StyleMart
              </h1>
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-rose-600"
                  onClick={() => setSelectedCategory(prev => prev === "All" ? "Categories" : "All")}
                >
                  <span>Categories</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <a href="#new-arrivals" className="text-gray-700 hover:text-rose-600">New Arrivals</a>
              <a href="#deals" className="text-gray-700 hover:text-rose-600">Deals</a>
              <button className="text-gray-700 hover:text-rose-600">
                <Heart className="h-6 w-6" />
              </button>
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-rose-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <a href="#categories" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Categories</a>
              <a href="#new-arrivals" className="block px-3 py-2 text-gray-700 hover:text-rose-600">New Arrivals</a>
              <a href="#deals" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Deals</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-600 via-pink-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Summer Sale Is Live
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90">
              Up to 70% off on selected items
            </p>
            <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={`/api/placeholder/400/400`}
                  alt={category.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.itemCount} items</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={`/api/placeholder/400/400`}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <button 
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:text-rose-600 transition-colors"
                    onClick={() => console.log('Added to wishlist')}
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(120)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe & Get 10% Off</h2>
          <p className="text-lg mb-8 opacity-90">
            Join our newsletter and get exclusive access to special offers and new arrivals.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-gray-900 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-rose-300"
              required
            />
            <button
              type="submit"
              className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">StyleMart</h3>
              <p className="text-gray-400">
                Your one-stop destination for trendy fashion and accessories.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#new-arrivals" className="text-gray-400 hover:text-white">New Arrivals</a></li>
                <li><a href="#bestsellers" className="text-gray-400 hover:text-white">Bestsellers</a></li>
                <li><a href="#deals" className="text-gray-400 hover:text-white">Deals</a></li>
                <li><a href="#categories" className="text-gray-400 hover:text-white">Categories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">support@stylemart.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
                <li className="text-gray-400">Mon-Fri: 9AM - 6PM EST</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 StyleMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Data
const categories = [
  { name: "Women's Fashion", itemCount: "1.2k+" },
  { name: "Men's Fashion", itemCount: "850+" },
  { name: "Accessories", itemCount: "650+" },
  { name: "Footwear", itemCount: "450+" }
];

const products = [
  {
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviews: 120
  },
  {
    name: "Slim Fit Jeans",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 95
  },
  {
    name: "Classic Leather Watch",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 78
  },
  {
    name: "Designer Sunglasses",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviews: 45
  }
];

// Additional Features Component
function Features() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 bg-rose-100 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>,
    title: "Free Shipping",
    description: "On orders over $50"
  },
  {
    icon: <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>,
    title: "Easy Returns",
    description: "30-day return policy"
  },
  {
    icon: <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>,
    title: "Secure Payment",
    description: "100% secure checkout"
  },
  {
    icon: <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    title: "24/7 Support",
    description: "Always here to help"
  }
];

// Deal of the Day Component
function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square">
            <img
              src="/api/placeholder/600/600"
              alt="Deal of the Day"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute top-4 left-4 bg-rose-600 text-white px-4 py-2 rounded-full">
              -40% OFF
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Deal of the Day</h2>
            <h3 className="text-2xl font-semibold text-gray-900">Premium Leather Handbag</h3>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-rose-600">$199.99</span>
              <span className="text-xl text-gray-500 line-through">$329.99</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-gray-900">{timeLeft.hours}</span>
                <span className="text-gray-600"> hrs</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-gray-900">{timeLeft.minutes}</span>
                <span className="text-gray-600"> min</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-gray-900">{timeLeft.seconds}</span>
                <span className="text-gray-600"> sec</span>
              </div>
            </div>
            <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}