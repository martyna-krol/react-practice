import styles from './Card.module.scss';
// import clsx from 'clsx';


const Card = props => {
    return (
        <li className={styles.card}>{props.title} {/*<span className={clsx("fa fa-star-o", props.isFavorite === true && styles.active)}>*/} </li>
    );
};

export default Card;