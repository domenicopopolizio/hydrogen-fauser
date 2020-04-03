<template>
  <div id="app"> 
    <router-view id="view"/>
  </div>
</template>

<style>
:root {
  --primary-color: white;
  --secondary-color: aqua;
  --background-color: rgba(0, 0, 0, 0.377);
}
#app {
  font-family: 'Poppins', sans-serif;
  height: 100vh;
}
html, body {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: var(--background-color);
  color: var(--primary-color);
}

a {
  color: var(--secondary-color);
}

</style>
