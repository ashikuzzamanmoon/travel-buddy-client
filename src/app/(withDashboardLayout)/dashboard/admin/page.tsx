"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import {
  useGetAllTripQuery,
  useGetRequestByUserQuery,
  useGetTripsByUserQuery,
} from "@/redux/api/tripApi";
import { dateFormate } from "@/utils/dateFormate";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const AdminDashboard = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lastVisit = sessionStorage.getItem("lastVisit");
      const currentTime = new Date().getTime();
      if (!lastVisit || currentTime - parseInt(lastVisit, 10) > 5000) {
        sessionStorage.setItem("lastVisit", currentTime.toString());
        window.location.reload();
      }
    }
  }, []);
  const { data, isLoading } = useGetTripsByUserQuery({});
  const { data: allTrips, isLoading: tripsLoading } = useGetAllTripQuery({});
  const { data: users, isLoading: usersLoading } = useGetAllUserQuery({});
  const { data: requests } = useGetRequestByUserQuery({});
  const allTripsSlice = allTrips?.slice(0, 4);

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
  ];
  return (
    <div>
      {isLoading || usersLoading || tripsLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <div className="flex flex-col ">
          {/* Main Content */}
          <main className="flex-1 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">My Trips</h2>
                <p className="text-3xl font-bold text-blue-500">
                  {data?.length}
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Total Trips</h2>
                <p className="text-3xl font-bold text-green-500">
                  {allTrips?.length}
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Total Users</h2>
                <p className="text-3xl font-bold text-yellow-500">
                  {users?.length}
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">My Requests</h2>
                <p className="text-3xl font-bold text-red-500">
                  {requests?.length}
                </p>
              </div>
            </div>
          </main>
          {/* Table */}

          <Box>
            {isLoading ? (
              <Typography>Loading...</Typography>
            ) : (
              <Box my={2}>
                <DataGrid
                  rows={allTripsSlice || []}
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
            <div className="flex justify-center items-center">
              <Link href="/dashboard/admin/manage-trips">
                <button className="btn btn-sm btn-outline">See All</button>
              </Link>
            </div>
          </Box>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
