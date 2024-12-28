import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import React from 'react'
import { Fragment } from 'react'

const TodoDetails = ({ todoDetails, openDialog, setOpenDialog, setTodoDetails }) => {
    return (
        <Fragment>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>{todoDetails?.todo}</DialogTitle>
                <DialogActions>
                    <Button onClick={() => {
                        setTodoDetails(null);
                        setOpenDialog(false)
                    }} >Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default TodoDetails
