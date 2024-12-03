<script setup>
import { ref } from "vue";

const selectedInfo = ref("card");

function showInfo(info) {
  selectedInfo.value = info;
}
</script>

<template>
  <div>
    <div class="btns">
      <div class="btns__inner">
        <div
          class="btn card"
          @click="showInfo('card')"
          :class="{ active: selectedInfo === 'card' }"
        >
          <p>Карта</p>
        </div>
        <div
          class="btn tag"
          @click="showInfo('tag')"
          :class="{ active: selectedInfo === 'tag' }"
        >
          <p>Tag</p>
        </div>
      </div>
    </div>
    <div class="info">
      <div v-if="selectedInfo === 'card'">Card</div>
      <div v-if="selectedInfo === 'tag'">Tag</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btns {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  @media (max-width: 771px) {
    margin-top: 170px;
  }
  .btns__inner {
    display: flex;
    box-shadow: 0 0 10px #000;
    border-radius: 20px;

    .btn {
      p {
        font-weight: 600;
        @media (max-width: 450px) {
          font-size: 10px;
        }
      }
    }
    .btn.active {
      background-color: black;
      color: white;
    }
    .card {
      cursor: pointer;
      padding: 10px 10px 10px 40px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      transition: 0.2s linear;
    }
    .tag {
      cursor: pointer;
      padding: 10px 40px 10px 10px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      transition: 0.2s linear;
    }
    .btn:hover {
      background-color: #000;
      p {
        color: #fff;
      }
    }
  }
}
</style>
