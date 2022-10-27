import { Box, css, Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const MyCard = styled(Paper)(
  ({ theme }) => css`
    background-color: white;
    width: 70%;
    padding: 2rem;
    border-radius: 20px;
    position: relative;
    z-index: 20;
  `
);

interface IProps {
  technology: { name: string; icon: any };
}

const TechnologyCard: React.FC<IProps> = ({ technology }) => {
  return (
    <MyCard elevation={3}>
      <Box>
        <Image src={technology.icon} />
      </Box>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "1.3rem", margin: "10px 0" }}
      >
        {technology.name}
      </Typography>
    </MyCard>
  );
};

export default TechnologyCard;
