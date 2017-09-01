

var xhr = new XMLHttpRequest();
var queryCampaign = '';
var url = 'https://emailoctopus.com/api/1.2/campaigns?api_key=6846d2af-ed93-11e6-8561-06ead731d453';

 xhr.open('GET',url,true);
xhr.responseType = 'text';
 // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
 xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
 xhr.send();

function getSummary(id) {
	alert(id);
}

$('.get-data').click(function() {
	$.ajax({
	    	 // crossOrigin: true,
	    	url: 'https://emailoctopus.com/api/1.2/campaigns?api_key=6846d2af-ed93-11e6-8561-06ead731d453',
	    	type : 'GET',
	    	dataType: 'json',
	    	jsonp: "callback",
	    	success : function (result) {
	    		var campaigns = JSON.parse(result)
	    		
	    		// console.log(campaigns.data.);
	    		campaigns.data.forEach(function(index) {
	    			// console.log(index);
	    			$('.campaignList').append('<li><a >'+index.name+`</a> 
	    				<p>`+ index.subject.replace('{{FirstName}}','')+`</p>
	    				<p class="date-sent">`+ new Date(index.sent_at).toDateString()+`</p> 

	    			</li>`,)

	    			$('.campaignList li a').click(function() {
    $(this).attr('onclick', 'getSummary("'+index.id+'"); return false;');

    return false;
})
	    		});
	    		// console.log(campaigns.data);
	    			//console.log(campaigns.data[0].sent_at);
	    	}
	    })
});




xhr.onreadystatechange = function() {
	console.log(xhr.status);
}

xhr.onload = function() {
	if(xhr.status === 200) {
		queryCampaign = JSON.parse(xhr.responseText);

		console.log(queryCampaign);
	}
}