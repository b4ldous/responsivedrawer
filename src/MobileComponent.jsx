import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import DragHandleIcon from "@mui/icons-material/DragHandle";

import IconButton from "@mui/material/IconButton";
import { Divider } from "@mui/material";

const data = [
  { name: "First", path: "/first" },
  { name: "Second", path: "/second" },
  { name: "Third", path: "/third" },
];

const Layout = () => {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 240 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem
          sx={{ color: "black" }}
          style={({ isActive }) => ({
            color: isActive ? "white" : "",
            background: isActive ? "black" : "",
          })}
          component={NavLink}
          to={item.path}
          key={index}
        >
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  return (
    <Box>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Outlet />
      </Box>

      <AppBar color="inherit" elevation={0}>
        <Toolbar>
          <IconButton onClick={() => setOpen(true)}>
            <DragHandleIcon />
          </IconButton>
          <IconButton component={NavLink} to="/">
            <HomeIcon
              sx={{
                color: "black",
              }}
            />
          </IconButton>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
};

export default Layout;
