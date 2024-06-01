import SectionTitle from "../SectionTitle/SectionTitle";
import iconSrc from "@/images/about.svg";
import profileSrc from "@/images/profile.jpeg";

export function AboutSection() {
    return (
        <section className="px-8 md:px-10 flex flex-col max-w-2xl mx-auto pb-16">
            <SectionTitle
                title="About Me"
                icon={iconSrc}
                className="md:pt-10 pb-4 max-sm:justify-center"
            />
            <div>
                <img
                    width="200"
                    height="200"
                    src={profileSrc}
                    alt="Martin Jedwabny"
                    className="float-right order-1 object-cover w-48 h-48 p-1 md:order-2 rotate-3 lg:p-2 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
                    style={{ objectPosition: "50% 50%" }}
                />
            <p className="text-gray-200 pt-4 pb-2 max-sm:text-balance">
                I'm Martin, a dedicated Argentinian &#x1f1e6;&#x1f1f7; software engineer with a PhD in Artificial Intelligence from the University of Montpellier. My doctoral research delved into critical areas of AI, including Machine Ethics, Automated Planning, Explainable AI, and Machine Learning.
            </p>
            <p className="text-gray-200 pt-4 pb-2 max-sm:text-balance">
                With a robust academic background and a passion for coding, I am currently focused on applying my skills in software development to create efficient and innovative solutions. I excel in developing high-quality software, ensuring meticulous attention to detail and organizational precision in every project.
            </p>
            <p className="text-gray-200 pt-4 pb-2 max-sm:text-balance">
                I am detail-oriented, highly organized, and driven by a commitment to excellence. My collaborative spirit and approachable demeanor make me an effective team player who is easy to work with.
                    </p>
            </div>
        </section>
    );
}