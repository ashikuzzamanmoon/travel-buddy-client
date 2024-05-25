import { USER_ROLE } from "@/contants/role";
import { DrawerItem, UserRole } from "@/types";

// icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PortraitIcon from "@mui/icons-material/Portrait";
import CommuteIcon from "@mui/icons-material/Commute";

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
          icon: GroupIcon,
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
          title: "My Profile",
          path: `${role}/my-profile`,
          icon: PortraitIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
