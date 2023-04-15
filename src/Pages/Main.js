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
    <Box sx={{ marginY: 4, [theme.breakpoints.down("md")]: { marginY: 2 } }}>
      <Grid
        container
        direction={isMobileTablet ? "column-reverse" : "row"}
        rowSpacing={isMobileTablet ? 2 : 0}
      >
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ [theme.breakpoints.down("md")]: { textAlign: "center" } }}
        >
          <Typography
            component="div"
            variant="h1"
            sx={{
              fontWeight: "bold",
              [theme.breakpoints.down("md")]: { fontSize: 24, mb: 4 },
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
            sx={{ [theme.breakpoints.down("md")]: { fontSize: 13 } }}
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
              mt: 4,
              [theme.breakpoints.down("md")]: { width: "100%" },
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
        <title>Alex Gitari</title>
        <meta
          name="description"
          content="Building robust & scalable digital products."
        ></meta>
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
