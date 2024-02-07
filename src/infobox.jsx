import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import './infoBox.css'

export default function InfoBox() {
   let info = {
    city:'belgaum',
    humidity: 29.36,
    maxtemp: 28.95,
    mintemp: 28.95,
    temp: 28.95,
    weather: "scattered clouds",
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1520632587893-f4e855502ca3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="green iguana"
        />
        <div className="cardinfo">
            
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <p>{info.city}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary" component={'span'}>
            <p>humidity = {info.humidity}</p>
            <p>temperature = {info.temp}&deg;C</p>
            <p>MIN-temperature = {info.mintemp}&deg;C</p>
            <p>MAX-temperature = {info.maxtemp}&deg;C</p>
            <p>weather = {info.weather}</p>
          </Typography>
        </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}
