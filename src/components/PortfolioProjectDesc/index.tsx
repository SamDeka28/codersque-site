import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./portfolio.module.css";

interface IProps {
  type: string;
  name: string;
  project: string;
  content: string;
  button_text: string;
  alignText: boolean;
  // image?: HTMLImageElement
}

const ProjectDesc: React.FC<IProps> = ({
  type,
  name,
  project,
  content,
  button_text,
  alignText,
}) => {
  return (
    <Box className={alignText ? styles.textBox : styles.textBox2}>
      <Typography variant="h6" className={styles.industry}>
        <b>{type} :</b> {name}
      </Typography>
      <Typography variant="h5" className={styles.project}>
        <b>{project}</b>
      </Typography>
      <Typography variant="h6" className={styles.inContent}>
        {content}
      </Typography>
      <Button variant="contained" color="primary" className={styles.buttonDes}>
        {button_text}
      </Button>
    </Box>
  );
};
export default ProjectDesc;
