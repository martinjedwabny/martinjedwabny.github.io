import React from "react";

export function HoverBorder({
    children,
}: React.PropsWithChildren<
    React.HTMLAttributes<HTMLElement>
>) {
    return (
        <div
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-gray-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex items-center z-10 rounded-full bg-gray-900 ring-1 ring-white/10  gap-4 px-4 py-3">
                {children}
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-500/0 via-emerald-500/90 to-emerald-500/0 transition-opacity duration-500 group-hover:opacity-40" />
        </div>
    );
}