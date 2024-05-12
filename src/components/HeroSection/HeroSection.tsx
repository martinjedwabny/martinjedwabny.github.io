import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../HeroHighlight/HeroHighlight";
import avatarSrc from "@/images/avat.png";
import Button from "../Button/Button";
import { links } from "@/utils/links";

const messages = {
    title: "Hey there, I'm ",
    name: "Martin Jedwabny",
    intro: [
        "+4 years experience. ",
        "Software engineer with a Ph.D.in AI ",
        "from Buenos Aires, Argentina. I'm passionate about software development, machine learning, and writing beautiful code."
    ],
}

export default function HeroSection() {
    return (
        < HeroHighlight className="flex flex-col" >

            <div className="flex flex-col max-w-2xl items-center max-sm:mt-16">

                <div className="flex flex-row justify-center -ml-6">

                    <img
                        src={avatarSrc}
                        alt="Martin Jedwabny"
                        className="rounded-full w-14 h-14"
                    />
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
                        className="text-2xl md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed md:leading-[3rem] lg:leading-[4rem]"
                    >
                        {messages.title}
                        <br className="hidden max-sm:block" />
                        <Highlight>{messages.name}</Highlight>
                    </motion.h1>
                </div>

                <br />

                <p className="text-gray-200 pt-4 pb-8 md:px-12 max-sm:w-[280px] max-sm:text-balance max-sm:text-center">
                    {messages.intro[0]}
                    <span className="default-text-gradient font-medium">
                        {messages.intro[1]}
                    </span>
                    {messages.intro[2]}
                </p>

                <div className="flex flex-row gap-2 justify-center max-sm:w-[280px] max-sm:inline-block text-center">
                    {links.map((link, index) => (
                        <Button
                            key={index}
                            onClick={() => window.open(link.href)}
                            className="mb-4 mx-1"
                        >
                            <img
                                src={link.iconPath}
                                alt={link.name}
                                className="w-3 h-3 mr-1"
                            />
                            {link.name}
                        </Button>
                    ))}
                </div>
            </div>
        </HeroHighlight>
    );
}
