<template>
	<view class="container">
	    <view class="shop-list">
	      <view
	        class="shop-item"
	        v-for="item in shopList"
					key="item."
	      >
	        <view>
	          <image src="{{item.images[0]}}"></image>
	        </view>
	        <view class="shop-content">
	          <text style="font-weight:700">{{ item.name }}</text>
	          <text>电话：{{ item.phone }}</text>
	          <text>地址：{{ item.address }}</text>
	          <text>营业时间：{{ item.businessHours }}</text>
	        </view>
	      </view>
	    </view>
	  </view>
</template>

<script>
	export default {
		data() {
			return {
				shopList:[]
			}
		},
		methods:{
			// 加载店铺列表
			loadShopList(id,page) {
				this.$http.get(`/categories/${id}/shops?_page=${page}/&_limit=10`).then(res=> {
					if(res.length===0) {
						uni.showToast({
						    title: '该分类暂无数据',
						    duration: 2000,
								icon:'loading'
						});
					}
					this.shopList = res
				})
			}
		},
		onLoad(options) {
			const {id} = options
			this.loadShopList(id,1)
		}
	}
</script>

<style lang="scss">
	.shop-item {
	  display: flex;
	  padding: 10rpx;
	  & + .shop-item {
	    border-top: 1rpx solid #ccc;
	  }
	  image {
	    width: 240rpx;
	    height: 240rpx;
	  }
	  .shop-content {
	    display: flex;
	    flex-direction: column;
	    justify-content: space-around;
	    padding: 10rpx;
	    font-size: 24rpx;
	    color: grey;
	  }
	}
</style>
