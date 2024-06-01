import { useEffect, useRef, useState } from "react";
import {
    motion,
    useTransform,
    useScroll,
    useSpring,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const Timeline = ({
    id,
    items,
    className,
}: {
    id: string,
    items: React.ReactNode[];
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end end"],
    });

    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, []);

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 0.8], [0, svgHeight]),
        {
            stiffness: 500,
            damping: 90,
        }
    );
    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, svgHeight - 200]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    useEffect(() => {
        console.log(scrollYProgress.get(), y1.get(), y2.get());
    }, [scrollYProgress, y1, y2]);

    return (
        <motion.div
            ref={ref}
            className={cn("relative w-full max-w-4xl mx-auto h-full flex flex-row", className)}
        >
            <div className="mt-5 max-md:ml-[-10px]">
                <svg
                    viewBox={`0 0 20 ${svgHeight}`}
                    width="20"
                    height={svgHeight} // Set the SVG height
                    className="block"
                    aria-hidden="true"
                >
                    <motion.path
                        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} 24V ${svgHeight}`}
                        fill="none"
                        stroke="#9091A0"
                        strokeOpacity="0.36"
                        transition={{
                            duration: 10,
                        }}
                    ></motion.path>
                    <motion.path
                        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} 24V ${svgHeight}`}
                        fill="none"
                        stroke={`url(#gradient${id})`}
                        strokeWidth="1.25"
                        className="motion-reduce:hidden"
                        transition={{
                            duration: 10,
                        }}
                    ></motion.path>
                    <defs>
                        <motion.linearGradient
                            id={`gradient${id}`}
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            x2="0"
                            y1={y1} // set y1 for gradient
                            y2={y2} // set y2 for gradient
                        >
                            <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                            <stop stopColor="#18CCFC"></stop>
                            <stop offset="0.325" stopColor="#6344F5"></stop>
                            <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>
            <div ref={contentRef} className="flex-auto">
                {items.map((item, index) => (
                    <div className="flex flex-row">
                        <TimelineDot className="my-12 flex-[0_0_auto]" />
                        <div className="py-4 pl-4 flex-auto">
                            {item}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

function TimelineDot({ className }: { className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll()
    const elementY = ref.current?.offsetTop ?? 9999;
    const [activated, setActivated] = useState<boolean>(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        setActivated(latest > elementY);
    })
    return <motion.div
        ref={ref}
        transition={{
            duration: 0.2,
            delay: 0.5,
        }}
        animate={{
            boxShadow: !activated
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        className={cn("h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center -ml-[9px] z-20 mt-2", className)}
    >
        <motion.div
            transition={{
                duration: 0.2,
                delay: 0.5,
            }}
            animate={{
                backgroundColor: !activated ? "white" : "var(--emerald-500)",
                borderColor: !activated ? "white" : "var(--emerald-600)",
            }}
            className="h-2 w-2  rounded-full border border-neutral-300 bg-white" />
    </motion.div>;
}
