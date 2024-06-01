import { ExperienceSectionItem } from "../ExperienceSection/ExperienceSection";

type TimelineCardProps = {
    item: ExperienceSectionItem;
};

export default function TimelineCard({ item }: TimelineCardProps) {
    const {
        title,
        description,
        company,
        place,
        startDate,
        endDate,
    } = item;
    return (
        <div className="p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="default-text-gradient mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            {/* Company and place (left) + dates (right) */}
            <div className="flex flex-col md:flex-row justify-between text-gray-600 dark:text-gray-400 pb-4">
                <p className="italic">
                    {company} - {place}
                </p>
                <p className="italic">
                    {startDate} - {endDate}
                </p>
            </div>
            <ul className="list-disc pl-5">
                {description.map((desc, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 pb-2">
                        {desc}
                    </li>
                ))}
            </ul>
        </div>
    );
}