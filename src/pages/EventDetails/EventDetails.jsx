import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

import Card from '../../components/Card/Card';
import OrderTicket from './../../components/OrderTicket/OrderTicket';

const EventDetails = () => {
    const basePrice = 500;
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [event, setEvent] = useState({});
    const [ticketQty, setTicketQty] = useState(1);
    
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=ff07d8e7`)
        .then(response => {
            setEvent(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [id])

  return (
    <div>
        <section className='max-w-6xl mx-auto py-24 flex flex-row justify-between'>
            { loading ? <p>Loading...</p> : <Card info={event} /> }
            { loading ? <p>Loading...</p> : <OrderTicket info={event} quantity={ticketQty} setQuantity={setTicketQty} basePrice={basePrice} /> }
        </section>
    </div>
  )
}

export default EventDetails