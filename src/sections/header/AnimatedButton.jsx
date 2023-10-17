import React from "react";
import Button from "@mui/material/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const AnimatedButton = () => {
  return (
    <Button
      href="#contact"
      startIcon={
        <BsFillArrowRightCircleFill style={{ width: "24px", height: "24px" }} />
      }
      sx={{
        border: "none",
        background: "none",
        color: "var(--color-black)",
        transform: "rotate(90deg)",
        fontWeight: 700,
        fontSize: "12px",
        "&:hover": {
          border: "none",
          background: "none",
          color: "var(--color-primary)",
        },
      }}
    >
      Scroll Down
    </Button>
  );
};

export default AnimatedButton;
