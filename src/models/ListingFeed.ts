import Listing from "./Listing";

export default interface ListingFeed {
    cid: string; // IPFS/IPNS content ID
    name: string;
    items: Listing[];
}
