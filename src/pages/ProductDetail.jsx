import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Paper,
  Rating,
  TextField,
  CircularProgress,
} from "@mui/material";
import { AddShoppingCart as AddShoppingCartIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedProduct,
  clearSelectedProduct,
} from "../store/slices/productSlice";
import { addToCart } from "../store/slices/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        // TODO: Replace with actual API call
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        dispatch(setSelectedProduct(data));
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductDetail();

    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart({ ...selectedProduct, quantity }));
    }
  };

  if (loading || !selectedProduct) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <Box
              component="img"
              src={selectedProduct.image}
              alt={selectedProduct.name}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 1,
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            {selectedProduct.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Rating
              value={selectedProduct.rating || 4.5}
              readOnly
              precision={0.5}
            />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({selectedProduct.reviews?.length || 0} reviews)
            </Typography>
          </Box>

          <Typography variant="h4" color="primary" gutterBottom>
            ${selectedProduct.price.toFixed(2)}
          </Typography>

          <Typography variant="body1" paragraph>
            {selectedProduct.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Quantity
            </Typography>
            <TextField
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ width: 100 }}
            />
          </Box>

          <Button
            variant="contained"
            size="large"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddToCart}
            sx={{ width: "100%" }}
          >
            Add to Cart
          </Button>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Product Details
            </Typography>
            <Typography variant="body2" paragraph>
              • Category: {selectedProduct.category}
            </Typography>
            <Typography variant="body2" paragraph>
              • Stock: {selectedProduct.stock} units
            </Typography>
            {selectedProduct.specifications?.map((spec, index) => (
              <Typography key={index} variant="body2" paragraph>
                • {spec}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
