<template>
	<view class="container">
	    <!-- 轮播图 -->
	    <swiper indicator-dots autoplay circular>
	      <swiper-item v-for="(item,index) in shopDetail.images" :key="index">
	        <image :src="item"></image>
	      </swiper-item>
	    </swiper>
	
	    <!-- 店铺信息 -->
	    <view class="shop-detail">
	      <text style="font-size:34rpx;color:black">{{ shopDetail.name }}</text>
	      <text>电话：{{ shopDetail.phone }}</text>
	      <text>地址：{{ shopDetail.address }}</text>
	      <text>营业时间：{{ shopDetail.businessHours }}</text>
	    </view>
	
	    <!-- 评论信息 -->
	    <view class="comment-list">
	      <view
	        class="comment-item"
	        v-for="(item,index) in shopDetail.comments"
	        :key="index"
	      >
	        <view class="cmt-detail">
	          <view class="cmt-aut">{{ item.name }}</view>
	          <view class="cmt-scroe">
	            <text style="color:#f6a545">评分：{{ item.rating }}</text>
	            <text>{{ item.date }}</text>
	          </view>
	        </view>
	        <view class="cmt-content">{{ item.content }}</view>
	        <view class="cmt-img">
	          <view v-for="(item,index) in item.images" :key="index">
	            <image :src="item"></image>
	          </view>
	        </view>
	      </view>
	    </view>
	  </view>
</template>

<script>
	export default {
		data() {
			return {
				shopDetail:null
			}
		},
		methods:{
			// 加载商品详情
			loadShopDetail(id) {
				this.$http.get(`/shops/${id}`).then(res=> {
					this.shopDetail = res
				})
			},
		},
		onLoad(option) {
			const {id} = option
			this.loadShopDetail(id)
		}
	}
</script>

<style lang="scss">
	swiper {
	  margin-bottom: 30rpx;
	  image {
	    width: 100%;
	    height: 100%;
	  }
	}
	
	.shop-detail {
	  display: flex;
	  flex-direction: column;
	  height: 260rpx;
	  padding: 30rpx;
	  justify-content: space-around;
	  font-size: 26rpx;
	  color: grey;
	  margin-bottom: 30rpx;
	}
	
	.comment-item {
	  border-bottom: 1rpx solid #ccc;
	  padding: 10rpx;
	}
	
	.cmt-detail {
	  display: flex;
	  justify-content: space-between;
	  padding: 0 30rpx;
	  .cmt-aut {
	    font-size: 30rpx;
	  }
	  .cmt-scroe {
	    display: flex;
	    flex-direction: column;
	    font-size: 24rpx;
	  }
	}
	
	.cmt-content {
	  padding: 0 30rpx;
	  text-indent: 2em;
	  font-size: 24rpx;
	  margin-bottom: 10rpx;
	}
	.cmt-img {
	  display: flex;
	  flex-wrap: wrap;
	  image {
	    width: 80rpx;
	    height: 80rpx;
	    flex: 20%;
	    margin: 10rpx;
	  }
	}
</style>
