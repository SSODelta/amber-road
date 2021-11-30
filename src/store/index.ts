import { createDirectStore } from "direct-vuex";

export interface State {
    counter: number;
}

const {
    store,
    rootActionContext,
    moduleActionContext,
    rootGetterContext,
    moduleGetterContext
} = createDirectStore({
    state: {
        counter: 2
    } as State,
    mutations: {
        square(state: State) {
            console.log("square commit boii");
            state.counter = Math.pow(state.counter, 2);
        },
        resetto(state: State) {
            console.log("square reset boii");
            state.counter = 2;
        }
    },
    actions: {
        doubleSquare(context) {
            const { commit } = rootActionContext(context);
            commit.square();
            commit.square();
        }
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
