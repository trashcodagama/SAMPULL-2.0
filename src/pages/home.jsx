import Songcard from '../components/Songcard.jsx'
import Grid from "@mui/material/Grid";
import videoBg from '../assets/videos/videoBg.mp4'



export default function Home(){
    return(
        <div>
            <div>
                <video src ={videoBg} autoPlay loop muted />
            </div>
        <Grid container spacing = {3}>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
        </Grid>
        </div>
    )
}