import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';


const ListForm = ({ listId }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description, listId }));
        setTitle('');
        setDescription('');
    };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <label for="title">Title:</label>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label for="description">Description:</label>
            <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
	);
};

export default ListForm;