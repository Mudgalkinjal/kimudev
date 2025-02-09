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
const apiUrl = process.env.REACT_APP_PY_URL || 'http://127.0.0.1:5002';
export default function SentimentPage() {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const analyzeSentiment = () => __awaiter(this, void 0, void 0, function* () {
        setError(null);
        setResult(null);
        try {
            const response = yield fetch(`${apiUrl}/predict`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText }),
            });
            if (!response.ok) {
                throw new Error('Failed to fetch sentiment analysis.');
            }
            const data = yield response.json();
            setResult(data.sentiment);
        }
        catch (err) {
            setError(err.message);
        }
    });
    return (_jsxs("div", { className: "bg-gray-900 text-white min-h-screen p-8", children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "Sentiment Analysis" }), _jsx("p", { className: "mb-4 text-gray-300", children: "This tool uses a machine learning model to gauge the sentiment (positive, negative, or neutral) of a given piece of text. It was initially trained on gaming-related tweets, so it performs best on text related to gaming topics. However, you can still try it on other subjects to see how well it generalizes. Just type or paste your text below and click \"Analyze.\"" }), _jsx("p", { className: "mb-4 text-yellow-300", children: "Note: This model is still in development and needs additional training data. Results may be less accurate for the time being." }), _jsx("textarea", { placeholder: "Type a tweet or text here...", value: inputText, onChange: (e) => setInputText(e.target.value), className: "w-full h-32 p-2 mb-4 text-black" }), _jsx("button", { onClick: analyzeSentiment, className: "bg-blue-500 text-white px-4 py-2 rounded", children: "Analyze" }), result && (_jsxs("div", { className: "mt-4", children: [_jsx("strong", { children: "Sentiment:" }), ' ', _jsx("span", { className: "text-green-400", children: result })] })), error && (_jsxs("div", { className: "mt-4 text-red-500", children: [_jsx("strong", { children: "Error:" }), " ", error] }))] }));
}
