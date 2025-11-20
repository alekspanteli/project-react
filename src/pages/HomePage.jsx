import { useState } from 'react';

import { listings as staticListings } from '@/api/data/listings';
import ListingList from '@/components/ListingList';

export default function HomePage() {
  const [listings, setListings] = useState(staticListings);
  return (
    <div className='container px-6 py-4'>
      <ListingList listings={listings} />
    </div>
  );
}
