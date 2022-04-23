var obj=document.getElementById("basic")
obj.innerHTML='<a href="https://github.com/SteveTaizhou/SteveTaizhou.github.io" class="github-corner" aria-label="GitHub上的项目"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>'

//https://www.icode9.com/content-4-783610.html
var OriginTitile = document.title      /*定义一个变量保存原标题*/
var titleTime                             /*定义一个变量*/
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '快滚回来 - ' + OriginTitile  /*可删除原标题*/   
        clearTimeout(titleTime)
    }
    else {
        document.title = '欢迎回来 - ' + OriginTitile  /*自定义标题+原标题，可删除原标题*/
        titleTime = setTimeout(function() {
            document.title = OriginTitile         
        }, 2000)                  /*设置标题时间，单位毫秒*/
    }
})

/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: v1.0.1
 * GitHub: https://github.com/hustcc/canvas-nest.js
**/
!
function () {
	function n(n, e, t) {
		return n.getAttribute(e) || t
	}
	function e(n) {
		return document.getElementsByTagName(n)
	}
	function t() {
		var t = e("script"),
			o = t.length,
			i = t[o - 1];
		return {
			l: o,
			z: n(i, "zIndex", -1),
			o: n(i, "opacity", .8),
			c: n(i, "color", "120,179,255"),
			n: n(i, "count", 99)
		}
	}
	function o() {
		a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}
	function i() {
		r.clearRect(0, 0, a, c);
		var n, e, t, o, m, l;
		s.forEach(function (i, x) {
			for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e],
				null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
		}),
			x(i)
	}
	var a, c, u, m = document.createElement("canvas"),
		d = t(),
		l = "c_n" + d.l,
		r = m.getContext("2d"),
		x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			function (n) {
				window.setTimeout(n, 1e3 / 45)
			},
		w = Math.random,
		y = {
			x: null,
			y: null,
			max: 2e4
		};
	m.id = l,
		m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o,
		e("body")[0].appendChild(m),
		o(),
		window.onresize = o,
		window.onmousemove = function (n) {
			n = n || window.event,
				y.x = n.clientX,
				y.y = n.clientY
		},
		window.onmouseout = function () {
			y.x = null,
				y.y = null
		};
	for (var s = [], f = 0; d.n > f; f++) {
		var h = w() * a,
			g = w() * c,
			v = 2 * w() - 1,
			p = 2 * w() - 1;
		s.push({
			x: h,
			y: g,
			xa: v,
			ya: p,
			max: 6e3
		})
	}
	u = s.concat([y]),
		setTimeout(function () {
			i()
		},
			100)
}();
