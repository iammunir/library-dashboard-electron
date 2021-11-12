import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import swal from 'sweetalert';

export default function FormBio() {

    const [nama, setNama] = useState('');
    const [nim, setNim] = useState();
    const [email, setEmail] = useState('');

    const changeNama = (e) => {
        setNama(e.target.value);
    }

    const changeNim = (e) => {
        setNim(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const history = useHistory();
    const logout = () => {
        history.push('/');
    }

    const submitData = (e) => {
        e.preventDefault();
        swal(`Data Berhasil Terkirim`, "", "success").then(() => {
            setNama('');
            setNim('');
            setEmail('');
        });
    }

    return (
        <div>
            <Box mx="auto" bgcolor="background.paper" p={1}>
                <Typography mx="auto" variant="h3" gutterBottom>
                    Form Biodata
                </Typography>
            </Box>
            <form noValidate autoComplete="off" onSubmit={submitData}>
                <TextField label="nama" fullWidth margin="normal" type="text" onChange={changeNama} />
                <TextField label="nim" fullWidth margin="normal" type="number" onChange={changeNim} />
                <TextField label="email" fullWidth margin="normal" type="text" onChange={changeEmail} />
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                    <Button variant="contained" color="danger" onClick={logout}>Logout</Button>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </Grid>
            </form>
        </div>
    )
}
