import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite , removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';


const Card = props => {
    const dispatch = useDispatch();
    const handleFavorite = () => {
        dispatch(toggleCardFavorite(props.id));
    };
    const handleRemove = () => {
        dispatch(removeCard(props.id));
    };


    return (
        <li className={styles.card}>
            {props.title} 
            <div className='icons'>
                <span 
                    onClick= {() => handleFavorite()} 
                    className={clsx("fa", props.isFavorite === true && `${styles.active} + fa-star` , props.isFavorite === false && "fa-star-o")} /> 
                <span 
                    onClick= {() => handleRemove()} 
                    className='fa fa-trash' /> 
            </div>
            
        </li>
    );
};

export default Card;