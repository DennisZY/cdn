<template>
  <div class="home">
    <div class="banner">
      <div class="flexslider">
        <ul class="slides">
          <li>
            <div class="img banner1">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="items">
      <div class="item">
        <div class="intro">
          <p class="title">PRODUCTS</p>
          <div class="detail">A few years ago, the automotive lighting industry is nothing more than the mainstream of xenon lamps and halogen lamps. However, with the development of technology, LED applications in automotive lighting are increasing, from the initial automotive interior lighting applications, spanning to the headlamps and tail lights more widely used. </div>
          <router-link :to="{name: 'ABOUT US', params: {tab: 'case'}}"
                       class="btn">DETAIL</router-link>
        </div>
        <div class="img img1 right">
        </div>
      </div>
      <div class="item">
        <div class="img img2 left">
        </div>
        <div class="intro intro_right">
          <p class="title">CASE SHOWS</p>
          <div class="detail">Sichuan (YEMA) Automotive Industry Group Co., Ltd., was born in the late 1980s, has produced "Jinding" brand bus series, "Yema", "Bailu" brand lightweight off-road vehicles and vans dual-use cars swept the country, In particular, "Yema" brand SUV is the national free for inspection products, the national "public security law" system designated vehicles sentinel manufacturers
          </div>
          <router-link :to="{name: 'ABOUT US', params: {tab: 'case'}}"
                       class="btn">DETAIL</router-link>
        </div>
      </div>
      <div class="item">
        <div class="intro">
          <p class="title">TEAM ABILTY</p>
          <div class="detail">Firefly have a wealth of design experience, our design team has been behind the scenes of product development and design. Before the fireflies came to the front of curtain, we had provided design solutions to several OEM customers and won the bidding.</div>
          <router-link :to="{name: 'ABOUT US', params: {tab: 'team'}}"
                       class="btn">DETAIL</router-link>
        </div>
        <div class="img img3 right">
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="container">
        <p class="title">CONTACT US</p>
        <div class="detail">
          <div class="detail-item">
            <div class="detail-title">TEL</div>
            <div class="detail-intro">+86-15578697694<br/>+86-15920484589
            </div>
          </div>
          <div class="detail-item">
            <div class="detail-title">E-mail</div>
            <div class="detail-intro">sales01@firefly-auto.com<br/>damon@firefly-auto.com
            </div>
          </div>
          <div class="detail-item">
            <div class="detail-title">Add</div>
            <div class="detail-intro">Room A502, 5 floor, Xinhui Combination building, GuanQiao Village, ShiLou Town, PanYu District, Guangzhou.</div>
          </div>
          <div class="detail-item">
            <div class="detail-title">Code</div>
            <div class="detail-intro">511447</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/base.scss';
@import 'flexslider/flexslider.css';
.home {
  min-width: 1024px;
  .banner {
    height: 720px;
    .flexslider {
      width: 100%;
      margin: 0 !important;
      border: none !important;
      .slides {
        padding: 0;
        .img {
          width: 100%;
          height: 720px;
          background-size: cover;
          background-position: 50% 50%;
          background-repeat: no-repeat;
        }
        .banner1 {
          background-image: url('../../assets/images/home/banner.png');
        }
      }
    }
  }

  .items {
    .item {
      display: flex;
      width: 100%;
      padding: 40px 0;
      align-items: center;
      justify-content: space-between;
      .img {
        // flex: 1;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        width: 620px;
        height: 520px;
      }
      .img1 {
        background-image: url('../../assets/images/home/content1.png');
      }
      .img2 {
        background-image: url('../../assets/images/home/content2.png');
      }
      .img3 {
        background-image: url('../../assets/images/home/content3.png');
      }
      .left {
        text-align: left;
        padding-left: 40px;
        vertical-align: middle;
      }
      .right {
        text-align: right;
        padding-right: 40px;
      }
      .intro {
        padding: 70px 0 70px 111px;
        max-width: 520px;
        .title {
          color: $mainColor;
          font-size: 36px;
        }
        .detail {
          font-size: 16px;
          color: #858585;
          line-height: 22px;
        }
        .btn {
          text-decoration: none;
          margin-top: 23px;
        }
      }
      .intro_right {
        padding-right: 111px;
      }
      &:nth-child(even) {
        background-color: #F2F2F2;
      }
    }
  }
  .contact {
    background-color: #F2F2F2;
    padding: 96px 111px 66px 111px;
    .container {
      .title {
        color: $mainColor;
        font-size: 36px;
        margin-bottom: 50px;
        margin-top: 0;
      }
      .detail {
        display: flex;
        justify-content: space-between;
        .detail-item {
          color: #858585;
          .detail-title {
            font-size: 22px;
            line-height: 30px;
            margin-bottom: 22px;
          }
          .detail-intro {
            font-size: 16px;
            max-width: 369px;
            line-height: 22px;
          }
        }
      }
    }
  }
}
</style>

<script>
import 'flexslider/jquery.flexslider-min.js'
export default {
  mounted() {
    $('.flexslider').flexslider({
      animation: 'slide',
      animationLoop: true,
      directionNav: false,
      slideshowSpeed: 3000,
      controlNav: true,
      manualControlEvent: 'hover'
    })
  }
}
</script>