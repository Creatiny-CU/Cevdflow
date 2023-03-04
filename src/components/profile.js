import { Avatar, Card, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import SearchAppBar from "./navbar";

function Profile() {
    return (
        <div style={{ backgroundColor: "#E4E4E4" }}>
            <SearchAppBar />
            <Grid
                style={{
                    padding: "2rem",
                }}
                container
                spacing={2}
            >
                <Grid item md={3}>
                    <Card
                        style={{
                            height: "100vh",
                            padding: "1rem",
                        }}
                    >
                        <Stack
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                            }}
                        >
                            <Avatar></Avatar>
                            <Typography
                                style={{
                                    fontWeight: "bold",
                                    marginTop: "1rem",
                                    color: "#1E1E56",
                                }}
                            >
                                Suna AYHAN
                            </Typography>
                            <p style={{ fontSize: "12px", marginTop: "0rem" }}>
                                Frontend Developer
                            </p>
                        </Stack>
                        <Typography
                            style={{
                                fontWeight: "bold",
                                marginTop: "1rem",
                                fontSize: "15px",
                                color: "#1E1E56",
                            }}
                        >
                            About Me
                        </Typography>
                        <p style={{ fontSize: "12px", marginTop: "0rem" }}>
                            I'm Suna, I'm a computer engineering student. At the same time, I
                            work as a web developer in 2 different companies.{" "}
                        </p>
                        <Typography
                            style={{
                                fontWeight: "bold",
                                marginTop: "1rem",

                                fontSize: "15px",
                                color: "#1E1E56",
                            }}
                        >
                            Education
                        </Typography>
                        <p style={{ fontSize: "12px", marginTop: "0rem" }}>
                            Çukurova University{" "}
                        </p>{" "}
                        <Typography
                            style={{
                                fontWeight: "bold",
                                marginTop: "1rem",
                                fontSize: "15px",
                                color: "#1E1E56",
                            }}
                        >
                            Hours per week
                        </Typography>
                        <p style={{ fontSize: "12px", marginTop: "0rem" }}>
                            More than 30 hrs/week{" "}
                        </p>
                        <Typography
                            style={{
                                fontWeight: "bold",
                                marginTop: "1rem",
                                fontSize: "15px",
                                color: "#1E1E56",
                            }}
                        >
                            Languages
                        </Typography>
                        <p style={{ fontSize: "12px", marginTop: "0rem" }}>English </p>
                    </Card>
                </Grid>
                <Grid item md={9}>
                    <Card
                        style={{
                            padding: "2rem",
                        }}
                    >
                        {" "}
                        <Typography
                            style={{
                                fontWeight: "bold",
                                color: "#1E1E56",
                                marginBottom: "1rem",
                            }}
                        >
                            Work History
                        </Typography>
                        <Card
                            style={{
                                padding: "1rem",
                                boxShadow: "none",
                                border: "1px solid #E4E4E4",
                                marginBottom: "1rem",
                            }}
                        >
                            {" "}
                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    {" "}
                                    <p style={{ fontWeight: "bold" }}>Homepage Frontend </p>
                                    <img
                                        style={{
                                            width: "90%",
                                        }}
                                        src="/images/makineIzleme.png"
                                    />
                                </Grid>

                                <Grid item md={6}>
                                    {" "}
                                    <p style={{ fontWeight: "bold" }}>About</p>{" "}
                                    <p style={{ marginBottom: "0px" }}> Price: $20 </p> <br />{" "}
                                    <p style={{ marginTop: "0px", margin: "0px" }}>
                                        Time: 12 hours
                                    </p>{" "}
                                    <br />{" "}
                                    <p style={{ marginTop: "0px" }}>Contracter: SHDGEYT654</p>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card
                            style={{
                                padding: "1rem",
                                boxShadow: "none",
                                border: "1px solid #E4E4E4",
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    {" "}
                                    <p>Homepage Frontend </p>
                                    <img
                                        style={{
                                            width: "90%",
                                        }}
                                        src="/images/2.png"
                                    />
                                </Grid>

                                <Grid item md={6}>
                                    {" "}
                                    <p style={{ fontWeight: "bold" }}>About</p>{" "}
                                    <p style={{ marginBottom: "0px" }}> Price: $20 </p> <br />{" "}
                                    <p style={{ marginTop: "0px", margin: "0px" }}>
                                        Time: 12 hours
                                    </p>{" "}
                                    <br />{" "}
                                    <p style={{ marginTop: "0px" }}>Contracter: SHDGEYT654</p>
                                </Grid>
                            </Grid>
                        </Card>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;
