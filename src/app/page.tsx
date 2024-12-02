import Link from 'next/link';
import { ticketsPath } from './path';

const HomePage = () => {
  return (
    <div className='flex-1 flex flex-col gap-y-8'>
      <h2 className='text-3xl font-bold tracking-tight'>Home</h2>
      <p className='text-sm text-muted-foreground'>Welcome to My Website. This is the home page content.</p>
      <div className='flex-1 flex flex-col items-center'>
      <Link href={ticketsPath()} className="underline">Tickets</Link>
      </div>
    </div>
  );
};

export default HomePage;