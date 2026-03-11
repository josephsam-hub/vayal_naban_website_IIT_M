import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bot, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Vayal Agro
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/product', label: 'Product' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'text-primary-600 bg-primary-50 shadow-sm' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {[
              { path: '/', label: 'Home' },
              { path: '/product', label: 'Product' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar