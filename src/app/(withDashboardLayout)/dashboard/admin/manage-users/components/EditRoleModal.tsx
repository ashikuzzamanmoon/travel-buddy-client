"use client";
import TBForm from "@/components/Forms/TBForm";
import TBSelectField from "@/components/Forms/TBSelectField";
import TBModal from "@/components/Shared/TBModal/TBModal";
import { RoleType, TravelType } from "@/contants/travelType";
import { useUpdateRoleMutation } from "@/redux/api/userApi";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface PostTripModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
}
const EditRoleModal = ({ open, setOpen, userId }: PostTripModalProps) => {
  const [updateRole] = useUpdateRoleMutation();

  const handleSubmit = async (values: FieldValues) => {
    // console.log(values);
    const toastId = toast.loading("Processing...");
    const userData = {
      userId,
      payload: values,
    };

    try {
      const res: any = await updateRole(userData);
      // console.log(res);
      if (res?.data?.id) {
        toast.success("Role updated successfully", {
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
    <TBModal open={open} setOpen={setOpen} title="Edit Role">
      <TBForm onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={6}>
            <TBSelectField
              name="role"
              label="Role"
              items={RoleType}
              fullWidth={true}
            />
          </Grid>
        </Grid>
        <Button sx={{ mt: 2 }} type="submit">
          Submit
        </Button>
      </TBForm>
    </TBModal>
  );
};

export default EditRoleModal;
