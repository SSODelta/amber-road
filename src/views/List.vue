<template>
    <h1>List</h1>
    Length of feeds is {{ count(feeds) }}
    <h2 v-for="feed of feeds" v-bind:key="feed.cid">
        {{ feed.name }}
    </h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "About",
    mounted() {
        this.$store.direct.dispatch.testFeed();
    },
    methods: {
        count(arr: []) {
            return arr.length;
        }
    },
    computed: {
        feeds() {
            return this.$store.state.feeds;
        },
    }
});
</script>
