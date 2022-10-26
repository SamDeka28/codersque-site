import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import styles from "../../styles/portfolio.module.css";

interface IProps {
  type: string;
  name: string;
  project: string;
  content: string;
  button_text: string;
  alignText:boolean
  // image?: HTMLImageElement
}

const ProjectDesc: React.FC<IProps> = ({
  type,
  name,
  project,
  content,
  button_text,
  alignText
}) => {
  return (
    <Box className={ alignText ?styles.textBox :styles.textBox2}>
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
