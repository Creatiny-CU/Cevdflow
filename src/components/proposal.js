import * as React from "react";

import {
    Button,
    Card,
    DialogContent,
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

import {
    Program,
    Provider,
    BN,
    web3,
    AnchorProvider,
  } from '@project-serum/anchor'
  import {
    Connection,
    clusterApiUrl,
    PublicKey
  } from '@solana/web3.js'
  import * as buffer from "buffer";
  
/* Constants for RPC Connection the Solana Blockchain */
export const commitmentLevel = "processed";
export const endpoint =
  process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL || clusterApiUrl("devnet");
export const connection = new Connection(endpoint, commitmentLevel);
window.Buffer = buffer.Buffer;
const emails = ["username@gmail.com", "user02@gmail.com"];
const opts = {
    preflightCommitment: "recent",
  };
  
  const { SystemProgram } = web3
  const programID = new PublicKey("ELa6pSUwCNe2ab5KAVWaP1y5w67cKem4aHh7EqbSjVF9")

  const idl = {"version":"0.1.0","name":"fizzbuzz","instructions":[{"name":"initFreelancer","accounts":[{"name":"owner","isMut":true,"isSigner":true},{"name":"freelancer","isMut":true,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]}],"accounts":[{"name":"Freelancer","type":{"kind":"struct","fields":[{"name":"owner","type":"publicKey"},{"name":"id","type":"i64"},{"name":"time","type":"i64"},{"name":"money","type":"i64"}]}}]}
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
            }} >Transaction successfull!</DialogTitle>
            <DialogContent>
                Transaction ID: ByYAKmytXp9rSnwDXsCW9pf82Kas6khaM5hMC4w17awL
            </DialogContent>

        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

function Proposal( {provider, walletKey , connectWallet, disconnectWallet}) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    // call freelancer_send_job_request function from smart contract to send job request. Program id is gnxmTk2njEFwxUPbnZGrK9L8A7gMaoKBtTxKVujt5yy
    // uses solana/web3.js
    const signAndSendTransaction = async () => {

        handleClickOpen();
        const connection = new Connection(clusterApiUrl("devnet"), opts.preflightCommitment);
        const provider2 = new AnchorProvider(connection, walletKey, {
            preflightCommitment: commitmentLevel,
          });
        const program = new Program(idl, programID, provider);
        const tx = await program.rpc.initFreelancer({
            accounts: {
                owner: walletKey,
                freelancer: walletKey,
                rent: web3.SYSVAR_RENT_PUBKEY,
                systemProgram: SystemProgram.programId,
            },
            signers: [walletKey],
            instructions: [
                await program.account.freelancer.createInstruction(walletKey),
            ],
        });
            
        
        console.log(tx);
        

    };
        

    return (
        <div style={{ backgroundColor: "#E4E4E4", minHeight: "100vh" }}>
            <SearchAppBar  connectWallet={connectWallet} disconnectWallet={disconnectWallet} provider={provider} walletKey={walletKey} />

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
                            onClick={signAndSendTransaction}
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
