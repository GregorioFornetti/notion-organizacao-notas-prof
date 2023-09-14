
<script setup lang="ts">
    import { ref } from 'vue'

    const currentPage = ref<'app'|'login'|'loading'>('loading')

    const authRef = ref(`https://api.notion.com/v1/oauth/authorize?owner=user&client_id=4c823a5f-c9be-420c-a67c-5b777aa14b41&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`)


    const userId = localStorage.getItem('id')
    if (userId) {
        currentPage.value = 'app'
    } else {
        currentPage.value = 'login'
    }

    let params = new URLSearchParams(document.location.search)
    let code = params.get("code")

    if (code && !userId) {
        currentPage.value = 'loading'
        fetch(`${import.meta.env.VITE_SERVER_ROOT}/auth`, {
            headers: {
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
            code: code
            })
        })
        .then((response) => response.text())
        .then((data) => {
            console.log(data)
            localStorage.setItem('id', data)
            currentPage.value = 'app'
        })
    }

</script>

<template>
    <a :href=authRef v-if="currentPage === 'login'">
        Login
    </a>
    <h1 v-if="currentPage === 'loading'">
        Carregando...
    </h1>
    <h1 v-if="currentPage === 'app'">
        Logou com sucesso mermão !
    </h1>
</template>

<style scoped>

</style>
