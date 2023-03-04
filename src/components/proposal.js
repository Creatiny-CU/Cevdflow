import * as React from "react";

import {
    Button,
    Card,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import Jobs from "./jobs";
import SearchAppBar from "./navbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog backdropClick open={open}>
            <DialogTitle style={{
                fontWeight: 'bold', color: 'green'
            }} >Congratulations!</DialogTitle>

        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

function Proposal() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div style={{ backgroundColor: "#E4E4E4", minHeight: "100vh" }}>
            <SearchAppBar />

            <div style={{ padding: "2rem", width: "50%", marginLeft: "25%" }}>
                <Card
                    style={{
                        padding: "1rem",
                    }}
                >
                    <Typography style={{
                        fontWeight: 'bold',
                        marginBottom: '2rem'
                    }} >Add content and images on HTML website</Typography>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography>
                                What is the full amount you'd like to bid for this job?
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Amount"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        style={{
                            marginTop: "1rem",
                        }}
                        container
                        spacing={2}
                    >
                        <Grid item md={6}>
                            <Typography>How long will this project take?</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Time</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Time"
                                >
                                    <MenuItem value={10}>More than 6 months</MenuItem>
                                    <MenuItem value={20}>3 to 6 months</MenuItem>
                                    <MenuItem value={30}>Less than 1 month</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid
                        style={{
                            marginTop: "1rem",
                        }}
                        container
                        spacing={2}
                    >
                        <Grid item md={6}>
                            <Typography>Cover Letter</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Letter"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <div
                        style={{
                            marginTop: "1rem",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                        }}
                    >
                        <Button
                            onClick={handleClickOpen}
                            href="/proposal"
                            style={{
                                backgroundColor: "green",
                                color: "white",
                                textTransform: "none",
                            }}
                            size="small"
                        >
                            Send Proposal
                        </Button>
                        <SimpleDialog
                            selectedValue={selectedValue}
                            open={open}
                            onClose={handleClose}
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Proposal;
