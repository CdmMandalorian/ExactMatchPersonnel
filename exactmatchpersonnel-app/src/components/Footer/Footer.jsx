import React from 'react';
import { Container, Grid, Box, Link } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import logo from '../../Assets/Images/EMPlogo.png'
import EnvelopeOpenText from '../../Assets/Images/envelope-open-text-solid.svg';
import GithubSquare from '../../Assets/Images/github-square-brands.svg';
import Instagram from '../../Assets/Images/instagram-brands.svg';
import Linkedin from '../../Assets/Images/linkedin-brands.svg';
import Twitter from '../../Assets/Images/twitter-brands.svg';
import './style.css';
import '../../../src/App.css'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'


const Footer = () => {

    // const classes = useStyles();
    const gfont = createTheme({
        typography: {
            fontFamily: [
                'Chilanka',
                'cursive',
            ].join(','),
        },
    });
    return (
        <>
            <footer>
                <Box
                    px={{ xs: 3, sm: 10 }}
                    py={{ xs: 5, sm: 10 }}
                    bgcolor="text.secondary"
                    color="white">
                    <Container maxWidth='lg'>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1}>About Exact Match Personnel <img src={logo} alt='minilogo' height='15px' /></Box>
                                <br>
                                </br>
                                <Box>
                                    Staffing Agency.
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1}>Explore </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="/registration" color="inherit">
                                        Registration
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/login" color="inherit">
                                        Login
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/account" color="inherit">
                                        Account
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/order" color="inherit">
                                        Orders
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/customerservice" color="inherit">
                                        Customer Service
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/about" color="inherit">
                                        About
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/returnpolicy" color="inherit">
                                        Return Policy
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/privacypolicy" color="inherit">
                                        Privacy Policy
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/partners" color="inherit">
                                        Partners
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/termsofservice" color="inherit">
                                        Term of Service
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1}>Contact </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="/" color="inherit">
                                        <img className="socials" src={EnvelopeOpenText} alt="email" />  Email
                                    </Link>
                                </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="https://twitter.com/MandolorCodes" color="inherit" >
                                        <img className="socials" src={Twitter} alt="Twitter" />  Twitter
                                    </Link>
                                </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="https://www.instagram.com/aegcodes/" color="inherit">
                                        <img className="socials" src={Instagram} alt="Instagram" />  Instagram
                                    </Link>
                                </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="https://www.linkedin.com/in/armando-galindo/" color="inherit">
                                        <img className="socials" src={Linkedin} alt="Linkedin" />  Linkedin
                                    </Link>
                                </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="https://github.com/CdmMandalorian/ExactMatchPersonnel" color="inherit">
                                        <img className="socials" src={GithubSquare} alt="Github" />  Github
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1}>Search </Box>
                                <br>
                                </br>
                                <Box>
                                    <SearchBar
                                        onChange={() => console.log('onChange')}
                                        onRequestSearch={() => console.log('onRequestSearch')}
                                        style={{
                                            margin: '0 auto',
                                            maxWidth: 800
                                        }}
                                    />
                                    <br>
                                    </br>
                                    <Link href='/'>
                                        <img className='bottomRightLogo' src={logo} alt='minilogo' height='90px' width='90' />
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                            Exact Match Personnel <img src={logo} alt='minilogo' height='12px' /> &copy; {new Date().getFullYear()} AEG CODES Production. All Rights Reserved.&reg;
                        </Box>
                    </Container>
                </Box>
            </footer>
        </>
    )
}

export default Footer;