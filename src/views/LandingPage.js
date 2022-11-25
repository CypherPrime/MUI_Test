import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Gradient } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import im from "./../asserts/images/round.svg";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function LandingPage() {
  return (
    <>
      <Box
        component="div"
        sx={{
          p: 2,

          width: "100%",
        }}
        style={{
          background:
            "linear-gradient(100.72deg, #122E99 -12.83%, #2370C8 104.22%)",
        }}
      >
        <Container maxWidth="md">
          <Card sx={{ maxWidth: 450, background: "transparent" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{ color: "white" }}
              >
                Creative Digital Agency
              </Typography>
              <Typography color="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="medium"
                sx={{ backgroundColor: "white", borderRadius: 10 }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
      <Box
        component="div"
        sx={{
          p: 2,

          width: "100%",
        }}
        style={{
          background:
            "linear-gradient(100.72deg, white -12.83%, white 104.22%)",
        }}
      >
        <Container maxWidth="md">
          <div style={{ textAlign: "center" }}>
            <Typography variant="p" sx={{ color: "#2370C8" }}>
              Our Services
            </Typography>
            <Typography variant="h3" sx={{ color: "#262A4E" }}>
              We are Providing Digital Services
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card sx={{ maxWidth: 250, padding: 3, textAlign: "center" }}>
              <CardMedia
                component="img"
                image={im}
                alt="Card Image"
                style={{
                  height: "100px",
                  width: "100px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 250, padding: 3, textAlign: "center" }}>
              <CardMedia
                component="img"
                image={im}
                alt="Card Image"
                style={{
                  height: "100px",
                  width: "100px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 250, padding: 3, textAlign: "center" }}>
              <CardMedia
                component="img"
                image={im}
                alt="Card Image"
                style={{
                  height: "100px",
                  width: "100px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all
                </Typography>
              </CardContent>
            </Card>
          </div>
          <Grid
            container
            spacing={2}
            sx={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <Grid item xs={5}>
              <img
                src={require("./../asserts/images/round.svg").default}
                width="300px"
              />
            </Grid>
            <Grid item xs={7}>
              <Card sx={{ maxWidth: 450, background: "transparent" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ color: "#2370C8" }}
                  >
                    About Us
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{ color: "#262A4E" }}
                  >
                    We Design, Build Brands & digital projects
                  </Typography>
                  <Typography color="black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                    <br />
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequa
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="medium"
                    sx={{ backgroundColor: "black", borderRadius: 10 }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          backgroundColor: "#F2F9FF",
        }}
      >
        <Container maxWidth="md">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card
              sx={{
                maxWidth: 200,
                height: 150,
                padding: 3,
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                image={im}
                alt="Card Image"
                style={{
                  height: "70px",
                  width: "70px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 200,
                height: 150,
                padding: 3,
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                image={im}
                alt="Card Image"
                style={{
                  height: "70px",
                  width: "70px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 200,
                height: 150,
                padding: 3,
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                image={im}
                alt="Card Image"
                style={{
                  height: "70px",
                  width: "70px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Box>
      <Container maxWidth="md">
        <ImageList sx={{ width: "100%" }}>
          <ImageListItem key="Subheader" cols={3}>
            <Typography variant="h6" sx={{ color: "#2370C8" }}>
              Our Portfolio
            </Typography>
            <Typography variant="h4" sx={{ color: "#262A4E" }}>
              Take A Look At Our Lates Work
            </Typography>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          backgroundColor: "#F2F9FF",
        }}
      >
        <Container maxWidth="md">
          <div style={{ textAlign: "center", width: "100%" }}>
            <Typography variant="p" sx={{ color: "#2370C8" }}>
              Our Team
            </Typography>
            <Typography variant="h3" sx={{ color: "#262A4E" }}>
              Our Top Dedicated Proffessionals
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card
              sx={{
                maxWidth: "416px",
                height: "450px",
                position: "relative",
                margin: "5px",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100%"
                image="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  right: "1px",
                  Width: "360px",
                  height: "89px",
                  zIndex: 100000,
                }}
              >
                <Typography variant="h6" sx={{ color: "#262A4E" }}>
                  We are Providing Digital Services
                </Typography>
                <Typography variant="body2" sx={{ color: "#black" }}>
                  We are Providing Digital Services
                </Typography>
              </div>
            </Card>
            <Card
              sx={{
                maxWidth: "416px",
                height: "450px",
                position: "relative",
                margin: "5px",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100%"
                image="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  right: "1px",
                  Width: "360px",
                  height: "89px",
                  zIndex: 100000,
                }}
              >
                <Typography variant="h6" sx={{ color: "#262A4E" }}>
                  We are Providing Digital Services
                </Typography>
                <Typography variant="body2" sx={{ color: "#black" }}>
                  We are Providing Digital Services
                </Typography>
              </div>
            </Card>
            <Card
              sx={{
                maxWidth: "416px",
                height: "450px",
                position: "relative",
                margin: "5px",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100%"
                image="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  right: "1px",
                  Width: "360px",
                  height: "89px",
                  zIndex: 100000,
                }}
              >
                <Typography variant="h6" sx={{ color: "#262A4E" }}>
                  We are Providing Digital Services
                </Typography>
                <Typography variant="body2" sx={{ color: "#black" }}>
                  We are Providing Digital Services
                </Typography>
              </div>
            </Card>
          </div>
        </Container>
      </Box>
    </>
  );
}
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
];
