import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NoPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ fontWeight: 1000, color: "red" }}>
          404, Not found
        </Typography>
      </Box>
    </Box>
  );
};

export default NoPage;
