import clsx from 'clsx';
import Link from 'next/link';
import {ticketPath} from "@/app/path";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator";
import {initialTickets} from "@/data";


const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
)
const TimeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
)

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
</svg>
)
const TICKET_ICONS = {
    open: <FolderIcon />,
    pending: <TimeIcon />,
    closed: <CheckIcon />,
};


const TicketsPage = () => {
    return (
      <div className='flex-1 flex flex-col gap-y-8'>
        <div>
        <h2 className='text-3xl font-bold tracking-tight'>Tickets Page</h2>
        <p className='text-sm text-muted-foreground'>All your tickets at one place.</p>
        </div>
<Separator className="my-4" />
        <div className='flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top'>
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className='w-full max-w-[420px]' >  
          <CardHeader>
          <CardTitle className='flex gap-x-2'>
          <span>{TICKET_ICONS[ticket.status]}</span>
          <span className="truncate">{ticket.title}</span>
          
          </CardTitle>         
          </CardHeader>  
          <CardContent>
            
            <span className="line-clamp-3 whitespace-break-spaces">
            {ticket.body}</span>
          </CardContent>
          <CardFooter> 
            <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
            </CardFooter>
            <hr />
            
          </Card>
        )
        )}
</div>    
      </div>
    );
  };
  
  export default TicketsPage;