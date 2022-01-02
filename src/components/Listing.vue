<template>
    <tr>
        <td>
            <img v-bind:src="listing.pictures[0]" width=200 height=225>
        </td>
        <td>
            <h3>{{ listing.title }}</h3>
            <u>{{ listing.price }} µETH (approx. {{ Number(listing.price * 3.7).toFixed(1) }}$)</u>
            <hr>
            {{listing.description}}<br><br>
            Ships to: {{ listing.shipping.countries.join(", ") }}<br>
            Shipping methods: {{ listing.shipping.methods.join(", ") }}<br><br>
            <button onclick="gotcha!">Buy now</button>
        </td>
    </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Listing from '../models/Listing';

export default defineComponent({
    name: 'HelloWorld',
    props: ['listing'],
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.listing {
    color: #0f0;
}
</style>
