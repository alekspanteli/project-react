import { useState } from 'react';

import { listings as staticListings } from '@/api/data/listings';
import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator } from '@/components/ui';

export default function HomePage() {
  const [listings, setListings] = useState(staticListings);
  return (
    <div className='container px-6 py-4'>
      <div className='mb-4'>
        <ListingFilters />
        <Separator className='my-4' />
      </div>
      <ListingList listings={listings} />
    </div>
  );
}
