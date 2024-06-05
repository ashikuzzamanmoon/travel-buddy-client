import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      sx={{
        my: 1,
        backgroundImage: "url('https://i.ibb.co/Gn8tXX0/background-image.jpg')",
        backgroundSize: "cover",
        position: "relative",
        py: [8, 12], // Adjust padding for different screen sizes
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          alignItems: "center",
        }}
      >
        <Container sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight={600}
            textAlign="left"
          >
            Find Your
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            color="primary.main"
            fontWeight={600}
            textAlign="left"
          >
            Perfect Travel Buddy!
          </Typography>
          <Typography
            variant="h6"
            component="p"
            fontWeight={200}
            width={["100%", 400]} // Adjust width for smaller screens
            textAlign="left"
            my={2}
          >
            Explore the world with like-minded adventurers. Share your plans,
            discover new destinations, and make every journey unforgettable.
            Connect with travelers who share your passions.
          </Typography>
          <Link href="/dashboard/user/post-trip">
            <Button
              variant="outlined"
              sx={{ alignSelf: ["center", "flex-start"] }}
            >
              Share Your Trip
            </Button>
          </Link>
        </Container>
        <Container
          sx={{
            position: "relative",
            ml: [0, 4], // Adjust margin for smaller screens
            mt: [30, 45], // Adjust margin for smaller screens
          }}
        >
          <Image
            src="https://i.ibb.co/G386Dhm/hero-img.png"
            width={600}
            height={600}
            alt="hero-image"
            className="absolute -bottom-6"
          />
        </Container>
      </Container>
    </Box>
  );
};

export default HeroSection;
