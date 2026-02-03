// ========================================
// CONFIGURATION FILE
// Edit this file to customize your portfolio
// ========================================

const CONFIG = {
    // ----------------------------------------
    // Personal Information
    // Update these in index.html directly:
    // - Your name (hero section, about, footer)
    // - Your city (about section)
    // - Your email (contact section)
    // - Profile image URL (about section)
    // - Social media links (hero, contact sections)
    // ----------------------------------------

    // ----------------------------------------
    // Skills List
    // Technologies you work with
    // ----------------------------------------
    skills: [
        "Python",
        "R",
        "C",
        "SQL",
        "TypeScript",
        "React",
        "NumPy",
        "Pandas"
    ],

    // ----------------------------------------
    // Projects
    // Add, edit, or remove projects here
    // ----------------------------------------
    projects: [
        {
            title: "M3ssag1n8",
            description: "A real-time messaging web application built with TypeScript featuring workspaces, channels, and threaded conversations. Users can organize discussions into topic-based channels, react to messages with emojis, and format text with bold, italic, and hyperlinks. The frontend uses a Model-View-Controller architecture with custom Web Components, while real-time updates are powered by Server-Sent Events.",
            tech: ["TypeScript", "HTML5", "CSS3", "Parcel"],
            image: "photos/M3ssag1ng.png",
            github: "https://github.com/shivam-dalmia/M3ssag1n8-app"
        },
        {
            title: "OwlDB",
            description: "A lightweight NoSQL document database built from scratch in Go. Features a RESTful API for CRUD operations, real-time subscriptions via Server-Sent Events, JSON Schema validation, and token-based authentication. The storage layer uses a custom concurrent skip list implementation for thread-safe, high-performance reads and writes.",
            tech: ["Go", "REST API", "JSON Schema", "SSE"],
            image: "photos/owlDB.jpg",
            github: "https://github.com/shivam-dalmia/owlDB"
        },
        {
            title: "Rice Laundry",
            description: "Built for HackRice 13 to solve overcrowded laundry rooms, this real-time dashboard lets students check machine availability from their dorms. Key features include a \"Smart Seeder\" that automatically populates machine data for new deployments, and a robust persistence layer that syncs user actions across sessions.",
            tech: ["React", "Node.js", "Real-time", "Dashboard"],
            image: "photos/laundry management.png",
            github: "https://github.com/shivam-dalmia/rice-laundry"
        },
        {
            title: "Stonks",
            description: "A full-stack paper trading app where users practice stock trading with virtual money using live market data from Alpaca. Features a dark-themed UI with interactive candlestick charts, multi-portfolio management, Google OAuth, and background jobs for market data. Includes Docker setup, GitHub Actions CI/CD, and E2E tests with Cypress.",
            tech: ["Next.js", "FastAPI", "BigTable", "Cypress"],
            image: "photos/paper-trading.png",
            github: "https://github.com/shivam-dalmia/Stonks"
        }
    ]
};

// ========================================
// HOW TO CUSTOMIZE
// ========================================
//
// 1. CHANGE YOUR NAME & INFO:
//    Open index.html and search for "Your Name" to replace all instances
//    Update email, city, and social links
//
// 2. ADD/REMOVE SKILLS:
//    Edit the 'skills' array above
//
// 3. ADD A NEW PROJECT:
//    Copy one of the project objects and modify it
//    Add it to the 'projects' array
//
// 4. REMOVE A PROJECT:
//    Delete the entire project object from the array
//    (Don't forget to remove the trailing comma from the previous item)
//
// 5. CHANGE COLORS:
//    Open styles.css and edit the CSS variables at the top:
//    --accent-primary: Your main accent color (currently cyan)
//    --accent-secondary: Secondary accent (currently purple)
//    --bg-primary: Main background color
//
// 6. CHANGE TYPING TEXTS:
//    Edit the 'typingTexts' array above
//
// 7. ADD YOUR PHOTO:
//    Replace the placeholder URL in index.html with your image URL
//    Or place an image file in the folder and reference it
//
// ========================================
