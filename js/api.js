getCovid();
getProv();
getWHO();
getNews();

function getWHO(){
	var getYtInfo = {
		"url": "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=who&key=AIzaSyCeBIdcUARl8YtgIalG8Or--EU1Sny5VaA",
		"method": "GET",
		"timeout": 0,
	  };
	  
	  $.ajax(getYtInfo).done(function (response) {
		//console.log(response);

		$('#ytNamePict').append(`
			<div class="col-md-2 text-center">
				<a href="https://www.youtube.com/user/who" target="_blank">
					<img src="`+ response.items[0].snippet.thumbnails.medium.url +`" width="100" class="rounded-circle img-thumbnail">
				</a>
			</div>
			<div class="col-md-5 mt-3" id="ytName">
				<a href="https://www.youtube.com/user/who" class="text-dark" target="_blank">
					<h4><strong>`+ response.items[0].snippet.title +`</strong></h4>
				</a>
				<div class="row">
					<p class="mr-3 ml-3"><strong>`+ response.items[0].statistics.subscriberCount +` Subscriber, `+ response.items[0].statistics.videoCount +` Videos</strong></p>
				</div>
			</div>
		`);
	  });

	  var getYtVideo = {
		"url": "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCeBIdcUARl8YtgIalG8Or--EU1Sny5VaA&channelId=UC07-dOwgza1IguKA86jqxNA&maxResults=50&order=date&part=snippet",
		"method": "GET",
		"timeout": 0,
	  };
	  
	  $.ajax(getYtVideo).done(function (response) {
		//console.log(response);

		$('#ytVideo').append(`
			<div class="embed-responsive embed-responsive-16by9">
				<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/`+ response.items[39].id.videoId +`?rel=0" allowfullscreen></iframe>
	  		</div>
		`);
	  });

// $urlLatestVideo = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBsc8M2ayg1lDAmP0GlCDUhO5Xk0V6N5bM&channelId=UCLpJLHPO9kJN1f4K_Y3Xu1g&maxResults=4&order=date&part=snippet';
// $result = get_curl($urlLatestVideo);
// $lastVideo = $result['items'][3]['id']['videoId'];
}


function getNews(){
	var getNews = {
		"url": "https://newsapi.org/v2/top-headlines?q=COVID&country=id&apiKey=2be97ad3cf49463db15280f491a8d91e&pageSize=9&page=1",
		"method": "GET",
		"timeout": 0,
	  };
	  
	  $.ajax(getNews).done(function (response) {
		//console.log(response);
		let berita = response.articles

			if(berita == null){
				$('#dataBerita').html(
					`<p>Tidak ada data</p>`
				)
			}else{
				$.each(berita, function(i, data){
					$('#dataBerita').append(`
					<div class="col-md-4">
					  <div class="card mb-3 p-2 sr-icon-1">
						<img src="`+ data.urlToImage +`" class="card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title"><strong>`+ data.source.name +`</strong></h5>
							<p class="card-text">`+ data.title +`</p>
							<a href="`+ data.url +`" class="btn btn-primary" target="_blank">Lihat berita</a>
						</div>
					  </div>
					</div>
					`);
				});
			}
	  });
}


function getCovid(){

	$('#list').html('');

	$.ajax({
		url: 'http://indonesia-covid-19.mathdro.id/api/',
    	type: 'GET',
    	dataType: 'json',
		success: function(result){
		
			//console.log(result);

			if(result == null){
				$('#dataKasus').html(
					`<p>Tidak ada data</p>`
				)
			}else{
				$('#dataKasus').append(`

		  	</div>
				<div class="col-md-6">
					<div class="card mb-3 p-2 sr-icon-3">
						<div class="card-body">
							<h1 class="text-center text-primary"><strong>`+ result.jumlahKasus +`</strong></h1>
							<p class="card-text text-center">Jumlah Kasus</p>
						</div>
					</div>
				</div>
			</div>

			</div>
				<div class="col-md-6">
					<div class="card mb-3 p-2 sr-icon-3">
						<div class="card-body">
							<h1 class="text-center text-warning"><strong>`+ result.perawatan +`</strong></h1>
							<p class="card-text text-center">Dirawat</p>
						</div>
					</div>
				</div>
			</div>

			</div>
				<div class="col-md-6">
					<div class="card mb-3 p-2 sr-icon-3">
						<div class="card-body">
							<h1 class="text-center text-success"><strong>`+ result.sembuh +`</strong></h1>
							<p class="card-text text-center">Sembuh</p>
						</div>
					</div>
				</div>
			</div>

			</div>
				<div class="col-md-6">
					<div class="card mb-3 p-2 sr-icon-3">
						<div class="card-body">
							<h1 class="text-center text-danger"><strong>`+ result.meninggal +`</strong></h1>
							<p class="card-text text-center">Meninggal</p>
						</div>
					</div>
				</div>
			</div>
			`);
			}
		}
	});
}

function getProv(){
	$.ajax({
		url: 'http://indonesia-covid-19.mathdro.id/api/provinsi',
    	type: 'GET',
    	dataType: 'json',
		success: function(result){
			//console.log(result);
			let provinsi = result.data

			if(provinsi == null){
				$('#dataProvinsi').html(
					`<p>Tidak ada data</p>`
				)
			}else{
				$.each(provinsi, function(i, data){
					$('#dataProvinsi').append(`
					<div class="col-md-4">
						<div class="card mb-4 p-2 sr-icon-1">
						<div class="card-body">
							<h5 class="card-title text-center text-dark"><img src="img/location.png" height="32" width="20" alt="" class="mr-1"><strong> `+ data.provinsi +`</strong></h5>
							<div class="row mt-4">
								<div class="col">
									<h5 class="card-text text-center text-primary"><strong>`+ data.kasusPosi +`</strong></h5>
									<p class="text-center text-dark">Positif</p>
								</div>
								<div class="col">
									<h5 class="card-text text-center text-success"><strong>`+ data.kasusSemb +`</strong></h5>
									<p class="text-center text-dark">Sembuh</p>
								</div>
								<div class="col">
									<h5 class="card-text text-center text-danger"><strong>`+ data.kasusMeni +`</strong></h5>
									<p class="text-center text-dark">Meninggal</p>
								</div>
							</div>
						</div>
						</div>
					</div>
						`);
				});
			}
		}
	});
}
