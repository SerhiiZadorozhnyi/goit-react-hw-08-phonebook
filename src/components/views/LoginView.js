import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'components/redux/auth/auth-operations';

import './ViewPage.css';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';


function LoginWiew() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(logIn({ email, password }));
        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className="container__login">
                <div className="avatar__class">
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                </div>

                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="email"
                        name="email"
                        value={email}
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="password"
                        name="password"
                        value={password}
                        autoComplete="current-password"
                        // autoFocus
                        onChange={handleChange}
                    />

                    <Button type="submit" fullWidth variant="contained" color="primary">
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default LoginWiew;