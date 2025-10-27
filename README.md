# Easy Pay – Secure & Modern Payment Platform

Easy Pay is a sleek and secure payment web application built with Next.js, Tailwind CSS, shadcn/ui, and Swiper.js.
The platform focuses on simplicity, transparency, and trust, providing users a seamless experience for sending, receiving, and managing payments.

🚀 Features
💳 Core Highlights

Modern, responsive design with Tailwind CSS & shadcn/ui components

Smooth scrolling & transitions with Framer Motion

Security-first interface built with clear visual hierarchy

Dynamic glow background using SVG + blend effects

Interactive testimonial slider powered by Swiper.js

Reusable component architecture with Next.js App Router

🛡️ Security Section (Example)

“We protect your money at every step with Easy Pay.”

Soft glowing animated background (glow.svg)

3-column feature grid for encryption, monitoring, and authentication

Fully responsive and mobile-optimized layout

🧱 Tech Stack
Category	Technologies
Frontend Framework	Next.js 15+ (App Router)

Styling	Tailwind CSS

UI Components	shadcn/ui

Slider Library	Swiper.js

Icons	Lucide Icons

Animations	Framer Motion
📂 Folder Structure
easy-pay/
├─ .gitignore
├─ package.json
├─ next.config.mjs
├─ postcss.config.mjs
├─ README.md
├─ REPORT.md
├─ public/
│  ├─ favicon.ico
│  ├─ robots.txt
│  └─ images/
│     ├─ hero-left.png
│     ├─ hero-right.png
│     ├─ sec-3up.png
│     ├─ avatar-placeholder.png
│     └─ (other exported svgs/pngs you add)
├─ app/
│  ├─ layout.jsx
│  ├─ globals.css
│  ├─ page.jsx
├─ components/
│  ├─ Navbar.jsx
│  ├─ Hero.jsx
│  ├─ Features.jsx
│  ├─ HowItWorks.jsx
│  ├─ Security.jsx
│  ├─ Pricing.jsx
│  ├─ Testimonials.jsx
│  ├─ Newsletter.jsx
│  └─ Footer.jsx
├─ scripts/
│  └─ create-files.sh    # optional helper to auto-generate files locally
├─ .vscode/              # optional editor settings (recommended)
│  └─ settings.json
└─ .github/
   └─ workflows/
      └─ vercel-deploy.yml  # optional CI or deployment helper (if desired)


⚙️ Installation & Setup

Clone the repository

git clone https://github.com/samir-45/easy-pay.git
cd easy-pay


Install dependencies

npm install


Run the development server

npm run dev


Open http://localhost:3000
 to view it in your browser.

🧩 Key Components

SecuritySection.jsx → Modern info grid with a glowing background

Testimonials.jsx → Swiper.js slider with client reviews and star ratings

Navbar.jsx → Responsive navigation with shadcn/ui styling

🎨 UI Preview
Section	Description
💜 Security	Glowing background, 3-feature grid
💬 Testimonials	Swiper slider with smooth transitions
🧭 Navigation	Clean, minimal, responsive header
📦 Dependencies
"dependencies": {
  "next": "15.x",
  "react": "18.x",
  "react-dom": "18.x",
  "tailwindcss": "^3.4.x",
  "swiper": "^11.x",
  "framer-motion": "^11.x",
  "lucide-react": "^0.4.x",
  "class-variance-authority": "^0.7.x",
  "clsx": "^2.x",
  "shadcn-ui": "^0.9.x"
}

🧠 Future Improvements

✅ Add animated pulse effect to glow background

✅ Integrate authentication (Firebase / Clerk / Auth.js)

✅ Add dashboard for payment tracking

✅ Dark & light theme support

🧑‍💻 Author

Md Mahin Khan
Frontend Developer | MERN Stack Enthusiast
📍 Dhaka, Bangladesh
🌐 GitHub
 • LinkedIn

📄 License

This project is licensed under the MIT License – feel free to use and modify it.