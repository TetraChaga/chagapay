import { quotes } from "../assets";

const FeedbackCard = ({ id, name, content, title, img, index }) => (
  <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6 max-w-sm">
    <img src={quotes} alt="quotes" className="w-10 h-6" />
    <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
    <div className="flex items-center gap-4">
      <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
