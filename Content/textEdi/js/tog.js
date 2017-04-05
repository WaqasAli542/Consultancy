
	$('.jqte-test').jqte();
	
	// settings of status
	var jqteStatus = true;
	$(".status").click(function()
	{
		jqteStatus = jqteStatus ? false : true;
		$('.jqte-test').jqte({"status" : jqteStatus})
	});
	$(document).ready(function () {
	    $("#sub").click(function () {

	        var ab = $(".jqte_source .jqte-test").val();
	        $("#txtA").val(ab);
	       
	        $('#txtDataSub').trigger('click');
	       
	      
	    });

	});


