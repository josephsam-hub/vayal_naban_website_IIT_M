import { motion } from 'framer-motion'
import { Cpu, Zap, Eye, Cog, Package, Battery, Wrench, AlertTriangle } from 'lucide-react'

const Product = () => {
  const hardwareComponents = [
    {
      name: "STM32 Nucleo F103RB",
      description: "High-performance ARM Cortex-M3 microcontroller board providing the central processing power for autonomous operations.",
      role: "Main controller for sensor integration, decision-making algorithms, and motor coordination in real-time operations.",
      icon: <Cpu className="w-6 h-6" />,
      category: "Control"
    },
    {
      name: "Motor Driver L298N",
      description: "Dual H-bridge motor driver enabling bidirectional control of DC motors with PWM speed regulation.",
      role: "Controls motor speed and direction for smooth navigation and precise placement operations.",
      icon: <Zap className="w-6 h-6" />,
      category: "Control"
    },
    {
      name: "Line Following Sensor",
      description: "Multi-array infrared sensor system for detecting and following predefined path markers.",
      role: "Provides real-time path detection data for autonomous navigation within warehouse environments.",
      icon: <Eye className="w-6 h-6" />,
      category: "Sensing"
    },
    {
      name: "IR Sensor Module",
      description: "Infrared proximity sensor for obstacle detection and distance measurement capabilities.",
      role: "Provides collision avoidance and precise distance control for safe handling operations.",
      icon: <Eye className="w-6 h-6" />,
      category: "Sensing"
    },
    {
      name: "MOSFET Driver",
      description: "Power switching module for controlling high-current electromagnet operations efficiently.",
      role: "Manages electromagnet power consumption and provides precise timing control for operations.",
      icon: <Zap className="w-6 h-6" />,
      category: "Control"
    },
    {
      name: "LiPo 3-Cell 12V Battery",
      description: "High-capacity lithium polymer battery providing reliable power for extended autonomous operation.",
      role: "Primary power source ensuring continuous operation throughout warehouse cycles.",
      icon: <Battery className="w-6 h-6" />,
      category: "Power"
    },
    {
      name: "RGB LED Indicators",
      description: "Multi-color LED array for system status indication and operational feedback display.",
      role: "Provides visual feedback for system status, operational modes, and error condition alerts.",
      icon: <Zap className="w-6 h-6" />,
      category: "Interface"
    },
    {
      name: "Battery Balance Charger",
      description: "Intelligent charging system ensuring optimal battery health and performance maintenance.",
      role: "Maintains battery longevity and ensures consistent power delivery for reliable operations.",
      icon: <Battery className="w-6 h-6" />,
      category: "Power"
    },
    {
      name: "Vayal Agro PCB",
      description: "Custom-designed printed circuit board integrating all electronic components and connections.",
      role: "Central hub for all electrical connections, ensuring reliable communication between components.",
      icon: <Cpu className="w-6 h-6" />,
      category: "Control"
    },
    {
      name: "Buck Module (Soldered on PCB)",
      description: "Voltage regulation module providing stable power supply to sensitive electronic components.",
      role: "Ensures consistent voltage levels for optimal sensor performance and system reliability.",
      icon: <Zap className="w-6 h-6" />,
      category: "Power"
    },
    {
      name: "Toggle Switch (Soldered on PCB)",
      description: "Main power switch integrated into the PCB for system power control.",
      role: "Provides manual control over system power state and emergency shutdown capability.",
      icon: <Zap className="w-6 h-6" />,
      category: "Control"
    },
    {
      name: "Resistor 3000Ω (Soldered on PCB)",
      description: "Current limiting resistor for LED circuits and sensor protection.",
      role: "Protects sensitive components from overcurrent and ensures proper LED brightness levels.",
      icon: <Zap className="w-6 h-6" />,
      category: "Control"
    }
  ]

  const categories = {
    "Control": "from-blue-500 to-blue-600",
    "Sensing": "from-green-500 to-green-600", 
    "Actuation": "from-purple-500 to-purple-600",
    "Power": "from-yellow-500 to-yellow-600",
    "Mechanical": "from-gray-500 to-gray-600",
    "Interface": "from-pink-500 to-pink-600",
    "Storage": "from-orange-500 to-orange-600",
    "Navigation": "from-teal-500 to-teal-600"
  }

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Hardware & System Components
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive overview of the Vayal Agro's advanced hardware components and their operational roles
          </p>
          
          {/* Robot Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative bg-gradient-to-br from-gray-100 to-primary-50 rounded-3xl p-6 shadow-xl">
              <img 
                src="/images/jarvis-robot.jpeg" 
                alt="Vayal Agro Hardware Implementation" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-semibold text-gray-700">Actual Implementation</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hardware Components */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareComponents.map((component, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-primary-200 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${categories[component.category]} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {component.icon}
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${categories[component.category]} text-white`}>
                    {component.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {component.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{component.description}</p>
                <div className="bg-gradient-to-r from-gray-50 to-primary-50 p-4 rounded-xl border-l-4 border-primary-400">
                  <p className="text-sm text-gray-700"><strong className="text-primary-700">Role:</strong> {component.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Operational Logic */}
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
            Operational Logic
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-white/80 to-primary-50/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Path Following",
                  description: "Line sensor data is continuously processed to maintain accurate path tracking. The system uses real-time feedback to adjust motor speeds and direction, ensuring precise navigation along predefined warehouse routes.",
                  icon: <Eye className="w-8 h-8" />
                },
                {
                  title: "Decision Making",
                  description: "Advanced sensor integration processes navigation data to make intelligent decisions about optimal routes and placement locations, maximizing warehouse efficiency.",
                  icon: <Cpu className="w-8 h-8" />
                },
                {
                  title: "Location Identification",
                  description: "Advanced navigation algorithms determine specific warehouse zones based on sensor data, enabling systematic organization and efficient item retrieval.",
                  icon: <Package className="w-8 h-8" />
                },
                {
                  title: "Item Placement",
                  description: "Precise motor control and sensor feedback ensure accurate item placement at designated locations, maintaining warehouse organization and maximizing storage efficiency.",
                  icon: <Cog className="w-8 h-8" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-6 bg-white/60 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Common Problems and Fixes */}
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
            Common Problems & Solutions
          </motion.h2>
          <div className="space-y-10">
            {/* Problem 1 */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-red-100"
            >
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-red-600">Problem 1: Line Sensor Calibration Issues</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-400">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Issue Description</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Robot deviates from designated paths due to inconsistent line detection, causing navigation errors 
                    and potential collisions with warehouse infrastructure.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-400">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Root Cause</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Ambient lighting variations and sensor drift over time affect the threshold values for line detection, 
                    leading to false readings and path deviation.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-400">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Practical Fix</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Implemented adaptive calibration algorithm that automatically adjusts sensor thresholds based on 
                    environmental conditions and includes manual recalibration procedure for optimal performance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Problem 2 */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-red-100"
            >
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-red-600">Problem 2: IR Sensor Interference Issues</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-400">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Issue Description</h4>
                  <p className="text-gray-700 leading-relaxed">
                    IR sensors experience interference from ambient infrared sources, leading to false obstacle detection 
                    and navigation interruptions.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-400">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Root Cause</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Sunlight, fluorescent lighting, and other IR sources interfere with sensor readings, 
                    causing inconsistent distance measurements and false positive detections.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-400">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Practical Fix</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Implemented sensor shielding and filtering algorithms that distinguish between actual obstacles 
                    and ambient IR interference, improving detection reliability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Product