import { apple, bill, google } from "../assets";

const Billing = () => (
  <section className="flex flex-col-reverse md:flex-row items-center py-12 sm:py-20 bg-white" id="product">
    <div className="flex-1 flex justify-center md:justify-end relative gap-6 px-6 sm:px-12">
      <img src={bill.src} alt="billing" className="object-contain w-full max-w-md md:max-w-lg relative z-10" />
      <div className="absolute z-0 -left-1/2 top-0 w-1/2 h-1/2 rounded-full bg-gradient-to-r from-white to-gray-200" />
      <div className="absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full bg-gradient-to-r from-pink-200 to-pink-400" />
    </div>

    <div className="flex-1 text-center md:text-left px-6 sm:px-12">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        Easily control your <br className="hidden sm:block" /> billing & invoicing.
      </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 mt-5">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices amet odio aenean neque. Fusce ipsum orci rhoncus aliquet porttitor integer platea placerat.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-6 sm:mt-10">
        <img src={apple.src} alt="apple" className="cursor-pointer w-[128px] h-[42px]" />
        <img src={google.src} alt="google" className="cursor-pointer w-[128px] h-[42px]" />
      </div>
    </div>
  </section>
);

export default Billing;