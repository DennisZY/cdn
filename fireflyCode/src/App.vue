<template>
  <div id="app">
    <div class="header"
         :class="{'isHome': tab === 'HOME' && !scrolled}">
      <div class="logo">
        <img src="./assets/images/logo.png">
      </div>
      <div class="nav">
        <ul>
          <li>
            <router-link :to="'/home'"
                         :class="{'active': tab === 'HOME'}">HOME</router-link>
          </li>
          <li>
            <router-link :to="'/products'"
                         :class="{'active': tab === 'PRODUCTS'}">PRODUCTS</router-link>
          </li>
          <li>
            <router-link :to="'/about'"
                         :class="{'active': tab === 'ABOUT US'}">ABOUT US</router-link>
          </li>
          <li>
            <router-link :to="'/contact'"
                         :class="{'active': tab === 'CONTACT US'}">CONTACT US</router-link>
          </li>
        </ul>
      </div>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <div class="footer"
         :class="{'isNotWhite': tab === 'HOME'}">CopyRight © 2017 GuangZhou Firefly Auto-lighting Technology co.ltd</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tab: this.$route.name,
      scrolled: false
    }
  },
  watch: {
    '$route'(val) {
      this.tab = val.name
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollTop)
  },
  methods: {
    updateScrollTop() {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      scrollTop > 80 ? this.scrolled = true : this.scrolled = false
    },
  }
}
</script>

<style lang="scss">
@import 'normalize.css/normalize.css';
@import './assets/styles/base.scss';
@import './assets/styles/app.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .footer {
    font-size: 14px;
    color: #CCCCCC;
    text-align: center;
    padding-bottom: 14px;
  }
  .isNotWhite {
    background-color: #F2F2F2;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter,
  .fade-leave-to/* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
}

::-webkit-scrollbar {
  width: 12px;
}















/* 滚动槽 */

::-webkit-scrollbar-track {
  border-radius: 10px;
  border: 1px solid #ccc;
}















/* 滚动条滑块 */

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #ccc;
}
</style>
