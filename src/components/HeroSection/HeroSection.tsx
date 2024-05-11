import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../HeroHighlight/HeroHighlight";

const messages = {
    title: "Martin Jedwabny",
    subtitle: "Software Engineer, Ph.D.",
}

export default function HeroSection() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed md:leading-[3rem] lg:leading-[4rem] text-center mx-auto"
            >
                {messages.title}
                <br/>
                <Highlight className="text-black dark:text-white">
                    {messages.subtitle}
                </Highlight>
            </motion.h1>
        </HeroHighlight>
    );
}
