<script setup>
import NavBar from '../../components/navbar/NavBar.vue'
</script>

<template>
	<div class="container">
		<NavBar></NavBar>
		<div class="first">
			<header>
				<div class="logo">
					<img src="/src/assets/images/logo/logo.svg" alt="" />
					<span>EasyLife</span>
				</div>
				<h2>ВНИМАНИЕ!</h2>
				<div class="rel">
					<h1>РОЗЫГРЫШ</h1>
					<img class="left-pic" src="/src/assets/images/leftPic.png" alt="" />
					<img class="right-pic" src="/src/assets/images/rightPic.png" alt="" />
					<img class="sale" src="/src/assets/images/sale.png" alt="" />
					<img class="fingers" src="/src/assets/images/fingers.png" alt="" />
				</div>
			</header>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../styles/global.scss';

header {
	text-align: center;
}

.logo {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 7.11px;

	span {
		font-size: 20.7px;
		color: $white;
		font-weight: 700;
	}
}

.rel {
	position: relative;
}
.left-pic {
	position: absolute;
	left: -10px;
	top: 30%;
	z-index: -10;
}
.right-pic {
	position: absolute;
	right: -10px;
	z-index: -10;
}
.sale {
	position: absolute;
	top: 40%;
	right: 4%;
	z-index: -10;
}

.fingers {
	position: absolute;
	top: -100%;
	right: 20px;
	z-index: -10;
}
</style>
