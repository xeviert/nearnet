import { useFavorContext } from '../context/FavorContext';
import StatusUpdater from '@/components/StatusUpdater';
import StatusContainer from '@/components/StatusContainer';

export default function Feed() {
  const { favors } = useFavorContext();

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
