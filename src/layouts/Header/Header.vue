<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__inner">
        <div class="header__logo">
          <img class="logo" src="@/assets/images/logosimpra.png" alt="" />
          <p>by Azamat Zhakhanov</p>
        </div>
        <div class="header__nav">
          <ul>
            <router-link to="/" class="nav"
              ><li>
                <img
                  class="block"
                  src="/simpra/src/assets/images/home.png"
                  alt=""
                />
                <img
                  src="/simpra/src/assets/images/home-hover.png"
                  alt=""
                  class="none"
                />
                <p>Главная</p>
              </li></router-link
            >

            <router-link to="/products" class="nav"
              ><li>
                <img
                  class="block"
                  src="/simpra/src/assets/images/nfc.png"
                  alt=""
                />
                <img
                  src="/simpra/src/assets/images/nfc-hover.png"
                  alt=""
                  class="none"
                />
                <p>NFC товары</p>
              </li></router-link
            >

            <router-link to="/contacts" class="nav"
              ><li>
                <img
                  class="block"
                  src="/simpra/src/assets/images/contacts.png"
                  alt=""
                />
                <img
                  src="/simpra/src/assets/images/contacts-hover.png"
                  alt=""
                  class="none"
                />
                <p>Контакты</p>
              </li></router-link
            >
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  text-align: center;
  margin-bottom: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  overflow: hidden;
}
.header__inner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin: 0 0 20px 0;
  }
}

.header__logo {
  display: flex;
  align-items: end;
  gap: 7px;
  .logo {
    padding: 20px 0;
    width: 150px;
    @media (max-width: 768px) {
      width: 150px;
    }
  }
  p {
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 26px;
  }
}

.header__nav ul {
  display: flex;
  cursor: pointer;
  @media (max-width: 450px) {
    justify-content: space-around;
  }
  li {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 20px;
    color: #000;
    border-radius: 12px;
    transition: 0.2s linear;
    margin: 0 15px;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid #000;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    position: relative;
    img.block {
      width: 20px;
      opacity: 1;
      position: absolute;
    }
    img.none {
      width: 20px;
      opacity: 0;
    }
    p {
      margin-top: 2px;
    }
    @media (max-width: 808px) {
      p {
        display: none;
      }
    }
    .nav {
      color: #000;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  li:hover {
    background-color: #000000;
    padding: 5px 20px;
    border-radius: 20px;
    margin: 0 15px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;

    img.block {
      width: 20px;
      opacity: 0;
    }

    img.none {
      width: 20px;
      opacity: 1;
    }
  }
}
</style>
