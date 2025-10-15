# 🐱 Stage 0 – Profile API

### 🎯 Task Description
This project is part of **Stage 0** of the backend track.  
The goal is to build a simple RESTful API endpoint that returns my profile information along with a **dynamic cat fact** fetched from an external API.

---

## 🚀 Overview

This API exposes a single endpoint:


It returns:
- My profile information (email, full name, backend stack)
- A random cat fact from the **Cat Facts API**
- The current UTC timestamp in ISO 8601 format

---

## 🧩 Example Response

```json
{
  "status": "success",
  "user": {
    "email": "ayekudemilade43@gmail.com",
    "name": "Ayeku Demilade",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
⚙️ Features

✅ RESTful API endpoint (/me)
✅ Dynamic timestamp generated on every request
✅ Integration with the Cat Facts API (https://catfact.ninja/fact
)
✅ Graceful error handling and fallback messages
✅ CORS enabled
✅ Proper JSON response formatting

🧰 Tech Stack

Runtime: Node.js

Framework: Express.js

HTTP Client: Axios

Environment Management: Dotenv

CORS: Enabled by cors middleware

profileapi/
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md

🧠 How It Works

When a user makes a GET request to /me,
the server calls the Cat Facts API → https://catfact.ninja/fact.

The response fact is then combined with:

My profile information

The current UTC time (new Date().toISOString())

The combined JSON is returned to the client.

If the cat fact API is unreachable,
the server returns a fallback fact message while keeping the same structure.

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/<your-username>/profile-api.git
cd profile-api

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file
PORT=4000

4️⃣ Start the development server
node server.js

5️⃣ Test the endpoint

Visit:

http://localhost:4000/me

🌍 Deployment

You can deploy this project using any of the following (Vercel & Render are not allowed):

Railway

Koyeb

Fly.io

PXXL App

Heroku

Example (Railway):

Login to Railway and create a new project

Connect your GitHub repo

Add PORT as an environment variable

Deploy

Copy your live URL (e.g., https://profile-api.up.railway.app/me)

🧪 Testing Checklist
Criteria	Status
GET /me endpoint returns 200 OK	✅
Response format matches specification	✅
Dynamic UTC timestamp (ISO 8601)	✅
Live cat fact fetched on each request	✅
Fallback handling for API failure	✅
Content-Type is application/json	✅
Proper CORS setup	✅
💡 Lessons Learned

This task helped me understand:

How to consume third-party APIs dynamically

How to structure consistent JSON responses

How to handle API errors and timeouts gracefully

How to use ISO 8601 timestamps in backend systems

The importance of clear documentation and error handling

🧑🏽‍💻 Author

👋 Ayeku Demilade
Backend Developer | Node.js • Express • SQL • React
📧 Email: ayekudemilade43@gmail.com

🔗 GitHub: @Demiladepy

💼 LinkedIn: linkedin.com/in/your-profile

📢 Write-up Requirement

A detailed post will be published on LinkedIn (or Dev.to, Hashnode, Medium, or X) highlighting:

My process for building the API

Code snippets and screenshots

What I learned from this task

(Link will be added here once published)

🐾 API Reference

External API Used:
Cat Facts API

Provides random cat facts in JSON format.

⭐ Don’t forget to star this repo if you find it helpful!

  "fact": "Cats have five toes on their front paws, but only four on the back ones."
}
