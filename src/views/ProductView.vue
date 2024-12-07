<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper" id="rests-container">
        <div
          class="products-card"
          v-for="product in productArrey"
          :key="product.id"
          :to="`/rest?id=${product.id}`"
        >
          <div class="products-card_image">
            <img :src="getUrl1(product.img)" alt="Roll_ugor" />
          </div>
          <div class="products-card_description">
            <div class="products-card_description-row">
              <h5 class="products-card_description-name">
                {{ product.title }}
              </h5>
            </div>
            <div class="products-card_description-row">
              <p class="products-card_description-text">
                Р{{ product.description }}
              </p>
            </div>
            <div class="products-card_description-row">
              <div class="produkts-card_desxription-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img src="../assets/icon/Korzina_white.svg" alt="Korzina" />
                </button>
                <span class="produkts-card_desxription-controls_price"
                  >{{ product.price }} ₽</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { productArrey } from "@/constans/products";
const getUrl1 = (name1) => {
  return new URL(`../assets/img/goods/${name1}`, import.meta.url);
};
</script>
