import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Navigation, Palette, Zap, Target, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: 'linear-gradient(45deg, #0369a1, #059669, #7c3aed, #0369a1)',
                  backgroundSize: '300% 300%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Vayal Agro System
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              >
                An autonomous system for vegetable cultivation, smart transportation, and intelligent warehouse placement.
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start"
              >
                <Link to="/product">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
                  >
                    View Components
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Robot Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 shadow-2xl"
              >
                <img 
                  src="/images/jarvis-robot.jpeg" 
                  alt="Vayal Agro - Autonomous Agriculture Robot" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-20"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30"
                />
              </motion.div>
              
              {/* Robot Features Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200"
              >
                <p className="text-sm font-semibold text-gray-700">🤖 Autonomous • 🌱 Agriculture • 📦 Warehouse</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* System Workflow */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            System Workflow
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Autonomous Cultivation",
                description: "Robot autonomously cultivates vegetables using precision agriculture techniques and environmental monitoring.",
                icon: <Cpu className="w-8 h-8" />,
                color: "from-primary-500 to-primary-600"
              },
              {
                step: "02", 
                title: "Crop Transportation",
                description: "Harvested crops are transferred using specialized crates designed for optimal storage and transport.",
                icon: <Navigation className="w-8 h-8" />,
                color: "from-accent-500 to-accent-600"
              },
              {
                step: "03",
                title: "Warehouse Navigation", 
                description: "Robot navigates to warehouse environment using GPS and environmental mapping systems.",
                icon: <Target className="w-8 h-8" />,
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "04",
                title: "Line Sensor Navigation",
                description: "Precise navigation inside warehouse using line sensor technology for accurate path following.",
                icon: <Zap className="w-8 h-8" />,
                color: "from-orange-500 to-orange-600"
              },
              {
                step: "05",
                title: "Intelligent Placement",
                description: "Items are placed at predefined warehouse locations based on system logic and navigation data.",
                icon: <CheckCircle className="w-8 h-8" />,
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary-200 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.step}
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Applications & Use Cases */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Applications & Use Cases
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automated Agriculture Systems",
                description: "Reduces manual labor in farming operations while increasing precision and efficiency in crop management."
              },
              {
                title: "Smart Warehouses",
                description: "Enables intelligent inventory management with automated sorting and placement based on product characteristics."
              },
              {
                title: "Labor Reduction",
                description: "Significantly reduces dependency on manual labor for repetitive tasks in agriculture and warehouse operations."
              },
              {
                title: "Accurate Item Placement",
                description: "Ensures proper placement of items at designated locations using advanced navigation technology."
              },
              {
                title: "Controlled Farming Environments",
                description: "Provides scalable solutions for greenhouse and indoor farming operations with consistent quality control."
              },
              {
                title: "Supply Chain Optimization",
                description: "Streamlines the entire process from cultivation to warehouse storage, improving overall supply chain efficiency."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* System Highlights */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            System Highlights
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-white/80 to-primary-50/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Fully Autonomous Operation",
                  description: "Complete automation from cultivation to warehouse placement without human intervention."
                },
                {
                  title: "Sensor-Based Decision Making",
                  description: "Advanced sensor integration for intelligent navigation and placement decisions."
                },
                {
                  title: "Precise Navigation & Placement",
                  description: "High-accuracy positioning system ensures optimal placement and minimal errors."
                },
                {
                  title: "Modular & Extensible Design",
                  description: "Scalable architecture allows for easy expansion and customization for different environments."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="text-center group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  >
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

export default Home