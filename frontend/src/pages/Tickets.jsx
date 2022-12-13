import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import TicketItem from '../components/TicketItem';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector((state) => {
    return state.tickets;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSuccess) dispatch(getTickets());
    return () => {
      if (isSuccess) dispatch(reset());
    };
  }, [dispatch, isSuccess]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <>
      <BackButton url='/' />
      <h1>Tickets</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}

export default Tickets;
