import React from 'react';
import './Product.css';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import products from '../../server/scraper/telemart';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    maxWidth: 370,
    height: 425,
    width: 370,
    margin: 20
   },
   media: {
    height: 140
   },
});


class Product extends React.Component{
  state = {
    value: 0,
  
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


render(){
  const { classes } = this.props;
  const { value } = this.state;
  const { spacing } = this.state;
    return(
         <div>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
            <div class= "row">
                <div class = "col-md-6">
                <div class="product-image">
                <img src="./images/slider-2.png" />
                </div>
                </div>
                <div class = "col-md-6">
                 <div class="row">
           <h2 class= "product-name">Samsung Galaxy J2 Dual Sim</h2>
        </div>
        <hr/>
        <div class="row ">
        <div class="rates">
            <div class-="stars">
                <Icon>star</Icon>
                <Icon>star</Icon>
                <Icon>star</Icon>
                <Icon>star_half</Icon>
                <Icon>star_border</Icon>
            </div>
            <div class="stars-count">
                <p>(35)</p>
             </div>
        </div>
        </div>
        <div class="stock">
        <span>Availibility : </span>
        <span class="badge badge-success">In stock</span>
        </div>
        <div class="price">
            <h2>PKR 6000</h2>
        </div>
        <div class="button">
       <a class="btn btn-info btn-lg" href="#">
       Buy Now
       </a>
        </div>
        </div>
            </div>
            <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Specs" />
            <Tab label="Description" />
            <Tab label="Reviews" />
           </Tabs>
        </AppBar>
        {value === 0 && <TabContainer> <Table responsive striped bordered condensed hover>
  <thead>
    <tr>
      <th>Title</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Display type</td>
      <td>Super AMOLED capacitive touchscreen, 16M colors</td>
    </tr>
    <tr>
      <td>Display Size	</td>
      <td>5.8 inches, 84.8 cm2 (~83.6% screen-to-body ratio)
</td>
    </tr>
    <tr>
      <td>Resolution	</td>
      <td>1440 x 2960 pixels, 18.5:9 ratio (~570 ppi density)
</td>
    </tr>
    <tr>
      <td>Resolution	</td>
      <td>1440 x 2960 pixels, 18.5:9 ratio (~570 ppi density)
</td>
    </tr>
    <tr>
      <td>Resolution	</td>
      <td>1440 x 2960 pixels, 18.5:9 ratio (~570 ppi density)
</td>
    </tr>
    <tr>
      <td>Resolution	</td>
      <td>1440 x 2960 pixels, 18.5:9 ratio (~570 ppi density)
</td>
    </tr>
    
  </tbody>
</Table>;</TabContainer>}
        {value === 1 && <TabContainer>1914 translation by H. Rackham
          "But I must explain to you how all this mistaken idea of denouncing
           pleasure and praising pain was born and I will give you a complete 
           account of the system, and expound the actual teachings of the great 
           explorer of the truth, the master-builder of human happiness.
            No one rejects, dislikes, or avoids pleasure itself, because
             it is pleasure, but because those who do not know how to pursue
              pleasure rationally encounter consequences that are extremely
               painful. Nor again is there anyone who loves or pursues or
                desires to obtain pain of itself, because it is pain, but
                 because occasionally circumstances occur in which toil and 
                 pain can procure him some great pleasure. To take a trivial
                  example, which of us ever undertakes laborious physical
                   exercise, except to obtain some advantage from it? But 
                   who has any right to find fault with a man who chooses
                    to enjoy a pleasure that has no annoying consequences, 
                    or one who avoids a pain that produces no resultant pleasure?"</TabContainer>}
         <br /> <hr />
      </div>
          <div class="row">
          <h1 id="related">Related Items</h1>
          <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                    {
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
    
}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.control}>
              <Grid container>
                <Grid item>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
          </div>
           
          
         </div>
         
    );
  }

}
Product.propTypes = {
  classes: PropTypes.object.isRequired,
};
Product.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default  withStyles(styles)(Product);
