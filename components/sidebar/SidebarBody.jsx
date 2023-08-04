import { Box, Container } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import categories from "@/public/data/categories.json";
import { SidebarIcons } from "@/public/icons/MainIcons";
import Link from "next/link";

const SidebarBody = ({ isActive }) => {
  // Handle sidebar accordions
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded && isActive ? panel : false);
  };
  const [subExpanded, setSubExpanded] = React.useState(false);

  const handleSubChange = (panel) => (event, isSubExpanded) => {
    setSubExpanded(isSubExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        overflowY: isActive ? "scroll" : "hidden",
        overflowX: "hidden",
      }}
      id="main_sidebar_body"
    >
      {categories.map((cat) => (
        <Box key={cat.id}>
          <Container>
            <Typography mt={2} mb={3} visibility={!isActive && "hidden"}>
              {cat.category}
            </Typography>
          </Container>
          {cat.content.map((content) => (
            <Accordion
              expanded={expanded === `panel${content.title}`}
              onChange={handleChange(`panel${content.title}`)}
              sx={{
                bgcolor: "transparent",
                color: "#62626c",
                border: "none",
                boxShadow: 0,
                outline: "none",
              }}
              key={content.id}
            >
              <AccordionSummary
                expandIcon={
                  isActive && <ExpandMoreIcon sx={{ color: "#62626c" }} />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                {
                  <Box fontSize={20} mx={2}>
                    {SidebarIcons.map((e) => {
                      if (e.title === content.title) {
                        return <Box key={e.title}>{e.icon}</Box>;
                      }
                    })}
                  </Box>
                }
                <Typography display={!isActive && "none"}>
                  {content.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ display: !isActive && "none" }}>
                {content.list.map((e, index) =>
                  typeof e == "string" ? (
                    <Link href={"#"} key={index}>
                      <Typography pl={5} mb={2}>
                        {e}
                      </Typography>
                    </Link>
                  ) : (
                    <Accordion
                      expanded={subExpanded === `panel/${e.title}`}
                      onChange={handleSubChange(`panel/${e.title}`)}
                      sx={{
                        bgcolor: "transparent",
                        color: "#62626c",
                        border: "none",
                        boxShadow: 0,
                      }}
                      key={index}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon sx={{ color: "#62626c" }} />
                        }
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography>{e.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {e.sublist.map((e, index) => (
                          <Link href={"#"} key={index}>
                            <Typography pl={5} mb={2}>
                              {e}
                            </Typography>
                          </Link>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  )
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default SidebarBody;
