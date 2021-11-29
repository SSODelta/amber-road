import { Listing } from './Listing';

export interface ListingFeed {
    cid: string; // IPFS/IPNS content ID
    name: string;
    items: Listing[];
}
