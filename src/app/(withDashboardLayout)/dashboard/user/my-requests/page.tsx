"use client";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import {
  useGetRequestByUserQuery,
  useResponseBuddyRequestMutation,
} from "@/redux/api/tripApi";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { dateFormate } from "@/utils/dateFormate";

const MyRequestsPage = () => {
  const { data, isLoading } = useGetRequestByUserQuery({});
  const [responseBuddyRequest] = useResponseBuddyRequestMutation();
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    const tripData = data?.map((trip: any) => {
      return {
        id: trip?.id,
        status: trip?.status,
        profilePhoto: trip?.user?.userProfile?.userPhoto,
        userName: trip?.user?.name,
        destination: trip?.trip?.destination,
        startDate: trip?.trip?.startDate,
        endDate: trip?.trip?.endDate,
        budget: trip?.trip?.budget,
        photo: trip?.trip?.photo,
      };
    });
    setUpdatedData(tripData);
  }, [data]);

  const handleResponse = async (id: string, status: string) => {
    const toastId = toast.loading("Processing...");
    const buddyData = {
      id,
      status,
    };
    try {
      const res: any = await responseBuddyRequest(buddyData);
      console.log(res);
      if (res?.data?.id) {
        toast.success("Request  response successfully", {
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
      field: "photo",
      headerName: "Photo",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row?.photo} width={100} height={100} alt="photo" />
          </Box>
        );
      },
    },
    { field: "destination", headerName: "Destination", flex: 1 },
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
    { field: "status", headerName: "status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            {row?.status === "PENDING" ? (
              <IconButton
                aria-label="delete"
                onClick={() => handleResponse(row?.id, "APPROVED")}
              >
                <button className="btn btn-sm">Accept</button>
              </IconButton>
            ) : (
              <IconButton
                aria-label="delete"
                onClick={() => handleResponse(row?.id, "PENDING")}
              >
                <button className="btn btn-sm">Reject</button>
              </IconButton>
            )}
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
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
    </Box>
  );
};

export default MyRequestsPage;
