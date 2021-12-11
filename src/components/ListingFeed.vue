<template>
    <div class="listing-feed">
        {{ feed.name }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListingFeed from '../models/ListingFeed';

export default defineComponent({
    name: 'ListingFeed',
    props: ['feed'],
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.listing {
    color: #0f0;
}
</style>
