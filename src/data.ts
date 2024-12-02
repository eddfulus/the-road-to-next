export const initialTickets = [
    {
      id: '1',
      title: 'Ticket 1',
      body: 'This is the body of ticket 1. baest best best yes yes yes go go go i say yes yes yes',
      priority: false,
      user_email: 'user1@example.com',
      status: 'open' as const ,
    },
    {
      id: '2',
      title: 'Ticket 2',
      body: 'This is the body of ticket 2.',
      priority: true,
      user_email: 'user2@example.com',
      status: 'pending' as const,
    },
    {
      id: '3',
      title: 'Ticket 3',
      body: 'This is the body of ticket 3.',
      priority: false,
      user_email: 'user3@example.com',
      status: 'closed' as const,
    },
]