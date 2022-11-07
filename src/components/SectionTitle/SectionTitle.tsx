import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./SectionTitle.module.css";
import {motion} from "framer-motion"

interface IProps {
  title: string;
  type? : "secondary" | "primary";
  watermark? : string 
}

const SectionTitle: React.FC<IProps> = ({ title,type,watermark }) => {
  return (
    <Box sx={{ marginBottom: 8, position: "relative" }}>
      <Typography variant="h3" className={styles.title}   style={{color : type=="primary" ? "#ffffff" : "#3A0CA3" }}>
        {title}
      </Typography>
      <p className={styles.watermark} style={{color : type=="primary" ? "#2B0978" : "#F9F9F9"}}>
        {watermark || title}
      </p>
      <Box
        className={styles.belowBar}
        sx={{ backgroundColor: "secondary.main" }}
      ></Box>
    </Box>
  );
};

export default SectionTitle;
