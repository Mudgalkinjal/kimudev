import React from 'react'

const MachineLearning: React.FC = () => {
  const projects = [
    {
      title: 'Image Classification with CNNs',
      description:
        'A convolutional neural network model to classify images into various categories using TensorFlow.',
      link: '/projects/image-classification',
    },
    {
      title: 'Natural Language Sentiment Analysis',
      description:
        'A sentiment analysis tool built using NLP techniques and pretrained models like BERT.',
      link: '/sentimentpage',
    },
    {
      title: 'Recommendation System',
      description:
        'A collaborative filtering-based recommendation system for personalized product suggestions.',
      link: '/projects/recommendation-system',
    },
    {
      title: 'Time Series Forecasting',
      description:
        'A project focused on forecasting stock prices using LSTM-based recurrent neural networks.',
      link: '/projects/time-series-forecasting',
    },
    {
      title: 'Object Detection with YOLO',
      description:
        'An object detection model using YOLOv5 to identify and label objects in real-time videos.',
      link: '/projects/object-detection',
    },
    {
      title: 'Anomaly Detection in Data',
      description:
        'A machine learning model to detect anomalies in network traffic using unsupervised learning techniques.',
      link: '/projects/anomaly-detection',
    },
  ]

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Machine Learning Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="mb-6 text-gray-400">{project.description}</p>
            <a
              href={project.link}
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MachineLearning
