import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./SectionTitle.module.css";

interface IProps {
  title: string;
}

const SectionTitle: React.FC<IProps> = ({ title }) => {
  return (
    <Box sx={{ marginBottom: 8, position: "relative" }}>
      <Typography variant="h3" color="primary" fontWeight={"bold"}>
        {title}
      </Typography>
      <Box
        className={styles.belowBar}
        sx={{ backgroundColor: "secondary.main" }}
      ></Box>
    </Box>
  );
};

export default SectionTitle;
