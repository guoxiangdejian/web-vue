<template>
	<div class="content">
		<backHeader>{{title}}</backHeader>
		<div class="time">
			<div class="surplus">
				支付剩余时间
			</div>
			<span ref="timerone">
				
			</span>
		</div>
		<div class="footer">
			<el-button type="primary" @click="open13">查看订单</el-button>
		</div>
	</div>
</template>
<script type="text/javascript">
	import backHeader from '../base/backHeader.vue'
	export default {
		data() {
			return {
				title: '在线支付',
				timer: null
			}
		},
		created() {

		},
		methods: {
			resetTime(time) {
				var timer = null;
				var t = time;
				var m = 0;
				var s = 0;
				let tt = null
				m = Math.floor(t / 60 % 60);
				m < 10 && (m = '0' + m);
				s = Math.floor(t % 60);

				let countDown = () => {
					s--;
					s < 10 && (s = '0' + s);
					if(s.length >= 3) {
						s = 59;
						m = "0" + (Number(m) - 1);
					}
					if(m.length >= 3) {
						m = '00';
						s = '00';
						clearInterval(this.timer);
					}
					this.$refs.timerone.innerText = m + "分钟" + s + "秒";
				}
				this.timer = setInterval(countDown, 1000);
			},
			open13() {				
				this.$router.push('/older')
			}
		},
		computed: {

		},
		mounted() {
			this.resetTime(600)
		},
		components: {
			backHeader
		},
		destroyed: function() {
			clearInterval(this.timer);
		}
	}
</script>
<style scoped lang="less">
.content{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
}
	.time {
		position: relative;
		width: 100%;
		height: 30vw;
		text-align: center;
		top: 20vw;
		div:nth-child(1) {
			font-size: 4vw;
			color: #666;
		}
		span {
			font-size: 8vw;
		}
	}
	
	.footer {
		position: relative;
		top: 10vw;
		width: 100%;
		text-align: center;
		padding: 5vw 0;
	}
</style>