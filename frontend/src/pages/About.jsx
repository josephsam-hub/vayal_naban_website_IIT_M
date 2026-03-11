import { motion } from 'framer-motion'
import { Users, Mail, Phone, Heart, Target, Lightbulb } from 'lucide-react'

const About = () => {
  const teamMembers = [
    { name: "Joseph Sam", role: "Lead Developer" },
    { name: "Madhan", role: "Hardware Engineer" },
    { name: "Mahaa Shri", role: "Systems Architect" },
    { name: "Karthika", role: "Software Engineer" },
  ]

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
            className="text-5xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            About Vayal Agro
          </motion.h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the innovative team behind the autonomous agriculture and warehouse robot system
          </p>
        </motion.div>

        {/* Demo Video */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-gray-100">

            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
             Team Intro
            </h2>

            <div className="w-full aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1d9VBgwLPWx-QKFUG4ZftV3QAMu6egT71/preview"
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
                loading="lazy"
                title="Vayal Agro Robot Demo"
              />
            </div>

          </div>
        </motion.section>

        {/* Our Vision */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-white/80 to-primary-50/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="text-center mb-8">
              <Target className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              At Vayal Agro, we envision a future where autonomous robotics revolutionizes agriculture and warehouse management. 
              Our cutting-edge system combines precision engineering with intelligent automation to create sustainable, 
              efficient solutions that reduce manual labor while maximizing productivity. We're committed to developing 
              technology that not only advances industrial capabilities but also contributes to a more sustainable and 
              automated future for agriculture and logistics.
            </p>
          </motion.div>
        </motion.section>

        {/* Team Section */}
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
            Our Team
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary-200 transition-all duration-300 group text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {member.name}
                </h3>

                <p className="text-primary-600 font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
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
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">

            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 text-primary-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Contact Number</h3>
              </div>

              <p className="text-lg text-gray-700 mb-4">
                Ready to discuss your automation needs?
              </p>

              <a 
                href="tel:9876543210"
                className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
              >
                9876543210
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-primary-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Email Address</h3>
              </div>

              <p className="text-lg text-gray-700 mb-4">
                Send us your inquiries and feedback
              </p>

              <a 
                href="mailto:jarvisbot2026@gmail.com"
                className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors break-all"
              >
                jarvisbot2026@gmail.com
              </a>
            </motion.div>

          </div>
        </motion.section>

        {/* Mission */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-white/80 to-accent-50/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-accent-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="text-center">
                <Lightbulb className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  Continuously pushing the boundaries of autonomous robotics to create smarter, more efficient systems.
                </p>
              </div>

              <div className="text-center">
                <Target className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Precision</h3>
                <p className="text-gray-700">
                  Delivering highly accurate and reliable automation solutions for critical agricultural and warehouse operations.
                </p>
              </div>

              <div className="text-center">
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  Creating environmentally conscious solutions that promote sustainable practices in agriculture and logistics.
                </p>
              </div>

            </div>
          </motion.div>
        </motion.section>

      </div>
    </div>
  )
}

export default About
