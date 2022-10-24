import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Supawat Suntornlimsiri</div>
            <div className={styles.hamburger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <a href='/' className={styles.active}>Home</a>
                    </li>
                    <li>
                        <a href='/' className={styles.active}>Contact</a>
                    </li>
                    <li>
                        <a href='/' className={styles.active}>Resume</a>
                    </li>
                    <li>
                        <a href='/' className={styles.active}>Documentation</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header()