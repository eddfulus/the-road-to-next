import { initialTickets } from "@/data";

type TicketPageProps = {
    params: {
      ticketId: string;
    };
  };


const TicketPage = ({ params }: TicketPageProps) => {
// const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);
  
  if(!ticket) {
    return <div>Ticket not found</div>
  }
  
  return (
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>Tickets Page</h2>
        <p className='text-sm text-muted-foreground'>Welcome to My Website. This is the home page content.</p>
      <div>
        <h2 className="text-lg">{ticket.title}</h2>
        <p>{ticket.body}</p>
        </div>
      </div>
    );
  };
  
  export default TicketPage;