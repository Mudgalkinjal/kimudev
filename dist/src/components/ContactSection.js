var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    subject: Yup.string().optional(),
    message: Yup.string().required('Message is required'),
});
const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';
export default function ContactSection() {
    var _a, _b, _c;
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(validationSchema),
    });
    function onSubmit(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${API_URL}/api/auth/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                const responseData = yield response.json();
                if (!response.ok) {
                    setError(responseData.message || 'Failed to send message.');
                    setSuccess('');
                }
                else {
                    setSuccess(responseData.message || 'Message sent successfully!');
                    setError('');
                }
                console.log('response received');
            }
            catch (error) {
                console.log('response failed');
                setError('Something went wrong. Please try again later.');
                setSuccess('');
            }
        });
    }
    return (_jsx("section", { id: "contact-me", className: "section w-full min-h-screen flex flex-col items-center justify-center bg-gray-600 px-6 py-12", children: _jsxs(motion.div, { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 1 }, viewport: { once: true }, className: "max-w-3xl bg-gray-500 rounded-lg p-8 shadow-lg text-gray-100", children: [_jsx("h2", { className: "text-3xl font-bold text-white text-center", children: "Contact Me" }), _jsx("p", { className: "text-lg mt-4 text-center", children: "I\u2019d love to hear from you! Whether you have a question, a collaboration idea, or just want to say hello, feel free to get in touch." }), error && _jsx("div", { className: "text-red-500 text-center mb-4", children: error }), success && (_jsx("div", { className: "text-indigo-600 text-center mb-4", children: success })), _jsxs("form", { className: "space-y-4 mt-6", onSubmit: handleSubmit(onSubmit), children: [_jsx("input", Object.assign({ type: "text", placeholder: "Your Name" }, register('name'), { className: `w-full px-4 py-2 border rounded-lg bg-gray-700 text-gray-300 ${errors.name ? 'border-red-500' : 'border-gray-600'}` })), _jsx("p", { className: "text-red-500 text-sm", children: (_a = errors.name) === null || _a === void 0 ? void 0 : _a.message }), _jsx("input", Object.assign({ type: "email", placeholder: "Your Email" }, register('email'), { className: `w-full px-4 py-2 border rounded-lg bg-gray-700 text-gray-300 ${errors.email ? 'border-red-500' : 'border-gray-600'}` })), _jsx("p", { className: "text-red-500 text-sm", children: (_b = errors.email) === null || _b === void 0 ? void 0 : _b.message }), _jsx("input", Object.assign({ type: "text", placeholder: "Subject" }, register('subject'), { className: "w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300" })), _jsx("textarea", Object.assign({ placeholder: "Your Message" }, register('message'), { className: `w-full px-4 py-2 border rounded-lg bg-gray-700 text-gray-300 ${errors.message ? 'border-red-500' : 'border-gray-600'}`, rows: 5 })), _jsx("p", { className: "text-red-500 text-sm", children: (_c = errors.message) === null || _c === void 0 ? void 0 : _c.message }), _jsx("button", { type: "submit", className: "px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-800 w-full", children: "Send Message" })] }), _jsx("div", { className: "mt-6 text-center", children: _jsxs("p", { children: ["LinkedIn:", ' ', _jsx("a", { href: "https://linkedin.com/in/", target: "_blank", rel: "noopener noreferrer", className: "text-blue-400" })] }) })] }) }));
}
