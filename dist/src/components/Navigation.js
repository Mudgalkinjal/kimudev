import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaProjectDiagram, FaCode, FaEnvelope, } from 'react-icons/fa';
const Navigation = () => {
    return (_jsxs("nav", { className: "fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 p-3 rounded-full flex space-x-4 shadow-lg z-50", children: [_jsx(Link, { to: "introduction-section" // Updated to match section ID
                , smooth: true, duration: 500, className: "text-gray-400 hover:text-white transition-colors duration-300", activeClass: "text-white", spy: true, offset: -70, "aria-label": "Home", children: _jsx(FaHome, { size: 24 }) }), _jsxs(Link, { to: "expertise-section" // Updated to match section ID
                , smooth: true, duration: 500, className: "text-gray-400 hover:text-white transition-colors duration-300", activeClass: "text-white", spy: true, offset: -70, "aria-label": "Expertise", children: [_jsx(FaUser, { size: 24 }), " "] }), _jsx(Link, { to: "work-experience" // Updated to match section ID
                , smooth: true, duration: 500, className: "text-gray-400 hover:text-white transition-colors duration-300", activeClass: "text-white", spy: true, offset: -70, "aria-label": "Work Experience", children: _jsx(FaProjectDiagram, { size: 24 }) }), _jsx(Link, { to: "project-section" // Ensure your Projects section has this ID
                , smooth: true, duration: 500, className: "text-gray-400 hover:text-white transition-colors duration-300", activeClass: "text-white", spy: true, offset: -70, "aria-label": "Projects", children: _jsx(FaCode, { size: 24 }) }), _jsx(Link, { to: "contact-me", smooth: true, duration: 500, className: "text-gray-400 hover:text-white transition-colors duration-300", activeClass: "text-white", spy: true, offset: -70, "aria-label": "Contact", children: _jsx(FaEnvelope, { size: 24 }) })] }));
};
export default Navigation;
