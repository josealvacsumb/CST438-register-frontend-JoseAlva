import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'react-toastify/dist/ReactToastify.css';

// properties addStudent is required, function called when Add clicked.
class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, student:{ name: null, email: null, statusCode: 0, status: "CLEAR"}};
    };

    handleClickOpen = () => {
        this.setState( {open:true} );
    };

    handleClose = () => {
        this.setState( {open:false} );
    };

    handleChangeName = (event) => {
      this.setState({student:{name: event.target.value,
      email: this.state.student.email,
      statusCode: 0,
      status: "CLEAR"}});
    }

    handleChangeEmail = (event) => {
          this.setState({student:{name: this.state.student.name,
          email: event.target.value,
          statusCode: 0,
          status: "CLEAR"}});
    }

    // Save student and close modal form
    handleAdd = () => {
      this.props.addStudent(this.state.student);
      this.handleClose();
      this.setState({student:{name: null, email: null}})
    }

    render()  {
        return (
            <div>
              <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
                Add Student
              </Button>
              <Dialog open={this.state.open} onClose={this.handleClose}>
                  <DialogTitle>Add Student</DialogTitle>
                  <DialogContent>
                  <TextField autoFocus fullWidth label="Student Name" name="name" value = {this.state.student.name} onChange={this.handleChangeName}/> 
                    <TextField autoFocus fullWidth label="Student Email" name="email" value = {this.state.student.email} onChange={this.handleChangeEmail}/> 
                  </DialogContent>
                  <DialogActions>
                    <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                    <Button color="primary" onClick={this.handleAdd}>Add</Button>
                  </DialogActions>
                </Dialog>      
            </div>
        ); 
      }
};

// required property:  addStudent is a function to call to perform the Add action
AddStudent.propTypes = {
  addStudent : PropTypes.func.isRequired
}

export default AddStudent;