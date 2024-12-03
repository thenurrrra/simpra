<template>
  <div class="banner">
    <transition name="slidein" appear>
      <div class="banner__inner">
        <div class="main-text">
          <h1>Simpra</h1>
          <div class="image">
            <img src="@/assets/images/card.png" alt="" />
          </div>
          <div class="sub-text">
            <p>Связь в одно касание.</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.banner {
  text-align: center;
  margin: 155px 0 200px 0;
  @media (max-width: 450px) {
    margin: 200px 0 150px 0;
  }
  .banner__inner {
    .main-text {
      h1 {
        font-size: 40px;
        font-weight: 500;
        position: relative;
        text-transform: uppercase;
        font-size: 2em;
        letter-spacing: 4px;
        overflow: hidden;
        background: linear-gradient(90deg, #000, #fff, #000);
        background-size: 80%;
        animation: animate 8s linear infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(255, 255, 255, 0);
        @media (max-width: 610px) {
          font-size: 20px;
        }
        @keyframes animate {
          0% {
            background-position: -500%;
          }
          100% {
            background-position: 500%;
          }
        }
      }
    }
    .image {
      img {
        width: 650px;
        transition: 0.2s linear;
        animation: pulse-brightness 3s infinite;
        @media (max-width: 610px) {
          width: 400px;
        }
      }
      @keyframes pulse-brightness {
        0% {
          filter: brightness(1); /* Original brightness */
        }
        50% {
          filter: brightness(1.5); /* Brighten */
        }
        100% {
          filter: brightness(1); /* Back to original brightness */
        }
      }
    }
    .sub-text {
      p {
        font-size: 20px;
        font-weight: 300;
        @media (max-width: 610px) {
          font-size: 15px;
        }
      }
    }
  }
}

/* Исходное состояние перед появлением */
.slidein-enter-active,
.slidein-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.slidein-enter-from {
  opacity: 0;
  transform: translateY(30px); /* Элемент начнет ниже на 30px */
}

.slidein-enter-to {
  opacity: 1;
  transform: translateY(0); /* Элемент поднимается на свое место */
}

.slidein-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slidein-leave-to {
  opacity: 0;
  transform: translateY(-30px); /* Элемент исчезает вверх */
}
</style>
