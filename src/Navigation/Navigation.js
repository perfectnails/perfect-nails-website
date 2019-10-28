import React from 'react';
import { Link } from 'react-router-dom';
import {
  Toolbar,
  AppBar,
  Button,
  Grid,
} from '@material-ui/core';

const Navigation = (props) => {
    return (
        <div>
          <AppBar style={{ background: '#0D3D56', margin: '0px', padding: '0px' }}
                  justify='space-between'
                  position="sticky">
            <Toolbar>
              <Grid container 
                    justify='space-between' 
                    spacing={24}>
                <Grid item>
                    <Link to='/'
                          style={{ color: '#ffffff', textDecoration: 'none' }}>
                      <Button color='inherit' 
                              style={{ height: 40, width: 125 }}>
                        <span style={{ marginLeft: 5, paddingRight: 0, marginRight: 0, textAlign: 'center' }}>Perfect Nails</span>
                      </Button>
                    </Link> 
                </Grid>

                <Grid item>
                    <Link to='/'
                          style={{ color: '#ffffff', textDecoration: 'none' }}>
                      <Button color='inherit' 
                              style={{ height: 40, width: 125 }}>
                        <span style={{ marginLeft: 5, paddingRight: 0, marginRight: 0, textAlign: 'center' }}>Home</span>
                      </Button>
                    </Link>

                    <Link to='/prices'
                          style={{ color: '#ffffff', textDecoration: 'none' }}>
                      <Button color='inherit' 
                              style={{ height: 40, width: 125 }}>
                        <span style={{ marginLeft: 5, paddingRight: 0, marginRight: 0, textAlign: 'center' }}>Prices</span>
                      </Button>
                    </Link>
                    
                    <Link to='/hours'
                          style={{ color: '#ffffff', textDecoration: 'none' }}>
                      <Button color='inherit' 
                              style={{ height: 40, width: 125 }}>
                        <span style={{ marginLeft: 5, paddingRight: 0, marginRight: 0, textAlign: 'center' }}>Hours</span>
                      </Button>
                    </Link>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
    )
}

export default Navigation;