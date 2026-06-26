import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Magnetic from '../animations/Magnetic';

export default function ContactView() {
  const [state, handleSubmit] = useForm('xkolrbna');
  const [focusedFields, setFocusedFields] = useState<{ [key: string]: boolean }>({});

  const handleFocus = (field: string) => {
    setFocusedFields(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFocusedFields(prev => ({ ...prev, [field]: false }));
  };

  return (
    <div className="w-full bg-bg-gallery min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <span className="text-accent text-xs uppercase tracking-[0.4em] font-medium block">
          Inquire Studio
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-primary max-w-3xl leading-tight">
          Let's Create Something <span className="italic font-normal text-accent font-serif">Beautiful</span>
        </h1>
        <p className="max-w-md text-text-gray font-light text-xs md:text-sm leading-relaxed pt-2">
          Contact the studio for private viewings, custom oil commissions, corporate installations, or media opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
        {/* Left Side: Premium Contact Form */}
        <div className="lg:col-span-7 bg-[#F7F5F2] border border-primary/5 p-8 md:p-12 rounded-sm shadow-sm relative">
          
          <AnimatePresence mode="wait">
            {!state.succeeded ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                className="space-y-8"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    className="peer w-full bg-transparent border-b border-primary/10 py-3 text-sm text-primary focus:outline-none focus:border-accent transition-colors font-sans"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 bottom-3 text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none text-primary/45 peer-focus:translate-y-[-24px] peer-focus:text-accent peer-focus:font-medium peer-not-placeholder-shown:translate-y-[-24px] peer-not-placeholder-shown:text-accent peer-not-placeholder-shown:font-medium"
                  >
                    Your Name *
                  </label>
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent origin-center"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedFields.name ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder=" "
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                    className="peer w-full bg-transparent border-b border-primary/10 py-3 text-sm text-primary focus:outline-none focus:border-accent transition-colors font-sans"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 bottom-3 text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none text-primary/45 peer-focus:translate-y-[-24px] peer-focus:text-accent peer-focus:font-medium peer-not-placeholder-shown:translate-y-[-24px] peer-not-placeholder-shown:text-accent peer-not-placeholder-shown:font-medium"
                  >
                    Phone Number *
                  </label>
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent origin-center"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedFields.phone ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Note Field (Optional) */}
                <div className="relative">
                  <textarea
                    id="note"
                    name="note"
                    rows={3}
                    placeholder=" "
                    onFocus={() => handleFocus('note')}
                    onBlur={() => handleBlur('note')}
                    className="peer w-full bg-transparent border-b border-primary/10 py-3 mt-4 text-sm text-primary focus:outline-none focus:border-accent transition-colors font-sans resize-none"
                  />
                  <label
                    htmlFor="note"
                    className="absolute left-0 top-1 text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none text-primary/45 peer-focus:translate-y-[-24px] peer-focus:text-accent peer-focus:font-medium peer-not-placeholder-shown:translate-y-[-24px] peer-not-placeholder-shown:text-accent peer-not-placeholder-shown:font-medium"
                  >
                    Note (optional)
                  </label>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent origin-center"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedFields.note ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <Magnetic range={40}>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="bg-primary hover:bg-accent text-bg-gallery text-xs uppercase tracking-[0.25em] px-10 py-5 rounded-sm flex items-center space-x-3 transition-colors duration-300 shadow-md font-sans font-medium cursor-pointer disabled:bg-primary/50 disabled:cursor-not-allowed group"
                    >
                      <span>{state.submitting ? 'Transmitting...' : 'Send Inquiry'}</span>
                      {!state.submitting && (
                        <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      )}
                    </button>
                  </Magnetic>
                </div>
              </motion.form>
            ) : (
              /* Success Animation Wrapper */
              <motion.div
                key="success-card"
                className="py-12 text-center space-y-6 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15, stiffness: 180, delay: 0.2 }}
                  className="text-accent"
                >
                  <CheckCircle size={64} strokeWidth={1.5} />
                </motion.div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-light text-primary">Inquiry Received</h3>
                  <p className="max-w-md mx-auto text-text-gray font-light text-sm leading-relaxed">
                    Thank you. Your message has been securely transmitted directly to Sai's studio desk. A representative will contact you via email shortly.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Right Side: Studio Contact Details & Channels */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Coordinates Block */}
          <div className="space-y-8 select-none">
            <h3 className="font-serif text-xl tracking-[0.1em] font-medium text-primary border-b border-primary/5 pb-4">
              Studio Coordinates
            </h3>

            {/* Email Location Phone List */}
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-2 border border-primary/10 rounded-full text-accent mt-0.5">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-primary/45 uppercase">Electronic Mail</p>
                  <a
                    href="mailto:saranvaradharajan29@gmail.com"
                    className="text-sm font-light text-primary hover:text-accent transition-colors block mt-1"
                  >
                    saranvaradharajan29@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 border border-primary/10 rounded-full text-accent mt-0.5">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-primary/45 uppercase">Studio Hotlines</p>
                  <p className="text-sm font-light text-primary mt-1">+91 93610 12902</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 border border-primary/10 rounded-full text-accent mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-primary/45 uppercase">Physical Sanctuary</p>
                  <p className="text-sm font-light text-primary mt-1 leading-relaxed">
                    Tamilnadu, India<br />
                    Delivery available all over India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Social Channels Block */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl tracking-[0.1em] font-medium text-primary border-b border-primary/5 pb-4">
              Digital Channels
            </h3>

            <div className="flex gap-4">
              <Magnetic range={40}>
                <a
                  href="https://www.instagram.com/sai_arts_29?igsh=NW1oOGhoa3ZhaW0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-4 border border-primary/10 rounded-sm hover:border-accent hover:text-accent text-primary/80 text-xs uppercase tracking-widest transition-all duration-300 bg-transparent"
                >
                  <Instagram size={14} />
                  <span>Instagram</span>
                </a>
              </Magnetic>

              <Magnetic range={40}>
                <a
                  href="https://www.facebook.com/share/1UhKjhG8o6/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-4 border border-primary/10 rounded-sm hover:border-accent hover:text-accent text-primary/80 text-xs uppercase tracking-widest transition-all duration-300 bg-transparent"
                >
                  <Facebook size={14} />
                  <span>Facebook</span>
                </a>
              </Magnetic>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
