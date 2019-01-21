import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import './Category.css';

const styles =theme =>({
    root: {
   flexGrow: 1,
 },
 card: {
   maxWidth: 300,
   height: 460,
   width: 300,
   margin: 10
 },
 media: {
   height: 140
 },
});

class Category extends Component {
    state = {
        spacing: '16',
      };
    
      handleChange = key => (event, value) => {
        this.setState({
          [key]: value,
        });
      };
    render(){
        const { classes } = this.props;
      const { spacing } = this.state;
        return(
        <div>
           
            <div class="jumbotron jumbotron-fluid"> 
                        <div class="container">
                            <h1 class="display-4">Laptops</h1>
                            <nav>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                        <br />
                        <h3 class="find">Find by</h3>
                        <div>
                                <h4 class="price">Price</h4>

                                <div class="form-group"> 
                                        <input type="text" class="form-control" id="price"
                                        aria-describedby="emailHelp" placeholder="Min" />
                                </div>

                                <div class="form-group">
                                        <input type="text" class="form-control" id="price"
                                        placeholder="Max" />
                                </div>
                        </div>
                        <div>
                                <h4>Brands</h4>
                                <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                        Sony
                                        </label>
                                </div>
                                <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                        hp
                                        </label>
                                </div>
                                <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                        Dell
                                        </label>
                                </div>
                                <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                        Apple
                                        </label>
                                </div>
                                <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                        Haier
                                        </label>
                                </div>
                        </div>
                        <div class="choice">
                        <h4>Specs</h4>
                            <div class="RAM">
                            <h6>RAM</h6>
                            <ul class="list-unstyled">
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="RAM" />  1GB
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="RAM" />  2GB
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="RAM" />  4GB
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="RAM" />  8GB
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="RAM" />  16GB
                                </li>
                            </ul>
                            </div>
                            <div class="core">
                            <h6>Core</h6>
                            <ul class="list-unstyled">
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="core" />  Dual Core
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="core" />  Core 2do 
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="core" />  Core i3
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="core" />  Core i5
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="core" />  Core i7
                                </li>
                            </ul>
                            </div>
                            <div class="hard-disk">
                            <h6>Hard Disk</h6>
                            <ul class="list-unstyled">
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="hard-disk" />  120 GB
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="hard-disk" />  250 GB 
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="hard-disk" /> 320 GB
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="hard-disk" />  500 GB
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="hard-disk" />   1 TB
                                </li>
                            </ul>
                            </div>
                            <div class="generation">
                            <h6>Generation</h6>
                            <ul class="list-unstyled">
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="generation" />  3rd
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="generation" />  4th 
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="generation" /> 5th
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="generation" />   6th
                                </li>
                                <li>
                                    <input type="radio" aria-label="Radio button for following text input" Name="generation" />   7th
                                </li>
                            </ul>
                            </div>
                         </div>
                    </div>
                    
                <div class="col-md-9">
                    <div class="row">
                        <h1>Top Sellings</h1> 
                    </div>

                    <div class="row">
                        <div col-md-4>
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
                                    Details   
                                </Button>
                            </CardActions>
                        </Card>   
                    
                        </div>
                        <div col-md-4>
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
                                    Details   
                                </Button>
                            </CardActions>
                        </Card>   
                        </div>
                        <div col-md-4>
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
                                    Details   
                                </Button>
                            </CardActions>
                        </Card>   
                        </div>
                        <div col-md-4>
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
                                    Details   
                                </Button>
                            </CardActions>
                        </Card>   
                    </div>
                        <div col-md-4>
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
                                    Details   
                                </Button>
                            </CardActions>
                        </Card>   
                    </div>
                        <div col-md-4>
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
                                    Details   
                                </Button>
                            </CardActions>
                        </Card>   
                    </div>
                    </div>

                    <div class="row">
                        <h1>All Products</h1>
                    </div>

                    <div class="row">
                        <div col-md-4>
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
                                    Details   
                                </Button>
                            </CardActions>
                        </Card>   
                    </div>
                        <div col-md-4>
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
                                    Details   
                                </Button>
                            </CardActions>
                        </Card>   
                    </div>
                        <div col-md-4>
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
                                    Details   
                                </Button>
                            </CardActions>
                        </Card>   
                    </div>
                        <div col-md-4>
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
                                        Details   
                                    </Button>
                                </CardActions>
                            </Card>   
                        </div>
                        <div col-md-4>
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
                                        Details   
                                    </Button>
                                </CardActions>
                            </Card>   
                        </div>
                        <div col-md-4>
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
                                    Details   
                                </Button>
                            </CardActions>
                        </Card>   
                    </div>
                    </div>

                    <div class="row">
                    <nav aria-label="...">
                        <ul class="pagination">
                            <li class="page-item disabled">
                            <span class="page-link">Previous</span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active">
                            <span class="page-link">
                                2
                                <span class="sr-only">(current)</span>
                            </span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div>
                {/* end of col 9 */}
            </div>
            
        </div>
           

        );
    }
}
 
Category.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)( Category);
    