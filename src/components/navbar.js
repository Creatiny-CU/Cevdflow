
import Avatar from '@mui/material/Avatar';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
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

export default function SearchAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: '#1E1E56' }} position="static">
                <Toolbar>
                    <IconButton

                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>

                    <Grid container spacing={8} alignItems="center">
                        <Grid item  >     <a
                            href='/home'
                            style={{ textDecoration: 'none', color: 'white' }}
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            CevdFlow
                        </a></Grid>
                        <Grid item >
                            <Grid container alignItems='center'> <a
                                href='/home'
                                style={{ textDecoration: 'none', color: 'white' }}
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                My Jobs
                            </a>
                                <KeyboardArrowDownIcon /></Grid>
                        </Grid>
                        <Grid item >
                            <Grid container alignItems='center'> <a
                                href='/home'
                                style={{ textDecoration: 'none', color: 'white' }}
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                Reports
                            </a>
                                <KeyboardArrowDownIcon /></Grid> </Grid>
                        <Grid item >     <Grid container alignItems='center'> <a
                            href='/home'
                            style={{ textDecoration: 'none', color: 'white' }}
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Messages
                        </a> <KeyboardArrowDownIcon /></Grid>  </Grid>
                        {/* <Grid item md={4}>  <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search Job..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search></Grid> */}
                        <Grid style={{ right: '20px', position: 'absolute' }} item md={4}>
                            <Grid container spacing={3} >   <Grid item >
                                <Button style={{
                                    backgroundColor: '#1E1E56',
                                    color: 'white',
                                    textDecoration: 'none',
                                    textTransform: 'none',
                                    border: '1px solid white'
                                }} >Connect Wallet</Button>
                            </Grid>
                                <Grid item >
                                    <IconButton sx={{ p: 0 }}>
                                        <a style={{ textDecoration: 'none' }} href="/profile">  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /></a>

                                    </IconButton>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>


                </Toolbar>
            </AppBar>
        </Box >
    );
}
