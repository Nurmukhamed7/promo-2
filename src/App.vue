<script setup></script>

<template>
	<router-view></router-view>
</template>

<style scoped lang="scss">
@import './styles/global.scss';

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
