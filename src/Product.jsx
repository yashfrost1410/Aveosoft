import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    marginBottom: 50,
  },
});
function Product({ match }) {
  const [product, setproduct] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    console.log(match);
    const config = {
      method: "get",
      url: `https://aveosoft-react-assignment.herokuapp.com/products/${match.params.id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setproduct(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid key={product.id} item xs={12} sm={12} md={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="500"
                src={require("./product.jpg")}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Name: {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  Model: {product.model}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  Price: {product.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  Description: {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
