import { Box, Button, css, styled } from "@mui/material";
import React from "react";
import styles from "./CustomButton.module.css";
import EastIcon from "@mui/icons-material/East";

const FilledButton = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.palette.primary.main};
    border: solid 2px ${theme.palette.primary.main};
    color: white;
    padding: 0.5rem;
    border-radius: 100rem;
    text-transform: none;
    width: 364px;
    height :70px;
    font-size : 16px;
    font-family: 'Poppins', sans-serif;
    :hover {
      background-color: ${theme.palette.primary.main};
    }
    ${theme.breakpoints.down("md")}{
      width : 100%
    }
  `
);

const OutlinedButton = styled(Button)(
  ({ theme }) => css`
    border: solid 2px ${theme.palette.secondary.main};
    padding: 0.5rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 100rem;
    color: ${theme.palette.secondary.main};
    text-transform: none;
    width: 364px;
    height :70px;
    // font-size : 16px;
    ${theme.breakpoints.down("md")}{
      width : 100%
    }
  `
);

interface IProps {
  title: string;
  type: "filled" | "outlined";
  arrow: boolean;
}

const CustomButton: React.FC<IProps> = ({ title, type, arrow }) => {
  return (
    <>
      {type === "filled" && (
        <FilledButton
          endIcon={arrow ? <EastIcon sx={{ marginLeft: 3 }} /> : ""}
        >
          {title}
        </FilledButton>
      )}
      {type === "outlined" && (
        <OutlinedButton
          endIcon={arrow ? <EastIcon sx={{ marginLeft: 3 }} /> : ""}
        >
          {title}
        </OutlinedButton>
      )}
    </>
  );
};

export default CustomButton;
