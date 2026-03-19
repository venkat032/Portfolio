export const projectsData = [
  {
    id: "genai-rag-chatbot",
    title: "GenAI RAG Chatbot",
    category: "AI/ML",
    tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
    description: "Built a Retrieval-Augmented Generation chatbot that answers questions from documents using embeddings and vector search.",
    longDescription: "This project implements a sophisticated RAG (Retrieval-Augmented Generation) pipeline. It allows users to upload documents (PDFs, TXT) and interact with them through a natural language interface. The system leverages OpenAI's GPT models for reasoning and a Vector Database for semantic retrieval.",
    features: [
      "Document Ingestion & Chunking",
      "Semantic Search with Vector Embeddings",
      "Context-Aware LLM Responses",
      "Optimized In-Memory Vector Search"
    ],
    architecture: "The architecture consists of a Flask backend serving as an API layer, LangChain for orchestrating the RAG workflow, and a frontend built with HTML/CSS. It uses FAISS for efficient similarity search and OpenAI's Embeddings for text vectorization.",
    link: "https://gen-ai-chatbot-37j6.onrender.com",
    github: "#",
    image: "/project-rag-chatbot.png"
  },
  {
    id: "ai-text-summarization",
    title: "AI Text Summarization System",
    category: "NLP",
    tech: ["Python", "Hugging Face", "NLP", "Transformers"],
    description: "Developed an NLP-based system that summarizes long documents into concise summaries using transformer-based models.",
    longDescription: "A high-performance text summarization engine that balances speed and accuracy. It uses state-of-the-art transformer models from Hugging Face to generate both extractive and abstractive summaries of long-form content.",
    features: [
      "Abstractive Summarization (BART/T5)",
      "Extractive Keyphrase Extraction",
      "Multi-document Support",
      "Custom Summarization Length"
    ],
    architecture: "Built on top of the Hugging Face Transformers library, this system utilizes a pre-trained pipeline for inference. It includes a custom preprocessing module to handle noisy text and a post-processing layer to ensure grammatical correctness.",
    link: "#",
    github: "#",
    image: "/project-summarization.png"
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis System",
    category: "NLP",
    tech: ["Python", "Scikit-learn", "NLP", "Pandas"],
    description: "Built a machine learning model that analyzes customer sentiment from text reviews using TF-IDF feature extraction.",
    longDescription: "This system provides automated sentiment scoring for business reviews. It classifies text into positive, negative, and neutral categories with a high degree of precision, helping businesses understand customer feedback at scale.",
    features: [
      "TF-IDF Vectorization",
      "Support Vector Machine (SVM) Classifier",
      "Automated Report Generation",
      "Sentiment Trend Visualization"
    ],
    architecture: "The model is trained on a labeled dataset of thousands of reviews. It follows a classical NLP pipeline: Text Cleaning -> Tokenization -> Stopword Removal -> Vectorization -> Classification.",
    link: "#",
    github: "#",
    image: "/project-sentiment.png"
  },
  {
    id: "titanic-survival",
    title: "Titanic Survival Prediction",
    category: "Data Science",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    description: "Implemented an end-to-end ML pipeline predicting passenger survival on the Titanic dataset with thorough data cleaning.",
    longDescription: "A classic data science project focused on feature engineering and predictive modeling. It achieves competitive accuracy by carefully selecting and transforming variables to capture underlying patterns in the passenger data.",
    features: [
      "Missing Value Imputation",
      "Categorical Encoding (One-Hot)",
      "Random Forest & Logistic Regression",
      "K-Fold Cross-Validation"
    ],
    architecture: "The pipeline is built using Scikit-Learn's Pipeline object, ensuring reproducibility and clean code. It includes custom transformers for domain-specific feature engineering.",
    link: "#",
    github: "#",
    image: "/project-titanic.png"
  },
  {
    id: "predictive-ml-model",
    title: "Predictive ML Model",
    category: "Data Science",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    description: "Built machine learning models for predictive analytics using structured datasets with a focus on advanced feature engineering.",
    longDescription: "Designed for industrial applications, this model predicts outcomes for structured datasets (e.g., churn prediction or sales forecasting) by leveraging ensemble learning techniques.",
    features: [
      "XGBoost & LightGBM Integration",
      "Automated Feature Selection",
      "Hyperparameter Tuning (GridSearch)",
      "Model Interpretability with SHAP"
    ],
    architecture: "Utilizes a modular design for data loading, preprocessing, and training. It is optimized for large-scale structured data processing using Pandas and NumPy.",
    link: "#",
    github: "#",
    image: "/project-predictive.png"
  },
  {
    id: "ai-automation-agent",
    title: "AI Automation Agent Workflow",
    category: "Automation",
    tech: ["Python", "LangGraph", "LangChain", "LLM APIs"],
    description: "Developed a prototype AI workflow using agent-based architecture to automate multi-step reasoning tasks.",
    longDescription: "One of the first implementations of an autonomous AI agent using LangGraph. The agent can break down complex goals into sub-tasks, execute them sequentially, and verify its own results.",
    features: [
      "Graph-based Agentic Reasoning",
      "External Tool Integration (Tavily)",
      "State Management & Memory",
      "Human-in-the-loop Approval System"
    ],
    architecture: "Uses LangGraph to define a cyclic state machine where nodes represent agent actions and edges represent logic flows. This allows for complex, multi-step problem solving beyond simple linear sequences.",
    link: "#",
    github: "#",
    image: "/project-agent.png"
  },
  {
    id: "whatsapp-ai-agent",
    title: "Restaurant WhatsApp AI Agent",
    category: "Automation",
    tech: ["GenAI", "APIs", "n8n", "AI Agents"],
    description: "Agentic AI system that automatically responds to restaurant customer queries through WhatsApp using LLMs and workflow automation.",
    longDescription: "An advanced automation system designed to handle customer service for restaurants. It integrates with WhatsApp to provide instant, AI-driven responses to common questions about menus, bookings, and hours of operation.",
    features: [
      "Real-time WhatsApp Integration",
      "Automated Booking & Reservations",
      "Menu Information Retrieval",
      "n8n Workflow Orchestration"
    ],
    architecture: "The system uses n8n for workflow automation, connecting a WhatsApp API provider with an LLM-based reasoning engine. It securely accesses restaurant databases to provide accurate, real-time information.",
    link: "#",
    github: "#",
    image: "/project-whatsapp.png"
  },
  {
    id: "ai-resume-platform",
    title: "InnoHire AI – Intelligent AI Recruitment Assistant",
    category: "AI/ML",
    tech: ["React", "Tailwind", "Flask", "Python", "Scikit-Learn", "MySQL", "NLP"],
    description: "Built an AI-powered hiring assistant that automates resume screening, candidate evaluation, and recruitment workflows using machine learning and NLP.",
    longDescription: "InnoHire AI is a comprehensive recruitment tool that automates the screening process. It uses advanced NLP techniques to parse resumes and match candidates to job descriptions based on semantic similarity. The platform streamlines the entire hiring workflow from document ingestion to final shortlisting.",
    features: [
      "🤖 AI-based resume screening",
      "📊 Candidate ranking system",
      "🧠 NLP-based skill extraction",
      "⚡ Automated shortlisting",
      "📁 Resume parsing (PDF/DOC)",
      "📈 Dashboard for recruiter insights"
    ],
    impact: [
      "Reduced manual screening effort by 60%",
      "Improved candidate filtering accuracy",
      "Automated repetitive hiring tasks"
    ],
    role: "Designed and developed frontend UI, built backend APIs, integrated AI models for screening, and worked on real-time recruiter workflows.",
    link: "https://innohire.ai/",
    github: "#",
    image: "/project-ai-resume.png"
  }
];
