<template>
    <div class="team">
        <div class="item">
            <div class="title">TEAM ABILITY</div>
            <div class="team-intro">
                <p class="m-tile">
                    <span>Mechanical</span> Team </p>
                <p class="context">In Firefly team, there are 3 mechanical engineers who have worked more than 8years in the professional domestic company. The cooperate customers included: Gac Group, Brialliance Auto, Great Wall, Leopaard, etc.</p>
            </div>
            <div class="team-intro">
                <p class="m-tile">
                    <span>Optical</span> Team </p>
                <p class="context">In Firefly team, there are 3 mechanical engineers who have worked more than 8years in the professional domestic company. The cooperate customers included: Gac Group, Brialliance Auto, Great Wall, Leopaard, etc.</p>
            </div>
            <div class="team-intro">
                <p class="m-tile">
                    <span>Simulation</span> Team </p>
                <p class="context">We have 2 engineer in simulation team, who have more than 4-6 years working experience and ever worked in Valeo. They have good experience on front or rear combination lamp design. And can analyze the vibration, heat dissipation, fogging. The cooperate customers included: Baic Group, Great Wall, Ford, Geely, Volkswagen, etc.</p>
            </div>
            <div class="team-intro">
                <p class="m-tile">
                    <span>Electrical</span> Team </p>
                <p class="context">3 electrical engineer all have 5-7 years working experience, they ever worked in Valeo, who have good experience on EMC design &amp; software R&amp;D experience ; The cooperate customers included: Baic Group, Geely, Volkswagen, etc. *The future ADB Intelligent lighting system software builders.
                </p>
            </div>
        </div>
        <div class="item">
            <div class="title">Design Ability</div>
            <div class="team-design">
                <p>Optical design of one head lamp</p>
                <div>
                    <img src="../assets/images/about/team/tb_p1.png"
                         alt="">
                </div>
            </div>
            <div class="team-design">
                <p>Optical design of one head lamp</p>
                <div>
                    <img src="../assets/images/about/team/tb_p2.png"
                         alt="">
                </div>
            </div>
            <div class="team-design">
                <p>Simulation of heat dissipation for one rear combination lamp</p>
                <div>
                    <img src="../assets/images/about/team/tb_p3.png"
                         alt="">
                </div>
            </div>
            <div class="team-design">
                <p>Fogging simulation for one front fog lamp</p>
                <div>
                    <img src="../assets/images/about/team/tb_p4.png"
                         alt="">
                </div>
            </div>
            <div class="team-design">
                <p>Vibration simulation for one front combination lamp</p>
                <div>
                    <img src="../assets/images/about/team/tb_p5.png"
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
    .team-intro {
        text-align: left;
        margin-bottom: 27px;
        .m-tile {
            font-size: 16px;
            line-height: 26px;
            margin-bottom: 9px;
            span {
                color: #F8AE00;
            }
        }
        .context {
            font-size: 14px;
            color: #666666;
            line-height: 20px;
            margin-top: 0;
        }
    }
    .team-design {
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


