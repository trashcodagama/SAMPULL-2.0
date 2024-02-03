import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ButtonGroup from "@mui/material/ButtonGroup";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReactPlayer from "react-player";
import CommentIcon from "@mui/icons-material/Comment";
import Grid from "@mui/material/Grid";
import '../index.css'

export default function Songcard({name, author, src}) {
    return (
      <Grid item xs={12} md={6} lg={6}>
      <div className = "CardLike">
          <center>
            <h3 className = "White">{name}</h3>
            <h5 className ="Secondary_Color">{author}</h5>
            <br />
            <br />
            <ReactPlayer
              url={src}
              pip="false"
              controls="true"
              width="80%"
            />
            <br />
            <Button>
              <FavoriteIcon />
            </Button>
            <Button>
              <CommentIcon />
            </Button>
          </center>
      </div>
      </Grid>
    );
  }
  