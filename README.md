# 🚀 Portfolio Creator App

A modern, full-stack **Portfolio Creator Application** that allows users to build, preview, and deploy a professional personal portfolio without writing code.

Users can enter their details, upload a profile image and resume, preview the portfolio live, and deploy it instantly.

---

## ✨ Features

### 🔐 Authentication
- User registration & login using **Firebase Authentication**
- Secure access to personal portfolio data

### 🧑‍💼 Portfolio Builder
- Basic Information (Name, Title, Location)
- About Section
- Skills (Dynamic add/remove)
- Projects (Title & description)
- Experience timeline
- Education details
- Contact details (GitHub, LinkedIn, Instagram, Email, Phone)

### 🖼️ Media Upload
- Profile Image upload & update
- Resume (PDF) upload & update
- Instant **View / Update buttons appear immediately after file selection**
- Cloudinary integration for file storage

### 👀 Live Preview
- Real-time portfolio preview using iframe
- Smooth scrolling navigation
- Scroll reveal animations
- Mobile-responsive UI

### 📦 Deployment
- Download portfolio as `index.html`
- One-click deployment using backend service
- Live deployed URL generation
- Copy live URL functionality

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Vite**
- CSS (Custom UI & animations)

### Backend & Services
- **Firebase Authentication**
- **Firebase Firestore**
- **Cloudinary** (Image & PDF storage)
- Custom deployment backend (HTML hosting)

---

## 📂 Project Structure

src/
├── components/
│ ├── PortfolioCreator.jsx
│ ├── LivePreview.jsx
│ 
── pages/
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Builder.jsx
│
├── styles/
│ ├── Login.css
│ ├── builder.css
│ ├── preview.css
│
├── firebase.js
├── cloudinary.js
├── App.jsx
└── main.jsx

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/portfolio-creator.git
cd portfolio-creator
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Configure Environment Variables
Create a .env file:

env
Copy code
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
4️⃣ Run the App
bash
Copy code
npm run dev
📸 Screenshots
Login & Register pages

Portfolio Builder dashboard

Media upload section

Live preview panel

Deployed portfolio view

(Add screenshots here for better presentation)

🧠 Key Highlights
No page reloads

Smooth navigation inside iframe preview

Professional UI/UX

Instant feedback on uploads

Mobile & desktop friendly

Clean component-based architecture

📌 Future Enhancements
Resume inline preview modal

ATS-optimized resume analysis

Portfolio themes

Custom domain support

Download portfolio as ZIP

👨‍💻 Author
Venky
Frontend & Full-Stack Developer
Built with ❤️ using React, Firebase, and Cloudinary"# portfolio-frontend" 
