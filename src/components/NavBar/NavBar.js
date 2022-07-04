import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
    return (
    <nav className={styles.nav}>
        <Container>
            <div className={styles.row}>
                <div className={styles.col}>
                    <a href="/" className={styles.icon + ' fa fa-tasks'}></a>
                </div>
                <div className={styles.col}>
                    <ul className={styles.navList}>
                        <li className={styles.navLink}><a href="/">Home</a></li>
                        <li className={styles.navLink}><a href="/favorite">Favorite</a></li>
                        <li className={styles.navLink}><a href="/about">About</a></li>
                    </ul>
                </div>
            </div>
        </Container>
    </nav>
)};

export default NavBar;