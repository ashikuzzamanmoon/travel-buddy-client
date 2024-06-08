"use client";
import TBFileUploader from "@/components/Forms/TBFileUploader";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import {
  useGetTripByIdQuery,
  useUpdateTripMutation,
} from "@/redux/api/tripApi";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import TBSelectField from "@/components/Forms/TBSelectField";
import { TravelType } from "@/contants/travelType";
import { getUserInfo } from "@/services/auth.services";
import TBDatePicker from "@/components/Forms/TBDatePicker";

const EditTrip = ({ params }: { params: { tripId: string } }) => {
  const { tripId } = params;
  const router = useRouter();
  const user = getUserInfo();
  // console.log({ userId });
  const { data: trip, isLoading } = useGetTripByIdQuery(tripId);
  const [updateTrip] = useUpdateTripMutation();
  console.log(trip);
  const defaultValues = {
    destination: trip?.destination,
    startDate: trip?.startDate,
    endDate: trip?.endDate,
    photo: trip?.photo,
    budget: trip?.budget,
    type: trip?.type,
  };

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
    let tripData;
    if (myImg?.data?.url) {
      tripData = {
        tripId,
        payload: {
          budget: Number(values?.budget),
          description: values?.description,
          destination: values?.destination,
          startDate: values?.startDate,
          endDate: values?.endDate,
          type: values?.type,
          photo: myImg?.data?.url,
        },
      };
    } else {
      tripData = {
        tripId,
        payload: {
          budget: Number(values?.budget),
          description: values?.description,
          destination: values?.destination,
          startDate: values?.startDate,
          endDate: values?.endDate,
          type: values?.type,
          photo: values?.file,
        },
      };
    }
    // console.log({ userData });
    try {
      const res: any = await updateTrip(tripData);
      // console.log(res);
      if (res?.data?.id) {
        toast.success("Trip  updated successfully", {
          id: toastId,
          duration: 1000,
        });
        {
          user?.role === "admin"
            ? router.push(`/dashboard/admin/manage-trips`)
            : router.push(`/dashboard/user/post-trip`);
        }
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
                  Edit Trip
                </Typography>
              </Box>
            </Stack>

            <Box>
              <TBForm
                onSubmit={handleSubmit}
                defaultValues={trip && defaultValues}
              >
                <Grid container spacing={2} sx={{ width: "400px" }}>
                  <Grid item md={6}>
                    <TBInput name="destination" label="Destination" />
                  </Grid>
                  <Grid item md={6} sx={{ width: "100%" }}>
                    <TBInput name="description" label="Detailed description" />
                  </Grid>
                  <Grid item md={6}>
                    <TBDatePicker name="startDate" label="StartDate" />
                  </Grid>
                  <Grid item md={6}>
                    <TBDatePicker name="endDate" label="EndDate" />
                  </Grid>
                  <Grid item md={6}>
                    <TBSelectField
                      name="type"
                      label="Travel type"
                      items={TravelType}
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TBInput name="budget" label="Budget" type="number" />
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

export default EditTrip;
