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
		$('#colorSelector2 div').css('backgroundColor', '#' + hex);
		$('#color2rgb').val(rgb.r + "," + rgb.g + "," + rgb.b);

		changeEmAll();
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
		changeEmAll();
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
	    //alert("The value of rgbl is " + rgbl);
	    //alert("Beforecall " + corner1[rgbl] + " " + corner3[rgbl] + " "  + rgbl);
	    leftside[rgbl] = calculatepoint(corner1[rgbl],corner3[rgbl],i,20);

	    rightside[rgbl] = calculatepoint(corner2[rgbl],corner4[rgbl],i,20);
        }
        	    $('#r' + (i+1) + 'c1').css('backgroundColor','rgb(' 
	                          + leftside[0] + ','
				  + leftside[1] + ','
				  + leftside[2] + ')');
		    	   //$('#r' + (i+1) + 'c1').html(leftside[0] + ','
				//  + leftside[1] + ','
				//  + leftside[2]);
	  //alert("Leftside " + leftside[0] + " " + leftside[1] + " " + leftside[2]);
	  for (j=1;j<19;j++) {
	  outputcolors = new Array();
	   for (rgb=0;rgb<3;rgb++) {
	     outputcolors[rgb] = calculatepoint(leftside[rgb],rightside[rgb],j,20);
	   }
	   $('#r' + (i+1) + 'c' + (j+1)).css('backgroundColor', 'rgb(' 
	                          + outputcolors[0] + ','
				  + outputcolors[1] + ','
				  + outputcolors[2] + ')');
	   //$('#r' + (i+1) + 'c' + (j+1)).html(outputcolors[0] + ','
		//		  + outputcolors[1] + ','
		//		  + outputcolors[2]);
	   }
		    $('#r' + (i+1) + 'c20').css('backgroundColor','rgb(' 
	                          + rightside[0] + ','
				  + rightside[1] + ','
				  + rightside[2] + ')');
		    	   //$('#r' + (i+1) + 'c' + (j+1)).html(rightside[0] + ','
				//  + rightside[1] + ','
				//  + rightside[2]);
    }
    }

function calculatepoint(startval,endval,position,positions) {
  //alert ("ParamsCalc: " + startval + " " + endval + " " + position + " " + positions);
  var difference = endval - startval;
  var singlespace = difference / positions;
  //alert("Startval " + startval + " Endval " + endval + " position " + position + " Result " + Math.round(parseInt(startval) +  singlespace * position ) );
  return Math.round(parseInt(startval) + ( singlespace * position )); 
}