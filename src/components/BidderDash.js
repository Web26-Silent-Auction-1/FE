import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {NavLink,Route} from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles} from '@material-ui/core/styles';

let mainColor="MEDIUMSLATEBLUE"
let secondaryColor="white"
let mainColorHover="DARKSLATEBLUE"



const useStyles = makeStyles(theme => ({
    root: {
        background:"#262626",
        color:secondaryColor,
        borderRadius:"15px",
        margin:"0 auto",
        maxWidth:"80%",
        height:"700px",
        display:"grid",
        gridGap:"1%",
        gridTemplateColumns:"30% 69%",
        gridTemplateRows:"100%",
        gridTemplateAreas:'"leftPanel rightPanel"',
    },
    leftPanel:{
        gridArea:"leftPanel",
        display:"flex",
        alignContent:"center",
        flexDirection:"column",
        paddingBottom:"6%",
        borderRight:"1px solid #2e2d2d",        
        "& h1":{
            fontFamily:"Nunito, sans-serif",
            fontSize:"2rem",
            fontWeight:700
        },        
        "& p":{
            fontFamily:"Roboto, sans-serif",
            fontSize:"1.2rem"
        }
    },
    lastChld:{
        marginTop:"auto",
        alignSelf:"center",
        width:"50%",
        background:mainColor,
        transition:"all 0.5s ease-in-out",
        fontFamily:"Roboto,sans-serif",
        '&:hover':{
            background:mainColorHover
        }
    },
    media:{
        width:"65%",
        height:"75%",
        margin:"3% auto",
        borderRadius:"5%"
    },
    rightPanel:{
        gridArea:"rightPanel",
        paddingBottom:"6%",
    },
    navigation:{
        margin:"0 auto",
        widht:"80%",
        display:"flex",
        justifyContent:"space-around",
        '& a':{
            textTransform:"uppercase",
            color:mainColor,
            fontWeight:700,
            textDecoration:"none",
            fontSize:"1.5rem",
            fontFamily:"Nunito, sans-serif",
            transition:"all 0.5s ease-in-out",
            '&:hover':{
                color:mainColorHover,
            }
        }
    },
    rightPanelContent:{
        height:"80%",
        overflow:"hidden",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        '&:hover':{
            overflow:"auto"
        },
    },
    auctionCard:{
        height:"250px",
        width:"175px",
        marginBottom:"3%",
        position:"relative",        
        '& img':{
            objectFit:"cover",
            width:"100%",
            height:"100%",
            filter: "grayscale(0%)",           
            transition: "all 0.5s ease-in-out",
            '&:hover':{
            }
        },
        "& div":{
            position:"absolute",
            top:0,
            left:0,
            height:"80%",
            width:"80%",
            color:secondaryColor,
            fontWeight:"700",
            textTransform:"uppercase",
            display:"none"

        },
        "&:hover div":{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignContent:"center"
        },
        "&:hover img":{
            filter: "grayscale(100%) blur(1px) brightness(50%)",
            blur:"0px",
            cursor:"pointer"
        },
        '&:last-child':{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            '& button':{ 
                background:mainColor,
                transition:"all 0.5s ease-in-out",
                '&:hover':{
                    background:mainColorHover
                }
            }
        }
    }
  }));
export default function SellerDash() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.leftPanel}>
                {/* Account information */}                
                <Typography gutterBottom variant="h5" component="h1">
                    <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/3768163/pexels-photo-3768163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        title="Contemplative Reptile"
                        component="img"
                    />
                    User name in here
                </Typography>
                <Typography gutterBottom variant="body1" component="p">
                    Account type
                </Typography>
                <Button variant="contained" color="secondary" className={classes.lastChld}>
                    Log out
                </Button>
            </CardContent>
            <CardContent className={classes.rightPanel}>
                <CardContent className={classes.navigation}>
                    {/* Add a navigation beetween Open and closed bids */}
                    <NavLink to="/">Open bids</NavLink>
                    <NavLink to="/closed">Closed bids</NavLink>
                </CardContent>
                <CardContent className={classes.rightPanelContent}>
                    {/* Load content depending on the nav thingy aka router */}
                    <Route exact path="/">
                        {/*Map trouygh data for every open bid  */}
                        {/* {Hard codded elements} */}
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                            <CardContent>
                            <Typography gutterBottom variant="subtitle1" component="p">
                                Title here
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="p">
                                Checkout
                            </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                            <CardContent>
                            <Typography gutterBottom variant="subtitle1" component="p">
                                Title here
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="p">
                                Checkout
                            </Typography>
                            </CardContent>
                        </Card>
                        {/* {Hard codded elements} */}
                        <Card className={classes.auctionCard}>
                            <Fab
                                variant="exteaded"
                                size="small"
                                color="primary"
                                aria-label="add"
                                className={classes.margin}
                                >
                                <AddIcon className={classes.extendedIcon} />
                                Start new
                            </Fab>
                        </Card>
                    </Route>
                    <Route exact path="/closed">
                        {/*Map trouygh data for every closed bid in which the user participated*/}
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Title here
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Checkout
                                    </Typography>
                                    <Typography gutterBottom variant="caption" component="p">
                                        Date ended
                                    </Typography>
                                </CardContent>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Title here
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Checkout
                                    </Typography>
                                    <Typography gutterBottom variant="caption" component="p">
                                        Date ended
                                    </Typography>
                                </CardContent>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Title here
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Checkout
                                    </Typography>
                                    <Typography gutterBottom variant="caption" component="p">
                                        Date ended
                                    </Typography>
                                </CardContent>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Title here
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Checkout
                                    </Typography>
                                    <Typography gutterBottom variant="caption" component="p">
                                        Date ended
                                    </Typography>
                                </CardContent>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Title here
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Checkout
                                    </Typography>
                                    <Typography gutterBottom variant="caption" component="p">
                                        Date ended
                                    </Typography>
                                </CardContent>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Title here
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                        Checkout
                                    </Typography>
                                    <Typography gutterBottom variant="caption" component="p">
                                        Date ended
                                    </Typography>
                                </CardContent>
                        </Card>

                    </Route>
                </CardContent>
            </CardContent>

        </Card>
    )
}
