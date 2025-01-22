import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
// const apiUrl = process.env.REACT_APP_PY_URL || 'http://127.0.0.1:5002'
export default function SentimentPage() {
    const [inputText, setInputText] = useState('');
    // const [result, setResult] = useState<string | null>(null)
    // const [error, setError] = useState<string | null>(null)
    // const analyzeSentiment = async () => {
    //   setError(null)
    //   setResult(null)
    //   try {
    //     const response = await fetch('http://kimudev.onrender.com/predict', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ text: inputText }),
    //     })
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch sentiment analysis.')
    //     }
    //     const data = await response.json()
    //     setResult(data.sentiment)
    //   } catch (err: any) {
    //     setError(err.message)
    //   }
    // }
    return (_jsxs("div", { className: "bg-gray-900 text-white min-h-screen p-8", children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "Sentiment Analysis" }), _jsx("p", { className: "mb-4 text-gray-400", children: "Note: This model was trained on gaming-related tweets and may perform best on text related to gaming. It might not generalize well to other topics." }), _jsx("textarea", { placeholder: "Type a tweet or text here...", value: inputText, onChange: (e) => setInputText(e.target.value), className: "w-full h-32 p-2 mb-4 text-black" })] }));
}
