<template>
	<div class="contact">
		<div class="container">
			<div class="title">CONTACT US</div>
			<div class="detail">
				<div class="item">
					<div>
						<img src="../../assets/images/contact/ic_tel.png"
						     alt="TEL">
					</div>
					<div>TEL</div>
					<div>
						+86-15578697694<br/>+86-15920484589
					</div>
				</div>
				<div class="item">
					<div>
						<img src="../../assets/images/contact/ic_mail.png"
						     alt="E-mail">
					</div>
					<div>E-mail</div>
					<div>
						sales01@firefly-auto.com<br/> damon@firefly-auto.com
					</div>
				</div>
				<div class="item">
					<div>
						<img src="../../assets/images/contact/ic_add.png"
						     alt="Add">
					</div>
					<div>Add</div>
					<div>
						Room A502, 5 floor, Xinhui<br/>Combination building, GuanQiao<br/>Village, ShiLou Town, PanYu<br/>District, Guangzhou.
					</div>
				</div>
				<div class="item">
					<div>
						<img src="../../assets/images/contact/ic_code.png"
						     alt="Code">
					</div>
					<div>Code</div>
					<div class="code">
						511447
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.contact {
	margin-top: 80px;
	height: calc(100vh - 110px);
	.container {
		padding-top: 50px;
		text-align: center;
		margin: auto 0;
		min-width: 1024px;
		.title {
			font-size: 28px;
			color: #222;
			line-height: 22px;
			position: relative;
			&::after {
				content: '';
				position: absolute;
				margin: auto;
				left: 0;
				right: 0;
				top: 40px;
				background: #FFD500;
				border-radius: 2px;
				width: 40px;
				height: 3px;
				;
			}
		}
		.detail {
			margin-top: 110px;
			display: flex;
			justify-content: center;
			text-align: center;
			transform: translateY(50%);
			.item {
				padding: 0 40px;
				&>div:nth-of-type(2) {
					font-size: 20px;
					color: #222222;
					margin-bottom: 14px;
				}
				&>div:last-child {
					font-size: 14px;
					color: #858585;
					line-height: 20px;
					text-align: left;
				}
				.code {
					text-align: center !important;
				}
			}
			.item:not(:last-child) {
				border-right: 1px solid #E0E0E0;
			}
		}
	}
}
</style>

<script>


</script>