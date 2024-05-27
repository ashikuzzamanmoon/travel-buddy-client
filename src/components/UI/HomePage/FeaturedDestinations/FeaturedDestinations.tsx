import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const featuredDestinations = [
  {
    destination: "Paris, France",
    photo:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The city of light, love, and art. From the iconic Eiffel Tower to the charming streets of Montmartre, Paris is a vibrant cultural hub.",
  },
  {
    destination: "Kyoto, Japan",
    photo:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Immerse yourself in the rich history and tradition of Kyoto, home to thousands of classical Buddhist temples, beautiful gardens, and serene imperial palaces.",
  },
  {
    destination: "Santorini, Greece",
    photo:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
  },
];

const FeaturedDestinations: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", py: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Featured Destinations
        </Typography>
        <Grid container spacing={4}>
          {featuredDestinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: 450,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.photo}
                  alt={destination.destination}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {destination.destination}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {destination.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturedDestinations;
