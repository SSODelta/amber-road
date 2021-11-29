<template>
    <div class="about">
        <h1>{{ counter }}</h1>
        <button @click="square()">Square</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "About",
    data() {
        return { counter: 2 }
    },
    methods: {
        square() {
            this.counter = Math.pow(this.counter, 2);
        }
    }
});
</script>
