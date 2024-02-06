import Songcard from "../components/Songcard.jsx";
import Grid from "@mui/material/Grid";
import Landing from "../components/Landing.jsx";

export default function Home() {
  return (
    <div>
      <Landing>
        <h1>WELCOME TO SAMPULL</h1>
        <p>CREATE. ELEVATE. COLLABORATE.</p>
      </Landing>
      <h1 className="White">
        <center>DISCOVER WEEKLY CONTENT</center>
      </h1>
      <Grid container spacing={3}>
        <Songcard
          name="EX GIRL"
          author="wrldn3ro"
          src="https://soundcloud.com/just-n3ro/ex-girl"
        ></Songcard>
        <Songcard
          name="GETBUSY - SLOWED"
          author="YEAT"
          src="https://soundcloud.com/yoboy-marquis/yeat-get-busy"
        ></Songcard>
        <Songcard
          name="NITR0"
          author="purpiedurpie"
          src="https://soundcloud.com/vedant-swain/nitro-slowed?si=df2ca182ead540ac8b164fd680365e0b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        ></Songcard>
        <Songcard
          name="LIKEHURR"
          author="ZVCH"
          src="https://soundcloud.com/zaxh-luvv/likehurr"
        ></Songcard>
      </Grid>
    </div>
  );
}
