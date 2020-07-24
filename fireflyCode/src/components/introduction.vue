<template>
    <div class="introduction">
        <div class="item">
            <div class="title">INTRODUCTION</div>
            <p class="intro">
                Firefly-auto is registered at Guangzhou, China.<br/> We are mainly to operate the new generation of auto lamp lighting technology development, LED auto lamps, LED auto lamp core components. Which is a high-tech enterprise to provide customers with all-round automotive lighting solutions, products manufacturing and sales.
            </p>
            <div class="detail">
                <div>
                    <img src="../assets/images/about/intro/ic_branches.png"
                         alt="branches">
                    <p class="detail-title">Branches</p>
                    <div>
                        <p>Guangzhou Panyu Design Center</p>
                        <p>Guangzhou Testing Center</p>
                        <p>Manufacture Center</p>
                    </div>
                </div>
                <div>
                    <img src="../assets/images/about/intro/ic_staff.png"
                         alt="staff">
                    <p class="detail-title">Staff</p>
                    <div>
                        <p>Manufacture 20 person</p>
                        <p>Inspector 2 person</p>
                        <p>P&amp;D 10 person</p>
                    </div>
                </div>
                <div>
                    <img src="../assets/images/about/intro/ic_product.png"
                         alt="product">
                    <p class="detail-title">Product</p>
                    <div>
                        <p>Manufacture 20 person</p>
                        <p>Inspector 2 person</p>
                        <p>P&amp;D 10 person</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="title">Company Profile</div>
            <div class="imgs">
                <div>
                    <img src="../assets/images/about/intro/in_pic1.png"
                         alt="">
                    <p>R&amp;D Center</p>
                </div>
                <div>
                    <img src="../assets/images/about/intro/in_pic2.png"
                         alt="">
                    <p>LMT</p>
                </div>
                <div>
                    <img src="../assets/images/about/intro/in_pic3.png"
                         alt="">
                    <p>Integrating Sphere</p>
                </div>
                <div>
                    <img src="../assets/images/about/intro/in_pic4.png"
                         alt="">
                    <p>High and low Temp.Testing</p>
                </div>
                <div>
                    <img src="../assets/images/about/intro/in_pic5.png"
                         alt="">
                    <p>Waterproof</p>
                </div>
                <div>
                    <img src="../assets/images/about/intro/in_pic6.png"
                         alt="">
                    <p>Vibration</p>
                </div>
                <div>
                    <img src="../assets/images/about/intro/in_pic7.png"
                         alt="">
                    <p>Waterproof</p>
                </div>
                <div>
                    <img src="../assets/images/about/intro/in_pic8.png"
                         alt="">
                    <p>Vibration</p>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="title">Service process</div>
            <p class="intro">Firefly-auto provide the whole product lifecycle services which is from the industrial design to manufacture , the whole process will use computer simulation to shorten the development of the same period and reduce R &amp; D. risk.
            </p>
            <div>
                <img src="../assets/images/about/intro/flow.png"
                     alt="flow">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.introduction {
    .item {
        margin-bottom: 70px;
        overflow: hidden;
        .title {
            font-size: 28px;
            color: #222222;
            line-height: 22px;
            position: relative;
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
        .intro {
            margin-top: 70px;
            font-size: 16px;
            color: #222222;
            line-height: 26px;
            text-align: left;
        }
        .detail {
            display: flex;
            justify-content: space-between;
            margin-bottom: 32px;
            div {
                .detail-title {
                    font-size: 16px;
                    color: #222222;
                    line-height: 22px;
                    margin-top: 0;
                    margin-bottom: 10px;
                }
                div {
                    p {
                        font-size: 14px;
                        color: #666666;
                    }
                }
            }
        }
        .imgs {
            float: left;
            margin-top: 70px;
            div {
                width: 310px;
                display: inline-block;
                p {
                    text-align: center;
                    font-size: 16px;
                    color: #222222;
                    margin: 30px 0 40px 0;
                }
            }
            div:nth-child(odd) {
                margin-right: 90px;
            } // &::after {
            //     content: '';
            //     display: block;
            //     width: 0;
            //     height: 0;
            //     clear: both;
            // }
        }
    }
}
</style>

<script>
export default {

}
</script>


