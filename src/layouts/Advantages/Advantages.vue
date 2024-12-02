<script setup>
import ScrollMagicComponent from "@/components/ScrollMagicComponent.vue";
</script>

<template>
  <div class="advantages">
    <div class="adv__main-text">
      <h1>Преимущества <span>Simpra</span></h1>
    </div>
    <div class="adv__inner">
      <ScrollMagicComponent>
        <div class="adv___block">
          <div class="adv-text">
            <h1>Рост имиджевой составляющей компании</h1>
          </div>
          <div class="adv-img">
            <img src="@/assets/images/рост.png" alt="" width="200" />
          </div>
        </div>
      </ScrollMagicComponent>
      <ScrollMagicComponent>
        <ScrollMagicComponent>
          <div class="adv___block">
            <div class="adv-text">
              <h1>Снижение расходов компании на печать визиток</h1>
            </div>
            <div class="adv-img">
              <img src="@/assets/images/процент.png" alt="" width="200" />
            </div>
          </div>
        </ScrollMagicComponent>
      </ScrollMagicComponent>
      <ScrollMagicComponent>
        <ScrollMagicComponent>
          <div class="adv___block">
            <div class="adv-text">
              <h1>Увеличение продаж</h1>
            </div>
            <div class="adv-img">
              <img src="@/assets/images/деньги.png" alt="" width="200" />
            </div>
          </div>
        </ScrollMagicComponent>
      </ScrollMagicComponent>
      <ScrollMagicComponent>
        <div class="adv___block">
          <div class="adv-text">
            <h1>
              Электронные визитки невозможно забыть. Они никогда не закончатся
            </h1>
          </div>
          <div class="adv-img">
            <img src="@/assets/images/бесконечность.png" alt="" width="200" />
          </div>
        </div>
      </ScrollMagicComponent>
      <ScrollMagicComponent>
        <div class="adv___block">
          <div class="adv-text">
            <h1>Бесконтактный обмен информацией при работе ONLINE</h1>
          </div>
          <div class="adv-img">
            <img src="@/assets/images/телефон.png" alt="" width="190" />
          </div>
        </div>
      </ScrollMagicComponent>
    </div>
  </div>
</template>

<style scoped lang="scss">
.advantages {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  .adv__main-text {
    margin-bottom: 70px;
    h1 {
      text-align: center;
      font-size: 45px;
      font-weight: 300;
      span {
        font-weight: 700;
      }
    }
    @media (max-width: 450px) {
      h1 {
        font-size: 40px;
      }
    }
  }
  .adv__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    @media (max-width: 1400px) {
      display: flex;
      flex-direction: column;

      margin: 0 40px;
    }
    @media (max-width: 710px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 0 40px;
    }
    .adv___block {
      box-shadow: 0 0 20px #989898;
      padding: 50px;
      border-radius: 40px;
      display: flex;
      align-items: center;
      gap: 30px;
      .adv-text {
        h1 {
          font-size: 20px;
          width: 300px;
        }
      }
      .adv-img {
      }
      @media (max-width: 710px) {
        display: flex;
        flex-direction: column;
        padding: 30px;
        .adv-text {
          h1 {
            font-size: 15px;
            width: 300px;
          }
        }
      }
      @media (max-width: 1400px) {
        display: flex;
        justify-content: space-around;
      }
    }
  }
}
</style>
