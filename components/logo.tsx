// import localFont from 'next/font/local';
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// const headingFont = localFont({
//     src: '../../public/fonts/font.woff'
// });

export const Logo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden md:flex hover:opacity-75 transition">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    height={50}
                    width={50}
                />
                <p className={cn("text-lg text-neutral-700 pb-1 hover:font-bold"
                    // headingFont.className
                )}>
                    Peakify
                </p>
            </div>
        </Link>
    );
};
