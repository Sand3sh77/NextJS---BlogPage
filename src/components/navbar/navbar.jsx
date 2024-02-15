import Links from "./links/links";
import styles from "./navbar.module.css"


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div className="links">
                <Links />
            </div>
        </div>
    );
}

export default Navbar;