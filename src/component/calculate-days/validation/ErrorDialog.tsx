import { Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";

interface ErrorDialogProps {
  msg: string,
  open: boolean,
  handleClose: any
}

const ErrorDialog = (props: ErrorDialogProps) => {
  return (
    <Dialog
      open={props.open}
    >
      <DialogContent>
        <Typography>{props.msg}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={props.handleClose}
        >
          Retry
        </Button>
      </DialogActions>
    </Dialog>
  )

}

export default ErrorDialog;