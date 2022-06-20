import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <label for="title">Title:</label>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label for="icon">Icon:</label>
            <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;