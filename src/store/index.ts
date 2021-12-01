import { createDirectStore } from "direct-vuex";
import ListingFeed from '@/models/ListingFeed';

export interface State {
    counter: number;
    feeds: ListingFeed[];
}

const {
    store,
    rootActionContext,
    moduleActionContext,
    rootGetterContext,
    moduleGetterContext
} = createDirectStore({
    state: {
        // TODO: Remove counter and associated code (its only here as an example)
        counter: 2,
        feeds: [],
    } as State,
    mutations: {
        square(state) {
            console.log("square commit boii");
            state.counter = Math.pow(state.counter, 2);
        },
        resetto(state) {
            console.log("square reset boii");
            state.counter = 2;
        },
        addFeed(state, feed: ListingFeed) {
            // TODO: Call this as soon as a feed has been retrieved from IPFS/IPNS
            console.log("new feed added");
            console.log(feed);
            state.feeds.push(feed);
        },
    },
    actions: {
        doubleSquare(context) {
            const { commit } = rootActionContext(context);
            commit.square();
            commit.square();
        },
        getFeed(context, cid: string) {
            // TODO: Retrieve feed from IPFS/IPNS. Preferably using async/await
            // or some other form of concurrency pattern
        },
        testFeed(context) {
            const { commit } = rootActionContext(context);
            commit.addFeed({
                cid: "asdf",
                name: "my first feed",
                items: [
                    {
                        cid: "asdf2",
                        uid: "123",
                        title: "hotdog",
                        category: "food_and_drinks",
                        description: "Yummy hotdog",
                        pictures: [],
                        price: 123,
                        shipping: {
                            countries:["Slovakia"],
                            methods:["Sled"],
                        },
                    }
                ]
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
declare module "vuex" {
    interface Store<S> {
        direct: AppStore
    }
}
