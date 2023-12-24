<template>
    <header>
        <div class="logo">
        <NuxtImg src="logo.png"/>
        </div>

        <div class="menu">
            <a> ancoragem 1 </a>
            <a> ancoragem 2 </a>
            <a> ancoragem 3 </a>
        </div>

        <nav class="right-buttons">
            <UButton
                color="primary"
                variant="solid"
                class="p-6"
                label="Login"
            />
        </nav>
    </header>
</template>

<style scoped>

header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding: 1em;
}
.logo {
    width: 6%;
}
.menu {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu a {
    text-decoration: none;
    margin: 1em;
}

.menu a:hover {
 color: #007bff;
}

</style>