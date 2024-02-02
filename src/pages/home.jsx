import Songcard from '../components/Songcard.jsx'
import Grid from "@mui/material/Grid";



export default function Home(){
    return(
        <div>
        <Grid container spacing = {3}>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
        </Grid>
        </div>
    )
}