$(function() {

	$.fn.validate = function(tips) {
		if($(this).val() == "" || $.trim($(this).val()).length == 0) {
			return false;
		} else {
			return true;
		}
	}
	$('#submit').click(function() {
		if($('#username').validate('姓名') && $('#password').validate('密码') && $('#telephone').validate('手机号')) {
			if($('#password').val() == $('#twoword').val()) {
				return true
			} else {
				return false;
			}
		} else {
			setTimeout(function() {
				$('.error').animate({
					opacity: 1
				})
				setTimeout(function() {
					$('.error').animate({
						opacity: 0
					})
				}, 2000)
			})
		}

	})
	let arrdata = []
	let menuTd = $('#menu td')

	//数组删除指定元素方法
	Array.prototype.indexOf = function(val) {
		for(var i = 0; i < this.length; i++) {
			if(this[i] == val) return i;
		}
		return -1;
	};

	Array.prototype.removeOne = function(val) {
		var index = this.indexOf(val);
		if(index > -1) {
			this.splice(index, 1);
		}
	};

	let allNum = 0
	let w = false
	let q = null;
	menuTd.each(function(i) {
		let off = true
		let num = 1
		q = $('.jia').length - 1
		let wer = $('menu').eq(i).attr('bool')
		$(this).click(function() {

			let listName = $(this).children('span').text()
			let className = $(this).attr('id')
			let listPrice = parseInt($(this).children('a').text())
			let numberMenu = 1
			let strMenu = `<tr><td>${listName}</td><td><button class="jia">${numberMenu}</button></td><td class="pri">${listPrice}${'元'}</td><td><span class="delate">删除</span></td></tr>`
			let w = q
			if(off) {
				arrdata.push(strMenu)
				$('.biaoti1').append(strMenu)
				console.log(arrdata)
				off = false
			} else {
				num += 1
				$('.jia').eq(w).text(num)
				$('.pri').eq(w).text(num * listPrice + '元')
			}

			$('.delate').each(function(i) {
				$(this).click(function() {
					arrdata.removeOne(arrdata[i])
					$(this).parent().parent().remove()
					off = true
					num = 1
					getlength()
					getPrice()
					console.log(arrdata)
				})
			})
			$('.jia').eq(0).click(function() {
				alert($(this).text() + 1)
			})
			getlength()
			getPrice()
		})
		$('#qing').click(function() {
			off = true
			clear()
			num = 1
		})
	})
	let goodsListOne = null;
	let goodsListTwo = null;
	let goodsListThree = null;

	function get() {
		common.ajax('/goodsdata', 'post', 'json', {
			"code": "123456789"
		}, function(data) {
			goodsListOne = data.result.infolist[0]
			goodsListTwo = data.result.infolist[1]
			goodsListThree = data.result.infolist[2]
			$('#menuone li').each(function(i) {
				console.log(goodsListOne[i])
				$('#menuone li').eq(i).children('img').attr('src',goodsListOne[i].imgsrc)
				$('#menutwo li').eq(i).children('img').attr('src',goodsListTwo[i].imgsrc)
				$('#menuthree li').eq(i).children('img').attr('src',goodsListThree[i].imgsrc)
			})
		})
	}
	get()
	
	$('.jiezhang').click(function(){
		let biaotiOne = $('.biaoti1').html()
		alert('ok')
		$('.biaoti2').html(biaotiOne)
	})
})

function getlength() {
	let allLeng = $('.biaoti1').find('tr').length - 1
	$('#allnum').text('种类：' + allLeng + '种')
}

function getPrice() {
	let allPri = 0
	$('.pri').each(function(i) {
		allPri += parseInt($('.pri').eq(i).text())

	})
	if($('.biaoti1').find('tr').length - 1 == 0) {
		allPri = 0
	}
	$('#allPrice').text('总价：' + allPri + '元')
}

function clear() {
	$('.biaotou').nextAll().remove()
	getlength()
	getPrice()

}