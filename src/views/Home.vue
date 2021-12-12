<template>
    <div class="feed-list">
        <h4>{{ count(feeds) }} feed(s)</h4>
        <ListingFeedComponent
            v-for="cid of feeds.keys()"
            v-bind:key="cid"
            v-bind:feed="feeds.get(cid)"
        />
    </div>
    <div class="listing-list">
        <h4>{{ count(listings) }} listing(s)</h4>
        <ListingComponent
            v-for="cid of listings.keys()"
            v-bind:key="cid"
            v-bind:listing="listings.get(cid)"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListingFeed from '@/models/ListingFeed';
import ListingFeedComponent from '@/components/ListingFeed.vue';
import ListingComponent from '@/components/Listing.vue';

export default defineComponent({
    name: 'Home',
    components: {
        ListingFeedComponent,
        ListingComponent
    },
    mounted() {
        this.$store.direct.dispatch.testFeed();
    },
    methods: {
        count(thing: Map<string, ListingFeed>) {
            return thing.size;
        },
    },
    computed: {
        feeds() {
            return this.$store.state.feeds;
        },
        listings() {
            return this.$store.state.listings;
        },
    }
});
</script>

<style scoped lang="scss">
.feed-list {
    width: 10rem;
    float: left;
    border-right: 1px solid #aaa;
}
</style>
