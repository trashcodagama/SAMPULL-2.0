import Songcard from '../components/Songcard.jsx'
import Grid from "@mui/material/Grid";
import Landing from "../components/Landing.jsx"



export default function Home(){
    return(
        <div>
            <Landing />
            <h1 className="White"><center>DISCOVER WEEKLY CONTENT</center></h1>
        <Grid container spacing = {3}>
            
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "https://soundcloud.com/just-n3ro/ex-girl"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
            <Songcard name="SPACESHIP" author="purpiedurpie" src = "NAN"></Songcard>
        </Grid>
        </div>
    )
}