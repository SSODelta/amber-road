<template>
    <div class="about">
        <h1>{{ counter }}</h1>
        <button @click="square()">Square</button>
        &nbsp;
        <button @click="reset()">Reset</button>
        &nbsp;
        <button @click="dblSquare()">DOUBLE SQUARE</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";

export default defineComponent({
    name: "About",
    setup() {},
    methods: {
        square() {
            store.commit.square();
        },
        reset() {
            store.commit.resetto();
        },
        dblSquare() {
            store.dispatch.doubleSquare();
        }
    },
    computed: {
        counter() {
            return store.state.counter;
        },
    }
});
</script>
