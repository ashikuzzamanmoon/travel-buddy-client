import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const travelTips = [
  {
    title: "Pack Light",
    content:
      "Learn to pack light and take only the essentials. This will make your travel easier and more enjoyable.",
  },
  {
    title: "Stay Safe",
    content:
      "Always keep an eye on your belongings and stay in safe neighborhoods. Research your destination in advance.",
  },
  {
    title: "Explore Local Cuisine",
    content:
      "One of the best parts of traveling is trying new foods. Don't be afraid to venture out and taste the local cuisine.",
  },
  {
    title: "Learn Basic Phrases",
    content:
      "Even knowing a few basic phrases in the local language can go a long way. It shows respect for the culture and can help you navigate better.",
  },
  {
    title: "Plan Your Budget",
    content:
      "Set a budget for your trip and stick to it. Research the cost of living in your destination and plan accordingly.",
  },
  {
    title: "Stay Hydrated",
    content:
      "Drink plenty of water, especially when traveling to warmer climates or engaging in physical activities. Staying hydrated is essential for your health and well-being.",
  },
  // Add more tips as needed
];

const TravelTipsAndGuides: React.FC = () => {
  return (
    <Box py={5} sx={{ backgroundColor: "#edf6ff" }}>
      <Typography variant="h3" component="h2" gutterBottom textAlign="center">
        Helpful Travel Tips and Guides
      </Typography>
      <Grid container spacing={4}>
        {travelTips.map((tip, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {tip.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {tip.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box my={5}>
        <Typography variant="h4" component="h3" gutterBottom textAlign="center">
          Ready to Explore the World?
        </Typography>
        <Typography variant="body1" component="p" textAlign="center">
          Check out our wide range of travel destinations and start planning
          your next adventure!
        </Typography>
      </Box>
    </Box>
  );
};

export default TravelTipsAndGuides;
