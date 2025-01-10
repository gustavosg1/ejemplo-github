import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

const products = [
  { id: 1, name: "Producto 1", price: "$100", image: "https://via.placeholder.com/200" },
  { id: 2, name: "Producto 2", price: "$200", image: "https://via.placeholder.com/200" },
  { id: 3, name: "Producto 3", price: "$300", image: "https://via.placeholder.com/200" },
  { id: 4, name: "Producto 4", price: "$400", image: "https://via.placeholder.com/200" },
];

const ProductGrid = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Agregar al carrito
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
