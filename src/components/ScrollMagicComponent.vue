<template>
  <div ref="trigger" class="trigger">
    <div ref="animateElement" class="animate">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import ScrollMagic from "scrollmagic";

const trigger = ref<HTMLElement | null>(null);
const animateElement = ref<HTMLElement | null>(null);
const controller = new ScrollMagic.Controller();

onMounted(() => {
  if (trigger.value && animateElement.value) {
    new ScrollMagic.Scene({
      triggerElement: trigger.value,
      triggerHook: 0.9, // Срабатывает, когда элемент прокручивается на 80% высоты окна
      reverse: true, // Не воспроизводить анимацию при прокрутке вверх
    })
      .setClassToggle(animateElement.value, "visible") // Добавить класс 'visible' к элементу анимации
      .addTo(controller);
  }
});

onBeforeUnmount(() => {
  controller.destroy(true);
});
</script>

<style scoped>
.animate {
  opacity: 0;
  transition: opacity 1s;
}
.animate.visible {
  opacity: 1;
}
</style>
