import { quotes } from "../assets";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="profile" className="relative py-12 sm:py-20 bg-white">
    <div className="absolute z-0 w-3/5 h-3/5 -right-1/2 rounded-full bg-gradient-to-r from-blue-200 to-blue-400" />
    
    <div className="flex flex-col md:flex-row items-center px-6 sm:px-12">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          What people are <br className="hidden sm:block" /> saying about us.
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 mt-5">
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex xl:justify-center justify-start gap-10 relative z-1 items-stretch flex-wrap px-6 sm:px-12 mt-10">
      {feedback.map((item, index) => (
        <FeedbackCard key={item.id} index={index} {...item} />
      ))}
    </div>
  </section>
);

export default Testimonials;
