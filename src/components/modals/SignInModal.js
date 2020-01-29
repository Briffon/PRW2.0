import React, { Component, useState } from "react";
import "./SignInModal.css";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import { Modal, Paper, Button } from "@material-ui/core";
import {MdEmail} from '../../../node_modules/react-icons/md'
import {FaGoogle} from '../../../node_modules/react-icons/fa'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function SignInModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="signIn" style={styles.container}>
      <Paper elevation={3} style={styles.paper}>
        <div style={styles.signUp} className="signUp">
          <h2>Sign Up</h2>
          <p>Already a member? Sign In</p>
          <Button style={styles.button} className="fb"  variant="contained">
              <FacebookIcon style={styles.icon}/>
            Sign Up With FaceBook
          </Button>
          <Button style={styles.button} className="go" variant="contained">
              <FaGoogle style={styles.icon}/>
            Sign Up With Google
          </Button>
          <p>or</p>
          <Button style={styles.button} className="em" variant="contained">
              <MdEmail style={styles.icon}/>
            Sign Up With Email
          </Button>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>
        </Modal>
      </Paper>
    </div>
  );
}

export default SignInModal;

const styles = {
  container: {
    height: "100vh",
    display: "flex"
  },
  paper: {
    display: "flex",
    width: "40%",
    background: "white",
    justifyContent: "center",
    height: "50vh",
    margin: "auto",
    borderRadius: "10px"
  },
  button: {
    color:'white',
    fontWeight:'550',
    display:'flex',
    justifyContent:'center',
    width:'20rem',
    height:'3rem',
    margin:'1rem'
  },
  signUp: {
    display: "flex",
    flexDirection: "column",
    alignItems:'center',
  },
  icon:{
    marginRight:'.2rem',
    marginLeft:'0',
  }
  //   modal: {
  //     width: "100%"
  //   }
};
