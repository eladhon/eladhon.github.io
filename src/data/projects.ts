export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        title: "Kerala Private Bus Tracker",
        description: "Developed a mobile application to track and manage private bus services across Kerala. Implemented real-time location tracking, route discovery, and map-based visualization using backend services and open map data.",
        tech: ["Flutter", "Supabase", "OpenStreetMap"],
        link: "https://github.com/eladhon/kerala-private-bus-tracker",
        github: "https://github.com/eladhon/kerala-private-bus-tracker"
    },
    {
        title: "Medicare",
        description: "Built a web-based platform for searching and verifying medicine details including composition and side effects by consuming public health APIs. Focused on clean UI and accurate data presentation.",
        tech: ["HTML", "CSS", "JavaScript", "OpenFDA API"],
        link: "https://github.com/eladhon/medicare",
        github: "https://github.com/eladhon/medicare"
    },
];
