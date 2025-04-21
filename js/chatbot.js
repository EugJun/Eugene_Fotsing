const botData = {
    name: "Eugene Fotsing",
    education: {
        degree: "Bachelor's in Computer Technology",
        concentration: "Database and Data Science",
        school: "Bowie State University",
        details: "Currently pursuing my degree with a focus on data analysis and database management"
    },
    skills: [
        "Oracle",
        "MySQL",
        "Scrum",
        "Python",
        "SQL",
        "Machine Learning",
        "Agile Project Management",
        "Analytical Thinking",
        "Kanban",
        "SAFe",
        "JIRA",
        "Excel",
        "Anaconda",
        "Tableau",
        "Data Visualization",
        "Data Cleaning",
        "Linear regression",
        "Communication",
        "Team Collaboration",

    ],
    contact: {
        email: "EugenejuniorFotsing@gmail.com", // Update with your actual email
        github: "EugJun", // Update with your GitHub username
        linkedin: "linkedin.com/in/eugene-fotsing-3bab4225b" // Add your LinkedIn profile
    },
    experience: [
        {
            title: "Junior Scrum Master",
            company: "Agile Pinnacle",
            period: "May 2022 - August 2022",
            description: "Led agile teams, facilitated scrum events, and improved team productivity"
        },
        {
            title: "Software Engineer Intern",
            company: "Elios Consulting",
            period: "May 2021 - August 2021",
            description: " Provided application maintenance support, including debugging and troubleshooting, to ensure software compliance and reduce vulnerabilities by 50%."
        }
    ],
    interests: [
        "Data Analytics",
        "Machine Learning",
        "Database Design",
        "Agile Methodologies"
    ]
};

class Chatbot {
    constructor() {
        this.data = botData; // Use the botData object directly
    }

    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Greetings
        if (lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
            return `Hi! I'm ${this.data.name}'s virtual assistant. How can I help you?`;
        }
        
        // Education
        if (lowerMessage.includes('education') || lowerMessage.includes('study')) {
            return `${this.data.name} is studying ${this.data.education.degree} with a concentration in ${this.data.education.concentration} at ${this.data.education.school}. ${this.data.education.details}`;
        }
        
        // Skills
        if (lowerMessage.includes('skill') || lowerMessage.includes('know')) {
            return `${this.data.name}'s key skills include: ${this.data.skills.join(', ')}`;
        }
        
        // Experience
        if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
            const experiences = this.data.experience.map(exp => 
                `${exp.title} at ${exp.company} (${exp.period}): ${exp.description}`
            ).join('\n');
            return `Here's ${this.data.name}'s experience:\n${experiences}`;
        }

        // Contact
        if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
            return `You can contact ${this.data.name} via email at ${this.data.contact.email}`;
        }

        // Interests
        if (lowerMessage.includes('interest') || lowerMessage.includes('hobby')) {
            return `${this.data.name}'s interests include: ${this.data.interests.join(', ')}`;
        }

        // Default response
        return "I can tell you about Eugene's education, skills, experience, interests, or contact information. What would you like to know?";
    }
} 