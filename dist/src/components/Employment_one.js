import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const Employment_one = () => {
    return (_jsxs("section", { id: "work-experience", className: "section relative w-full min-h-screen flex items-center justify-center bg-gray-800 px-6 py-15 overflow-hidden", children: [_jsx("h1", { className: "absolute top-8 left-8 text-gray-400 text-6xl sm:text-8xl md:text-9xl font-bold opacity-10 z-0", children: "Work Experience" }), _jsx(motion.div, { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 1 }, viewport: { once: true }, className: "max-w-4xl bg-gray-700 rounded-lg p-10 shadow-lg z-10", children: _jsxs("div", { className: " text-gray-400 space-y-8", children: [_jsx("h3", { className: "text-2xl font-semibold text-white", children: "Full Stack Developer" }), _jsx("p", { className: "text-lg", children: _jsx("span", { className: "font-semibold text-gray-300", children: "EY | May 2022 - October 2023" }) }), _jsxs("ul", { className: "list-none list-inside text-lg space-y-1", children: [_jsx("li", { children: "Led the development of a business management tool, improving collaboration and efficiency by streamlining processes with modern web technologies like React, Node.js, and MongoDB." }), _jsx("li", { children: "Developed ETL pipelines to process and integrate data into dashboards, enhancing data-driven decision-making." }), _jsx("li", { children: "Designed scalable APIs and intuitive UIs for high-traffic applications, delivering consistent user experiences." })] })] }) })] }));
};
export default Employment_one;
