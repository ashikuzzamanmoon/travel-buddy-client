"use client";
import TBDatePicker from "@/components/Forms/TBDatePicker";
import TBFileUploader from "@/components/Forms/TBFileUploader";
import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import TBSelectField from "@/components/Forms/TBSelectField";
import TBModal from "@/components/Shared/TBModal/TBModal";
import { TravelType } from "@/contants/travelType";
import { useCreateTripMutation } from "@/redux/api/tripApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface PostTripModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const PostTripModal: React.FC<PostTripModalProps> = ({ open, setOpen }) => {
  const [createTrip] = useCreateTripMutation();

  const handleSubmit = async (values: FieldValues) => {
    // console.log(values);
    const toastId = toast.loading("Processing...");
    const formData = new FormData();
    formData.append("image", values?.file as File);
    let imgUrl;
    if (values?.file) {
      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=b8d683c7eb75381b6f1120c04de00683",
        {
          method: "POST",
          body: formData,
        }
      );
      imgUrl = await res.json();
    }
    values.startDate = dateFormatter(values.startDate.$d);
    values.endDate = dateFormatter(values.endDate.$d);
    values.budget = Number(values?.budget);
    values.activities = [];
    const tripData = {
      budget: values?.budget,
      description: values?.description,
      destination: values?.destination,
      startDate: values?.startDate,
      endDate: values?.endDate,
      type: values?.travelType,
      photo: imgUrl?.data?.url,
    };
    try {
      const res: any = await createTrip(tripData);
      // console.log(res);
      if (res?.data?.id) {
        toast.success("Trip created successfully", {
          id: toastId,
          duration: 1000,
        });
        setOpen(false);
      } else {
        toast.error("Something went wrong", { id: toastId, duration: 1000 });
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  return (
    <TBModal open={open} setOpen={setOpen} title="Post a Travel/Trip">
      <TBForm onSubmit={handleSubmit}>
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
              name="travelType"
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
        <Button sx={{ mt: 2 }} type="submit">
          Post
        </Button>
      </TBForm>
    </TBModal>
  );
};

export default PostTripModal;
