// Lucide Icons Initialization
lucide.createIcons();

// Typing effect for Hero Section
const words = ["Berdampak.", "Inovatif.", "Kolaboratif."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Project Switcher Data & Logic
const projects = {
    nexus: {
        title: "Nexus Dashboard",
        category: "Platform Analitik Real-Time",
        desc: "Platform analitik real-time dengan visualisasi data interaktif dan sistem manajemen pengguna berbasis AI. Menampilkan grafik dinamis, laporan otomatis, dan dashboard yang dapat dikustomisasi.",
        url: "nexus-dashboard.vercel.app",
        tag: "Proyek Utama",
        tech: ["React", "TypeScript", "D3.js", "Node.js"],
        features: [
            "Real-time analytics engine",
            "AI-powered insights",
            "Custom dashboard builder",
            "Export laporan PDF otomatis"
        ]
    },
    aether: {
        title: "Aether Commerce",
        category: "Platform E-Commerce Modern",
        desc: "Solusi e-commerce generasi berikutnya yang dirancang untuk performa tinggi, pencarian cepat berbasis kecerdasan buatan, serta pengalaman transaksi seamless.",
        url: "aether-commerce.vercel.app",
        tag: "Proyek Pendamping",
        tech: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
        features: [
            "Rekomendasi produk AI",
            "Checkout satu langkah",
            "Manajemen inventori real-time",
            "Integrasi multi-payment gateway"
        ]
    }
};

function switchProject(key) {
    const p = projects[key];
    const btnNexus = document.getElementById("tab-nexus");
    const btnAether = document.getElementById("tab-aether");

    if (key === 'nexus') {
        btnNexus.className = "px-5 py-2.5 rounded-lg text-sm font-semibold transition bg-accentPurple text-white";
        btnAether.className = "px-5 py-2.5 rounded-lg text-sm font-semibold transition text-gray-400 hover:text-white";
    } else {
        btnAether.className = "px-5 py-2.5 rounded-lg text-sm font-semibold transition bg-accentPurple text-white";
        btnNexus.className = "px-5 py-2.5 rounded-lg text-sm font-semibold transition text-gray-400 hover:text-white";
    }

    document.getElementById("project-title").innerText = p.title;
    document.getElementById("project-category").innerText = p.category;
    document.getElementById("project-desc").innerText = p.desc;
    document.getElementById("project-url").innerText = p.url;
    document.getElementById("project-tag").innerText = p.tag;

    // Render Tech Stack
    document.getElementById("project-tech").innerHTML = p.tech.map(t => 
        `<span class="px-3 py-1 bg-darkBg border border-borderPurple rounded-lg text-xs font-mono text-gray-300">${t}</span>`
    ).join('');

    // Render Features
    document.getElementById("project-features").innerHTML = p.features.map(f => 
        `<li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-accentPink"></i> ${f}</li>`
    ).join('');

    lucide.createIcons();
}