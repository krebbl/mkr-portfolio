import Link from "next/link";
import Image from "next/image";

const styles = {
    link: "ml-10 text-sm uppercase hover:border-b"
}

export default function Navbar() {
    return <div className="fixed w-full h-20 z-10 bg-white">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <div className="py-3">
                <Image src="/../public/logo.png" width={100} height={60}/>
            </div>
            <div>
                <ul className="hidden md:flex">
                    <li className={styles.link}>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="#about">
                            About
                        </Link>
                    </li>

                    <li className={styles.link}>
                        <Link href="#projects">
                            Projects
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="#contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
