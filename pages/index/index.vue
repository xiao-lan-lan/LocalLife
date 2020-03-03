<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
						<swiper-item><view class="swiper-item">
							<image src="../../static/images/banner-01.png" mode=""></image>
						</view></swiper-item>
						<swiper-item><view class="swiper-item">
							<image src="../../static/images/banner-02.png" mode=""></image>
						</view></swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
	.uni-padding-wrap {
		width: 100%;
	}
	image {
		width: 100%;
		height: 150px;
	}
</style>
