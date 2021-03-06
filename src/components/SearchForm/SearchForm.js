import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {

    const dispatch = useDispatch();
    updateSearchString('');

    const [search, setSearch] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(search));
        setSearch('');
    };
    return (
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
            <TextInput placeholder='Search…' value={search} onChange={e => setSearch(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;