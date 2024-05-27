import { Box, Container, Typography, Link } from "@mui/material";
import FeaturedDestinations from "@/components/UI/HomePage/FeaturedDestinations/FeaturedDestinations";
import TravelTipsAndGuides from "@/components/UI/HomePage/TravelTipsAndGuides/TravelTipsAndGuides";

const AboutUs: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" py={5}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Our mission is to provide travelers with the best possible experience
          by offering a platform to discover and share unique travel experiences
          from around the world. We aim to inspire and empower people to explore
          new destinations, connect with different cultures, and create
          unforgettable memories.
        </Typography>
      </Box>
      <Box textAlign="center" py={5}>
        <Typography variant="h3" component="h1" gutterBottom>
          Team Information
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Our team is passionate about travel and dedicated to creating an
          exceptional platform for travelers. With diverse backgrounds and
          expertise, we work together to ensure that our users have access to
          reliable information, engaging content, and seamless user experience.
        </Typography>
      </Box>

      <FeaturedDestinations />

      <TravelTipsAndGuides />

      <Box py={5}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Meet the Team
        </Typography>
        <Typography variant="body1" component="p" textAlign="center">
          Our team is dedicated to providing you with the best travel
          information and services.
        </Typography>
        <Box textAlign="center" mt={2}>
          <Typography variant="body1">
            Email: contact@travelwebsite.com
          </Typography>
          <Typography variant="body1">Phone: +123 456 7890</Typography>
          <Link href="https://facebook.com" target="_blank" rel="noopener">
            Facebook
          </Link>
          {" | "}
          <Link href="https://twitter.com" target="_blank" rel="noopener">
            Twitter
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
