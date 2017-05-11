$(document).ready(function(){	
	$('.phone_input').mask("+38 (999) 999-9999");
	$('.submit_button').on('click',function(e){
		e.preventDefault();
//		console.log($('.name_input').val());
		$('.message').html('');
		if(!$('.name_input').val()){
			$('.name_input_mes').html('Пожалуйста, заполните это поле');
		}
		if(!$('.sname_input').val()){
			$('.sname_input_mes').html('Пожалуйста, заполните это поле');
		}
		if(!$('.phone_input').val()){
			$('.phone_input_mes').html('Пожалуйста, заполните это поле');
		}
		if(!$('.email_input').val()){
			$('.email_input_mes').html('Пожалуйста, заполните это поле');
		}else{
			if( $('.email_input').val().indexOf('@') == -1){
			$('.email_input_mes').html('В вашем адресе отсутствует символ « @ »');
			}
		}
		if($('.message').html()==''){
			
			$('.thanks_page').css('display', 'block');
				
//			input AJAX here
			
			$('input').val('');
		}
		
	});
	$('.thanks_page').on('click',function(){
		$(this).css('display','none');
	})
	$('.mobile_action_bt').on('click', function(){
		$(this).css('display','none');
		$('.oil_form').css('display','block');
		var scroll_max = 250;
		for(var i=0; i<250; i+=1){
			moveScroll(i);
		}
						
	})
	
	    function moveScroll(move){			
			setTimeout(function(){
				$(document).scrollTop(move);
			},200)
		}
	
		function windowSize(){
		if ($(window).height() <= '500'){
			$('.oil_form').css('display', 'none');
			$('.mobile_action_bt').css('display', 'block');
			$('.dirb').css('top', '300px');
		} else {
			$('.oil_form').css('display', 'flex');
			$('.mobile_action_bt').css('display', 'none');
			$('.dirb').css('top', '0');
		}
	}
		function loadVideo(){
			if($(window).width() <= '800' || $(window).height() <='500'){
				$('.main_video .video_img').css('display','block');
				$('.main_video video').css('display','none');
				
				
			}else{
				$('.main_video video').css('display','block');
				$('.main_video video').attr('src',"./video/fin.m4v");
				$('.main_video .video_img').css('display','none');
				
			}
		}

	$(window).on('load resize', windowSize);
	$(window).on('load resize', loadVideo);
})