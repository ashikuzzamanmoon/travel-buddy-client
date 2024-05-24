"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerUser } from "@/services/actions/registerUser";
import { afterEach } from "node:test";

// export const userValidationSchema = z.object({
//   name: z.string().min(1, "Please enter your name!"),
//   email: z.string().email("Please enter a valid email address!"),
//   bio: z.string().min(1, "Please enter a valid bio!"),
//   age: z.number().min(18, "Age must be at least 18 years!"),
// });

// export const validationSchema = z.object({
//   password: z.string().min(6, "Must be at least 6 characters"),
//   user: userValidationSchema,
// });

export const defaultValues = {
  name: "",
  email: "",
  password: "",
  profile: {
    bio: "",
    age: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    // console.log(data);
    try {
      const res = await registerUser(values);
      console.log(res);
      console.log("fjkldhjfjkh");
      if (res?.data?.id) {
        toast.success(res?.message);
        router.push("/login");
      }
    } catch (err: any) {
      console.error(err.message);
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
              <Image
                src="https://img.freepik.com/free-photo/history-icon-front-side-white-background_187299-40163.jpg?t=st=1716461219~exp=1716464819~hmac=332730e23775bc0cf9c575919b19c6abf3e09952ad78674191da2f934ddad7aa&w=740"
                width={50}
                height={50}
                alt="logo"
              />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                User Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <TBForm
              onSubmit={handleRegister}
              // resolver={zodResolver(validationSchema)}
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
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <TBInput
                    label="Bio"
                    type="text"
                    fullWidth={true}
                    name="profile.bio"
                  />
                </Grid>
                <Grid item md={6}>
                  <TBInput
                    label="age"
                    type="number"
                    fullWidth={true}
                    name="profile.age"
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
              <Typography component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link href="/login">
                  <Box component="span" color="primary.main">
                    Login
                  </Box>
                </Link>
              </Typography>
            </TBForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
