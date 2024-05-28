import StatusUpdater from '@/components/StatusUpdater';
import StatusContainer from '@/components/StatusContainer';

const favors = [
  {
    favor_id: 1,
    title: 'Help with Gardening',
    payment: 30,
    description: 'Looking for someone to help weed and plant flowers in a small garden.',
    posted: 'April 15, 2024',
    first_name: 'Alice',
    last_name: 'Johnson',
  },
  {
    favor_id: 2,
    title: 'Dog Walking',
    payment: 20,
    description: 'Need someone to walk my dog in the evenings.',
    posted: 'April 10, 2024',
    first_name: 'Bob',
    last_name: 'Smith',
  },
  {
    favor_id: 3,
    title: 'Grocery Shopping',
    payment: 15,
    description: 'Looking for someone to do grocery shopping for me.',
    posted: 'April 5, 2024',
    first_name: 'Charlie',
    last_name: 'Brown',
  },
  {
    favor_id: 4,
    title: 'Car Wash',
    payment: 25,
    description: 'Need someone to wash my car.',
    posted: 'April 1, 2024',
    first_name: 'David',
    last_name: 'Williams',
  },
];

export default function Feed() {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <StatusUpdater />
      {favors.map((favor) => (
        <StatusContainer
          key={favor.favor_id}
          title={favor.title}
          payment={favor.payment}
          description={favor.description}
          posted={favor.posted}
          first_name={favor.first_name}
          last_name={favor.last_name}
        />
      ))}
    </div>
  );
}
