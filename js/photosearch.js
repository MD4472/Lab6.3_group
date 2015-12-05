$(document).ready(function){
	$("btn-success").on("click", function(e) {
		e.preventDefault();
		var userAddress = $("#userAddress").val();
		var googleAPiUrl = "https://maps.googleapis.com/maps/api/geocode/json?"
		googleAPiUrl += "key=AIzaSyDzOSkPllDVkUdq9X5M_UzWbWyMThrICsA";
		googleAPiUrl +="&address" + userAddress;
		


		$.ajax(){
			type: "GET",
			url:googleAPiUrl
			success:googleAPiSucessHandler

		}








	}
}