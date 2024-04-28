
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

let styles={
  height:"150px",
  width:"180px",
  color:"rgb(100, 89, 159)"
  
}
let cardStyles={
  backgroundColor:"rgb(130, 170,230)",
  borderRadius:"25px"
}

 

export default function InfoBox({ info}){

    return(
        <div className="InfoBox">
            {/* <h2>Weather Info-{info.weather}</h2> */}

            <Card style={cardStyles} sx={{ maxWidth: 345 }} className='card'>
     
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {info.city } &nbsp;{
            info.humidity >80
            ?<ThunderstormIcon style={styles}/>
            :info.temp > 15
            ?<WbSunnyIcon style={styles}/>
            :<AcUnitIcon style={styles}/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>temperature={info.temp}&deg;C</p>
          <p>humidity={info.humidity}</p>
          {/* <p>feelsLike={info.feelsLike}</p> */}
          <p>tempMin={info.tempMin}&deg;C</p>
          <p>tempMax={info.tempMax}&deg;C</p>
          <p>wind-speed={info.speed}</p>
          The weather can be describe as <b>{info.weather}</b>  and feels like {info.feelsLike}&deg;C
          
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

        </div>
    );
}
