import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

export default function Cashier() {

    const classes = useStyles();
    
    // Menu 1
    const [menu1, setMenu1] = useState(0);
    const [countMenu1, setCountMenu1] = useState(0);
    const handleChangeMenu1 = (e) => {
        const val = parseInt(e.target.value);
        setMenu1(val);
    }
    const changeCountMenu1 = (e) => {
        const val = parseInt(e.target.value);
        setCountMenu1(val);
    }

    // Menu 2
    const [menu2, setMenu2] = useState(0);
    const [countMenu2, setCountMenu2] = useState(0);
    const handleChangeMenu2 = (e) => {
        const val = parseInt(e.target.value);
        setMenu2(val);
    }
    const changeCountMenu2 = (e) => {
        const val = parseInt(e.target.value);
        setCountMenu2(val);
    }

    // Menu 3
    const [menu3, setMenu3] = useState(0);
    const [countMenu3, setCountMenu3] = useState(0);
    const handleChangeMenu3 = (e) => {
        const val = parseInt(e.target.value);
        setMenu3(val);
    }
    const changeCountMenu3 = (e) => {
        const val = parseInt(e.target.value);
        setCountMenu3(val);
    }

    // Menu 4
    const [menu4, setMenu4] = useState(0);
    const [countMenu4, setCountMenu4] = useState(0);
    const handleChangeMenu4 = (e) => {
        const val = parseInt(e.target.value);
        setMenu4(val);
    }
    const changeCountMenu4 = (e) => {
        const val = parseInt(e.target.value);
        setCountMenu4(val);
    }

    const hitung = () => {
        const totalMenu1 = menu1 * countMenu1;
        const totalMenu2 = menu2 * countMenu2;
        const totalMenu3 = menu3 * countMenu3;
        const totalMenu4 = menu4 * countMenu4;
        const grandTotal = totalMenu1 + totalMenu2 + totalMenu3 + totalMenu4;

        swal(`Grand Total: ${grandTotal.toString()}`, "", "success");
    }

    const history = useHistory();
    const logout = () => {
        history.push('/');
    }

    const toFormBio = () => {
        history.push('/bio-form')
    }

    return (
        <div>

            <Box mx="auto" bgcolor="background.paper" p={1}>
                <Typography mx="auto" variant="h3" gutterBottom>
                    Coffee Shop
                </Typography>
            </Box>


            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <FormControl className={classes.formControl}>
                    <InputLabel id="food-select-label">Menu 1</InputLabel>
                    <Select
                        labelId="food-select-label"
                        id="food-select"
                        value={menu1}
                        onChange={handleChangeMenu1}
                    >
                        <MenuItem value={15000}>Latte</MenuItem>
                        <MenuItem value={12000}>Cappuccino</MenuItem>
                        <MenuItem value={8000}>Americano</MenuItem>
                        <MenuItem value={10000}>Espresso</MenuItem>
                    </Select>
                </FormControl>
                <TextField type="number" margin="normal" value={menu1} InputProps={{readOnly: true}} />
                <TextField label="jumlah" margin="normal" type="number" onChange={changeCountMenu1} />
            </Grid>

            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <FormControl className={classes.formControl}>
                    <InputLabel id="food-select-label">Menu 2</InputLabel>
                    <Select
                        labelId="food-select-label"
                        id="food-select"
                        value={menu2}
                        onChange={handleChangeMenu2}
                    >
                        <MenuItem value={15000}>Latte</MenuItem>
                        <MenuItem value={12000}>Cappuccino</MenuItem>
                        <MenuItem value={8000}>Americano</MenuItem>
                        <MenuItem value={10000}>Espresso</MenuItem>
                    </Select>
                </FormControl>
                <TextField type="number" margin="normal" value={menu2} InputProps={{readOnly: true}} />
                <TextField label="jumlah" margin="normal" type="number" onChange={changeCountMenu2} />
            </Grid>

            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <FormControl className={classes.formControl}>
                    <InputLabel id="food-select-label">Menu 3</InputLabel>
                    <Select
                        labelId="food-select-label"
                        id="food-select"
                        value={menu3}
                        onChange={handleChangeMenu3}
                    >
                        <MenuItem value={15000}>Latte</MenuItem>
                        <MenuItem value={12000}>Cappuccino</MenuItem>
                        <MenuItem value={8000}>Americano</MenuItem>
                        <MenuItem value={10000}>Espresso</MenuItem>
                    </Select>
                </FormControl>
                <TextField type="number" margin="normal" value={menu3} InputProps={{readOnly: true}} />
                <TextField label="jumlah" margin="normal" type="number" onChange={changeCountMenu3} />
            </Grid>

            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <FormControl className={classes.formControl}>
                    <InputLabel id="food-select-label">Menu 4</InputLabel>
                    <Select
                        labelId="food-select-label"
                        id="food-select"
                        value={menu4}
                        onChange={handleChangeMenu4}
                    >
                        <MenuItem value={15000}>Latte</MenuItem>
                        <MenuItem value={12000}>Cappuccino</MenuItem>
                        <MenuItem value={8000}>Americano</MenuItem>
                        <MenuItem value={10000}>Espresso</MenuItem>
                    </Select>
                </FormControl>
                <TextField type="number" margin="normal" value={menu4} InputProps={{readOnly: true}} />
                <TextField label="jumlah" margin="normal" type="number" onChange={changeCountMenu4} />
            </Grid>

            <div style={{margin: '32px'}}>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                    <Button variant="contained" color="danger" onClick={logout}>Logout</Button>
                    <Button variant="contained" onClick={hitung}>Hitung</Button>
                </Grid>
                <hr />
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                    <Button variant="contained" onClick={toFormBio}>Form Biodata</Button>
                </Grid>
            </div>
        </div>
    )
}
