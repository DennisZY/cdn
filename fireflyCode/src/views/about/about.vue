<template>
  <div class="about">
    <div class="container">
      <div class="left">
        <div>ABOUT US</div>
        <div class="item"
             @click="tab = 'intro'"
             :class="{'active': tab === 'intro'}">INTRODUCTION</div>
        <div class="item"
             @click="tab = 'team'"
             :class="{'active': tab === 'team'}">TEAM ABILITY</div>
        <div class="item"
             @click="tab = 'case'"
             :class="{'active': tab === 'case'}">CASE SHOWS</div>
      </div>
      <div class="right">
        <div class="items">
          <transition name="fade">
            <introduction v-show="tab==='intro'"></introduction>
          </transition>
          <transition name="fade">
            <caseShow v-show="tab==='case'"></caseShow>
          </transition>
          <transition name="fade">
            <team v-show="tab==='team'"></team>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  width: 100%;
  margin-top: 80px;
  .container {
    padding-top: 50px;
    display: flex;
    .left {
      width: 220px;
      min-width: 220px;
      padding-top: 16px;
      font-size: 0;
      color: #222222;
      text-align: left;
      &>div:first-child {
        font-size: 18px;
        color: #999999;
        line-height: 25px;
        cursor: default;
        padding-left: 46px;
      }
      .item {
        margin: 13px 0;
        padding-left: 46px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        transition: all .2s linear;
        cursor: pointer;
        &:hover {
          background: #F0F0F0;
        }
      }
      .active {
        background: #F0F0F0;
      }
    }
    .right {
      text-align: center;
      flex: 1;
      min-width: 792px;
      .items {
        width: 720px;
        margin: 0 auto;
      }
    }
  }
}
</style>

<script>
import introduction from '@/components/introduction'
import caseShow from '@/components/case'
import team from '@/components/team'
export default {
  data() {
    return {
      tab: 'intro'
    }
  },
  mounted() {
    if (this.$route.params.tab) this.tab = this.$route.params.tab
  },
  components: {
    introduction,
    caseShow,
    team
  }
}
</script>
