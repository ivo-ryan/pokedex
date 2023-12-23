import { FaSpinner } from 'react-icons/fa';
import classes from './loader.module.css';

export const Loader = () => {
    return (
        <>
            <FaSpinner className={classes.Loader}/>
        </>
    )
}