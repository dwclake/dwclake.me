import Image from "next/image";

import styles from "./Header.module.css";

export function Header() {
    return (
        <div className={styles.body}>
            <Image className={styles.selfie} src="/images/selfie.jpg" alt="selfie" width={80} height={80}/>
            <ul className={styles.nav}>
                <li>Home</li>
                <li>Code</li>
                <li>Photography</li>
                <li>Writing</li>
                <li>Music</li>
                <li>About</li>
            </ul>
        </div>
    );
}
