
<script setup lang="ts">
  let params = new URLSearchParams(document.location.search)
  let code = params.get("code")

  
  fetch(`${import.meta.env.VITE_SERVER_ROOT}/auth`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      code: code
    })
  })
</script>

<template>
  <h1>Logou com sucesso mermão !</h1>
</template>

<style scoped>

</style>
