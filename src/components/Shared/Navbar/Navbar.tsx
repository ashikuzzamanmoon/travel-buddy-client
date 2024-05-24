"use client";

import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          Travel{" "}
          <Box component="span" color="primary.main">
            Buddy
          </Box>
        </Typography>

        {isMobile ? (
          <>
            <IconButton onClick={handleMenuToggle}>
              <MenuIcon />
            </IconButton>
            {menuOpen && (
              <Stack
                direction="column"
                alignItems="center"
                position="absolute"
                top="64px"
                left="0"
                width="100%"
                bgcolor="background.paper"
                zIndex={1}
                py={2}
              >
                <Typography
                  component={Link}
                  href="/"
                  onClick={handleMenuToggle}
                >
                  Home
                </Typography>
                <Typography
                  component={Link}
                  href="/about-us"
                  onClick={handleMenuToggle}
                >
                  About Us
                </Typography>
                <Typography
                  component={Link}
                  href="/my-profile"
                  onClick={handleMenuToggle}
                >
                  My Profile
                </Typography>
                <Button
                  component={Link}
                  href="/login"
                  onClick={handleMenuToggle}
                >
                  Login
                </Button>
              </Stack>
            )}
          </>
        ) : (
          <Stack
            direction="row"
            gap={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography component={Link} href="/">
              Home
            </Typography>
            <Typography component={Link} href="/about-us">
              About Us
            </Typography>
            <Typography component={Link} href="/my-profile">
              My Profile
            </Typography>
            <Button component={Link} href="/login">
              Login
            </Button>
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
