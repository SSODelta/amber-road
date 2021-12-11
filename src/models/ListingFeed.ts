export default interface ListingFeed {
    readonly cid: string; // IPFS/IPNS content ID
    name: string;
    items: string[]; // Item CIDs
}
