import { cn } from "@/utils/cn";
import { Pointer3d } from "../Pointer3d/Pointer3d";

export default function SectionTitle({ title, icon, className }: { title: string, icon: string, className?: string}) {
    return (
        <div className={cn("flex flex-row items-center gap-3", className)}>
            {/* <Pointer3d className="!w-14 !h-14" /> */}
            <img
                src={icon}
                className="w-10 h-10"
            />
            <h2>
                {title}
            </h2>
        </div>
    );
}