import React, { useState } from 'react'
const apiUrl = process.env.REACT_APP_PY_URL || 'http://127.0.0.1:5002'

export default function SentimentPage() {
  const [inputText, setInputText] = useState<string>('')
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const analyzeSentiment = async () => {
    setError(null)
    setResult(null)
    try {
      const response = await fetch(`${apiUrl}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      })
      if (!response.ok) {
        throw new Error('Failed to fetch sentiment analysis.')
      }
      const data = await response.json()
      setResult(data.sentiment)
    } catch (err: any) {
      setError(err.message)
    }
  }
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Sentiment Analysis</h1>
      {/* <p className="mb-4 text-gray-400">
        Note: This model was trained on gaming-related tweets and may perform
        best on text related to gaming. It might not generalize well to other
        topics.
      </p> */}
      {/* NEW NOTE ABOUT TRAINING DATA */}
      <p className="mb-4 text-gray-300">
        This tool uses a machine learning model to gauge the sentiment
        (positive, negative, or neutral) of a given piece of text. It was
        initially trained on gaming-related tweets, so it performs best on text
        related to gaming topics. However, you can still try it on other
        subjects to see how well it generalizes. Just type or paste your text
        below and click "Analyze."
      </p>
      <p className="mb-4 text-yellow-300">
        Note: This model is still in development and needs additional training
        data. Results may be less accurate for the time being.
      </p>
      <textarea
        placeholder="Type a tweet or text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full h-32 p-2 mb-4 text-black"
      />

      <button
        onClick={analyzeSentiment}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Analyze
      </button>
      {result && (
        <div className="mt-4">
          <strong>Sentiment:</strong>{' '}
          <span className="text-green-400">{result}</span>
        </div>
      )}
      {error && (
        <div className="mt-4 text-red-500">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  )
}

// import React, { useState } from 'react'
// const apiUrl = process.env.REACT_APP_PY_URL || 'http://127.0.0.1:5002'

// console.log('API URL (with fallback):', apiUrl)

// const SentimentPage: React.FC = () => {
//   const [inputText, setInputText] = useState<string>('')
//   const [result, setResult] = useState<string | null>(null)
//   const [error, setError] = useState<string | null>(null)

//   const analyzeSentiment = async () => {
//     setError(null)
//     setResult(null)

//     try {
//       const response = await fetch(`${apiUrl}/predict`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: inputText }),
//       })

//       if (!response.ok) {
//         throw new Error('Failed to fetch sentiment analysis.')
//       }

//       const data = await response.json()
//       setResult(data.sentiment)
//     } catch (err: any) {
//       setError(err.message)
//     }
//   }

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-8">
//       <h1 className="text-4xl font-bold mb-4">Sentiment Analysis</h1>
//       <p className="mb-4 text-gray-400">
//         Note: This model was trained on gaming-related tweets and may perform
//         best on text related to gaming. It might not generalize well to other
//         topics.
//       </p>
//       <textarea
//         placeholder="Type a tweet or text here..."
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         className="w-full h-32 p-2 mb-4 text-black"
//       />
//       <button
//         onClick={analyzeSentiment}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Analyze
//       </button>
//       {result && (
//         <div className="mt-4">
//           <strong>Sentiment:</strong>{' '}
//           <span className="text-green-400">{result}</span>
//         </div>
//       )}
//       {error && (
//         <div className="mt-4 text-red-500">
//           <strong>Error:</strong> {error}
//         </div>
//       )}
//     </div>
//   )
// }

// export default SentimentPage
