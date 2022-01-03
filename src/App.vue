<template>
    <div id="header">
        <h1><img src="amber.png" width=32 height=32 style="border:none;"> Amber Road</h1>
    </div>
    <div id="content">
        <router-view />
    </div>
</template>

<style lang="scss">
html, body {
    height: 100%;
}
body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to top, rgba(51, 51, 51, 0.85), rgba(51, 51, 51, 1.2)),url('/amber_bg.jpeg');
    background-size: cover;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222222;
    max-width: 1000px;
    margin: auto;
}

.feed-list, .listing-list{
    padding: 5px;
}

#content{
    height: 950px;
    padding: 5px;
    background-color: #eeeeee;
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

img{
    object-fit: contain;
    border: 1px solid;
    margin-left: 5px;
}

h1 {
    color: #6c4500;
}

table td, table tr {
    vertical-align: top;
}
</style>
