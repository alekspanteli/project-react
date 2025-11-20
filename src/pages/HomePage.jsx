import { listings } from '@/api/data/listings';
import ListingList from '@/components/ListingList';

export default function HomePage() {
  return (
    <div className='container px-6 py-4'>
      <ListingList listings={listings} />
    </div>
  );
}
