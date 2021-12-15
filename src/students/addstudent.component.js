import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { studentAction } from '../_actions';
import { withRouter } from 'react-router-dom';

const styles = theme => ({

    root: {
        flexGrow: 1,
    },

    contentRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },

    appFrame: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class AddStudent extends Component {

    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(studentAction.onChangeProps(prop, event));
    };

    componentDidMount() {
        const { match: { params } } = this.props;

        if (params.id) {
            const { dispatch } = this.props;
            dispatch(studentAction.getStudentById(params.id));
        }
    }


    handleClick(event) {
        const { match: { params } } = this.props;
        const { dispatch } = this.props;

        let payload = {
            name: this.props.student.name,
            gender: this.props.student.gender,
            dob: this.props.student.dob
        }

        if (params.id) {
            dispatch(studentAction.editStudentInfo(params.id, payload));
        } else {
            dispatch(studentAction.createStudent(payload));
        }
    }


    render() {
        const { classes } = this.props;
        const { match: { params } } = this.props;

        function InsertText(props) {
            return <Typography>{'Add'}</Typography>;
        }

        function EditText(props) {
            return <Typography>{'Edit'}</Typography>;
        }


        function SegHeader() {
            if (params.id) {
                return <EditText />;
            }
            return <InsertText />;
        }

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <main className={classes.content}>
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                                <SegHeader />
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
                        <br />
                        <br />
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <div>
                                    <Paper className={classes.contentRoot} elevation={1}>
                                        <form className={classes.container}>
                                            <Grid container spacing={24}>
                                                <Grid item xs={3}>
                                                    <TextField
                                                        id="name"
                                                        label="Name"
                                                        className={classes.textField}
                                                        value={this.props.student.name}
                                                        onChange={this.handleChange('name')}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    {/* <Select
                                                        id="gender"
                                                        label="Gender"
                                                        className={classes.select}
                                                        value={this.props.student.gender}
                                                        onChange={this.handleChange('gender')}
                                                        margin="normal"
                                                    >
                                                        <MenuItem value='Male'>Male</MenuItem>
          <MenuItem value='Female'>Female</MenuItem>
                                                    </Select> */}

                                                    <TextField
                                                        id="gender"
                                                        label="Gender"
                                                        className={classes.textField}
                                                        value={this.props.student.gender}
                                                        onChange={this.handleChange('gender')}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <TextField
                                                        id="dob"
                                                        label="Date of Birth"
                                                        className={classes.textField}
                                                        value={this.props.student.dob}
                                                        onChange={this.handleChange('dob')}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container spacing={24}>
                                                <Grid item xs={3}>
                                                </Grid>
                                                <Grid item xs={6}>
                                                </Grid>
                                                <Grid item xs={3} container justify="center">
                                                    <Grid container spacing={24}>
                                                        <Grid item xs={6} container justify="center">
                                                            <Button variant="contained" color="secondary" className={classes.button} component='a' href="/">
                                                                Cancel
                                                            </Button>
                                                        </Grid>
                                                        <Grid item xs={6} container justify="flex-start">
                                                            <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>
                                                                Save
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        </form>
                                    </Paper>
                                </div>
                            </Grid>
                        </Grid>
                    </main>
                </div>
            </div>
        );
    }
}

//export default Home;

AddStudent.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default BoxCon
const mapStateToProps = (state) => {
    return state;
}


const connectedAddStudentPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddStudent)));

export { connectedAddStudentPage as AddStudent };