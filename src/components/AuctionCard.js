import React from 'react'
import { useHistory,useParams } from 'react-router-dom'

export const AuctionCard = (props) => {

    let history = useHistory()

    const sendToCloserLook = (id, auctionData) => {
        history.push(`/closerlook/${id}`, auctionData)
    }

    return (
        <div>
            <p onClick={() => {sendToCloserLook(props.auction.id, props.auction)}}>{props.auction.name}</p>
        </div>
    )
}
