//첫번째 하단 버튼을 클릭하면 imgG의 첫번째 이미지가 보인다.
	var $btn = $('.slide>.btnG>li');
	var $imgG = $('.slide>.imgG');
	var n = 0;
	
	// $('.btnG>li').click();
	$btn.click(function(){//각각의 버튼을 클릭하면
		n = $(this).index();
		//각각의 이미지가 인덱스 번호에 맞춰 움직임
		$imgG.animate({marginLeft:-100 * n + '%' });
	
		//먼저 모든 버튼의 스타일을 삭제 후 선택한 버튼에만 다시 스타일 값 부여
		$btn.removeClass('on');
		$(this).addClass('on');
	});


//자동 실행 setInterval(실행값, 시간);
	var auto = setInterval(slide, 5000);
	
	function slide() {//선언함수 - 호출할 때마다 실행
		n = (n+1) % 4;//0, 1, 2, 3
		$imgG.animate({marginLeft:-100 * n + '%'});

		//.siblings() 기준 객체의 형제 관계의 요소
		//선택한 버튼에 스타일 값이 적용되고 선택된 버튼의 형제 관계에 있는 요소들의 스타일은 제거
		$btn.eq(n).addClass('on').siblings().removeClass('on');
	}


//자동 실행 취소
//$btn.hover(function(){clearInterval(auto);}, function(){auto = setInterval(slide, 2000);});
	$btn.mouseenter(function(){
		clearInterval(auto);
	});
	$btn.mouseleave(function(){
		auto = setInterval(slide, 2000);
	});


//사이드 메뉴
	$('.open').click(function(){
		$('.sideMenu').animate({left:0},200);
	});
	$('.close').click(function(){
		$('.sideMenu').animate({left:-210},200);
	});


//컨텐츠 hover
	$('.c1Hover').mouseenter(function(){
		$('.c1Hover').css({"background":"url(images/c1Hover.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center'}); 
	});
	$('.c1Hover').mouseleave(function(){
		$('.c1Hover').css({"background":"url(images/c1.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center'}); 
	});
	
	$('.c2Hover').mouseenter(function(){
		$('.c2Hover').css({"background":"url(images/c2Hover.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center'}); 
	});
	$('.c2Hover').mouseleave(function(){
		$('.c2Hover').css({"background":"url(images/c2.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center'}); 
	});

	$('.c6Hover').mouseenter(function(){
		$('.c6Hover').css({"background":"url(images/c6Hover.jpg)"}); 
	});
	$('.c6Hover').mouseleave(function(){
		$('.c6Hover').css({"background":"url(images/c6.png)"}); 
	});
	$('.btB').click(function(e){
		e.preventDefault();
		$('.new').hide();
		$('.btN').css({'border-bottom':'2px solid #c9cbc7'});
		$('.btB').css({'border-bottom':'2px solid black'});
		$('.best').show();
		//$('.B').hide();
	});

	$('.btN').click(function(e){
		e.preventDefault();
		$('bestNew').hide();
		$('.btB').css({'border-bottom':'2px solid #c9cbc7'});
		$('.btN').css({'border-bottom':'2px solid black'});
		$('.new').show();
	});
