import { ShieldCheck, Lock, KeyRound } from "lucide-react";
import { motion } from "framer-motion";

// styles/globalStyles.js
export const styles = {
  container: "max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-12",
  heading: "font-poppins font-extrabold text-4xl sm:text-5xl text-indigo-700 leading-tight sm:leading-snug w-full",
  paragraph: "font-poppins text-base sm:text-lg text-gray-600 leading-relaxed",
  flexCenter: "flex justify-center items-center",
  flexBetween: "flex justify-between items-center",
  gradientText: "bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent",
  paddingY: "py-6 sm:py-10 lg:py-12",
};

// data/statsData.js
export const statsData = [
  { id: "stats-1", title: "Active Users", value: "3,800+", icon: ShieldCheck },
  { id: "stats-2", title: "Trusted by Companies", value: "230+", icon: Lock },
  { id: "stats-3", title: "Transactions", value: "$230M+", icon: KeyRound },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
    whileTap={{ scale: 0.95 }}
    className="bg-white/30 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-300 transition-transform flex flex-col items-center text-center hover:border-indigo-400"
  >
    <div className="relative p-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md mb-4">
      <Icon className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
      <div className="absolute inset-0 rounded-full bg-indigo-500 blur-xl opacity-50 animate-pulse -z-10"></div>
    </div>
    <h4 className="text-2xl font-semibold text-gray-800 mb-2 tracking-wide hover:text-indigo-600 transition-colors duration-300">
      {title}
    </h4>
    <p className="text-4xl font-extrabold text-indigo-700 gradient-text bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
      {description}
    </p>
  </motion.div>
);

const Stats = ({ stats = statsData }) => (
  <section className={`${styles.container} ${styles.paddingY}`} id="stats" aria-label="Key statistics">
    <div className="text-center mb-12">
      <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
        Trusted by the best.
      </h2>
      <p className="mt-4 text-lg text-gray-600">Tracking performance metrics that matter most.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {stats.map(({ id, value, title, icon }) => (
        <FeatureCard key={id} icon={icon} title={title} description={value} />
      ))}
    </div>
  </section>
);

export default Stats;