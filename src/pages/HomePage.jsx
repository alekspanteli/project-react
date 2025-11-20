import { useState } from 'react';

import { listings as StaticListings } from '@/api/data/listings';
import ListingList from '@/components/ListingList';

export default function HomePage() {
  const [listings, setListings] = useState(StaticListings);
  return (
    <div className='container px-6 py-4'>
      <ListingList listings={listings} />
    </div>
  );
}
