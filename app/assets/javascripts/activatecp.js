  $(document).ready(function() {

    // Initial values set
    combinedstring = new Array();
    for (i=1;i<=4;i++) {
     var rawstring = $('#cs' + i + 'sub').css('backgroundColor');
     var rawstringlength = rawstring.length - 1;
     var newstring = rawstring.substring(4,rawstringlength);
     var splitstring = newstring.split(',');
     combinedstring[i] = {r : splitstring[0],
                       g : splitstring[1], 
                       b : splitstring[2]};
     $('#color' + i + 'rgb').val(splitstring[0] + "," + splitstring[1] + "," + splitstring[2]);
    }

     // Instantiate ColorPickers
     // This must be done individually as the callbacks have to remember the correct ids each time they are called
     // open to suggestions for a refactor :)
     
     $('#colorSelector1').ColorPicker({
        color: combinedstring[1],
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
	color: combinedstring[2],
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#colorSelector2 div').css('backgroundColor', '#' + hex);
		$('#color2rgb').val(rgb.r + "," + rgb.g + "," + rgb.b);

		changeEmAll();
	}
    });
	  
	            $('#colorSelector3').ColorPicker({
	color: combinedstring[3],
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
		changeEmAll();
	}
    });
		    
		              $('#colorSelector4').ColorPicker({
	color: combinedstring[4],
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
		changeEmAll();
	}
    });
			      
    // First call sets them to what they were when the page was loaded
    changeEmAll();
  });
  
  
    function changeEmAll() {
      // let's do the math
      corner1 = $('#color1rgb').val().split(',');
      corner2 = $('#color2rgb').val().split(',');
      corner3 = $('#color3rgb').val().split(',');
      corner4 = $('#color4rgb').val().split(',');
      
      for (i=0;i<20;i++) {
	leftside = new Array();
	rightside = new Array();
	
	for (rgbl=0;rgbl<3;rgbl++) {
	    leftside[rgbl] = calculatepoint(corner1[rgbl],corner3[rgbl],i,20);
	    rightside[rgbl] = calculatepoint(corner2[rgbl],corner4[rgbl],i,20);
        }
        	    $('#r' + (i+1) + 'c1').css('backgroundColor','rgb(' 
	                          + leftside[0] + ','
				  + leftside[1] + ','
				  + leftside[2] + ')');
	  for (j=1;j<19;j++) {
	  outputcolors = new Array();
	   for (rgb=0;rgb<3;rgb++) {
	     outputcolors[rgb] = calculatepoint(leftside[rgb],rightside[rgb],j,20);
	   }
	   $('#r' + (i+1) + 'c' + (j+1)).css('backgroundColor', 'rgb(' 
	                          + outputcolors[0] + ','
				  + outputcolors[1] + ','
				  + outputcolors[2] + ')');
	   }
		    $('#r' + (i+1) + 'c20').css('backgroundColor','rgb(' 
	                          + rightside[0] + ','
				  + rightside[1] + ','
				  + rightside[2] + ')');
    }
    }

function calculatepoint(startval,endval,position,positions) {
  var difference = endval - startval;
  var singlespace = difference / positions;
  return Math.round(parseInt(startval) + ( singlespace * position )); 
}

function prefsave() {
  $('#result').html('Saving...');
  $.post('setting/saveprefs', { color1rgb: $('#color1rgb').val(),
			   color2rgb: $('#color2rgb').val(),
			   color3rgb: $('#color3rgb').val(),
			   color4rgb: $('#color4rgb').val() },
			   function(data) {
    $('#result').html(data);
  });
}