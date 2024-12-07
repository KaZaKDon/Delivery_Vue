<template>
  <div
    class="cart-modal_overlay"
    :class="{ open: isOpen }"
    @click.self="closeModal()"
  >
    <div class="cart-modal">
      <div class="cart-modal_header">
        <h2 class="cart-modal_header-title">Корзина</h2>
        <span class="cart-modal_header-close" @click="closeModal()">
          <img src="../assets/icon/Krest.svg" alt="Krest" />
        </span>
      </div>
      <div class="cart-modal_body">
        <div class="cart-item">
          <p class="cart-item_title">Ролл угорь стандарт</p>
          <div class="cart-item_controls">
            <div class="cart-item_controls-price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item_controls-count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item_title">Калифорния лосось стандарт</p>
          <div class="cart-item_controls">
            <div class="cart-item_controls-price">395 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item_controls-count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item_title">Окинава стандарт</p>
          <div class="cart-item_controls">
            <div class="cart-item_controls-price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item_controls-count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item_title">Ясай маки стандарт 185 г</p>
          <div class="cart-item_controls">
            <div class="cart-item_controls-price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item_controls-count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item_title">Ролл с креветкой стандарт</p>
          <div class="cart-item_controls">
            <div class="cart-item_controls-price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item_controls-count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
      </div>
      <div class="cart-modal_footer">
        <div class="cart-modal_footer-price">1250 ₽</div>
        <div class="cart-modal_footer-controls">
          <button class="btn btn-primary">Оформить заказ</button>
          <button class="btn btn-outline">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(["toggleModal"]);
const closeModal = () => emit("toggleModal");

console.log(isOpen);
</script>

<style scoped>
.cart-modal_overlay {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);

  align-items: center;
  justify-content: center;
}

.cart-modal_overlay.open {
  display: flex;
}
.cart-modal {
  width: 100%;
  max-width: 780px;
  padding: 40px 45px;
  border-radius: 5px;
  background: #fff;
}

.cart-modal_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}

.cart-modal_header-title {
  color: #000;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
}

.cart-modal_header-close {
  cursor: pointer;
}

.cart-modal_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 50px;
}

.cart-modal_footer-price {
  border-radius: 5px;
  background: #262626;
  font-size: 20px;
  font-weight: 700;
  color: #fafafa;
  padding: 15px 20px;
}

.cart-modal_footer-controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-item:not(:last-child) {
  padding-bottom: 10px;
  margin-top: 10px;
  border-bottom: 1px solid #d9d9d9;
}

.cart-item_title {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
}

.cart-item_controls {
  display: flex;
  align-items: center;
}

.cart-item_controls-price {
  margin-right: 47px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
}

.cart-item_controls-count {
  margin-left: 15px;
  margin-right: 15px;
}

.cart-item_controls button {
  border: 1px solid #40a9ff;
  color: #40a9ff;
}
</style>
