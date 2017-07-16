var Util={
	set_footer:function(id){
		var f = Util.getFooter();
		$("#"+id).append(f);
	},
	set_nav:function(id){
	var f = Util.getNav();
		$("#"+id).append(f);
	},
	set_mobile_nav:function(id){
		var mobile_nav = Util.getMobileNav();
		$("#"+id).append(mobile_nav);
	},
	getMobileNav:function(){
		var mobileNav = 
			"<ul>"+
			    "<li><a href='index.html'>首页</a></li>"+
			    "<li><a href='contact.html'>关于</a></li>"+
			    "<li><a href='product.html'>产品</a></li>"+
			    "<li><a href='example.html'>案例</a></li>"+
			    "<li><a href='develop.html'>发展</a></li>"+
			    "<li><a href='contact.html'>联系</a></li>"+
			"</ul>";
			return mobileNav;
	},
	getNav:function(){
		var nav = 
			"<div class='container clearfix top'>"+
				"<h1 class='pull-left logo wow bounceInLeft' style='visibility: visible; animation-name: bounceInLeft;'>"+
				"<a href='index.html'><img src='img/logo/logo1.png'></a>"+
				"</h1>"+
				"<div id='nav-menu' class='wow bounceInRight' style='visibility: visible; animation-name: bounceInRight;'>"+
					"<ul class='menu'>"+
						"<li class='stmenu'><a href='index.html' class='xialaguang'>首页</a></li>"+
						"<li class='stmenu'>"+
							"<a href='contact.html' class='xialaguang'>关于<i></i></a>  "+
							"<ul class='children'>    "+
								"<li><a href='contact.html'>关于我们</a></li>"+
								"<li><a href='honor.html'>公司荣誉</a></li>"+
								"<li><a href='culture.html'>传播文化</a></li>"+
								"<li><a href='#'>企业精神</a></li>"+
							"</ul>"+
						"</li>"+
						"<li class='stmenu'>"+
							"<a href='product.html' class='xialaguang'>产品<i></i></a>  "+
							"<ul class='children'>"+
								"<li><a href='product.html'>建材</a></li>"+
								"<li><a href='product.html'>家具</a></li>"+
								"<li><a href='product.html'>家具2</a></li>"+
							"</ul>"+
						"</li>"+
						"<li class='stmenu'>"+
							"<a href='example.html' class='xialaguang'>案例<i></i></a>  "+
							"<ul class='children'> "+
								"<li><a href='example.html'>客厅设计</a></li>"+
								"<li><a href='example.html'>卧室设计</a></li>"+
								"<li><a href='example.html'>厨房设计</a></li>"+
							"</ul>"+
						"</li>"+
						"<li class='stmenu'>"+
							"<a href='develop.html' class='xialaguang'>发展<i></i></a>  "+

							//"<ul class='children'>    "+
							//	"<li><a href='#'>装修搭配</a></li>"+
							//	"<li><a href='#'>软装改造</a></li>"+
							//"</ul>"+
						"</li>"+
						"<li class='stmenu'><a href='contact.html' class='xialaguang'>联系</a></li>"+
					
					"</ul>"+
				"</div>"+
				
				"<div class='nav-logo' id='left-menu'>"+
					"<span></span>"+
					"<span></span>"+
					"<span></span>"+
				"</div>"+
				
				"<div class='top-dh wow bounceInDown' data-wow-delay='.2s' style='visibility: visible; animation-delay: 0.2s; animation-name: bounceInDown;'>"+
					"<i class='iconfont icon-dianhua'></i>4000-000-000"+
				"</div>"+

			"</div>";
		
		return nav;
	},
	getFooter:function(){
			var f = "<section class='container clearfix'>"+
				"<div class='met-footer foot-01 wow bounceInLeft' style='visibility: visible; animation-name: bounceInLeft;'>"+
					"<h3>关于我们</h3>"+
					"<p>     公司致力于为客户提供完整的家居一体化定制配套解决方案和服务，让客户拥有“经典、独特、自然、环保”的产品，为更多的家庭缔造价值与品位的家居生活。</p>"+
				"</div>"+
			
				"<div class='met-footer foot-03 wow bounceInRight' style='visibility: visible; animation-name: bounceInRight;'>"+
				"	<h3>新闻资讯</h3>"+
					"<dl>"+
					"	<dt>"+
						"	攻略"+
						"</dt>"+
						"<dd>"+
						"<a href='#'>老房子换新装 100平摩登复式家装攻略</a>"+
							"<time>2016-07-19 </time>"+
						"</dd>"+
					"</dl>"+
				"</div>"+

				"<div class='met-footer foot-02 wow bounceInUp' style='visibility: visible; animation-name: bounceInUp;'>"+
				"	<h3>联系我们</h3>"+
				"	<p><i class='iconfont icon-dizhi'></i>成都 武侯区 二环路西一段 红星美凯龙A区</p>"+
				"	<p><i class='iconfont icon-dianhua'></i>0000-000-000</p>"+
				"	<p><i class='iconfont icon-youjian'></i>xxx@000.com</p>"+
				"	<p><i class='iconfont icon-chuanzhen'></i>+86-000-00000000</p>"+
				"</div>"+

						
		"</section>"+
		"<div class='copy wow bounceInUp' style'visibility: hidden; animation-name: none;'>"+
			"<div class='container clearfix'>"+
				"<ul class='links clearfix'>"+
					"<li>友情链接 :</li>"+
					"<li><a href='#'>中国家居装修协会</a></li>"+
				"</ul>"+
				"<p>Copyright © 2011-2016 家居公司 |室内设计公司  </p><p>京ICP备13018480号-1</p>"+
			"</div>	"+
		"</div>";

		return f;
	}
}


var mose_move_p = (function(){

	function Particle(x, y, radius) {
			this.init(x, y, radius);
		}

	Particle.prototype = {
		init : function(x, y, radius) {

			this.alive = true;

			this.radius = radius || 10;
			this.wander = 0.15;
			this.theta = random(TWO_PI);
			this.drag = 0.92;
			this.color = '#fff';

			this.x = x || 0.0;
			this.y = y || 0.0;

			this.vx = 0.0;
			this.vy = 0.0;
		},

		move : function() {

			this.x += this.vx;
			this.y += this.vy;

			this.vx *= this.drag;
			this.vy *= this.drag;

			this.theta += random(-0.5, 0.5) * this.wander;
			this.vx += sin(this.theta) * 0.1;
			this.vy += cos(this.theta) * 0.1;

			this.radius *= 0.96;
			this.alive = this.radius > 0.5;
		},

		draw : function(ctx) {

			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
			ctx.fillStyle = this.color;
			ctx.fill();
		}
	};



	var MAX_PARTICLES = 280;
	var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900',
		'#FF4E50', '#F9D423' ];
	var particles = [];
	var pool = [];

		


		var ceate_mouse_movePlugin=function(id){
			var demo = Sketch.create({
				container : document.getElementById(id)
			});



		demo.setup = function() {
			// Set off some initial particles.
			var i, x, y;

			//  for ( i = 0; i < 20; i++ ) {
			x = (demo.width * 0.5) + random(-100, 100);
			y = (demo.height * 0.5) + random(-100, 100);
			demo.spawn(0, 999);
			// }
		};

		demo.spawn = function(x, y) {

			if (particles.length >= MAX_PARTICLES)
				pool.push(particles.shift());

			particle = pool.length ? pool.pop() : new Particle();
			particle.init(x, y, random(5, 40));

			particle.wander = random(0.5, 2.0);
			particle.color = random(COLOURS);
			particle.drag = random(0.9, 0.99);

			theta = random(TWO_PI);
			force = random(2, 8);

			particle.vx = sin(theta) * force;
			particle.vy = cos(theta) * force;

			particles.push(particle);
		};

		demo.update = function() {

			var i, particle;

			for (i = particles.length - 1; i >= 0; i--) {

				particle = particles[i];

				if (particle.alive)
					particle.move();
				else
					pool.push(particles.splice(i, 1)[0]);
			}
		};

		demo.draw = function() {

			demo.globalCompositeOperation = 'lighter';

			for ( var i = particles.length - 1; i >= 0; i--) {
				particles[i].draw(demo);
			}
		};

		demo.mousemove = function() {

			var particle, theta, force, touch, max, i, j, n;

			for (i = 0, n = demo.touches.length; i < n; i++) {

				touch = demo.touches[i], max = random(1, 4);
				for (j = 0; j < max; j++) {
					demo.spawn(touch.x, touch.y);
				}

			}
		};
	}
return {ceate_mouse_movePlugin:ceate_mouse_movePlugin}
})();

window.mose_move_p=mose_move_p;

	