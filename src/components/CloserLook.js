import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {updateAuction, deleteAuction} from '../actions'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 545,
      margin:"4% auto"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    buttons:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around"
    },
    editField:{
        '& form':{
            display:"flex",
            flexWrap:"wrap",
            flexDirection:"column",
            justifyContent:"space-around",
            margin:"0 auto",
            width:"75%",
            '& input':{
                fontSize:"1rem",
                padding:"0.3rem"
            },
            '& textarea':{
                maxWidth:"100%",
                fontSize:"1rem",
                padding:"0.3rem"
            }
        }
    }
  }));


const CloserLook = (props) => {
    console.log(`closerlook`,props)
    const [editing, setEditing] = useState(false)

    const toggle = () => {
        setEditing(!editing)
    }

        const [listing, setListing] = useState({
            name: '',
            image: '',
            description: '',
            starting_price: '',
            deadline: '',
            user_id: props.user_id
        })

        useEffect(()=>{
            setListing({
                name: props.location.state.name,
                image: props.location.state.image,
                description: props.location.state.description,
                starting_price: props.location.state.starting_price,
                deadline: props.location.state.deadline,
                user_id: props.user_id
                })
        },props)
    
        const handleChange = (e) => {
            e.preventDefault()
            setListing({...listing, [e.target.name]: e.target.value})
        }
    
        const handleSubmit = (e) => {
            e.preventDefault()
            props.updateAuction(props.location.state.id, listing)
            setListing({
            name: '',
            image: '',
            description: '',
            starting_price: '',
            deadline: '',
            user_id: props.user_id
            })
        }
    
    let history = useHistory()

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    console.log()
    return (
        <div className="auctionWrapper">        
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {props.location.state.seller.charAt(0)}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={props.location.state.name}
                    subheader={props.location.state.deadline}
                />
                <CardMedia
                    className={classes.media}
                    image={props.location.state.image}
                    title={props.location.state.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {props.location.state.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.buttons}>
                    <EditIcon aria-label="edit" onClick={handleExpandClick}/>
                    <DeleteIcon aria-label="delete" onClick={()=> {props.deleteAuction(props.location.state.id)
                    history.push('/auctions')}}/>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.editField}>                    
                            <p>Sellers Dash</p>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='name'>Name</label>
                                <input name='name' onChange={handleChange} value={listing.name}/>

                                <label htmlFor='image'>Image</label>
                                <input name='image' onChange={handleChange} value={listing.image}/>

                                <label htmlFor='starting_price'>Starting price</label>
                                <input name='starting_price' onChange={handleChange} value={listing.starting_price}/>

                                <label htmlFor='deadline'>Deadline</label>
                                <input type='datetime-local' name='deadline' onChange={handleChange} value={listing.deadline}/>

                                <label htmlFor='description'>Description</label>
                                <textarea name='description' onChange={handleChange} value={listing.description}/>

                                <button type='submit'>Edit Auction</button>
                            </form>
                    </CardContent>
            </Collapse>
            </Card>
         
        {editing ? ( (
        <div>
            <p>Sellers Dash</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input name='name' onChange={handleChange} value={listing.name}/>

                <label htmlFor='image'>Image</label>
                <input name='image' onChange={handleChange} value={listing.image}/>

                <label htmlFor='description'>Description</label>
                <input name='description' onChange={handleChange} value={listing.description}/>

                <label htmlFor='starting_price'>Starting price</label>
                <input name='starting_price' onChange={handleChange} value={listing.starting_price}/>

                <label htmlFor='deadline'>Deadline</label>
                <input type='datetime-local' name='deadline' onChange={handleChange} value={listing.deadline}/>

                <button type='submit'>}>Edit Auction</button>
            </form>

        </div>
    )) : (null)}      
        </div>
    )
}


export default connect(state=>{
    return{
        user_id: state.crudReducer.user_id
    }
},{updateAuction, deleteAuction})(CloserLook)

