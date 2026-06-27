const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "",
        title:
            "No blogs yet",
        image: "",
        link: "",
    },
    // {
    //     id: 2,
    //     date: "",
    //     title: "",
    //     image: "",
    //     link: "",
    // },
    // {
    //     id: 3,
    //     date: "",
    //     title: "",
    //     image: "",
    //     link: "",
    // },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "html","javascript"],
    },
    // {
    //     category: "Mobile",
    //     items: ["React Native", "Expo"],
    // },
    {
        category: "Styling",
        items: ["Tailwind CSS", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express"],
    },
    {
        category: "Database",
        items: ["MongoDB", "MySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/Somnath0411",
    },
    // {
    //     id: 2,
    //     text: "Platform",
    //     icon: "/icons/atom.svg",
    //     bg: "#4bcb63",
    //     link: "https://jsmastery.com/",
    // },
    // {
    //     id: 3,
    //     text: "Twitter/X",
    //     icon: "/icons/twitter.svg",
    //     bg: "#ff866b",
    //     link: "https://x.com/jsmasterypro",
    // },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/somnath-sb/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    // {
    //     id: 2,
    //     icon: "/icons/gicon2.svg",
    //     title: "Memories",
    // },
    // {
    //     id: 3,
    //     icon: "/icons/file.svg",
    //     title: "Places",
    // },
    // {
    //     id: 4,
    //     icon: "/icons/gicon4.svg",
    //     title: "People",
    // },
    // {
    //     id: 5,
    //     icon: "/icons/gicon5.svg",
    //     title: "Favorites",
    // },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.jpg",
    },
    {
        id: 2,
        img: "/images/gal2.jpeg",
    },
    {
        id: 3,
        img: "/images/gal3.jpeg",
    },
    // {
    //     id: 4,
    //     img: "/images/gal4.png",
    // },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Ecommerce Website Application",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "ecommerce.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                   description: [
    "The eCommerce website is a full-stack web application designed to deliver a fast, intuitive, and secure online shopping experience.",
    "It provides core eCommerce functionality including product browsing, category filtering, shopping cart management, user authentication, and order processing.",
    "The application leverages reusable React components, RESTful APIs, responsive design principles, and efficient state management to ensure smooth interactions across devices.",
    "Built with React, Node.js, Express.js, MySQL, and modern JavaScript, it follows a scalable client-server architecture with efficient database management and maintainable code.",
]
                },
                {
                    id: 2,
                    name: "ecommerce",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Somnath0411/ecommerce",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "ecommerce.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     href: "https://google.com",
                //     position: "top-60 right-20",
                // },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "employee management system",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "employee-management-system.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
    "The Employee Management System is a full-stack web application built to simplify employee record management through a modern and intuitive interface.",
    "It implements complete CRUD operations, allowing administrators to efficiently create, update, view, and delete employee information while maintaining organized data.",
    "The application features responsive UI components, client-side routing, form validation, and seamless API integration to deliver a smooth user experience.",
    "Built with React, Node.js, Express.js, MySQL, and Tailwind CSS, it follows a scalable client-server architecture with RESTful APIs for efficient data management.",
],
                },
                {
                    id: 2,
                    name: "employee-management-system.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Somnath0411/employee-management-system",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "employee-management-system.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     href: "https://google.com",
                //     position: "top-60 left-5",
                // },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Multi-Modal depression detection",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Multimodal depression detection.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Our Mental Health Analysis System is a smart tool that gauges emotional wellbeing through text, audio, and visual input.",
                        "Instead of relying on guesswork, you can type a journal entry, upload a voice clip, or share a photo, and get an instant emotional and mental health snapshot.",
                        "Think of it like a personal wellness mirror—reading your tone, words, and expressions to offer recommendations tailored just for you.",
                        "It’s built with Python and Flask on the backend, paired with a React frontend, all running locally so your data stays private and is never stored.",
                    ],
                },
                {
                    id: 2,
                    name: "multimodal-depression-detection.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Somnath0411/Realtime-MultiModal-Depression-detection-",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "multimodal-depression-detection.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     href: "https://google.com",
                //     position: "top-60 right-20",
                // },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/me.jpeg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/casual-me.jpeg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/conference-me.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/conference-me.jpeg",
            description: [
                "Hi, I’m Somnath 👋 — a full-stack dev who genuinely enjoys the messy middle part of building software, not just the finished product.",
                "React and MySQL are my comfort zone, but I’m just as happy wiring up a REST API or untangling a gnarly state bug at 1AM.",
                "I’ve shipped real things in real teams from a winning hackathon project on mental health analysis to a full CRUD employee management system so I care a lot about code that actually holds up outside a demo.",
                "When I’m not coding, I’m probably reading docs I should’ve read three days ago, or convincing myself one more certification will finally make me feel ‘done learning’ (spoiler: it won’t) 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    // id: 4,
    // type: "trash",
    // name: "Trash",
    // icon: "/icons/trash.svg",
    // kind: "folder",
    // children: [
    //     {
    //         id: 1,
    //         name: "trash1.png",
    //         icon: "/images/image.png",
    //         kind: "file",
    //         fileType: "img",
    //         position: "top-10 left-10",
    //         imageUrl: "/images/trash-1.png",
    //     },
    //     {
    //         id: 2,
    //         name: "trash2.png",
    //         icon: "/images/image.png",
    //         kind: "file",
    //         fileType: "img",
    //         position: "top-40 left-80",
    //         imageUrl: "/images/trash-2.png",
    //     },
    // ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };