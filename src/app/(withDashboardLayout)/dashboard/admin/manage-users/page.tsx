"use client";
import {
  useGetAllUserQuery,
  useUpdateStatusMutation,
} from "@/redux/api/userApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import EditRoleModal from "./components/EditRoleModal";
import { toast } from "sonner";
const ManageUser = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState("");
  const { data: users, isLoading } = useGetAllUserQuery({});
  const [updatedData, setUpdatedData] = useState([]);
  const [updateStatus] = useUpdateStatusMutation();

  useEffect(() => {
    const userData = users?.map((user: any) => {
      return {
        id: user?.id,
        role: user?.role,
        status: user?.status,
        profilePhoto: user?.userProfile?.userPhoto,
        userName: user?.name,
        email: user?.email,
        age: user?.userProfile?.age,
      };
    });
    setUpdatedData(userData);
  }, [users]);

  const handleStatus = async (status: string, id: string) => {
    const toastId = toast.loading("Processing...");
    const statusData = {
      userId: id,
      payload: {
        status,
      },
    };

    try {
      const res: any = await updateStatus(statusData);
      if (res?.data?.id) {
        toast.success("Status updated successfully", {
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

  const handleEdit = (userId: string) => {
    setUserId(userId);
    setIsModalOpen(true);
  };
  const columns: GridColDef[] = [
    {
      field: "profilePhoto",
      headerName: "profilePhoto",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Avatar src={row?.profilePhoto} alt="photo" />
          </Box>
        );
      },
    },
    { field: "userName", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box>
              <IconButton
                onClick={() => handleEdit(row?.id)}
                aria-label="delete"
              >
                <EditIcon sx={{ color: "green" }} />
              </IconButton>
              <EditRoleModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                userId={userId}
              />
            </Box>
            <IconButton>
              {row?.status === "ACTIVE" ? (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleStatus("DEACTIVATE", row?.id)}
                >
                  DeActive
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleStatus("ACTIVE", row?.id)}
                >
                  Active
                </button>
              )}
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

export default ManageUser;
