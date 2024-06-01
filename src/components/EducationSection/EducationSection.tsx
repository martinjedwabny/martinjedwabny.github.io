import SectionTitle from "../SectionTitle/SectionTitle";
import iconSrc from "@/images/research.svg";
import { Timeline } from "../Timeline/Timeline";
import TimelineCard, { TimelineItem } from "../TimelineCard/TimelineCard";

const items: TimelineItem[] = [
    {
        title: "Ph.D. in Computer Science (AI)",
        entity: "University of Montpellier",
        place: "France",
        startDate: "Oct 2019",
        endDate: "Dec 2022",
        description: [
            "Thesis title: A preference-based approach to machine ethics for automated planning.",
            "Topics: Automated planning and ethical AI.",
        ]
    },
    {
        title: "M.Sc. in Computer Science",
        entity: "University of Buenos Aires",
        place: "Argentina",
        startDate: "Mar 2016",
        endDate: "Dec 2018",
        description: [
            "Coursework: Algorithms and Data Structures, Probability and Statistics, Data Science, Game Theory, Programming Language paradigms, and Algebra.",
            "GPA: 9.47 on a 0-10 scale.",
        ]
    },
];

export function EducationSection() {
    return (
        <section className="px-4 md:px-10 flex flex-col max-w-2xl mx-auto pb-16">
            <SectionTitle
                title="Education"
                icon={iconSrc}
                className="md:pt-10 pb-4 max-sm:justify-center"
            />
            <Timeline
                id="education-timeline"
                items={items.map((item) => (
                    <TimelineCard
                        item={item}
                    />
                ))}
            />
        </section>
    );
}