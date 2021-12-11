<template>
    <div class="listing">
        {{ listing.name }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Listing from '../models/Listing';

export default defineComponent({
    name: 'HelloWorld',
    props: ['feed'],
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.listing {
    color: #0f0;
}
</style>
