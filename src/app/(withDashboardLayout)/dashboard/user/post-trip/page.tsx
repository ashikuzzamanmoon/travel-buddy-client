"use client";
import { Box, Button, IconButton, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import PostTripModal from "./components/page";
import {
  useDeleteTripMutation,
  useGetTripsByUserQuery,
} from "@/redux/api/tripApi";
import { toast } from "sonner";

const PostTripPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetTripsByUserQuery({});
  console.log(data);
  const query: Record<string, any> = {};

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  query["page"] = page;
  query["limit"] = limit;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const [deleteTrip] = useDeleteTripMutation();
  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Processing...");
    try {
      const res: any = await deleteTrip({ tripId: id });
      console.log(res);
      if (res?.data?.id) {
        toast.success("Trip deleted successfully", {
          id: toastId,
          duration: 1000,
        });
      } else {
        toast.error("Something went wrong", { id: toastId, duration: 1000 });
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "destination", headerName: "Destination", flex: 1 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "budget", headerName: "budget", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete" onClick={() => handleDelete(row?.id)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Button
        onClick={() => setIsModalOpen(true)}
        endIcon={<AddIcon />}
        sx={{ mt: 3.5 }}
      >
        Create Trip
      </Button>
      <PostTripModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box sx={{ mb: 5 }}></Box>

      <Box>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Box my={2}>
            <DataGrid
              rows={data || []}
              columns={columns}
              hideFooter
              slots={{
                footer: () => {
                  return (
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Pagination
                        color="primary"
                        page={page}
                        onChange={handleChange}
                      />
                    </Box>
                  );
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PostTripPage;
