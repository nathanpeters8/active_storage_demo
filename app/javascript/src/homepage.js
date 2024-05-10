import $ from 'jquery';

$(document).on('click', '#post-image', function() {
  var formData = new FormData();
  var image = document.getElementById('image-select').files[0];
  formData.append('photo', image, image.name);
  
  var newRequest = {
    type: 'POST',
    url: 'memories',
    contentType: false, // formData automatically sets content-type to what it needs
    processData: false, // prevents jQuery from turning formData object into a query string
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    data: formData,
    success: function(response) {
      console.log(response);
    },
    error: function(request, error) {
      console.log(request);
      console.log(error);
    }
  };
  
  $.ajax(newRequest);
})



//! Plain JS
/*
var formData = new FormData();
var image = document.getElementById('image-selector').files[0];
formData.append('photo', image, image.name);

// create new request
var httpRequest = new XMLHttpRequest();

// set up events for the request
httpRequest.onload = function() {
  if (httpRequest.readyState === 200) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    }
    else {
      console.log(httpRequest.statusText);
    }
  }
}

httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}

// configure request type and URL
httpRequest.open('POST', 'memories');

// configure header for Rails CSRF authenticity
httpRequest.setRequestHeader('X-CRSF-Token', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));

// send request with formData as body
httpRequest.send(formData);
*/