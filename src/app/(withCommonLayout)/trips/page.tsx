"use client";
import { useGetAllTripQuery } from "@/redux/api/tripApi";
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
import { Box, Button, Container, TextField } from "@mui/material";
import { dateFormate } from "@/utils/dateFormate";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
const TripsPage = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  if (searchTerm) {
    query["searchTerm"] = searchTerm;
  }
  if (startDate) {
    query["startDate"] = startDate;
  }
  if (endDate) {
    query["endDate"] = endDate;
  }
  console.log({ query });
  const { data: trips, isLoading } = useGetAllTripQuery({ ...query });

  return (
    <div className="mx-10 mb-7">
      <h1 className="text-3xl font-bold my-3">All Trips</h1>
      <div className="flex  justify-between">
        <TextField
          size="small"
          onChange={(e) => setSearchTerm(e.target.value)}
          label="Search"
        />

        <div className="md:my-0 my-3">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              timezone="system"
              label="Start Date"
              value={startDate}
              onChange={(newValue: Dayjs | null) => setStartDate(newValue)}
            />
          </LocalizationProvider>
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            timezone="system"
            label="End Date"
            value={endDate}
            onChange={(newValue: Dayjs | null) => setEndDate(newValue)}
          />
        </LocalizationProvider>
      </div>

      <Box>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        ) : (
          <Box>
            <div className="grid md:grid-cols-1 lg:grid-cols-3  grid-cols-1 gap-6">
              {trips?.map((trip: any) => (
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
                      {trip?.description}
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
                        aria-label="show more"
                      >
                        <Button variant="text">travel details</Button>
                      </Link>
                    </Box>
                  </CardActions>
                </Card>
              ))}
            </div>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default TripsPage;
