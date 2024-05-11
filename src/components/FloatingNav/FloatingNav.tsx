"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { HoverBorder } from "../HoverBorder/HoverBorder";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "flex max-w-fit  fixed my-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  items-center justify-center",
                className
            )}
        >
            <HoverBorder>
            {navItems.map((navItem: any, idx: number) => (
                <button
                    key={`link=${idx}`}
                    onClick={navItem.onClick}
                    className={cn(
                        "relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                    )}
                >
                    <span className="block sm:hidden">{navItem.icon}</span>
                    <span className="hidden sm:block text-sm">{navItem.name}</span>
                </button>
            ))}
            </HoverBorder>
            </div>
    );
};
