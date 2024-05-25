"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import { Box, Button, Container } from "@mui/material";

export default function TravelCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container sx={{ my: 5 }}>
      <div
        style={{
          backgroundColor: "#666f73",
          color: "white",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h4" gutterBottom>
          Travel Explorer
        </Typography>
        <Typography variant="h6" component="h4">
          Explore the world one trip at a time
        </Typography>
      </div>
      <Box sx={{ display: "flex", gap: 7 }}>
        <Card sx={{ maxWidth: 345, mt: 5 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            sx={{ height: 194 }}
            component="img"
            height="194"
            image="https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?t=st=1716671016~exp=1716674616~hmac=7bd0eb6530d466f1ae457370b9a167f9febf0d8422182219ab145e167f88b5d9&w=740"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Box>
            <Box>
              <Link
                href="/"
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <Button variant="text">travel details</Button>
              </Link>
            </Box>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, mt: 5 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            sx={{ height: 194 }}
            component="img"
            height="194"
            image="https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?t=st=1716671016~exp=1716674616~hmac=7bd0eb6530d466f1ae457370b9a167f9febf0d8422182219ab145e167f88b5d9&w=740"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Box>
            <Box>
              <Link
                href="/"
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <Button variant="text">travel details</Button>
              </Link>
            </Box>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, mt: 5 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            sx={{ height: 194 }}
            component="img"
            height="194"
            image="https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?t=st=1716671016~exp=1716674616~hmac=7bd0eb6530d466f1ae457370b9a167f9febf0d8422182219ab145e167f88b5d9&w=740"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Box>
            <Box>
              <Link
                href="/"
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <Button variant="text">travel details</Button>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Link href="/">
          <Button>See More</Button>
        </Link>
      </Box>
    </Container>
  );
}
