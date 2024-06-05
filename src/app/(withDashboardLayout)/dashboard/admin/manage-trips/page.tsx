"use client";

import { useDeleteTripMutation, useGetAllTripQuery } from "@/redux/api/tripApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";
import { dateFormate } from "@/utils/dateFormate";

const ManageTripsPage = () => {
  const { data: trips, isLoading } = useGetAllTripQuery({});
  const [deleteTrip] = useDeleteTripMutation();

  const handleDelete = async (id: string) => {
    console.log(id);
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
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Link href={`/dashboard/edit-trip/${row?.id}`}>
              <IconButton aria-label="delete">
                <EditIcon sx={{ color: "green" }} />
              </IconButton>
            </Link>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(row?.id)}
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <div>
      <Box>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Box my={2}>
            <DataGrid
              rows={trips || []}
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

export default ManageTripsPage;
