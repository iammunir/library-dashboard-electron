import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory(); 

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const loginHandler = async (e) => {
        
        e.preventDefault();

        const auth = await window.preload.login({username,password});
        
        if (!auth) {
            swal ( "Oops", "username atau password salah!", "error");
            return
        }

        history.push('/cashier');
    }

    return (
        <form noValidate autoComplete="off" onSubmit={loginHandler}>
            <TextField label="username" fullWidth margin="normal" type="text" onChange={changeUsername} />
            <TextField label="password" fullWidth margin="normal" type="password" onChange={changePassword} />
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <Button variant="contained" type="submit" color="primary">Login</Button>
                <Button variant="contained" color="secondary">Cancel</Button>
            </Grid>
        </form>
    )
}
