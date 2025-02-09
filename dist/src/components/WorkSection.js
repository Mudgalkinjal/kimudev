import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function WorkSection() {
    const navigate = useNavigate();
    const [startTyping, setStartTyping] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const fullText = '    Click here to see my Projects    ';
    const typingSpeed = 100;
    useEffect(() => {
        if (startTyping) {
            let currentIndex = 0;
            const typingInterval = setInterval(() => {
                const nextChar = fullText[currentIndex];
                if (nextChar !== undefined) {
                    setDisplayText((prev) => prev + nextChar);
                    currentIndex++;
                }
                else {
                    clearInterval(typingInterval);
                }
            }, typingSpeed);
            return () => clearInterval(typingInterval);
        }
    }, [startTyping]);
    function handleProjectPage() {
        navigate('/projectlist');
    }
    return (_jsxs(_Fragment, { children: [_jsx("style", { children: `
          .blinking-cursor {
            display: inline-block;
            width: 8px;
            height: 20px;
            background-color: white;
            margin-left: 2px;
            animation: blink 1s step-start infinite;
          }

          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        ` }), _jsxs("section", { id: "project-section", className: "section w-full h-screen flex flex-col items-center justify-center bg-gray-700", children: [_jsx(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 1 }, viewport: { once: true }, className: "text-center mb-8", onViewportEnter: () => setStartTyping(true), children: _jsx("h2", { className: "text-3xl font-bold text-white", children: "Projects" }) }), _jsx("div", { className: "flex flex-col items-center", onClick: handleProjectPage, children: _jsx(motion.div, { whileHover: { scale: 1.05 }, transition: { duration: 0.3 }, className: "bg-black text-white px-8 py-4 rounded-lg shadow-lg text-center cursor-pointer", children: _jsxs("pre", { className: "text-lg font-mono text-gray-300", children: [displayText, displayText.length < fullText.length ? (_jsx("span", { className: "blinking-cursor", children: " | " })) : null] }) }) })] })] }));
}
