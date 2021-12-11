<template>
    <h1>List</h1>
    Length of feeds is {{ count(feeds) }}
    <ListingFeedComponent
        v-for="cid of feeds.keys()"
        v-bind:key="cid"
        v-bind:feed="feeds.get(cid)"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListingFeed from '@/models/ListingFeed';
import ListingFeedComponent from '@/components/ListingFeed.vue';

export default defineComponent({
    name: 'Home',
    components: {
        ListingFeedComponent
    },
    mounted() {
        this.$store.direct.dispatch.testFeed();
    },
    methods: {
        count(thing: Map<string, ListingFeed> ) {
            return thing.size;
        },
    },
    computed: {
        feeds() {
            return this.$store.state.feeds;
        },
    }
});
</script>
