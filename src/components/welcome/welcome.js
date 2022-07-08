// import '../../style/modules/welcome.css';
import React from "react";
import { Typography , Button, Box} from '@mui/material';
import loading from '../../images/loading.gif';
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        
        <div className="welcome">
            {/* <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align="center" className="welcome-text" >Welcome!</Typography>
                </Grid>
                <Grid item xs={5.5}>
                </Grid>
                <Grid item xs={1}>
                    <img src={ loading } alt="loading" className="loading-gif" width="100px" height="100px"/>
                </Grid>
                <Grid item xs={5.5}>
                </Grid>
            </Grid> */}
            <div className="content">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography align="center" className="welcome-text" >Welcome!</Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={ loading } alt="loading" className="loading-gif" width="100px" height="100px"/>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Link to="/Home" style={{ textDecoration: 'none' }}>
                        <Button className="enter-btn" variant="outlined">Enter</Button>
                    </Link>
                </Box>
            </div>
        </div>
    );
};

export { Welcome };