import styled from "@emotion/styled";
import {
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import React from "react";
import "./styles.css";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// const CustomAccordion = ({ title, info }) => {
//   const [isActive, setIsActive] = useState(false);
//   return (
//     <span className="accordion-item">
//       <span
//         className="accordion-title"
//         onClick={() => setIsActive(!isActive)}
//       >
//         <span>{title}</span>
//         <span>{isActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
//       </span>
//       {isActive && (
//         <span>
//           <span className="accordion-content link">
//             {info.map((info) => (
//               <a key={info.title} href={info.path}>
//                 {info.title}
//               </a>
//             ))}
//           </span>
//           <Divider sx={{ borderColor: "#fff" }} />
//         </span>
//       )}
//     </span>
//   );
// };

// export default CustomAccordion;

const StyledLink = styled.a`
  font-size: 18px !important;
  &:after{
    display: none !important;
  }
`;

const CustomAccordion = ({ title, info }) => {
  return (
    <Accordion
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        sx={{ display: "grid", placeContent: "center" }}
      >
        <Typography
          sx={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "24px !important",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ display: "flex", flexDirection: "column", gap: "2em" }}
      >
        {info.map((info) => (
          <StyledLink
            className="nav-link"
            key={info.title}
            href={info.path}
            // style={{ fontSize: "18px" }}
          >
            {info.title}
          </StyledLink>
        ))}
      </AccordionDetails>
      <Divider sx={{ borderColor: "#fff" }} />
    </Accordion>
  );
};

export default CustomAccordion;
