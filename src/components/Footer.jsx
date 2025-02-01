import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 sm:px-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col space-y-4">
          <img src={logo} alt="logo" className="w-[230px] h-auto object-fill" />
          <p className="text-gray-400 max-w-xs">
            A new way to make payments easy, reliable, and secure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="space-y-4">
              <h4 className="text-lg font-semibold">{footerLink.title}</h4>
              <ul className="space-y-2">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} ChagaPay. All Rights Reserved..
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
