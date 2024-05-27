"use client";
import TBFileUploader from "@/components/Forms/TBFileUploader";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import { useEditProfileMutation } from "@/redux/api/userApi";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditProfile = () => {
  const [editProfile] = useEditProfileMutation();
  const handleSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("processing...");
    // try {
    //   const res: any = await editProfile(tripData);
    //   console.log(res);
    //   if (res?.data?.id) {
    //     toast.success("Trip created successfully", {
    //       id: toastId,
    //       duration: 1000,
    //     });

    //   } else {
    //     toast.error("Something went wrong", { id: toastId, duration: 1000 });
    //   }
    // } catch (error: any) {
    //   console.log(error?.message);
    // }
  };

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
                Edit Your Profile
              </Typography>
            </Box>
          </Stack>

          <Box>
            <TBForm
              onSubmit={handleSubmit}
              // defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <TBInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item md={6}>
                  <TBInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={6}>
                  <TBInput
                    label="contactNumber"
                    type="number"
                    fullWidth={true}
                    name="contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <TBInput
                    label="Bio"
                    type="text"
                    fullWidth={true}
                    name="bio"
                  />
                </Grid>
                <Grid item md={6}>
                  <TBInput
                    label="age"
                    type="number"
                    fullWidth={true}
                    name="age"
                  />
                </Grid>
                <Grid item md={6}>
                  <TBFileUploader
                    name="file"
                    label="Upload Photo"
                    sx={{ width: "100%" }}
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
                Register
              </Button>
            </TBForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default EditProfile;
