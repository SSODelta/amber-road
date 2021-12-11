export interface ShippingInfo {
    countries: string[];
    methods: string[];
}

export interface ListingPicture {
    url: string;
}

export default interface Listing {
    readonly cid: string; // IPFS/IPNS Content ID
    uid: string; // Seller's public key
    title: string;
    category: string;
    description: string;
    pictures: ListingPicture[];
    price: number;
    shipping: ShippingInfo;
}
