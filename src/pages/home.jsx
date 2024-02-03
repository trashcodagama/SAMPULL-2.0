import Songcard from '../components/Songcard.jsx'
import Grid from "@mui/material/Grid";
import Landing from "../components/Landing.jsx"



export default function Home(){
    return(
        <div>
            <Landing />
        <Grid container spacing = {3}>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
        </Grid>
        </div>
    )
}