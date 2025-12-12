🚀 NextStep-AI

NextStep-AI is a modern web application designed to help users take the next step in their career journey.
It includes features such as personalized career suggestions, resume analysis, and an intuitive UI built with the MERN stack.
This project demonstrates full-stack development skills, API integration, frontend UI/UX design, and JavaScript-based backend implementation.

🎯 Project Objective

To build an intelligent platform that analyzes user input and supports career decision-making through modern web technologies.
This system was developed as part of an educational project to explore full-stack development, deployment, and practical implementation of the MERN stack.

🌐 Live Demo
Quick Start – Try it Live

Visit the live app: https://nextstepcareer-ai.vercel.app/suggest

Enter your skills, interests, and career goals in the input form.

Click “Get Suggestions” to receive personalized career recommendations instantly.

📸 Screenshots
<img width="800" height="997" src="https://github.com/user-attachments/assets/2a9acc62-390d-4302-8853-b5335515349a" /> <img width="800" height="1222" src="https://github.com/user-attachments/assets/24a6907e-6ddc-4619-aa0f-06fbb4b87ff8" />

🚀 Deployment

The NextStep-AI application is hosted using modern cloud platforms:

Frontend: Vercel (fast React hosting + automatic previews)

Backend: Render (auto-scaling)

Database: Neon PostgreSQL

🛠 Installation Steps
▶ Clone the repository
git clone https://github.com/yourusername/nextstep-ai.git
cd nextstep-ai

▶ Backend Setup
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

▶ Frontend Setup
cd frontend
npm install


Optional Tailwind setup:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

▶ Running Locally
# Start backend
npm run dev

# Start frontend
npm start


Frontend → http://localhost:3000

Backend → http://localhost:5000
 (or PORT from .env)

🤝 Contributing

Fork the repository

Create a new branch:

git checkout -b feature/your-feature


Commit your changes:

git commit -m "Add amazing feature"


Push the branch:

git push origin feature/your-feature


Open a Pull Request for review

Step 4 — Click “Commit Changes”

Scroll down →
Enter a small message like:

“Add project README”
Click Commit changes.
