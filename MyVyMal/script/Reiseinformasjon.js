$(document).ready(function() {
    $.ajax({
      url: 'https://api.tripgo.com/v1/routing.json?from=(59.91005,10.75466)&to=(63.43646,10.39872)&modes=pt_pub',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        console.log(data);
        var textFrom=data.segmentTemplates[1].from.address;
          var textTo=data.segmentTemplates[1].to.address;
            travelInfo.innerHTML+="fra: "+textFrom;
          travelInfo.innerHTML+="Til: "+textTo;
},
      error: function() { console.log('boo!'); },
      beforeSend: setHeader
    });
  });

  function setHeader(xhr) {
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('X-TripGo-Key', '886a71856758074ed8059508a3d4fbb6');
  }