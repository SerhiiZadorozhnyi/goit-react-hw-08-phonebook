import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../redux/auth/auth-selectors';
import { logOut } from '../redux/auth/auth-operations';

import styles from './UseMenu.module.css';
import { Button } from '@material-ui/core';


function UserMenu() {
    const name = useSelector(getUserName);
    const dispatch = useDispatch();

    const onLogOut = () => dispatch (logOut());

    return (
        <div className={styles.container__menu}>
            <span className={styles.avatar__menu}> </span>
            <span className={styles.name__menu}> {name}</span>
            <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                onClick={onLogOut}
            >
                Logout
            </Button>
        </div>
    );
}

export default UserMenu;