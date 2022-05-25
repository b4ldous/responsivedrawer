import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;
const navLinks = [
  { title: "First", path: "/first" },
  { title: "Second", path: "/second" },
  { title: "Third", path: "/third" },
];

export default function DesktopComponent() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        elevation={0}
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography component={NavLink} to="/">
            Home
          </Typography>
        </Toolbar>
        <Divider />

        <List sx={{ padding: "10px" }}>
          {navLinks.map(({ title, path }) => (
            <ListItem
              sx={{ color: "black" }}
              key={title}
              component={NavLink}
              to={path}
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "",
                background: isActive ? "black" : "",
                borderRadius: isActive ? "20px" : "",
              })}
            >
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
