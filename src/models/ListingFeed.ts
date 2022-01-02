export default interface ListingFeed {
    readonly cid: string; // IPFS/IPNS content ID
    name: string;
    categories: string[];
    listings: Listing[]; 
}
