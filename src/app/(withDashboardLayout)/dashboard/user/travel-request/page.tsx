"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import {
  useGetAllTripQuery,
  useSendBuddyRequestMutation,
} from "@/redux/api/tripApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { dateFormate } from "@/utils/dateFormate";
const TravelRequestPage = () => {
  const { data, isLoading } = useGetAllTripQuery({});
  const [updatedData, setUpdatedData] = useState([]);
  const [sendBuddyRequest] = useSendBuddyRequestMutation();
  // console.log(data);
  useEffect(() => {
    const tripData = data?.map((trip: any) => {
      return {
        id: trip?.id,
        userId: trip?.user?.id,
        profilePhoto: trip?.user?.userProfile?.userPhoto,
        userName: trip?.user?.name,
        destination: trip?.destination,
        startDate: trip?.startDate,
        endDate: trip?.endDate,
        budget: trip?.budget,
        photo: trip?.photo,
      };
    });
    setUpdatedData(tripData);
  }, [data]);

  const handleBuddyRequest = async (tripId: string, userId: string) => {
    const buddyData = {
      tripId,
      userId,
    };
    const toastId = toast.loading("Processing...");
    try {
      const res: any = await sendBuddyRequest(buddyData);
      console.log(res);
      if (res?.data?.id) {
        toast.success("Request send successfully", {
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
    {
      field: "profilePhoto",
      headerName: "UserPhoto",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Avatar src={row?.profilePhoto} alt="photo" />
          </Box>
        );
      },
    },
    { field: "userName", headerName: "userName", flex: 1 },
    { field: "destination", headerName: "Destination", flex: 1 },
    {
      field: "photo",
      headerName: "Photo",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row?.photo} alt="photo" width={140} height={100} />
          </Box>
        );
      },
    },
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 1,
      valueGetter: ({ value }) => dateFormate(value),
    },
    {
      field: "endDate",
      headerName: "End Date",
      flex: 1,
      valueGetter: ({ value }) => dateFormate(value),
    },
    { field: "budget", headerName: "budget", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete">
            <Button
              onClick={() => handleBuddyRequest(row?.id, row?.userId)}
              size="small"
            >
              Add buddy
            </Button>
          </IconButton>
        );
      },
    },
  ];

  return (
    <div>
      <h1>Travel Request Page</h1>
      <Box>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Box my={2}>
            <DataGrid
              rows={updatedData || []}
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
                    ></Box>
                  );
                },
              }}
            />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default TravelRequestPage;
