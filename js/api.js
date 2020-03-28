getCovid();

function getCovid(){

	$('#list').html('');

	$.ajax({
		url: 'http://corona.lmao.ninja/countries/USA',
    type: 'GET',
    dataType: 'jsonp',
		success: function(result){
      console.log(result);
			// if(result.Response == "True"){

      //   let covid = result

			// 	$.each(covid, function(i, data){
      //     $('#list').append(`

      //       <div class="col-md-4">
      //         <div class="card mb-3 p-2 sr-icon-2">
      //           <div class="card-body">
      //             <h5 class="card-title">`+ data.country +`</h5>
      //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      //             <a href="#" class="btn btn-info">More Details...</a>
      //           </div>
      //         </div>
      //       </div>
			// 			`);
			// 	});
			// }else{
			// 	$('#list').html(`
			// 		<div class="col">
			// 		<h1 class="text-center">`+ result.Error +`</h1>
			// 		</div>
			// 		`)
			// }
		}
	});
}