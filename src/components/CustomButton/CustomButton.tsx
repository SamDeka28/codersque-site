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
    width: 100%;

    :hover {
      background-color: ${theme.palette.primary.main};
    }
  `
);

const OutlinedButton = styled(Button)(
  ({ theme }) => css`
    border: solid 2px ${theme.palette.secondary.main};
    padding: 0.5rem;
    border-radius: 100rem;
    color: ${theme.palette.secondary.main};
    text-transform: none;
    width: 100%;
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
