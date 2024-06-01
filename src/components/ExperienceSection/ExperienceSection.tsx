import { Timeline } from "@/components/Timeline/Timeline";
import TimelineCard, { TimelineItem } from "../TimelineCard/TimelineCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import iconSrc from "@/images/work.svg";

const items: TimelineItem[] = [
    {
        title: "Software Developer (Full-stack)",
        entity: "Anabasis Assets",
        place: "France",
        startDate: "Aug 2023",
        endDate: "Present",
        description: [
            "Led the front-end development team of Karnyx, the company's flagship online database exploration, editing, and querying solution, mentoring 1 junior developer and 2 interns in expanding their Typescript and React skillsets.",
            "Developed a Monaco-based code editor and language server for the company's proprietary database language.",
            "Implemented back-end services with Kotlin for real-time file editing and notifications via WebSockets.",
            "Managed the front-end team's Gitlab board to keep on track with deadlines, using Docker for fast CI/CD iteration."
        ]
    },
    {
        title: "Ph.D. Researcher - Computer Science (AI)",
        entity: "University of Montpellier",
        place: "France",
        startDate: "Oct 2019",
        endDate: "Dec 2022",
        description: [
            "Specialized in Ethical AI, developed theory and algorithms to ensure automated agents align with human values.",
            "Developed an AI planning-based model to compare plans based on their ethical nuances.",
            "Applied machine learning techniques to infer human preferences and discern ethical nuances between actions.",
            "Published 3 papers as the main author in international conferences, in addition to the Ph.D. thesis."
        ]
    },
    {
        title: "Software Developer (Full-stack)",
        entity: "Dubbing.digital",
        place: "Argentina",
        startDate: "Jan 2018",
        endDate: "Jan 2019",
        description: [
            "Developed a web application for Dubbing.digital, a SaaS startup in the dubbing industry as a Full-stack engineer.",
            "Spearheaded the front-end development of its website for job postings using Javascript and React.",
            "Integrated CouchDB/NoSQL back-end services to save postings, and generate Excel billing statements for clients."
        ]
    },
    {
        title: "Software Developer Intern (Front/Mobile)",
        entity: "Despegar.com",
        place: "Argentina",
        startDate: "Oct 2013",
        endDate: "Nov 2014",
        description: [
            "Developed the iOS app of Despegar.com, latin-america's leading online travel agency, within a 10-person team.",
            "Implemented a touristic package selling feature, facilitating thousands of transactions daily.",
            "Addressed production bugs and enhancements using Trello/Kanban and Jenkins for CI/CD pipelines."
        ]
    },
];

export function ExperienceSection() {
    return (
        <section className="px-4 md:px-10 flex flex-col max-w-2xl mx-auto pb-16">
            <SectionTitle
                title="Experience"
                icon={iconSrc}
                className="md:pt-10 pb-4 max-sm:justify-center"
            />
            <Timeline
                id="experience-timeline"
                items={items.map((item) => (
                    <TimelineCard
                        item={item}
                    />
                ))}
            />
        </section>
    );
}
