
import iconSrc from "@/images/up.svg";

export default function GoTop() {
    return (
        // centered div, relative positioned, with img inside
        <div className="cursor-pointer w-full flex justify-center" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            {/* Rounded white semi transparent background */}
            <img
                src={iconSrc}
                alt="Go to top"
                className="w-12 h-12 mb-8 rounded-full p-2 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            />
        </div>
    );
}