<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="header-logo">
          <img class="logo" src="../assets/icon/logo.png" alt="logo" />
        </router-link>
        <div class="header-controls">
          <button class="btn btn-primary">
            <img src="../assets/icon/Vector.png" alt="Vector" />
            Войти
          </button>
          <button class="btn btn-outline" @click="openModal()">
            <img src="../assets/icon/Korzina.png" alt="Vector" />
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(["toggleModal"]);
const openModal = () => emit("toggleModal");
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 124px;
}

.header-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}
</style>
