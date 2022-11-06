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
    ${theme.breakpoints.down('md')} {
      width : initial;  
    }
  `
);

interface IProps {
  service: { name: string; desc: string; icon: any; tools: any };
}

const ServiceCard: React.FC<IProps> = ({ service }) => {
  return (
    <MyCard style={{boxShadow : "0px 4px 30px 59px rgba(204,204,204,.25)"}}>
      <Box>
        <Image src={service.icon} />
      </Box>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "1.3rem", margin: "10px 0",fontFamily: 'Josefin Sans'}}
      >
        {service.name}
      </Typography>
      <Typography sx={{ color: "#616161", fontSize: "0.9rem" }}>
        {service.desc}
      </Typography>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "1.1rem", margin: "20px 0",fontFamily: 'Josefin Sans' }}
      >
        Technologies/Tools :
      </Typography>
      <Stack direction="row" spacing={2}>
        {service.tools.map((tool: any, index: number) => {
          return (
            <Box key={`tool-${index}`}>
              <Image src={tool} />
            </Box>
          );
        })}
      </Stack>
    </MyCard>
  );
};

export default ServiceCard;
