import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 400,
        margin: 'auto'
    },
}));

export default function Menu() {
    const classes = useStyles();
    const history = useHistory(); 

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={() => history.push('/dashboard-buku')}>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard Buku" />
                </ListItem>
                <ListItem button onClick={() => history.push('/dashboard-user')}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard Pengguna" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AddShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Transaksi Peminjaman" />
                </ListItem>
                <ListItem button onClick={() => history.push('/')}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </div>
    );
}
