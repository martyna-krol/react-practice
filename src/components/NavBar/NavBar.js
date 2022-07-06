import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
    <nav className={styles.nav}>
        <Container>
            <div className={styles.row}>
                <div className={styles.col}>
                    <NavLink className={styles.icon + ' fa fa-tasks'} to="/"></NavLink>
                </div>
                <div className={styles.col}>
                    <ul className={styles.navList}>
                        <li className={styles.navLink}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                        <li className={styles.navLink}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                        <li className={styles.navLink}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </Container>
    </nav>
)};

export default NavBar;