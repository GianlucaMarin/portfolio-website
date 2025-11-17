# 🚀 Gianluca Marin - Portfolio Website

[![Live Site](https://img.shields.io/badge/Live-gianlucamarin.com-00d4ff?style=for-the-badge&logo=vercel)](https://www.gianlucamarin.com)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

A modern, animated portfolio website showcasing my projects, skills, and experience as a Business AI Student. Built with cutting-edge web technologies and deployed on Vercel with a custom domain.

**Live Demo:** [www.gianlucamarin.com](https://www.gianlucamarin.com)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Key Features](#-key-features)
- [Component Architecture](#-component-architecture)
- [Installation & Setup](#-installation--setup)
- [Deployment](#-deployment)
- [Code Examples](#-code-examples)
- [Performance & Optimization](#-performance--optimization)

---

## 🎯 Overview

This portfolio website is a single-page application (SPA) that presents my professional profile, showcasing:

- **Featured Projects** - AI/ML projects including RAG chatbots, machine learning models, and full-stack applications
- **Technical Skills** - Programming languages, frameworks, databases, and development tools
- **Professional Experience** - Education background and athletic achievements
- **Contact Form** - Integrated EmailJS for direct communication

The site features smooth animations, responsive design, and a modern glassmorphism aesthetic with gradient accents.

---

## 🛠️ Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI component library |
| **Vite** | 7.2.2 | Build tool & dev server |
| **Tailwind CSS** | 4.1.17 | Utility-first CSS framework |
| **Framer Motion** | 12.23.24 | Animation library |

### Key Dependencies

```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",           // Email service integration
    "framer-motion": "^12.23.24",           // Animations & transitions
    "lucide-react": "^0.553.0",             // Icon library
    "react": "^19.2.0",                     // Core React library
    "react-dom": "^19.2.0",                 // React DOM rendering
    "react-intersection-observer": "^10.0.0" // Scroll-triggered animations
  }
}
```

### Development Tools

- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS processing with Autoprefixer
- **Vite Plugin React** - Fast React refresh during development

---

## 📁 Project Structure

```
gianluca-webseite/
├── public/
│   └── images/                    # Static images & assets
│       └── bewerbungsfoto-removebg-preview.png
├── src/
│   ├── components/                # React components
│   │   ├── Header.jsx            # Navigation header with smooth scroll
│   │   ├── Hero.jsx              # Landing section with profile & CTA
│   │   ├── About.jsx             # Introduction & background
│   │   ├── Projects.jsx          # Featured projects showcase
│   │   ├── Skills.jsx            # Technical skills grid
│   │   ├── Sports.jsx            # Athletic achievements
│   │   ├── Education.jsx         # Academic background
│   │   ├── Contact.jsx           # Contact form with EmailJS
│   │   └── Footer.jsx            # Footer with social links
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles & Tailwind config
├── eslint.config.js              # ESLint configuration
├── postcss.config.js             # PostCSS configuration
├── vite.config.js                # Vite build configuration
└── package.json                  # Dependencies & scripts
```

### Component Hierarchy

```
App.jsx
├── Header.jsx          (Sticky navigation)
├── Hero.jsx            (Landing with animated profile)
├── About.jsx           (Introduction section)
├── Projects.jsx        (Project cards with hover effects)
├── Skills.jsx          (Skills categorized in cards)
├── Sports.jsx          (Tennis achievements)
├── Education.jsx       (Academic timeline)
├── Contact.jsx         (EmailJS integrated form)
└── Footer.jsx          (Social links & copyright)
```

---

## ✨ Key Features

### 1. **Smooth Scroll Animations**
- Implemented using `framer-motion` and `react-intersection-observer`
- Components fade in and slide up when scrolling into view
- Staggered animations for list items

### 2. **Glassmorphism Design**
- Semi-transparent backgrounds with backdrop blur
- Gradient borders and hover effects
- Animated gradient orbs in the background

### 3. **Responsive Layout**
- Mobile-first design approach
- Breakpoints: `sm`, `md`, `lg` for different screen sizes
- Grid layouts that adapt from 1 column (mobile) to 3 columns (desktop)

### 4. **Interactive Contact Form**
- EmailJS integration for serverless email sending
- Form validation with required fields
- Success/error status messages with auto-dismiss
- Loading states during submission

### 5. **Custom Animations**
- Floating gradient orbs with `@keyframes`
- Hover effects with scale and glow transitions
- Smooth page scroll behavior

---

## 🏗️ Component Architecture

### Hero Component (`Hero.jsx`)

The landing section features:
- **Animated Profile Image** with gradient border and pulse effect
- **Staggered Text Animations** using Framer Motion variants
- **CTA Buttons** with gradient hover effects
- **Stats Cards** showing key metrics (projects, semester, grade)

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
```

**Key Animation Technique:** Parent container controls staggered child animations. Each child element (`motion.div`) inherits variants from the parent.

---

### Projects Component (`Projects.jsx`)

Displays featured projects with detailed technical implementations:

```jsx
const projects = [
  {
    title: 'AI Customer Support Chatbot',
    description: 'Full-stack RAG system...',
    implementation: [
      'Backend API with FastAPI',
      'RAG system using LangChain',
      'Vector database (Qdrant)',
      // ... more details
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'Qdrant'],
    gradient: 'from-purple-500 to-purple-600',
  },
  // ... more projects
];
```

**Features:**
- Grid layout with hover lift effects (`whileHover={{ y: -8 }}`)
- Gradient glow on hover with opacity transitions
- Technical implementation list with bullet points
- Tech stack badges with glassmorphism styling

---

### Skills Component (`Skills.jsx`)

Categorizes skills into three sections:

```jsx
const skillCategories = [
  {
    category: 'Programming Languages',
    icon: Code,
    gradient: 'from-cyan-500 to-cyan-600',
    skills: ['Python', 'SQL', 'Prolog', 'SPARQL', 'SQWRL', 'DMN'],
  },
  {
    category: 'Frameworks & Databases',
    icon: Server,
    gradient: 'from-purple-500 to-purple-600',
    skills: ['React', 'FastAPI', 'LangChain', 'Tailwind CSS', 'Pandas',
             'SQLite', 'MySQL', 'Qdrant'],
  },
  {
    category: "Tools I've Worked With",
    icon: Wrench,
    gradient: 'from-pink-500 to-pink-600',
    skills: ['Git', 'GitHub', 'VS Code', 'LangSmith', 'Voiceflow',
             'Tableau Prep', 'Orange', 'Protégé', 'Trisotech DMN'],
  },
];
```

**Design Pattern:**
- Icon components from `lucide-react`
- Dynamic gradient application based on category
- Skill badges with hover scale animations

---

### Contact Component (`Contact.jsx`)

Implements EmailJS for serverless email functionality:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const serviceId = 'service_4dw4pas';
    const templateId = 'template_kz0nel8';
    const publicKey = 'cfYT-8aK2jhcc39C3';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);

    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('EmailJS Error:', error);
    setSubmitStatus('error');
  }

  setIsSubmitting(false);
};
```

**Key Features:**
- Form state management with `useState`
- Loading indicator during submission
- Success/error messages with auto-dismiss timer
- Contact info cards with clickable links
- Social media integration

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gianluca-webseite.git
   cd gianluca-webseite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

   Output will be in the `dist/` directory

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on source files |

---

## 🌐 Deployment

### Vercel Deployment with Custom Domain

This site is deployed on **Vercel** with a custom domain configured.

#### Step-by-Step Deployment:

1. **Connect to Vercel**
   - Push your code to GitHub
   - Import repository in [Vercel Dashboard](https://vercel.com)
   - Vercel auto-detects Vite configuration

2. **Build Configuration**
   ```
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Custom Domain Setup**
   - Purchase domain (e.g., from Namecheap, GoDaddy)
   - In Vercel project settings → Domains
   - Add custom domain: `www.gianlucamarin.com`
   - Configure DNS records at your domain registrar:

   ```
   Type    Name    Value
   ─────────────────────────────────────
   CNAME   www     cname.vercel-dns.com
   A       @       76.76.21.21
   ```

4. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - HTTPS enabled by default

5. **Environment Variables** (if needed)
   - Add in Vercel Dashboard → Settings → Environment Variables
   - Example: `VITE_API_KEY=your_key_here`

#### Automatic Deployments

- **Production:** Every push to `main` branch triggers deployment
- **Preview:** Pull requests generate preview URLs
- **Rollback:** Easy rollback to previous deployments in Vercel dashboard

---

## 💻 Code Examples

### Framer Motion Animation Pattern

**Scroll-triggered fade-in with stagger:**

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2>Content appears when scrolled into view</h2>
</motion.div>
```

**Hover effects:**

```jsx
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
  className="card"
>
  <p>Lifts up on hover</p>
</motion.div>
```

---

### Tailwind CSS Custom Configuration

**Custom animations in `index.css`:**

```css
@theme {
  --animate-float: float 3s ease-in-out infinite;
  --animate-glow: glow 2s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

**Usage:**

```jsx
<div className="animate-float">
  <div className="bg-cyan-500/10 rounded-full blur-3xl" />
</div>
```

---

### Glassmorphism Card Pattern

```jsx
<div className="relative group">
  {/* Glow effect on hover */}
  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600
                  rounded-2xl opacity-0 group-hover:opacity-20 blur
                  transition-opacity duration-500" />

  {/* Card content */}
  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90
                  backdrop-blur-sm rounded-2xl border border-white/10 p-8">
    <h3>Card Title</h3>
    <p>Card content with glassmorphism effect</p>
  </div>
</div>
```

**Key Techniques:**
- Semi-transparent backgrounds: `bg-gray-900/90`
- Backdrop blur: `backdrop-blur-sm`
- Gradient borders: `border border-white/10`
- Hover glow: Absolute positioned gradient with opacity transition

---

### EmailJS Integration

**Setup:**

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Get Service ID, Template ID, and Public Key

**Implementation:**

```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  };

  await emailjs.send(
    'service_4dw4pas',     // Service ID
    'template_kz0nel8',    // Template ID
    templateParams,
    'cfYT-8aK2jhcc39C3'    // Public Key
  );
};
```

---

## ⚡ Performance & Optimization

### Build Optimizations

- **Code Splitting:** Vite automatically splits code by route
- **Tree Shaking:** Unused code eliminated from production bundle
- **Asset Optimization:** Images and CSS minified
- **Module Preloading:** Critical resources preloaded

### Performance Metrics

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Lighthouse Score:** 95+ (Performance)

### Best Practices

1. **Lazy Load Images:** Use `loading="lazy"` attribute
2. **Optimize Animations:** Use `will-change` CSS property sparingly
3. **Minimize Re-renders:** Use `React.memo()` for expensive components
4. **Intersection Observer:** Trigger animations only when visible

---

## 📊 Architecture Decisions

### Why Vite?

- **Fast HMR:** Instant updates during development
- **Native ESM:** No bundling in dev mode
- **Optimized Build:** Rollup-based production builds
- **Plugin Ecosystem:** Rich plugin support

### Why Framer Motion?

- **Declarative Animations:** Easy-to-read animation syntax
- **Performance:** GPU-accelerated animations
- **Gesture Support:** Built-in drag, tap, and hover handling
- **Layout Animations:** Automatic layout transitions

### Why Tailwind CSS?

- **Utility-First:** Rapid UI development
- **Customization:** Easy theme customization
- **Responsive Design:** Built-in responsive utilities
- **File Size:** PurgeCSS removes unused styles

---

## 🔧 Configuration Files

### `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### `postcss.config.js`

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### `package.json` Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Gianluca Marin**

- Website: [www.gianlucamarin.com](https://www.gianlucamarin.com)
- LinkedIn: [Gianluca Marin](https://www.linkedin.com/in/gianluca-marin-5ba027333/)
- Email: maringianluca1@gmail.com

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Vercel** - For seamless deployment platform
- **Framer** - For the powerful animation library
- **Tailwind Labs** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
