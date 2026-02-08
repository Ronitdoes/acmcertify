# ACM Certify - Proof of Mastery

**Next Gen Verification Platform**

ACM Certify is a cutting-edge platform designed to issue, verify, and showcase professional certifications. It provides a secure and globally recognized standard for "Proof of Mastery," elevating professional identities with dynamic, interactive digital certificates.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Features

- **Proof of Mastery:** Secure, verifiable, and globally recognized digital certificates.
- **Dynamic 3D Certificates:** Interactive, physics-based 3D certificate cards powered by Framer Motion.
- **Enterprise Solutions:** Dedicated portal for enterprise partnerships, recruitment, and bulk verification.
- **Seamless Authentication:** Integrated Login and Sign-up flows for users and organizations.
- **Modern UI/UX:** A premium, dark-mode centric design featuring glassmorphism, smooth gradients, and micro-animations.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile experiences.

## 🛠️ Tech Stack

This project is built with a modern, high-performance frontend stack:

- **Framework:** [React 19](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📦 Installation & Setup

Follow these steps to get the project running locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Ronitdoes/acmcertify.git
    cd acm-certify---proof-of-mastery
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```bash
├── public/              # Static assets
├── src/
│   ├── assets/          # Project images and assets
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Generic UI elements (e.g., ShaderBackground)
│   │   ├── CTA.tsx      # Call to Action section
│   │   ├── Footer.tsx   # Application footer
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Hero.tsx     # Landing page hero with 3D card
│   │   └── ...
│   ├── pages/           # Application routes
│   │   ├── Home.tsx     # Landing page
│   │   ├── Login.tsx    # User login
│   │   ├── Signup.tsx   # User registration
│   │   └── Enterprise.tsx # Enterprise solutions page
│   ├── App.tsx          # Main application component & routing
│   ├── main.tsx         # Entry point
│   └── vite-env.d.ts    # Vite type declarations
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**ACM Certify** — Building the digital legacy of tomorrow's professionals.
