"use client";
import { Box, Typography } from "@mui/material";
const Title = () => {
  return (
    <Box>
      <Typography
        component={"h1"}
        sx={{
          fontSize: { xs: "3rem", md: "5rem" },
          fontWeight: "bold",
        }}
        role="title"
      >
        Tra cứu kiến thức OOP
      </Typography>
    </Box>
  );
};
export default Title;
