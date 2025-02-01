import { Shield, Star, CreditCard, Send } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";

const features = [
  {
    id: "feature-1",
    icon: <Star size={28} className="text-yellow-400" />, 
    title: "Rewards",
    content:
      "Unlock exclusive rewards with every transaction, turning spending into savings effortlessly.",
  },
  {
    id: "feature-2",
    icon: <Shield size={28} className="text-green-500" />,
    title: "100% Secured",
    content:
      "Advanced encryption and real-time monitoring keep your financial data safe and secure.",
  },
  {
    id: "feature-3",
    icon: <Send size={28} className=" text-red-400" />,
    title: "Balance Transfer",
    content:
      "Simplify your finances with hassle-free balance transfers and lower interest rates.",
  },
  {
    id: "feature-4",
    icon: <CreditCard size={28} className=" text-blue-200" />,
    title: "Easy Transactions",
    content:
      "Experience seamless transactions with a tap, swipe, or click—anytime, anywhere.",
  },
];

const FeatureCard = ({ icon, title, content }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 180, damping: 12 }}
    className="p-6 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 relative "
  >
    {/* Floating Icon */}
    <div className="absolute -top-6 left-4 bg-indigo-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
      {icon}
    </div>

    {/* Content Section */}
    <div className="pt-8">
      <h4 className="text-xl font-semibold text-gray-900 mb-2 tracking-wide">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {content}
      </p>
    </div>

    {/* Subtle Gradient Glow */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-300/20 to-indigo-300/20 opacity-0 hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
  </motion.div>
);



const Business = () => (
  <section className="flex flex-col md:flex-row items-center md:items-start py-20 px-8 gap-12 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 rounded-3xl shadow-inner">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex-1 text-center md:text-left"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-800 leading-tight mb-4">
        You handle the business, <br className="hidden md:inline-block" /> we handle the money.
      </h2>
      <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0 mb-6">
        Empower your financial journey with features designed to maximize security, rewards, and ease.
      </p>
      <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">
        Get Started
      </Button>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-9"
    >
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </motion.div>
  </section>
);

export default Business;
