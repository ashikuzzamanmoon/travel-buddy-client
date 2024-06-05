"use client";
import TBFileUploader from "@/components/Forms/TBFileUploader";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import {
  useEditProfileMutation,
  useGetUserByIdQuery,
} from "@/redux/api/userApi";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditProfile = ({ params }: { params: { userId: string } }) => {
  const { userId } = params;
  const router = useRouter();
  // console.log({ userId });
  const { data: user, isLoading } = useGetUserByIdQuery(userId);
  // console.log(user);
  const defaultValues = {
    name: user?.name,
    email: user?.email,
    bio: user?.userProfile?.bio,
    age: user?.userProfile?.age,
    file: user?.userProfile?.userPhoto,
  };
  // console.log({ defaultValues });
  const [editProfile] = useEditProfileMutation();
  const handleSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Processing...");
    const formData = new FormData();
    formData.append("image", values?.file as File);
    let myImg;
    if (values?.file) {
      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=b8d683c7eb75381b6f1120c04de00683",
        {
          method: "POST",
          body: formData,
        }
      );
      myImg = await res.json();
    }

    values.age = Number(values?.age);
    let userData;
    if (myImg?.data?.url) {
      userData = {
        name: values?.name,
        email: values?.email,
        bio: values?.bio,
        age: values?.age,
        userPhoto: myImg?.data?.url,
      };
    } else {
      userData = {
        name: values?.name,
        email: values?.email,
        bio: values?.bio,
        age: values?.age,
        userPhoto: values?.file,
      };
    }
    // console.log({ userData });
    try {
      const res: any = await editProfile(userData);
      // console.log(res);
      if (res?.data?.id) {
        toast.success("Profile  updated successfully", {
          id: toastId,
          duration: 1000,
        });
        router.push("/dashboard/user/my-profile");
      } else {
        toast.error("Something went wrong", { id: toastId, duration: 1000 });
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return (
    <Container>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
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
                defaultValues={user && defaultValues}
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
                  Submit
                </Button>
              </TBForm>
            </Box>
          </Box>
        </Stack>
      )}
    </Container>
  );
};

export default EditProfile;
