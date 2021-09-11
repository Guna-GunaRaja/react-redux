import React, {useState} from 'react';
import {TextField, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {useSelector, useDispatch} from 'react-redux';
import { addUserAsync, loggedIn } from '../actions';
import {UserDetails} from './Detail'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        margin: '1rem auto',
    },
    textCenter: {
        textAlign: 'center'
    },
    formControl: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        '& > *':{
          margin: '.5em auto'
        }
    }
})


export const Login = () => {
    const signIn = useSelector(state => state.Logged)
    const dispatch = useDispatch()
    const classes = useStyles()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={classes.container}>
        { !signIn ? 
            <div className={`${classes.formControl} ${classes.textCenter}`}>
                <Typography variant="h3" color="primary">Login</Typography>
                <TextField required fullWidth size="medium" id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                <TextField type="password" required fullWidth size="medium" id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" color="primary" type="submit" onClick={() => {
                    dispatch(loggedIn())
                    dispatch(addUserAsync({Email: email, Password: password}))}} >Log In
                </Button>    
            </div> 
            :
            <UserDetails />
        }
        </div>
    )
}
