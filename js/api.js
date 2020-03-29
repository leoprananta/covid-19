getCovid();
getProv();

function getCovid(){

	$('#list').html('');

	$.ajax({
		url: 'http://indonesia-covid-19.mathdro.id/api/',
    	type: 'GET',
    	dataType: 'json',
		success: function(result){
		
			console.log(result);

			if(result == null){
				$('#data1').html(
					`<p>Loading..</p>`
				)
			}else{
				$('#data1').append(`

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
			console.log(result);
			let provinsi = result.data

			if(provinsi == null){
				$('#dataProv').html(
					`<p>Loading..</p>`
				)
			}else{
				$.each(provinsi, function(i, data){
					$('#dataProv').append(`
					<div class="col-md-4">
						<div class="card mb-4 p-2 sr-icon-1">
						<div class="card-body">
							<h5 class="card-title text-center"><i class="fas fa-map-pin"></i><strong> `+ data.provinsi +`</strong></h5>
							<div class="row mt-4">
								<div class="col">
									<h5 class="card-text text-center text-primary"><strong>`+ data.kasusPosi +`</strong></h5>
									<p class="text-center">Positif</p>
								</div>
								<div class="col">
									<h5 class="card-text text-center text-success"><strong>`+ data.kasusSemb +`</strong></h5>
									<p class="text-center">Sembuh</p>
								</div>
								<div class="col">
									<h5 class="card-text text-center text-danger"><strong>`+ data.kasusMeni +`</strong></h5>
									<p class="text-center">Meninggal</p>
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
