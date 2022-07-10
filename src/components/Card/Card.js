import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';


const Card = props => {
    const dispatch = useDispatch();
    const handleFavorite = () => {
        dispatch(toggleCardFavorite(props.id));
    };


    return (
        <li className={styles.card}>
            {props.title} 
            <span 
                onClick= {() => handleFavorite()} 
                className={clsx("fa", props.isFavorite === true && `${styles.active} + fa-star` , props.isFavorite === false && "fa-star-o")} /> 
        </li>
    );
};

export default Card;