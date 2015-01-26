$(document).ready(onReady);

function onReady(){
	var mySearch = $('#search-box').val();

	// Event Listener
	$('#search-button').on('click', onSearchButtonClick);

	//Get results based on search-box.
	function onSearchButtonClick() {
		// Input from search box
		imdbSearch($('#search-box').val());
	}


	function imdbSearch(query){
		$.get(
			'http://www.omdbapi.com/',
			{
				s: query
			},
			onSearchResults,
			'json'
		);
	}


	function tomatoMeter(imdbID) {
		$.get(
			'http://www.omdbapi.com/',
			{
				i: imdbID,
				tomatoes: true
			},
			onTomatoResults,
			'json'
			);
	}


	function onSearchResults(mySearch) {

		var counter = 0;

		for (var key in mySearch.Search) {

			$('#table-row').append("<td>"+mySearch.Search[counter].Title+"</td>");
			$('#table-row').append("<td>"+mySearch.Search[counter].Year+"</td>");
			counter++;
		
		}
		
		// tomatoMeter(mySearch.Search[0].imdbID);

	}


	// function onTomatoResults(mySearch) {
	// 	console.log(mySearch);
	// 	console.log(mySearch.tomatoMeter)
	// }



	//Display results in "results" div.
	

}