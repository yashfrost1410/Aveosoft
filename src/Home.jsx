import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  root: {
    marginTop: 50,
    marginBottom: 50,
  },
  formControl: {
    margin: 50,
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: 20,
  },
});
function Home() {
  const [product, setproduct] = useState([]);
  const [filter, setfilter] = useState(2);
  const classes = useStyles();
  useEffect(() => {
    const config = {
      method: "get",
      url: "https://aveosoft-react-assignment.herokuapp.com/products",
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
  const handleChange = (event) => {
    console.log(event.target.value);
    setfilter(event.target.value);
  };
  return (
    <Container className={classes.root}>
      <FormControl className={classes.formControl}>
        <Typography>Product Category</Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value={2}>None</MenuItem>
          <MenuItem value={0}>Laptops</MenuItem>
          <MenuItem value={1}>Mobiles</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {product &&
          product.map((item, key) => {
            if (filter == 2) {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <Link to={`/product/${item.id}`}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="300"
                          src={require("./sample.jpg")}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Name: {item.name}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="h2">
                            Model: {item.model}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="h2">
                            Price: {item.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              );
            } else if (filter == item.categoryId) {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <Link to={`/product/${item.id}`}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="300"
                          src={require("./sample.jpg")}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Name: {item.name}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="h2">
                            Model: {item.model}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="h2">
                            Price: {item.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              );
            }
          })}
      </Grid>
    </Container>
  );
}

export default Home;
