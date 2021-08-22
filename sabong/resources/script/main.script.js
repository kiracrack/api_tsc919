/*Container*/
	function DisplayContainer(id) {
		exitLoading();
		var htmlString = $(id).html();
		$('#container').html(htmlString);
		$('#container').css('visibility','hidden');
		$("#container").css('visibility','visible').hide().fadeIn("slow");
	}
 
	function ShowTrendContainer() {
		DisplayContainer("#container-trends");
	}

	function MeronWins(){
		showLoading();

		setTimeout(function(){
		  MessageBox('Result successfully sent for approval', 'Okay', 'success', '');
		}, 1000);

		
	}

 /*endregion*/
 

/*Class Functions*/
	function FormatNumber(num) {
	    return Intl.NumberFormat('en-IN').format(num);
	}

	function FormatCurrency(num) {
	    return (num).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2});
	}

	function cc(num) {
	    return num.replace(",","");
	}
 /*endregion*/



