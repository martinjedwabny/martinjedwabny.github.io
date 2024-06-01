import SectionTitle from "../SectionTitle/SectionTitle";
import iconSrc from "@/images/research.svg";

export function ResearchSection() {
    return (
        <section className="px-4 md:px-10 flex flex-col max-w-2xl mx-auto">
            <SectionTitle
                title="Research"
                icon={iconSrc}
                className="md:pt-10 pb-4 max-sm:justify-center"
            />
        </section>
    );
}