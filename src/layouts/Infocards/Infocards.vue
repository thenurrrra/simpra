<script setup>
import ScrollMagicComponent from "@/components/ScrollMagicComponent.vue";
</script>
<template>
  <div class="cards">
    <div class="cards__inner">
      <ScrollMagicComponent>
        <div class="card">
          <div class="image img1">
            <img src="@/assets/images/card.png" alt="" />
          </div>
          <h2><span>1. </span>Приобретите свою собственную карту</h2>
          <p>
            После нажатия кнопки купить и начала оформления заказа, вы можете
            настроить дизайн лицевой стороны карты по своему вкусу. На экране
            предварительного просмотра, вы можете увидеть, как будет выглядеть
            ваша карта при создании дизайна.
          </p>
        </div>
      </ScrollMagicComponent>

      <ScrollMagicComponent>
        <div class="card">
          <div class="image img2">
            <img src="@/assets/images/phone.png" alt="" />
          </div>
          <h2><span>2. </span>Создай свой профиль</h2>
          <p>
            Для начала настройки профиля, коснитесь карточкой области NFC на
            вашем телефоне, затем он перебросит вас на иконку создайте профиль,
            добавьте информация, которой вы хотите делиться. Вы сможете
            обновлять информацию в любое удобное время.
          </p>
        </div>
      </ScrollMagicComponent>
      <ScrollMagicComponent>
        <div class="card">
          <div class="image img3">
            <img src="@/assets/images/phones.png" alt="" />
          </div>
          <h2><span>3. </span>Одно нажатие, тысячи сохранении</h2>
          <p>
            Ваша карточка готова к использованию. Делясь всей необходимой
            информацией одним касанием, Вы делаете моменты знакомства
            незабываемыми.
          </p>
        </div>
      </ScrollMagicComponent>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cards {
  width: 100%;
  max-width: 1900px;
  margin: 0 auto 100px auto;

  .cards__inner {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    @media (max-width: 610px) {
      flex-direction: column;
      gap: 50px;
    }
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 500px;
      height: 500px;
      @media (max-width: 450px) {
        width: 350px;
        margin: 0 auto;
      }
      .img1 {
        img {
          width: 300px;
        }
      }
      .img2 {
        img {
          width: 150px;
        }
      }
      .img3 {
        img {
          width: 350px;
        }
      }
      .image {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 400px;
        height: 300px;
      }
      h2 {
        font-size: 20px;
        span {
          font-size: 25px;
          font-weight: 900;
          color: #757575;
          transition: 0.2s linear;
        }
        @media (max-width: 450px) {
          font-size: 16px;
        }
      }
      p {
        margin-top: 20px;
        font-size: 15px;
        line-height: 1.8;
        font-weight: 500;
        color: #8f8c8c;
        width: 400px;
        transition: 0.2s linear;
        @media (max-width: 450px) {
          width: 350px;
        }
      }
    }
    .card:hover {
      h2 {
        span {
          color: #000;
        }
      }
      p {
        color: #000;
      }
    }
  }
}
</style>
