import { Avatar, Card, Divider, Grid, Rating, Typography } from "@mui/material";
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
                            <Avatar style={{
                                width: "30%",
                                height: "30%",

                            }} ></Avatar>
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
                            Hourly Wage
                        </Typography>
                        <p style={{ fontSize: "12px", marginTop: "0rem" }}>
                            20$ - 30$ per hour
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

                                marginBottom: "1rem",
                            }}
                        >
                            {" "}
                            <Grid container spacing={5}>
                                <Grid item md={4}>
                                    {" "}
                                    <p style={{ fontWeight: "bold" }}>Homepage Frontend </p>
                                    <img
                                        style={{
                                            width: "100%",
                                        }}
                                        src="/images/makineIzleme.png"
                                    />
                                </Grid>
                                <Grid item md={4}>
                                    {" "}
                                    <p style={{ fontWeight: "bold" }}>Description</p>{" "}
                                    <p style={{ marginBottom: "0px" }}>
                                        {" "}
                                        I have a one page html /css site that I need to turn from
                                        figma to live site. We need to support responsive and pixel
                                        perfect.{" "}
                                    </p>{" "}
                                </Grid>
                                <Grid item md={4}>
                                    {" "}
                                    <p style={{ fontWeight: "bold" }}>About</p>{" "}
                                    <p style={{ marginBottom: "0px" }}> Price: $20 </p> <br />{" "}
                                    <p style={{ marginTop: "0px", margin: "0px" }}>
                                        Time: 12 hours
                                    </p>{" "}
                                    <br />{" "}
                                    <p style={{ marginTop: "0px" }}>Contracter: SHDGEYT654</p>
                                    <Rating name="read-only" value={3} readOnly />
                                </Grid>
                            </Grid>
                        </Card>
                        <Divider />
                        <Card
                            style={{
                                padding: "1rem",
                                boxShadow: "none",
                            }}
                        >
                            <Grid container spacing={5}>
                                <Grid item md={4}>
                                    {" "}
                                    <p style={{ fontWeight: "bold" }}>Menu Page Frontend </p>
                                    <img
                                        style={{
                                            width: "100%",
                                        }}
                                        src="/images/2.png"
                                    />
                                </Grid>
                                <Grid item md={4}>
                                    {" "}
                                    <p style={{ fontWeight: "bold" }}>Description</p>{" "}
                                    <p style={{ marginBottom: "0px" }}>
                                        {" "}
                                        Looking for an angular developer good in css and html to do some customisation on the same who should be available for 4 hours from now.
                                    </p>{" "}
                                </Grid>
                                <Grid item md={4}>
                                    {" "}
                                    <p style={{ fontWeight: "bold" }}>About</p>{" "}
                                    <p style={{ marginBottom: "0px" }}> Price: $55 </p> <br />{" "}
                                    <p style={{ marginTop: "0px", margin: "0px" }}>
                                        Time: 12 hours
                                    </p>{" "}
                                    <br />{" "}
                                    <p style={{ marginTop: "0px" }}>Contracter: FGDHES76745</p>
                                    <Rating name="read-only" value={5} readOnly />
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
