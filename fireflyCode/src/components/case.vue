<template>
    <div class="case">
        <div class="item">
            <div class="title">CASE SHOWS</div>
            <div class="case-item">
                <p>Baic Motor S500</p>
                <div>
                    <img src="../assets/images/about/case/cs_p1.png"
                         alt="">
                </div>
            </div>
            <div class="case-item">
                <p>YEMA B62</p>
                <div>
                    <img src="../assets/images/about/case/cs_p2.png"
                         alt="">
                </div>
            </div>
            <div class="case-item">
                <p>Trumpchi GA5</p>
                <div>
                    <img src="../assets/images/about/case/cs_p3.png"
                         alt="">
                </div>
            </div>
            <div class="case-item">
                <p>Geely Headlamp</p>
                <div>
                    <img src="../assets/images/about/case/cs_p4.png"
                         alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item {
    margin-bottom: 70px;
    .title {
        font-size: 28px;
        color: #222222;
        line-height: 22px;
        position: relative;
        margin-bottom: 70px;
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
    .case-item {
        text-align: left;
        margin-bottom: 60px;
        p {
            font-size: 16px;
            color: #222222;
            line-height: 26px;
        }
    }
}
</style>

<script>
export default {

}
</script>


