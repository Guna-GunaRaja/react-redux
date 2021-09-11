import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Button, Typography} from '@material-ui/core';
import {loggedIn} from '../actions'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        '& >*':{
            margin: '.5em auto'
        }
    }
})

export const UserDetails = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const UserSelector = useSelector(state => state.User)
    return (
        <div className={classes.container}>
            <Typography variant="h4" color="primary" >{UserSelector.name} Details</Typography>
            <Typography>User Id: {UserSelector._id}</Typography>
            <Typography>Name: {UserSelector.name}</Typography>
            <Typography>Email: {UserSelector.email}</Typography>
            
            <Button variant="contained" color="secondary" onClick={()=>{dispatch(loggedIn())}} >Go Back</Button>
        </div>
    )
}
