<template>
    <div id="header">
        <h1>Amber Road</h1>
    </div>
    <div id="content">
        <router-view />
    </div>
</template>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222222;
}

#header {
    width: 100%;
    background-color: #333;
    padding: .5rem;
}

#header h1 {
    margin: 0;
    text-align: center;
    color: #af8900;
}

h1 {
    color: #6c4500;
}
</style>
