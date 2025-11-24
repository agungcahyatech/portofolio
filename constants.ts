import { Project, Skill, SocialLink } from './types';

export const PORTFOLIO_OWNER = "Agung Cahya Gumilar";
// GANTI URL INI DENGAN URL FOTO ANDA YANG SEBENARNYA
export const PROFILE_IMAGE_URL = "https://i.imgur.com/CwW9WsX.jpeg";

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "twitter" }
];

export const CONTENT = {
  id: {
    jobTitle: "Full Stack Developer",
    tagline: "Membangun pengalaman digital yang menggabungkan seni dengan rekayasa.",
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Kontak",
      hireMe: "Rekrut Saya"
    },
    hero: {
      greeting: "Halo, saya",
      ctaProject: "LIHAT KARYA",
      ctaContact: "HUBUNGI SAYA"
    },
    about: {
      title: "Tentang Saya",
      description1: "Saya adalah seorang insinyur perangkat lunak dengan hasrat mendalam untuk menciptakan solusi yang skalabel dan efisien. Dengan pengalaman lebih dari 6 tahun di industri teknologi, saya telah menangani berbagai proyek mulai dari aplikasi startup tahap awal hingga sistem perusahaan berskala besar.",
      description2: "Di luar pekerjaan teknis, saya memiliki ketertarikan besar pada kecerdasan buatan dan bagaimana hal itu dapat membentuk masa depan interaksi manusia-komputer. Ketika tidak sedang coding, Anda mungkin menemukan saya sedang mendaki gunung, bermain game strategi, atau bereksperimen dengan resep kopi baru.",
      stats: [
        { label: "Tahun Pengalaman", value: "4+" },
        { label: "Proyek Selesai", value: "40+" },
        { label: "Klien Puas", value: "25+" }
      ]
    },
    testimonials: {
      title: "Apa Kata Klien"
    },
    skills: {
      title: "Keahlian Teknis"
    },
    projects: {
      title: "Proyek Unggulan",
      viewProject: "Lihat Proyek",
      filterAll: "Semua"
    },
    contact: {
      title: "Mari Bekerja Sama",
      subtitle: "Punya ide proyek atau sekadar ingin menyapa? Saya selalu terbuka untuk mendiskusikan peluang baru.",
      nameLabel: "Nama",
      namePlaceholder: "Budi Santoso",
      emailLabel: "Email",
      emailPlaceholder: "budi@contoh.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritakan tentang proyek Anda...",
      submit: "Kirim Pesan"
    },
    footer: {
      rights: "Hak cipta dilindungi.",
      madeWith: "Dibuat dengan React, Tailwind & Gemini AI.",
      description: "Bergabunglah dengan dunia di mana kode menjadi nyata. Rasakan pengalaman digital paling imersif.",
      legal: "Hukum",
      terms: "Syarat Layanan",
      privacy: "Kebijakan Privasi"
    },
    ai: {
      initialMessage: "Sistem diinisialisasi. Saya Bot Agung. Tanyakan tentang protokol, keahlian, atau proyek.",
      placeholder: "Masukkan perintah...",
      typing: "Sedang mengetik...",
      error: "Koneksi terputus. Mencoba ulang...",
      headerTitle: "AGUNG_OS",
      startChat: "MULAI_OBROLAN"
    },
    data: {
      projects: [
        {
          id: 1,
          title: "DinoTopUp",
          description: "Platform top-up game terpercaya dengan sistem otomatis. Dibangun menggunakan Laravel untuk menangani ribuan transaksi harian dengan aman dan cepat.",
          technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Payment Gateway"],
          imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
          link: "https://www.dinotopup.com/id"
        },
        {
          id: 2,
          title: "Prahansu",
          description: "Website profil perusahaan (Company Profile) yang modern dan responsif. Dikembangkan secara fullstack menggunakan Laravel untuk menyajikan informasi korporat yang elegan.",
          technologies: ["Laravel", "PHP", "JavaScript", "Tailwind CSS"],
          imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
          link: "https://prahansu.com/"
        },
        {
          id: 3,
          title: "E-Commerce AI",
          description: "Mesin rekomendasi berbasis AI untuk pengecer mode. Meningkatkan tingkat konversi sebesar 35% melalui algoritma saran yang dipersonalisasi.",
          technologies: ["Python", "TensorFlow", "FastAPI", "Next.js"],
          imageUrl: "https://picsum.photos/600/400?random=2",
          link: "#"
        }
      ],
      skills: [
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Three.js"] },
        { category: "Backend", items: ["Laravel", "PHP", "MySQL", "Node.js", "Go", "PostgreSQL"] },
        { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD Pipelines"] },
        { category: "AI/ML", items: ["Gemini API", "Python", "LangChain", "OpenCV"] }
      ],
      testimonials: [
        {
          id: 1,
          quote: "Agung adalah insinyur luar biasa. Dia mengubah ide kompleks kami menjadi MVP yang solid dalam waktu singkat.",
          author: "Sarah L.",
          role: "Founder",
          company: "TechStart"
        },
        {
          id: 2,
          quote: "Kemampuan teknis dan pemecahan masalahnya sangat mengesankan. Sangat merekomendasikan bekerja dengannya.",
          author: "Budi P.",
          role: "CTO",
          company: "FinTech Solusi"
        },
        {
          id: 3,
          quote: "Detail orientasi dan estetika desainnya membuat produk kami menonjol di pasar.",
          author: "Diana R.",
          role: "Product Manager",
          company: "Creative Corp"
        }
      ]
    }
  },
  en: {
    jobTitle: "Full Stack Developer",
    tagline: "Building digital experiences that blend art with engineering.",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      hireMe: "Hire Me"
    },
    hero: {
      greeting: "Hello, I am",
      ctaProject: "VIEW WORK",
      ctaContact: "CONTACT ME"
    },
    about: {
      title: "About Me",
      description1: "I am a software engineer with a deep passion for creating scalable and efficient solutions. With over 6 years of experience in the tech industry, I have handled various projects ranging from early-stage startup apps to large-scale enterprise systems.",
      description2: "Beyond technical work, I have a strong interest in artificial intelligence and how it can shape the future of human-computer interaction. When not coding, you might find me hiking, playing strategy games, or experimenting with new coffee recipes.",
      stats: [
        { label: "Years Experience", value: "6+" },
        { label: "Projects Completed", value: "40+" },
        { label: "Happy Clients", value: "25+" }
      ]
    },
    testimonials: {
      title: "Client Testimonials"
    },
    skills: {
      title: "Technical Skills"
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      filterAll: "All"
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Have a project idea or just want to say hi? I'm always open to discussing new opportunities.",
      nameLabel: "Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message"
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with React, Tailwind & Gemini AI.",
      description: "Be part of a world where code comes alive. Build the most immersive digital experiences.",
      legal: "Legal",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    },
    ai: {
      initialMessage: "System initialized. I am AgungBot. Ask about protocols, skills, or projects.",
      placeholder: "Enter command...",
      typing: "Typing...",
      error: "Connection lost. Retrying...",
      headerTitle: "AGUNG_OS",
      startChat: "START_CHAT"
    },
    data: {
      projects: [
        {
          id: 1,
          title: "DinoTopUp",
          description: "Trusted game top-up platform with automated systems. Built using Laravel to handle thousands of daily transactions securely and quickly.",
          technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Payment Gateway"],
          imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
          link: "https://www.dinotopup.com/id"
        },
        {
          id: 2,
          title: "Prahansu",
          description: "Modern and responsive company profile website. Fullstack development using Laravel to present corporate information elegantly.",
          technologies: ["Laravel", "PHP", "JavaScript", "Tailwind CSS"],
          imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
          link: "https://prahansu.com/"
        },
        {
          id: 3,
          title: "E-Commerce AI",
          description: "AI-powered recommendation engine for fashion retailers. Increased conversion rates by 35% through personalized suggestion algorithms.",
          technologies: ["Python", "TensorFlow", "FastAPI", "Next.js"],
          imageUrl: "https://picsum.photos/600/400?random=2",
          link: "#"
        }
      ],
      skills: [
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Three.js"] },
        { category: "Backend", items: ["Laravel", "PHP", "MySQL", "Node.js", "Go", "PostgreSQL"] },
        { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD Pipelines"] },
        { category: "AI/ML", items: ["Gemini API", "Python", "LangChain", "OpenCV"] }
      ],
      testimonials: [
        {
          id: 1,
          quote: "Agung is an exceptional engineer. He turned our complex ideas into a solid MVP in record time.",
          author: "Sarah L.",
          role: "Founder",
          company: "TechStart"
        },
        {
          id: 2,
          quote: "His technical skills and problem-solving abilities are impressive. Highly recommend working with him.",
          author: "Budi P.",
          role: "CTO",
          company: "FinTech Solusi"
        },
        {
          id: 3,
          quote: "His attention to detail and design aesthetics made our product stand out in the market.",
          author: "Diana R.",
          role: "Product Manager",
          company: "Creative Corp"
        }
      ]
    }
  }
};

export const getSystemInstruction = (lang: 'id' | 'en') => {
  const isId = lang === 'id';
  const data = isId ? CONTENT.id : CONTENT.en;

  return `
    You are an AI Assistant for ${PORTFOLIO_OWNER}'s portfolio website.
    Your name is "AgungBot".
    You are helpful, professional, yet casual and slightly witty.
    ${isId ? 'PLEASE ANSWER ALL QUESTIONS IN INDONESIAN.' : 'PLEASE ANSWER ALL QUESTIONS IN ENGLISH.'}

    Here is the context about ${PORTFOLIO_OWNER}:
    - Role: ${data.jobTitle}
    - Tagline: ${data.tagline}
    - Background: ${data.about.description1}
    - Interests: ${data.about.description2}
    - Skills: ${JSON.stringify(data.data.skills)}
    - Notable Projects: ${JSON.stringify(data.data.projects.map(p => ({ title: p.title, description: p.description, tech: p.technologies })))}
    - Testimonials: ${JSON.stringify(data.data.testimonials)}

    Instructions:
    1. Answer specific questions about ${PORTFOLIO_OWNER}'s experience, skills, and projects.
    2. If asked for contact info, suggest they use the contact form on the website.
    3. Keep answers concise (under 3 sentences) unless asked for details.
    4. If asked about unrelated topics, politely steer the conversation back to software engineering or the portfolio.
  `;
};