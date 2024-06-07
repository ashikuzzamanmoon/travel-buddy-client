"use client";
import { useGetTripByIdQuery } from "@/redux/api/tripApi";
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
import { dateFormate } from "@/utils/dateFormate";
const TripDetailsPage = ({ params }: { params: { tripId: string } }) => {
  const { tripId } = params;
  const { data: trip, isLoading } = useGetTripByIdQuery(tripId);
  console.log({ trip });
  return (
    <div className="flex justify-center items-center mt-2 ">
      <Card key={trip?.id} sx={{ maxWidth: 345 }}>
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
          <p>Description : {trip?.description}</p>
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
            <Link href="/dashboard/user/travel-request" aria-label="show more">
              <Button variant="text">Join Trip</Button>
            </Link>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
};

export default TripDetailsPage;
