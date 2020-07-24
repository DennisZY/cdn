<template>
  <div class="products">
    <div class="container">
      <div class="left">
        <div class="all"
             @click="all">ALL</div>
        <el-tree :data="data"
                 :props="defaultProps"
                 @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="right">
        <div class="items"
             v-show="!isDetail">
          <div class="item"
               v-for="(item, index) in list"
               :key="index"
               @click="detailTap(item)">
            <div class="item-img">
              <div class="img i1"
                   :style="{'background-image': 'url(' + item.url + ')'}"></div>
            </div>
            <div class="title">{{item.label}}</div>
          </div>
        </div>
        <div class="page"></div>
        <div class="detail"
             v-show="isDetail">
          <div class="title">INTRODUCTION</div>
          <div class="detail-img">
            <div class="big"
                 :style="{'background-image': 'url(' + showDetail.defaultImg + ')'}"></div>
            <div class="small-list">
              <swiper :options="swiperOption"
                      ref="mySwiper">
                <swiper-slide v-for="(slide, i) in showDetail.images"
                              :key="i">
                  <div class="flex-item"
                       @click="chooseSmallImg(slide)"
                       :style="{'background-image': 'url(' + slide + ')'}"></div>>

                </swiper-slide>
                <div class="swiper-button-prev swiper-button-black"
                     slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-black"
                     slot="button-next"></div>
              </swiper>
            </div>
          </div>
          <div class="second-title">
            <div class="title-1">
              <div class="yellow"></div>
              <span class="context">Products：{{showDetail.name}}</span>
            </div>
            <div class="title-1">
              <div class="yellow"></div>
              <span class="context">Model：{{showDetail.model}}</span>
            </div>
            <div class="title-1">
              <div class="yellow"></div>
              <span class="context">Parameter:</span>
            </div>
          </div>
          <div class="params">
            <el-table :data="showDetail.params"
                      style="width: 100%">
              <el-table-column prop="id"
                               style="background-color: #F2F2F2"
                               label="Number"
                               width="80">
              </el-table-column>
              <el-table-column prop="item"
                               label="Item"
                               width="200">
              </el-table-column>
              <el-table-column prop="param"
                               label="Parameter">
              </el-table-column>
            </el-table>
          </div>
          <div class="second-title">
            <div class="title-1">
              <div class="yellow"></div>
              <span class="context">Authentication：</span>
            </div>
          </div>
          <div class="authentication">
            <div class=""
                 style="background-image:url('http://118.24.26.242/products/certification/E4.png')"></div>
            <div class=""
                 style="background-image:url('http://118.24.26.242/products/certification/dot.png')"></div>
            <div class=""
                 style="background-image:url('http://118.24.26.242/products/certification/RoHS.png')"></div>
            <div class=""
                 style="background-image:url('http://118.24.26.242/products/certification/SAE.png')"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/styles/base.scss';
// @import 'flexslider/flexslider.css';
@import 'swiper/dist/css/swiper.css';
.products {
  width: 100%;
  margin-top: 80px;
  min-height: calc(100vh - 110px);
  .container {
    padding-top: 50px;
    display: flex;
    .left {
      min-width: 220px;
      padding-top: 16px;
      font-size: 14px;
      color: #222222;
      text-align: left;
      .all {
        cursor: pointer;
      }
      &>div:first-child {
        font-size: 18px;
        color: #999999;
        line-height: 25px;
        cursor: pointer;
        padding-left: 46px;
      }
      .el-tree {
        padding-left: 40px;
        .el-tree-node {
          margin: 10px 0 10px 0;
        }
      }
    }
    .right {
      margin-left: 20px;
      flex: 1;
      .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        .item {
          width: 220px;
          height: 290px;
          border: 1px solid #EBEBEB;
          margin: 0 20px 20px 0;
          cursor: pointer;
          .item-img {
            padding: 10px;
            width: 100%;
            height: 220px;
            box-sizing: border-box;
            .img {
              width: 200px;
              height: 200px;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center center;
              box-sizing: border-box;
            }
          }
          .title {
            width: 190px;
            height: 70px;
            padding-top: 14px;
            margin: 14px;
            margin-top: 0;
            text-align: left;
            font-size: 14px;
            color: #222222;
            line-height: 20px;
            box-sizing: border-box;
            border-top: 1px solid #EBEBEB;
          }
        }
      }
      .detail {
        width: 720px;
        margin: 0 auto;
        box-sizing: border-box;
        .title {
          font-size: 28px;
          color: #222222;
          line-height: 22px;
          position: relative;
          text-align: center;
          margin-bottom: 60px;
          &::after {
            content: '';
            background: #FFD500;
            border-radius: 2px;
            width: 40px;
            height: 3px;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            top: 40px;
          }
        }
        .detail-img {
          width: 100%;
          .big {
            width: 100%px;
            height: 520px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            font-size: 0;
            border: 1px solid #ccc;
            box-sizing: border-box;
            margin-bottom: 20px;
          }
          .small-list {
            width: 720px; // font-size: 0;
            box-sizing: border-box;
            height: 150px;
            .swiper-container {
              height: 150px;
              .flex-item {
                width: 180px;
                height: 150px;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center center;
                border: 1px solid #ccc;
                box-sizing: border-box;
                &:hover {
                  cursor: pointer;
                }
              }
            }
          }
        }
        .second-title {
          text-align: left;
          margin: 45px auto 5px auto;
          .title-1 {
            display: table;
            margin-top: 20px;
            .yellow {
              display: table-cell;
              width: 3px;
              height: 100%;
              background-color: #FFD500;
              border-radius: 2px;
            }
            .context {
              font-size: 14px;
              color: #222222;
              padding-left: 6px;
            }
          }
        }
        .params {
          margin-bottom: 25px;
          .el-table th {
            background-color: #F2F2F2;
            font-size: 12px;
            color: #888888;
            padding-left: 5px
          }
          .el-table--enable-row-transition .el-table__body td:first-child {
            background-color: #F2F2F2;
          }
          .el-table--enable-row-transition .el-table__body td {
            padding-left: 5px
          }
        }
        .authentication {
          display: flex;
          justify-content: space-between;
          margin-bottom: 65px;
          div {
            width: 170px;
            height: 100px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            background-repeat: no-repeat;
            background-position: center center;
          }
        }
      }
    }
  }
}
</style>

<script>
// import 'flexslider/jquery.flexslider-min.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      data: [{
        label: 'Head Lamp',
        children: [{
          label: '7\'\' Round Head Lamp',
        }, {
          label: '90mm Head Lamp'
        }]
      }, {
        label: 'Fog Lamp',
      }, {
        label: 'Signal Lamp'
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      list: {
        RoundHeadLamp: []
      },
      tableData: [{
        id: '1',
        item: '王小虎',
        param: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        item: '王小虎',
        param: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '3',
        item: '王小虎',
        param: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '4',
        item: '王小虎',
        param: '上海市普陀区金沙江路 1516 弄'
      }],
      imgDetail: {
        HL701CE: {
          images: ['http://118.24.26.242/products/HL701CE/01.png'],
          imgConut: 1,
          name: 'Head Lamp - 7’’ Round Head Lamp',
          model: 'HL701CE',
          defaultImg: 'http://118.24.26.242/products/HL701CE/01.png',
          params: [{
            item: 'Input Voltage',
            param: ['12/24V DC'],
            id: 1
          }, {
            item: 'High Beam Input Current',
            param: ['1.5A(@12V)', ' 0.75A（@24V）'],
            id: 2
          }, {
            item: 'Low Beam Input Current',
            param: ['1.5A(@12V)', ' 0.75A（@24V）'],
            id: 3
          }, {
            item: 'LED Initial Flux',
            param: ['≥1000 lm(近光)', ' ≥1000 lm(远光)'],
            id: 4
          }, {
            item: 'Colour Temperature',
            param: ['5700K'],
            id: 5
          }, {
            item: 'Life Span',
            param: ['≥5000 Hours'],
            id: 6
          }, {
            item: 'Operating Temperature',
            param: ['-40℃～+60℃'],
            id: 7
          }, {
            item: 'Storage Temperature',
            param: ['-40℃～+85℃'],
            id: 8
          }, {
            item: 'IP Class',
            param: ['IP67'],
            id: 9
          }, {
            item: 'Dimension ',
            param: ['ø176×101(H)mm']
          }, {
            item: 'Weight',
            param: ['1.1kg'],
            id: 10
          },]
        },
        HL701CEAE: {
          images: ['http://118.24.26.242/products/HL701CE-AE/01.png', 'http://118.24.26.242/products/HL701CE-AE/02.png', 'http://118.24.26.242/products/HL701CE-AE/03.png', 'http://118.24.26.242/products/HL701CE-AE/04.png', 'http://118.24.26.242/products/HL701CE-AE/05.png', 'http://118.24.26.242/products/HL701CE-AE/06.png', 'http://118.24.26.242/products/HL701CE-AE/07.png', 'http://118.24.26.242/products/HL701CE-AE/08.png', 'http://118.24.26.242/products/HL701CE-AE/09.png', 'http://118.24.26.242/products/HL701CE-AE/10.png', 'http://118.24.26.242/products/HL701CE-AE/11.png', 'http://118.24.26.242/products/HL701CE-AE/12.png', 'http://118.24.26.242/products/HL701CE-AE/13.png', 'http://118.24.26.242/products/HL701CE-AE/14.png', 'http://118.24.26.242/products/HL701CE-AE/15.png', 'http://118.24.26.242/products/HL701CE-AE/16.png', 'http://118.24.26.242/products/HL701CE-AE/17.png'],
          imgConut: 17,
          name: 'Head Lamp - 7’’ Round Head Lamp',
          model: 'HL701CE-AE',
          defaultImg: 'http://118.24.26.242/products/HL701CE-AE/01.png',
          params: [{
            id: 1,
            item: 'Input Voltage',
            param: ['12/24V DC']
          }, {
            id: 2,
            item: 'High Beam Input Current',
            param: ['1.5A(@12V)', '  0.75A（@24V）']
          }, {
            id: 3,
            item: 'Low Beam Input Current',
            param: ['1.5A(@12V)', '  0.75A（@24V）']
          }, {
            id: 4,
            item: 'Halo Input Current',
            param: ['0.35A(@12V)', '  0.18A（@24V）']
          }, {
            item: 'LED Initial Flux',
            param: ['≥1000 lm(近光)', '  ≥1000 lm(远光)'],
            id: 5
          }, {
            item: 'Colour Temperature',
            param: ['5700K'],
            id: 6
          }, {
            item: 'Life Span',
            param: ['≥5000 Hours'],
            id: 7
          }, {
            item: 'Operating Temperature',
            param: ['-40℃～+60℃'],
            id: 8
          }, {
            item: 'Storage Temperature',
            param: ['-40℃～+85℃'],
            id: 9
          }, {
            item: 'IP Class',
            param: ['IP67'],
            id: 10
          }, {
            item: 'Dimension ',
            param: ['ø176×101(H)mm'],
            id: 11
          }, {
            item: 'Weight',
            param: ['1.1kg'],
            id: 12
          },]
        },
        HLD3501CE: {
          images: ['http://118.24.26.242/products/HLD3501CE/01.png', 'http://118.24.26.242/products/HLD3501CE/02.png', 'http://118.24.26.242/products/HLD3501CE/03.png', 'http://118.24.26.242/products/HLD3501CE/04.png', 'http://118.24.26.242/products/HLD3501CE/05.png', 'http://118.24.26.242/products/HLD3501CE/06.png'],
          imgConut: 6,
          name: 'Head Lamp - 90mm Head Lamp',
          model: 'HLD3501CE',
          defaultImg: 'http://118.24.26.242/products/HLD3501CE/01.png',
          params: [{
            item: 'Input Voltage',
            param: ['12/24V DC'],
            id: 1
          }, {
            item: 'Input Current of High Beam',
            param: ['2.5A(@12V)', '  1.25A(@24V)'],
            id: 2
          }, {
            item: 'Input Current of Low Beam',
            param: ['2.05A(@12V)', '  1.03A(@24V)'],
            id: 3
          }, {
            item: ' Input Power',
            param: ['30W(High Beam) ', '  24W(Low Beam)'],
            id: 4
          }, {
            item: 'LED Initial Flux',
            param: ['1500 lm(High Beam)', '  1500 lm(Low Beam)'],
            id: 5
          }, {
            item: 'Colour Temperature',
            param: ['6000K'],
            id: 6
          }, {
            item: 'Life Span',
            param: ['≥5000 Hours'],
            id: 7
          }, {
            item: 'Operating Temperature Range',
            param: ['-40℃～+60℃'],
            id: 8
          }, {
            item: 'Storage Temperature Range',
            param: ['-40℃～+85℃'],
            id: 9
          }, {
            item: 'Dimensions ',
            param: ['159(L)×129(W)×107(H)mm'],
            id: 10
          }, {
            item: 'Net Weight',
            param: ['0.9 kg'],
            id: 11
          }]
        },
        FF3501ECB: {
          images: ['http://118.24.26.242/products/FF3501E-CB/01.png', 'http://118.24.26.242/products/FF3501E-CB/02.png', 'http://118.24.26.242/products/FF3501E-CB/03.png', 'http://118.24.26.242/products/FF3501E-CB/04.png', 'http://118.24.26.242/products/FF3501E-CB/05.png', 'http://118.24.26.242/products/FF3501E-CB/06.png', 'http://118.24.26.242/products/FF3501E-CB/07.png', 'http://118.24.26.242/products/FF3501E-CB/08.png', 'http://118.24.26.242/products/FF3501E-CB/09.png', 'http://118.24.26.242/products/FF3501E-CB/10.png', 'http://118.24.26.242/products/FF3501E-CB/11.png', 'http://118.24.26.242/products/FF3501E-CB/12.png', 'http://118.24.26.242/products/FF3501E-CB/13.png', 'http://118.24.26.242/products/FF3501E-CB/14.png', 'http://118.24.26.242/products/FF3501E-CB/15.png', 'http://118.24.26.242/products/FF3501E-CB/16.png'],
          imgConut: 16,
          name: 'Fog Lamp',
          model: 'FF3501E-CB',
          defaultImg: 'http://118.24.26.242/products/FF3501E-CB/01.png',
          params: [{
            item: 'Input Voltage',
            param: ['12/24V DC'],
            id: 1
          }, {
            item: 'Fog Lamp Input Current',
            param: ['0.62A(@12V)', '  0.35A(@24V)'],
            id: 2
          }, {
            item: 'DRL Input Current',
            param: ['0.19A(@12V)', '  0.1A(@24V)'],
            id: 3
          }, {
            item: 'LED Initial Flux',
            param: ['Fog：550lm', '  DRL：420 lm'],
            id: 4
          }, {
            item: 'Colour Temperature',
            param: ['5700K'],
            id: 5
          }, {
            item: 'Life Span',
            param: ['≥5000 Hours'],
            id: 6
          }, {
            item: 'Operating Temperature',
            param: ['-40℃～+60℃'],
            id: 7
          }, {
            item: 'Storage Temperature',
            param: ['-40℃～+85℃'],
            id: 8
          }, {
            item: 'IP Class',
            param: ['IP65'],
            id: 9
          }, {
            item: 'Dimension ',
            param: ['Ф90×82mm'],
            id: 10
          }, {
            item: 'Weight',
            param: ['0.6kg'],
            id: 11
          },]
        }
      },
      defaultList: [{
        name: 'HL701CE',
        label: 'HL701CE',
        url: 'http://118.24.26.242/products/HL701CE/01.png'
      }, {
        name: 'HL701CEAE',
        label: 'HL701CE-AE',
        url: 'http://118.24.26.242/products/HL701CE-AE/01.png'
      }, {
        name: 'HLD3501CE',
        label: 'HLD3501CE',
        url: 'http://118.24.26.242/products/HLD3501CE/01.png'
      }, {
        name: 'FF3501ECB',
        label: 'FF3501E-CB',
        url: 'http://118.24.26.242/products/FF3501E-CB/01.png'
      }],
      list: [],
      isDetail: false,
      showDetail: {},
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 15,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
          hiddenClass: 'my-button-hidden',
        },
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.list = this.defaultList
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    handleNodeClick(data) {
      this.isDetail = false
      switch (data.label) {
        case '7\'\' Round Head Lamp':
          this.list = [{
            name: 'HL701CE',
            label: 'HL701CE',
            url: 'http://118.24.26.242/products/HL701CE/01.png'
          }, {
            name: 'HL701CEAE',
            label: 'HL701CE-AE',
            url: 'http://118.24.26.242/products/HL701CE-AE/01.png'
          }]
          break;
        case '90mm Head Lamp':
          this.list = [{
            name: 'HLD3501CE',
            label: 'HLD3501CE',
            url: 'http://118.24.26.242/products/HLD3501CE/01.png'
          }]
          break;
        case 'Fog Lamp':
          this.list = [{
            name: 'FF3501ECB',
            label: 'FF3501E-CB',
            url: 'http://118.24.26.242/products/FF3501E-CB/01.png'
          }]
          break;
        default:
          break;
      }
    },
    detailTap(item) {
      this.isDetail = true
      this.showDetail = this.imgDetail[item.name]
    },
    chooseSmallImg(item) {
      this.showDetail.defaultImg = item
    },
    all() {
      this.isDetail = false
      this.list = this.defaultList
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};

</script>