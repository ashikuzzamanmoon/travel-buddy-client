import { USER_ROLE } from "@/contants/role";
import { DrawerItem, UserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import PortraitIcon from "@mui/icons-material/Portrait";
import CommuteIcon from "@mui/icons-material/Commute";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: ManageAccountsIcon,
        },
        {
          title: "Manage Trips",
          path: `${role}/manage-trips`,
          icon: CommuteIcon,
        },
        {
          title: "My Profile",
          path: `${role}/my-profile`,
          icon: PortraitIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Post Trip",
          path: `${role}/post-trip`,
          icon: CommuteIcon,
        },
        {
          title: "Travel Request",
          path: `${role}/travel-request`,
          icon: RequestPageIcon,
        },
        {
          title: "My Request",
          path: `${role}/my-requests`,
          icon: ManageHistoryIcon,
        },
        {
          title: "Request History",
          path: `${role}/request-history`,
          icon: WorkHistoryIcon,
        },
        {
          title: "My Profile",
          path: `${role}/my-profile`,
          icon: PortraitIcon,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
