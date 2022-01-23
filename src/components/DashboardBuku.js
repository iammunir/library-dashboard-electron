import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

import BookTable from './BookTable';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: '32px',
        marginBottom: '16px'
    },
    field: {
        marginBottom: '16px'
    },
    btnGroup: {
      '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function DashboardBuku() {

    const classes = useStyles();
    const history = useHistory();

    const [fetch, setFetch] = useState(true);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        (async function(){
            const res = await window.preload.ambilBuku();
            console.log(res);
            setBooks(res);
        })();
    }, [fetch]);

    const [disableId, setDisableId] = useState(false);
    const [id, setId] = useState('');
    const [nama, setNama] = useState('');
    const [jenis, setJenis] = useState('');
    const [pengarang, setPengarang] = useState('');

    const resetField = () => {
        setId('');
        setNama('');
        setJenis('');
        setPengarang('');
        setDisableId(false);
    };

    const saveHandler = async () => {
        const book = {id, nama, jenis, pengarang};
        try {
            const res = await window.preload.tambahBuku(book);
            console.log(res);
        } catch (error) {
            swal ("Error", error.message, "error");
            return
        }
        resetField();
        setFetch(!fetch);
    }

    const updateHandler = async () => {
        const book = {id, nama, jenis, pengarang};
        const res = await window.preload.updateBuku(book);
        console.log(res);
        resetField();
        setFetch(!fetch);
    }

    const deleteHandler = async () => {
        const res = await window.preload.deleteBuku({id});
        console.log(res);
        resetField();
        setFetch(!fetch);
    }

    const selectHandler = (row) => {
        setDisableId(true);
        setId(row.id);
        setNama(row.nama);
        setJenis(row.jenis);
        setPengarang(row.pengarang);
    }

    return (
        <div>
            <Grid container justifyContent='space-between' spacing={1} className={classes.form}>
                <Grid item xs={6}>
                    <div>
                        <div className={classes.field}>
                            <TextField
                                fullWidth
                                required
                                disabled={disableId}
                                label="ID"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                variant="outlined"
                                />
                        </div>
                        <div className={classes.field}>
                            <TextField
                                fullWidth
                                label="Nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                variant="outlined"
                                />
                        </div>
                        <div className={classes.field}>
                            <TextField
                                fullWidth
                                label="Jenis"
                                value={jenis}
                                onChange={(e) => setJenis(e.target.value)}
                                variant="outlined"
                                />
                        </div>
                        <div className={classes.field}>
                            <TextField
                                fullWidth
                                label="Pengarang"
                                value={pengarang}
                                onChange={(e) => setPengarang(e.target.value)}
                                variant="outlined"
                                />
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classes.btnGroup}>
                        <div className={classes.btnGroup}>
                            <Button variant="contained" color="primary" onClick={saveHandler}>
                                Tambah
                            </Button>
                            <Button variant="contained" color="primary" onClick={updateHandler}>
                                Update
                            </Button>
                        </div>
                        <div className={classes.btnGroup}>
                            <Button variant="contained" color="secondary" onClick={deleteHandler}>
                                Hapus
                            </Button>
                            <Button variant="contained" onClick={resetField}>
                                Clear
                            </Button>
                        </div>
                        <div className={classes.btnGroup}>
                            <Button variant="contained" onClick={() => history.push('/menu')}>
                                Kembali
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <BookTable rows={books} selectRow={selectHandler} />
        </div>
    )
}
