
🚀 NextStep-AI

NextStep-AI is a modern web application designed to help users take the next step in their career journey.
It includes features such as personalized career suggestions, resume analysis, and an intuitive UI built with the MERN stack.
This project demonstrates full-stack development skills, API integration, frontend UI/UX design, and javaScript-based backend implementation.

🎯 Project Objective

To build an intelligent platform that analyzes user input and supports career decision-making through modern web technologies.
This system was developed as part of an educational project to explore full-stack development, deployment, and practical implementation of the MERN stack.

🌐Live Demo

Quick Start – Try it Live
1.Visit the live app: https://nextstepcareer-ai.vercel.app/suggest
2.Enter your skills, interests, and career goals in the input form.
3.Click “Get Suggestions” to receive personalized career recommendations instantly.


<img width="800" height="997" alt="download" src="https://github.com/user-attachments/assets/2a9acc62-390d-4302-8853-b5335515349a" />

<img width="800" height="1222" alt="download (1)" src="https://github.com/user-attachments/assets/24a6907e-6ddc-4619-aa0f-06fbb4b87ff8" />

![Screenshot 2025-12-06 160855](https://github.com/user-attachments/assets/7f74fcd9-1785-49db-a3b7-dd307dc4ffa1)

🚀 Deployment

The NextStep-AI application is hosted using modern cloud platforms to ensure reliability and scalability:

Frontend: Hosted on Vercel for fast React performance and automatic previews.
Backend: Deployed on Render with auto-scaling capabilities.
Database: PostgreSQL hosted on Neon, integrated with the backend.

Installation Steps

▶️ Clone the repository

git clone https://github.com/yourusername/nextstep-ai.git
cd nextstep-ai

▶️ Backend Setup
cd backend

# Create a virtual environment (recommended)
python -m venv venv
# Activate environment on Windows
venv\Scripts\activate
# Activate environment on Mac/Linux
source venv/bin/activate
# Install dependencies
pip install -r requirements.txt
# Create local .env file
touch .env

Environment Variables Example (.env)
MONGO_URI=mongodb://localhost:27017/nextstep_ai
PORT=5000
JWT_SECRET=your_secret_key

▶️ Frontend Setup
cd frontend
npm install

Optionally install Tailwind CSS if needed:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


▶️ Running Locally
# Start backend
npm run dev
# Start frontend
npm run start

Frontend will be available at http://localhost:3000
Backend will run at http://localhost:5000
 (or port from .env)


🤝 Contributing

1.Fork the repository

2.Create a new branch:
git checkout -b feature/your-feature

3.Commit your changes:
git commit -m "Add amazing feature"

4.Push to your branch:
git push origin feature/your-feature

5.Open a Pull Request for review
