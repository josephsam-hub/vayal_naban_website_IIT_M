import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Send, CheckCircle, AlertCircle, User, Phone, Mail, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await axios.post('http://localhost:5000/api/contact', formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        reason: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Contact Our Team
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Get in touch with our team for technical support, demonstrations, or inquiries about the Vayal Agro system.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-3">
                  Reason for Contact *
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                >
                  <option value="">Select a reason</option>
                  <option value="Technical support">Technical Support</option>
                  <option value="Hardware inquiry">Hardware Inquiry</option>
                  <option value="Demonstration request">Demonstration Request</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-gray-400 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Please provide details about your inquiry or request"
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </motion.div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-700 leading-relaxed">
                        Thank you for your inquiry about the Vayal Agro system. Our team will review your message and respond within 24-48 hours. 
                        For urgent technical support, please include your contact information and system details.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">
                        Error Sending Message
                      </h3>
                      <p className="text-red-700 leading-relaxed">
                        There was an error sending your message. Please check your internet connection and try again. 
                        If the problem persists, please contact us directly through alternative means.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact