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
const SentimentPage = () => {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const analyzeSentiment = () => __awaiter(void 0, void 0, void 0, function* () {
        setError(null);
        setResult(null);
        try {
            const response = yield fetch('http://127.0.0.1:5002/predict', {
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
    return (_jsxs("div", { className: "bg-gray-900 text-white min-h-screen p-8", children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "Sentiment Analysis" }), _jsx("p", { className: "mb-4 text-gray-400", children: "Note: This model was trained on gaming-related tweets and may perform best on text related to gaming. It might not generalize well to other topics." }), _jsx("textarea", { placeholder: "Type a tweet or text here...", value: inputText, onChange: (e) => setInputText(e.target.value), className: "w-full h-32 p-2 mb-4 text-black" }), _jsx("button", { onClick: analyzeSentiment, className: "bg-blue-500 text-white px-4 py-2 rounded", children: "Analyze" }), result && (_jsxs("div", { className: "mt-4", children: [_jsx("strong", { children: "Sentiment:" }), ' ', _jsx("span", { className: "text-green-400", children: result })] })), error && (_jsxs("div", { className: "mt-4 text-red-500", children: [_jsx("strong", { children: "Error:" }), " ", error] }))] }));
};
export default SentimentPage;
