import React from 'react'
import { useHistory,useParams } from 'react-router-dom'
//styling imports
import { makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(()=> ({
    root: {
      display: "flex",
      margin: "1% 2%",
      transition: "all 0.2 ease-in-out",
      width:"25%",
      "&:hover":{
        transform: "scale(1.1)",
        cursor:"pointer"
      }
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    img: {
      height:"100%",
      width:"50%",
      objectFit:"cover",
      objectPosition:"center"
    }
  }));


export const AuctionCard = (props) => {

    let history = useHistory()

    const sendToCloserLook = (id, auctionData) => {
        history.push(`/closerlook/${id}`, auctionData)
    }

    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={() => {sendToCloserLook(props.auction.id, props.auction)}}>
            <CardMedia
                className={classes.img}
                image={props.auction.image}
                title="Auction image"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.auction.name} - by {props.auction.seller}
                    </Typography>
                    <Typography variant="body1" color="textPrimary">
                        Starts at {props.auction.starting_price}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Closes {props.auction.deadline}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )
}



    