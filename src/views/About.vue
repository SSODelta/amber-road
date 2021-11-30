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

export default defineComponent({
    name: "About",
    setup() {},
    methods: {
        square() {
            this.$store.direct.commit.square();
        },
        reset() {
            this.$store.direct.commit.resetto();
        },
        dblSquare() {
            this.$store.direct.dispatch.doubleSquare();
        }
    },
    computed: {
        counter() {
            return this.$store.state.counter;
        },
    }
});
</script>
