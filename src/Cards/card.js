import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import './card.css';
import Product from '../Product/Product';
const styles =theme =>({
     root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 370,
    height: 460,
    width: 370,
    margin: 20
  },
  media: {
    height: 140
  },
});

class GuttersGrid extends React.Component {
    state = {
      spacing: '16',
    };
  
    handleChange = key => (event, value) => {
      this.setState({
        [key]: value,
      });
    };
  
    render() {
      const { classes } = this.props;
      const { spacing } = this.state;
  
      return (
        <Router>
          <div>
         <div class="jumbotron jumbotron-fluid">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling
           extra attention to featured content or information.</p>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
       </div>
            <div class="row">
              <div class="col-md-4">
              
              <Card className={classes.card}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="h4">
                            Lizard ggvdfb
                        </Typography>
                        <Typography gutterBottom variant="p" component="p">
                          Lizard
                        </Typography>
                      <CardMedia
                        className={classes.media}
                        image="./images/slider-2.png"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                                    <br /><del>PKR 600</del> PKR 600 
                        </Typography>
                        
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                      <Icon>star_half</Icon>
                      <Icon>star_border</Icon>
                      <p>(35)</p>
                      <Link to="/Product/Product"><Button variant="contained" color="primary" className={classes.margin}>
                          More Details   
                      </Button></Link>
                    </CardActions>
            </Card> 
              </div>
              <div class="col-md-4">
              <Card className={classes.card}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="h4">
                            Lizard ggvdfb
                        </Typography>
                        <Typography gutterBottom variant="p" component="p">
                          Lizard
                        </Typography>
                      <CardMedia
                        className={classes.media}
                        image="./images/slider-2.png"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                                    <br /><del>PKR 600</del> PKR 600 
                        </Typography>
                        
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                      <Icon>star_half</Icon>
                      <Icon>star_border</Icon>
                      <p>(35)</p>
                      <Button variant="contained" color="primary" className={classes.margin}>
                          More Details   
                      </Button>
                    </CardActions>
            </Card> 
              </div>
              <div class="col-md-4">
              <Card className={classes.card}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="h4">
                            Lizard ggvdfb
                        </Typography>
                        <Typography gutterBottom variant="p" component="p">
                          Lizard
                        </Typography>
                      <CardMedia
                        className={classes.media}
                        image="./images/slider-2.png"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                                    <br /><del>PKR 600</del> PKR 600 
                        </Typography>
                        
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                      <Icon>star_half</Icon>
                      <Icon>star_border</Icon>
                      <p>(35)</p>
                      <Button variant="contained" color="primary" className={classes.margin}>
                          More Details   
                      </Button>
                    </CardActions>
            </Card> 
              </div>
              <div class="col-md-4">
              <Card className={classes.card}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="h4">
                            Lizard ggvdfb
                        </Typography>
                        <Typography gutterBottom variant="p" component="p">
                          Lizard
                        </Typography>
                      <CardMedia
                        className={classes.media}
                        image="./images/slider-2.png"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                                    <br /><del>PKR 600</del> PKR 600 
                        </Typography>
                        
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                      <Icon>star_half</Icon>
                      <Icon>star_border</Icon>
                      <p>(35)</p>
                      <Button variant="contained" color="primary" className={classes.margin}>
                          More Details   
                      </Button>
                    </CardActions>
            </Card> 
              </div>
              <div class="col-md-4">
              <Card className={classes.card}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="h4">
                            Lizard ggvdfb
                        </Typography>
                        <Typography gutterBottom variant="p" component="p">
                          Lizard
                        </Typography>
                      <CardMedia
                        className={classes.media}
                        image="./images/slider-2.png"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                                    <br /><del>PKR 600</del> PKR 600 
                        </Typography>
                        
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                      <Icon>star_half</Icon>
                      <Icon>star_border</Icon>
                      <p>(35)</p>
                      <Button variant="contained" color="primary" className={classes.margin}>
                          More Details   
                      </Button>
                    </CardActions>
            </Card> 
              </div>
              <div class="col-md-4">
              <Card className={classes.card}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="h4">
                            Lizard ggvdfb
                        </Typography>
                        <Typography gutterBottom variant="p" component="p">
                          Lizard
                        </Typography>
                      <CardMedia
                        className={classes.media}
                        image="./images/slider-2.png"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                                    <br /><del>PKR 600</del> PKR 600 
                        </Typography>
                        
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                    <Icon>star</Icon>
                      <Icon>star_half</Icon>
                      <Icon>star_border</Icon>
                      <p>(35)</p>
                      <Button variant="contained" color="primary" className={classes.margin}>
                          More Details   
                      </Button>
                    </CardActions>
            </Card> 
              </div>
            </div>
            <Route  path="/Product/Product" component={Product} />
    </div>
    
        </Router>
      );
    }
  }
  
  GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  }
  

export default withStyles(styles)(GuttersGrid);
