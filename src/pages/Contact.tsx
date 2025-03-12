
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowLeft, Send, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import Button from '@/components/Button';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

// Initialize EmailJS
emailjs.init("dBcCnD64kbsHx0wPC"); // This should be your EmailJS public key

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "cybersmithstudios@gmail.com",
      };

      // Send email using emailjs sendForm
      const response = await emailjs.send(
        "service_1r5zejo", // Replace with your actual Service ID
        "template_5g8wz1b", // Replace with your actual Template ID
        templateParams,
        "dBcCnD64kbsHx0wPC" // Replace with your actual User ID (public key)
      );

      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-housify-blue to-[#001830] text-white">
      {/* Header with Back Button */}
      <div className="container-width py-6 px-6 md:px-12">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-housify-orange transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Contact Content */}
      <div className="container-width section-padding pb-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have questions or feedback about Housify? We'd love to hear from you! 
            Use any of the methods below to reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-housify-orange/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-housify-orange" />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-medium mb-1">Email</h3>
                    <a 
                      href="mailto:abiodunoluwamurewa@gmail.com" 
                      className="text-white hover:text-housify-orange transition-colors break-words"
                    >
                      abiodunoluwamurewa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-housify-orange/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-housify-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-white/70">+234 800 HOUSIFY</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-housify-orange/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-housify-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-white/70">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-housify-orange/20 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-housify-orange/20 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-housify-orange/20 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-housify-orange/20 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-housify-orange/50" 
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-housify-orange/50" 
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-housify-orange/50" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    variant="primary" 
                    className="w-full"
                    type="submit"
                    withIcon
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={16} className="ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-width border-t border-white/10 py-8 px-6 md:px-12 text-center text-white/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Housify. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
