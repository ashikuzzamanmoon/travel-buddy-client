"use client";
import TBFileUploader from "@/components/Forms/TBFileUploader";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import {
  useChangePasswordMutation,
  useEditProfileMutation,
  useGetUserByIdQuery,
} from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ChangePassword = () => {
  const router = useRouter();
  const userData = getUserInfo();
  // console.log({ userId });

  const [changePassword] = useChangePasswordMutation();

  const handleSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Processing...");
    try {
      const res: any = await changePassword(values);
      // console.log(res);
      if (res?.data?.id) {
        toast.success("Password changed successfully", {
          id: toastId,
          duration: 1000,
        });
        router.push(`/dashboard/${userData?.role}/my-profile`);
      } else {
        toast.error("Something went wrong", { id: toastId, duration: 1000 });
      }
    } catch (error: any) {
      console.log(error?.message);
    }
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
                Change Password
              </Typography>
            </Box>
          </Stack>

          <Box>
            <TBForm onSubmit={handleSubmit}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <TBInput label="password" fullWidth={true} name="password" />
                </Grid>
                <Grid item md={12}>
                  <TBInput
                    label="newPassword"
                    fullWidth={true}
                    name="newPassword"
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
    </Container>
  );
};

export default ChangePassword;
