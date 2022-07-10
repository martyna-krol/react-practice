import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from './../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state));

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum</p>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} {...card} />)}
        </ul>
      </article>
    </div>
  );
};

  export default Favorite;