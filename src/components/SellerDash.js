import React,{useState} from 'react'
import { connect } from 'react-redux'
import {postAuction} from '../actions'
import AuctionList from './AuctionList'

function SellerDash(props) {
    const [fetchAgain, setFetchAgain] = useState(false)
    const [listing, setListing] = useState({
        name: '',
        image: '',
        description: '',
        starting_price: '',
        deadline: '',
        user_id: props.user_id
    })
    console.log(fetchAgain)

    const handleChange = (e) => {
        setListing({...listing, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.postAuction(listing)
        setFetchAgain(true)
        setListing({
        name: '',
        image: '',
        description: '',
        starting_price: '',
        deadline: '',
        user_id: props.user_id
        })
        setTimeout(() => {
           setFetchAgain(false) 
        }, 1000);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input name='name' onChange={handleChange} value={listing.name}/> 

                <label htmlFor='image'>Image</label>
                <input name='image' onChange={handleChange} value={listing.image}/> <br/>

                <label htmlFor='description'>Description</label>
                <input name='description' onChange={handleChange} value={listing.description}/>

                <label htmlFor='starting_price'>Starting price</label>
                <input name='starting_price' onChange={handleChange} value={listing.starting_price}/> 

                <label htmlFor='deadline'>Deadline</label>
                <input type='datetime-local' name='deadline' onChange={handleChange} value={listing.deadline}/>

                <button type='submit'>Post Auction</button>
            </form>

            <AuctionList fetchAgain={fetchAgain}/>
        </div>
    )
}

export default connect(state=>{
    return{
        user_id: state.crudReducer.user_id
    }
}, {postAuction})(SellerDash)
