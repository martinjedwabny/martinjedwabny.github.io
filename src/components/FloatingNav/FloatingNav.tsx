import React from "react";
import { cn } from "@/utils/cn";
import { HoverBorder } from "../HoverBorder/HoverBorder";

type NavItem = {
    name: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type NavIcon = {
    name: string;
    href: string;
    iconPath: string;
};

export const FloatingNav = ({
    navItems,
    navIcons,
    className,
}: {
    navItems: NavItem[];
    navIcons: NavIcon[];
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "flex max-w-fit  fixed my-10 inset-x-0 mx-auto rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  items-center justify-center",
                className
            )}
        >
            <HoverBorder>
                {navItems.map((navItem: NavItem, idx: number) => (
                    <button
                        key={navItem.name}
                        onClick={navItem.onClick}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        <span className="text-xs sm:text-sm">{navItem.name}</span>
                    </button>
                ))}
                {navIcons.map((navIcon: NavIcon, idx: number) => (
                    <a
                        key={navIcon.name}
                        href={navIcon.href}
                    >
                        <img
                            src={navIcon.iconPath}
                            alt={navIcon.name}
                            className="w-4 h-4 hover:opacity-70"
                        />
                    </a>
                ))}
            </HoverBorder>
        </div>
    );
};
