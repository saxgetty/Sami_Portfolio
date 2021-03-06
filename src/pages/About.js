import React from 'react';
import '../styles/index.css';
import { Box, Paper, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 700,
        sm: 900,
        md: 1200,
        lg: 1440,
        xl: 1536,
      },
    },
});

function About() {

    return(
        <>
            <Grid container> 
                <Grid 
                    item xs={12} 
                    textAlign='center'
                >
                    <div class='name'>SAMI SAXTON-GETTY</div>
                </Grid>
            </Grid>
            <ThemeProvider theme={theme}>
                <Grid container
                    direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}
                    spacing={{ xs: 4, sm: 4, md: 4 }}
                    columnSpacing={{ md: 0 }}
                    justifyContent='center'
                    align='center'                                  
                > 
                    <Grid
                        item xs={12} sm={12} md={4}               
                    >
                        <Box 
                            
                            component='img'
                            sx={{
                                marginTop: -8,
                                height: 600,
                                width: 450,
                            }}
                            alt='Sami Profile'
                            src='sami_profile_white.png'>
                        </Box>
                    </Grid>
                    <Grid
                        item xs={12} sm={12} md={4}             
                    >
                        <Box
                            sx={{
                                '& > :not(style)': {
                                    
                                    width: 500,
                                    height: 455,
                                    backgroundColor: '#f2b643',
                                    textAlign:'left', 
                                },
                            }}
                        >
                            <Paper elevation={16}>
                                <div class='card_title'>
                                    GET TO KNOW ME
                                </div>
                                <div class='info-title'>
                                    BS in Computer Science | San Francisco State University
                                </div>
                                <div class='info-title'>
                                    GPA | 3.80
                                </div>
                                <div style={{padding: 15, marginTop: -20}}>
                                    Greetings traveler! My name is Sami Saxton-Getty and I'm a graduate computer 
                                    science student with a knack for graphic design looking for an entry-level software development role at a fast 
                                    growing technology company. I love solving complex problems, working with others, 
                                    and being a dependable team member.
                                </div>
                                <div class='card_title'>
                                    CORE VALUES
                                </div>
                                <div style={{padding: 15, marginTop: -30}}>
                                    Some of my core values include self-awareness, integrity, dedication, respect, and a positive outlook. Self-awareness 
                                    is the most important to me because I can apply it to teamwork and team environments so that I interact well with people who share different 
                                    characteristics, strengths, perspectives, and viewpoints. 
                                </div>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid
                        item xs={12} sm={12} md={4}
                    >
                        <Box 
                            sx={{
                                '& > :not(style)': {
                                    
                                    width: 500,
                                    height: 455,
                                    backgroundColor: '#f2b643',
                                    textAlign:'left', 
                                },
                            }}
                        >
                            <Paper elevation={16}>
                                <div class='card_title'>
                                    WORK EXPERIENCE
                                </div>
                                <div class='info-title'>
                                    Quality Control Specialist @ Freedom Forever | 2019 - 2021
                                </div>
                                <div style={{padding: 15, marginTop: -20}}>
                                    Responsible for reviewing and scoring home solar system implementation plans against the feasibility requirements for
                                    early detection of technical deficiencies and corrections. This reduced overall defects and customer complaints.
                                </div>
                                <div style={{padding: 15, marginTop: -20}}>
                                    Generated and maintained SQL queries that kept the home solar construction department database up to date via
                                    batching Excel reports in Podio.
                                </div>
                                <div class='card_title'>
                                    PASSIONS & HOBBIES
                                </div>
                                <div style={{padding: 15, marginTop: -30}}>   
                                    In my free time, I am passionate about video games such as World of Warcraft, spending quality time with my dog Bernie, and 
                                    continuously educating myself on mental health and general wellbeing.
                                </div>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid> 
            </ThemeProvider>   
        </>
    );
}

export default About;