import { motion } from "framer-motion";

export default function Button({
    children,
    onClick,
}: React.PropsWithChildren<
    React.ButtonHTMLAttributes<HTMLButtonElement>
>) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-gray-900 rounded-full p-px text-xs sm:text-sm leading-6  text-white inline-block"
        >
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)]" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-gray-900 py-2 px-4 ring-1 ring-white/10 ">
                {children}
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0" />
        </motion.button>
    );
}