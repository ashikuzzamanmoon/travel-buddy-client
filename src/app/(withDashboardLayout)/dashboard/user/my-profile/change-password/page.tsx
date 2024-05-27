"use client";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ChangePasswordPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Change Your Password
              </Typography>
            </Box>
          </Stack>

          <Box>
            <TBForm onSubmit={() => console.log("golu")}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <TBInput
                    name="password"
                    label="Old Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <TBInput
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Change Password
              </Button>
            </TBForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePasswordPage;
