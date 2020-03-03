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
		
		<!-- 宫格 -->
		<view class="grid-list">
			<view class="grid-item" v-for="grid in gridList" :key="grid.id">
				<image :src="grid.icon" mode="" class="grid-img"></image>
				<text class="text">{{grid.name}}</text>
			</view>
		</view>
		
		<!-- 推荐 -->
		<view class="command">
			<image src="../../static/images/link-01.png" mode="aspectFit"></image>
			<image src="../../static/images/link-02.png" mode="aspectFit"></image>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			gridList:[]
		};
	},
	onLoad() {
		this.loadGrid()
	},
	methods: {
		// 请求宫格数据
		loadGrid() {
			this.$http.get('/categories').then(res => {
			    this.gridList=res
			})
		}
	},
	
};
</script>

<style lang="scss">
	.uni-padding-wrap {
		width: 100%;
	}
	image {
		width: 100%;
		height: 150px;
	}
	
.grid-list {
     display: flex;
     flex-wrap: wrap;
     .grid-item {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       flex: 33.33%;
       border-right: 1rpx solid #eee;
       border-bottom: 1rpx solid #eee;
       box-sizing: border-box;
       height: 240rpx;
       image {
         width: 80rpx;
         height: 80rpx;
         margin-bottom: 20rpx
       }
       text {
         font-size: 24rpx;
       }
     }
   }
	 .command {
		 display: flex;
		 image {
			 margin: 20rpx;
		 }
	 }
</style>
