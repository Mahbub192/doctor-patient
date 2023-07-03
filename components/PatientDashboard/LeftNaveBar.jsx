import { AuthContext } from "@/providers/AuthProvider";
import { Avatar } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";

import AdminPanelSettingsSharpIcon from "@mui/icons-material/AdminPanelSettingsSharp";
import AttachFileSharpIcon from "@mui/icons-material/AttachFileSharp";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import KeySharpIcon from "@mui/icons-material/KeySharp";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import PowerSettingsNewSharpIcon from "@mui/icons-material/PowerSettingsNewSharp";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const LeftNaveBar = () => {
    const { user } = useContext(AuthContext);
    return (
      <div className=" h-full border-2 shadow-2xl ">
        <div className="">
          <Avatar
            alt="Remy Sharp"
            className="mx-auto "
            src={user?.photoURL}
            sx={{ width: 150, height: 150 }}
          />
          <div className="text-center mt-5">
            <p>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
          </div>
          <div className="mt-3 px-5">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <ListItemIcon>
                  <DashboardSharpIcon />
                </ListItemIcon>
                <Link href={"http://localhost:3000/patient/PatientHome"}>
                  <ListItemText primary="Dashboard" />
                </Link>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AttachFileSharpIcon />
                </ListItemIcon>
                <Link href={"http://localhost:3000/patient/AddMedicalRecord"}>
                  <ListItemText primary="Add medical Records" />
                </Link>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <ManageAccountsSharpIcon />
                </ListItemIcon>
                <Link href={"#"}>
                  <ListItemText primary="Medical Details" />
                </Link>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <ReceiptSharpIcon />
                </ListItemIcon>
                <Link href={"http://localhost:3000/patient/Invoice"}>
                  <ListItemText primary="Invoices" />
                </Link>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AdminPanelSettingsSharpIcon />
                </ListItemIcon>
                <Link href={"#"}>
                  <ListItemText primary="Profile Settings" />
                </Link>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <KeySharpIcon />
                </ListItemIcon>
                <Link href={"#"}>
                  <ListItemText primary="Change password " />
                </Link>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <PowerSettingsNewSharpIcon />
                </ListItemIcon>
                <Link href={"#"}>
                  <ListItemText primary="Log Out" />
                </Link>
              </ListItemButton>
            </List>
          </div>
        </div>
      </div>
    );
};

export default LeftNaveBar;