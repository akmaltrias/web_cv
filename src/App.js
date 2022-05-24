import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portofolio from './pages/Portofolio/Portofolio';
import Resume from './pages/Resume/Resume';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
}));

export default function App() {
  return (
    <Container className="container">
      <Grid container spacing={3} justifyContent="center">   
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Item elevation={0} style={{paddingBottom: 2}}>
          <Profile />
        </Item>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Item elevation={0}>
          <Router>
            <Header />
            <div className="main_content box_shadow">
            <Switch>
              <Route path='/portofolio'>
              <Portofolio />
              </Route>
              <Route path='/'>
              <Resume /> 
              </Route>
            </Switch>
            </div>
          </Router>
          <Footer /> 
        </Item>
      </Grid>
      </Grid>
    </Container>
  );
}
