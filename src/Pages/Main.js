import React from "react";
import { Box, Grid, Typography, Link, useMediaQuery } from "@mui/material";
import ContainedButton from "../Components/Button/ContainedButton";
import Image from "../Components/Image";
import CodeIllustrator from "../Assets/Images/code-illustrator.svg";
import { technologies } from "../Utils/Technologies";
import { shuffleArray } from "../Utils/Arrays";
import { useTheme } from "@mui/material/styles";

import { Helmet } from "react-helmet-async";

const Main = () => {
  const theme = useTheme();
  const isMobileTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const Hero = () => (
    <Box sx={{ marginY: 3, [theme.breakpoints.down("md")]: { marginY: 1.5 } }}>
      <Grid
        container
        direction={isMobileTablet ? "column-reverse" : "row"}
        rowSpacing={isMobileTablet ? 2 : 0}
      >
        <Grid item xs={12} lg={6}>
          <Typography
            component="div"
            variant="h1"
            sx={{
              fontWeight: "bold",
              [theme.breakpoints.down("md")]: { fontSize: 24, marginY: 2 },
            }}
            gutterBottom
          >
            Building{" "}
            <Typography
              variant="span"
              color="primary.main"
              sx={{ fontFamily: "merienda" }}
            >
              robust
            </Typography>{" "}
            &{" "}
            <Typography
              variant="span"
              color="secondary.main"
              sx={{ fontFamily: "merienda" }}
            >
              scalable
            </Typography>{" "}
            digital products.
          </Typography>

          <Typography
            gutterBottom
            color="text.secondary"
            sx={{
              marginY: 2,
              [theme.breakpoints.down("md")]: { fontSize: 12, marginY: 1 },
            }}
          >
            I seek to deliver well designed and orchestrated digital products,
            built with modern technologies that will meet overall business needs
            .
          </Typography>
          <ContainedButton
            color="secondary"
            sx={{
              width: 179,
              height: 52,
              marginY: 4,
              [theme.breakpoints.down("md")]: { width: "100%", marginY: 2 },
            }}
          >
            Hire me
          </ContainedButton>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ textAlign: "center" }}>
          <Image
            src={CodeIllustrator}
            alt="Code Illustrator"
            sx={{
              maxWidth: 420,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box>
      <Helmet>
        <title>Alex Gitari | Home</title>
        <link rel="canonical" href="/"></link>
        <meta
          name="description"
          content="I seek to deliver well designed and orchestrated digital products,
            built with modern technologies that will meet overall business needs
            ."
          data-react-helmet="true"
        />
        <meta
          name="keywords"
          data-react-helmet="true"
          content="Alex Gitari,Alex Gitari Murithi,Software Engineer,Software Developer,Engineer,React Developer,MERN Developer,Laravel Developer,FullStack Developer,FrontEnd Developer,BackEnd Developer"
        />
      </Helmet>
      <Hero />
      <Box sx={{ mt: 4, display: { xs: "none", lg: "flex" } }}>
        <Grid container spacing={1}>
          {shuffleArray(technologies).map((technology) => (
            <Grid item lg={2} key={technology.name}>
              <Link href={technology.url} target="_blank">
                <Image
                  src={technology.src !== "" ? technology.src : "/"}
                  alt={technology.name}
                  sx={{ maxWidth: 100 }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default React.memo(Main);
