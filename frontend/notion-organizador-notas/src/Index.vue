
<script setup lang="ts">
    import { ref } from 'vue'

    const auth_ref = ref(`https://api.notion.com/v1/oauth/authorize?owner=user&client_id=4c823a5f-c9be-420c-a67c-5b777aa14b41&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`)
</script>

<template>
    <a :href=auth_ref>
        Login
    </a>
</template>

<style scoped>

</style>
