import { createDirectStore } from 'direct-vuex';
import ListingFeed from '@/models/ListingFeed';
import Listing from '@/models/Listing';
import { downloadFile } from '@/mocking/fakeipfs';

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
        addFeed(state, newFeed: { cid: string, data: ListingFeed }) {
            // TODO: Call this as soon as a feed has been retrieved from IPFS/IPNS
            state.feeds.set(newFeed.cid, newFeed.data);
        },
        addListing(state, newListing: { cid: string, data: Listing }) {
            // TODO: Call this as soon as a listing has been retrieved from IPFS/IPNS
            state.listings.set(newListing.cid, newListing.data);
        },
    },
    actions: {
        async downloadFeed(context, cid: string) {
            const { commit, dispatch } = rootActionContext(context);
            // TODO: Retrieve feed from IPFS/IPNS. Preferably using async/await
            // or some other form of concurrency pattern
            // For now lets fake it
            const rawData = await downloadFile(cid);
            if (rawData) {
                const newFeed = rawData as ListingFeed;
                commit.addFeed({ cid: cid, data: newFeed });
                // Download listings from feed
                for (const itemCid of newFeed.items) {
                    dispatch.downloadListing(itemCid);
                }
            } else {
                console.warn('Could not find listing feed with CID', cid);
            }
        },
        async downloadListing(context, cid: string) {
            const { commit } = rootActionContext(context);
            const rawData = await downloadFile(cid);
            if (rawData) {
                commit.addListing({ cid: cid, data: rawData as Listing });
            } else {
                console.warn('Could not find listing with CID', cid);
            }
        },
        testFeed(context) {
            const { dispatch } = rootActionContext(context);
            dispatch.downloadFeed('asdf');
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
