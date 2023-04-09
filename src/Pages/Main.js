import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import ContainedButton from "../Components/Button/ContainedButton";
import Image from "../Components/Image";
import CodeIllustrator from "../Assets/Images/code-illustrator.svg";
import { technologies } from "../Utils/Technologies";
import { shuffleArray } from "../Utils/Arrays";

const Main = () => {
  const Hero = () => (
    <Box mt={6.75}>
      <Grid container spacing={2}>
        <Grid item xl={6} lg={6}>
          <Typography variant="h1" sx={{ fontWeight: "bold" }} gutterBottom>
            Building{" "}
            <Typography
              component="span"
              color="primary.main"
              sx={{ fontFamily: "merienda", fontSize: 64 }}
            >
              robust{" "}
            </Typography>
            &{" "}
            <Typography
              component="span"
              color="secondary.main"
              sx={{ fontFamily: "merienda", fontSize: 64 }}
            >
              scalable
            </Typography>{" "}
            digital products.
          </Typography>
          <Typography gutterBottom>
            I seek to deliver well designed and orchestrated digital products,
            built with modern technologies that will meet overall business needs
            .
          </Typography>
          <ContainedButton
            color="secondary"
            sx={{ width: 179, height: 52, mt: 4 }}
          >
            Hire me
          </ContainedButton>
        </Grid>
        <Grid item xl={6} lg={6}>
          <Image
            src={CodeIllustrator}
            alt="Code Illustrator"
            height="100%"
            sx={{ objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box>
      <Hero />
      <Box sx={{ my: 1 }}>
        <Grid container spacing={1}>
          {shuffleArray(technologies).map((technology) => (
            <Grid item lg={2} key={technology.name}>
              <Link href={technology.url} target="_blank">
                <Image
                  src={technology.src !== "" ? technology.src : "/"}
                  alt={technology.name}
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
