import React from "react";
import { Stack } from "@mui/material";

const HeroContainer = ({ children }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "90vh",
        px: { xs: "1rem", sm: "6rem" },
        mb: "2rem",
        background: "radial-gradient(circle at 3% 25%,#002853 0,#040c18 100%);",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <Stack
        direction={{ sm: "row" }}
        alignItems={"center"}
        justifyContent={{ xs: "center", sm: "space-between" }}
        sx={{ p: "2rem 1rem", textAlign: { xs: "center", md: "left" } }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default HeroContainer;
