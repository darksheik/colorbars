  $(document).ready(function() {

     $('#colorSelector1').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#colorSelector1 div').css('backgroundColor', '#' + hex);
		$('#color1rgb').val(rgb.r + "," + rgb.g + "," + rgb.b);
		
		changeEmAll();
	}
    });
     
          $('#colorSelector2').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		alert("hey");
		$('#colorSelector2 div').css('backgroundColor', '#' + hex);
		
		$('#color2rgb').val(rgb.r + "," + rgb.g + "," + rgb.b);

	}
    });
	  
	            $('#colorSelector3').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#colorSelector3 div').css('backgroundColor', '#' + hex);
		$('#color3rgb').val(rgb.r + "," + rgb.g + "," + rgb.b);
	}
    });
		    
		              $('#colorSelector4').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#colorSelector4 div').css('backgroundColor', '#' + hex);
		$('#color4rgb').val(rgb.r + "," + rgb.g + "," + rgb.b);
	}
    });
			      
    function changeEmAll() {
    }
  });
