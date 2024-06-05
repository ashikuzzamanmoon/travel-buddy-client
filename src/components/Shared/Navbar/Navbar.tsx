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
import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
  const userInfo = useUserInfo();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
    try {
      logoutUser(router);
      toast.success("logout successfully");
    } catch (error: any) {
      console.log(error?.message);
    }
  };

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
                {userInfo?.userId && (
                  <Typography
                    component={Link}
                    href="/dashboard"
                    onClick={handleMenuToggle}
                  >
                    Dashboard
                  </Typography>
                )}
                <Typography
                  component={Link}
                  href="/trips"
                  onClick={handleMenuToggle}
                >
                  Trips
                </Typography>
                <Typography
                  component={Link}
                  href="/about-us"
                  onClick={handleMenuToggle}
                >
                  About Us
                </Typography>
                {userInfo?.userId && (
                  <Typography
                    component={Link}
                    href={`/dashboard/${userInfo?.role}/my-profile`}
                    onClick={handleMenuToggle}
                  >
                    My Profile
                  </Typography>
                )}
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
            <Typography component={Link} href="/trips">
              Trips
            </Typography>
            {userInfo?.userId && (
              <Typography component={Link} href="/dashboard">
                Dashboard
              </Typography>
            )}
            <Typography component={Link} href="/about-us">
              About Us
            </Typography>
            {userInfo?.userId && (
              <Typography
                component={Link}
                href={`/dashboard/${userInfo?.role}/my-profile`}
              >
                My Profile
              </Typography>
            )}
            {userInfo?.userId ? (
              <Button
                color="error"
                onClick={handleLogout}
                sx={{ boxShadow: 0 }}
              >
                Logout
              </Button>
            ) : (
              <Button component={Link} href="/login">
                Login
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
