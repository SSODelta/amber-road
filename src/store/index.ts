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
            newFeed.data.listings
            .map(l => l as Listing)
            .forEach(l => state.listings.set(l.uid, l));
        },
    },
    actions: {
        async downloadFeed(context, cid: string) {
            const { commit, dispatch } = rootActionContext(context);
            const feed = await downloadFile(cid) as ListingFeed;
            commit.addFeed({ cid: cid, data: feed });
        },
        testFeed(context) {
            const { dispatch } = rootActionContext(context);
            dispatch.downloadFeed('QmR1ub15nognB2faawaiYEuDDPCXmYbFMkBXWequmQ2QbJ');
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
