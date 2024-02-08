import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./infoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from '@mui/icons-material/Cloud';


export default function InfoBox({ info }) {
  //  let info = {
  //   city:'belgaum',
  //   humidity: 29.36,
  //   maxtemp: 28.95,
  //   mintemp: 28.95,
  //   temp: 28.95,
  //   weather: "scattered clouds",
  // };

  let snowimg =
    "https://media.istockphoto.com/id/888878120/photo/snowy-winter-christmas-bokeh-background-with-circular-lights-and-trees.webp?b=1&s=170667a&w=0&k=20&c=jiN3xJHd3mjdXcgPcsqlqupSutBvEk54QnJ8qHz_BeM=";
  let cloudyimg =
    "https://media.istockphoto.com/id/904784522/photo/dramatic-sky.webp?b=1&s=170667a&w=0&k=20&c=X9_uAgNjcXImrgK6FmRXbWxApajiOv8Xg3l6JzX-ujg=";
  let lighthotimg =
    "https://media.istockphoto.com/id/1033581442/photo/paddy-field-farming-at-sunrise.jpg?s=612x612&w=0&k=20&c=UY9tsQVdUHVcTWcu9URqzj50lzzQkBm7fP9OvnTp7tg=";

  let rainimg =
    "https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=612x612&w=0&k=20&c=rJcjz9o_7spWniAhZ-oFOVQ9gBJCy2tY_s__RqsseVw=";
  let hotimg =
    "https://media.istockphoto.com/id/917178010/photo/road-panorama-on-sunny-spring-day.webp?b=1&s=170667a&w=0&k=20&c=3Kgw3-hBJy9E0AtHFAELjVi3b3Hxa7VGpGF_qvMNWZk=";
    

  return (
    <div className="main-card">
      <Card className="cardd" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              info.humidity > 75 ? (
                rainimg
              ) : info.temp < 3 ? (
                snowimg
              ) : info.temp < 10 ? (
                cloudyimg
              ) : info.temp < 15 ? (
                lighthotimg
              ) : (
                hotimg
              )
            }
          />
          <div className="cardinfo">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <p>
                  {info.city}
                  <span  className="tenpIcon">
                    {info.humidity > 75
                      ? <ThunderstormIcon/>
                      : info.temp < 3
                      ? <AcUnitIcon/>
                      : info.temp < 10
                      ? < CloudIcon/>
                      : info.temp < 15
                      ? < WbSunnyIcon/>
                      : < WbSunnyIcon/>}
                      
                  </span>
                </p>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
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
    </div>
  );
}

// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
// import './infoBox.css'

// const InfoBox = React.memo(({ info }) => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://images.unsplash.com/photo-1520632587893-f4e855502ca3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="green iguana"
//         />
//         <div className="cardinfo">
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               <p>{info.city}</p>
//             </Typography>
//             <Typography variant="body2" color="text.secondary" component={'span'}>
//               <p>humidity = {info.humidity}</p>
//               <p>temperature = {info.temp}&deg;C</p>
//               <p>MIN-temperature = {info.mintemp}&deg;C</p>
//               <p>MAX-temperature = {info.maxtemp}&deg;C</p>
//               <p>weather = {info.weather}</p>
//             </Typography>
//           </CardContent>
//         </div>
//       </CardActionArea>
//     </Card>
//   );
// });

// export default InfoBox;
