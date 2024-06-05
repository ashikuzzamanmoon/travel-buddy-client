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
import { useGetAllTripQuery } from "@/redux/api/tripApi";
import { dateFormate } from "@/utils/dateFormate";

export default function TravelCard() {
  const [expanded, setExpanded] = React.useState(false);
  const { data: trips, isLoading } = useGetAllTripQuery({});
  // console.log(trips);
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
      {isLoading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        <Box>
          <div className="grid lg:grid-cols-3 gid-cols-1">
            {trips?.slice(0, 9)?.map((trip: any) => (
              <Card key={trip?.id} sx={{ maxWidth: 345, mt: 5 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      src={trip?.user?.userProfile?.userPhoto}
                      sx={{ bgcolor: red[500] }}
                      aria-label="travel"
                    />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={trip?.user?.name}
                  subheader={dateFormate(trip?.createdAt)}
                />
                <CardMedia
                  sx={{ height: 194 }}
                  component="img"
                  height="194"
                  image={trip?.photo}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                  <p>Destination : {trip?.destination}</p>
                  <p>Budget : {trip?.budget}</p>
                  <p>StartDate : {dateFormate(trip?.startDate)}</p>
                  <p>StartDate : {dateFormate(trip?.endDate)}</p>
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
                      href={`/trips/trip-details/${trip?.id}`}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <Button variant="text">travel details</Button>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            ))}
          </div>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Link href="/trips">
              <Button>See More</Button>
            </Link>
          </Box>
        </Box>
      )}
    </Container>
  );
}
