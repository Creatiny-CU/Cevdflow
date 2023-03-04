import { Typography } from "@mui/material";
import SearchAppBar from "./navbar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '1rem',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    borderRadius: '1rem',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
function Jobs() {
    return (
        <div style={{ backgroundColor: '#E4E4E4', padding: '20px' }} >
            <div style={{ marginLeft: '25%', marginRight: '25%', marginBottom: '20px', backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }} >  <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search Job..."
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search></div>

            <div style={{ padding: "2rem", marginLeft: '25%', marginRight: '25%', marginBottom: '10%', backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{}} >
                    <Typography style={{ fontWeight: "bold", marginBottom: '1rem', color: '#1E1E56', }}>
                        Jobs You might Like
                    </Typography>

                    <Grid container style={{ marginBottom: '2rem', }} >
                        <Grid item >
                            <Card style={{ boxShadow: 'none', border: '1px solid black' }} >
                                <CardContent>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: '#1E1E56' }} gutterBottom>
                                        Add content and images on HTML website.
                                    </Typography>
                                    <Typography variant="h5" component="div">

                                    </Typography>
                                    <Typography sx={{ mb: 1.5, fontSize: '12px' }} color="text.secondary">
                                        fixed-price-Entry level-Est-budget: $70 - Posted 1 hour ago
                                    </Typography>
                                    <Typography style={{ fontSize: '12px' }} variant="body2">
                                        We have 3 pages with the same CSS file we need to fix alligemets of cards, Edit the slider movement. And little other details please only expert
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'right', alignItems: 'right' }} >
                                    <Button href="/proposal" style={{ backgroundColor: 'green', color: 'white', textTransform: 'none' }} size="small">Apply</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container style={{ marginBottom: '2rem' }}  >
                        <Grid item >
                            <Card style={{ boxShadow: 'none', border: '1px solid black' }} >
                                <CardContent>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: '#1E1E56' }} gutterBottom>
                                        Add content and images on HTML website.
                                    </Typography>
                                    <Typography variant="h5" component="div">

                                    </Typography>
                                    <Typography sx={{ mb: 1.5, fontSize: '12px' }} color="text.secondary">
                                        fixed-price-Entry level-Est-budget: $70 - Posted 1 hour ago
                                    </Typography>
                                    <Typography style={{ fontSize: '12px' }} variant="body2">
                                        We have 3 pages with the same CSS file we need to fix alligemets of cards, Edit the slider movement. And little other details please only expert
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'right', alignItems: 'right' }}>
                                    <Button href="/proposal" style={{ backgroundColor: 'green', color: 'white', textTransform: 'none' }} size="small">Apply</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container >
                        <Grid item >
                            <Card style={{ boxShadow: 'none', border: '1px solid black' }} >
                                <CardContent>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: '#1E1E56' }} gutterBottom>
                                        Add content and images on HTML website.
                                    </Typography>
                                    <Typography variant="h5" component="div">

                                    </Typography>
                                    <Typography sx={{ mb: 1.5, fontSize: '12px' }} color="text.secondary">
                                        fixed-price-Entry level-Est-budget: $70 - Posted 1 hour ago
                                    </Typography>
                                    <Typography style={{ fontSize: '12px' }} variant="body2">
                                        We have 3 pages with the same CSS file we need to fix alligemets of cards, Edit the slider movement. And little other details please only expert
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'right', alignItems: 'right' }}>
                                    <Button href="/proposal" style={{ backgroundColor: 'green', color: 'white', textTransform: 'none' }} size="small">Apply</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>


            </div>
        </div>
    );
}

export default Jobs;
