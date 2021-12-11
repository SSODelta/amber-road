import { createDirectStore } from 'direct-vuex';
import ListingFeed from '@/models/ListingFeed';
import Listing from '@/models/Listing';

export interface State {
    feeds: Map<string, ListingFeed>;
    listings: Map<string, Listing>;
}

const {
    store,
    rootActionContext,
    moduleActionContext,
    rootGetterContext,
    moduleGetterContext
} = createDirectStore({
    state: {
        // Default state
        feeds: new Map<string, ListingFeed>(),
        listings: new Map<string, Listing>(),
    } as State,
    mutations: {
        addFeed(state, newFeed: ListingFeed) {
            // TODO: Call this as soon as a feed has been retrieved from IPFS/IPNS
            state.feeds.set(newFeed.cid, newFeed);
        },
        addListing(state, newListing: Listing) {
            // TODO: Call this as soon as a listing has been retrieved from IPFS/IPNS
            state.listings.set(newListing.cid, newListing);
        },
    },
    actions: {
        getFeed(context, cid: string) {
            // TODO: Retrieve feed from IPFS/IPNS. Preferably using async/await
            // or some other form of concurrency pattern
        },
        testFeed(context) {
            const { commit } = rootActionContext(context);
            commit.addFeed({
                cid: 'asdf',
                name: 'my first feed',
                items: ['asdf2'] // Contains test listing
            });
        },
        getListing(context, cid: string) {
            // TODO: Retrieve feed from IPFS/IPNS. Preferably using async/await
            // or some other form of concurrency pattern
        },
        testListing(context) {
            const { commit } = rootActionContext(context);
            commit.addListing({
                cid: 'asdf2',
                uid: '123',
                title: 'hotdog',
                category: 'food_and_drinks',
                description: 'Yummy hotdog',
                pictures: [],
                price: 123,
                shipping: {
                    countries:['Slovakia'],
                    methods:['Sled'],
                },
            });
        },
    },
    modules: {},
})

export default store;

export {
    rootActionContext,
    moduleActionContext,
    rootGetterContext,
    moduleGetterContext
}

export type AppStore = typeof store;
declare module 'vuex' {
    interface Store<S> {
        direct: AppStore
    }
}
