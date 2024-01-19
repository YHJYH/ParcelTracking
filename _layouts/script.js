function trackParcel() {
    var trackingNumber = document.getElementById('tracking-number').value;
  
    // Fetch tracking information from the JSON file
    fetch('trackingData.json')
      .then(response => response.json())
      .then(data => {
        var trackingData = data[trackingNumber];
        if (trackingData) {
          displayTrackingResult(trackingData);
        } else {
          alert('Tracking data not found for the provided number.');
        }
      })
      .catch(error => console.error('Error:', error));
  }
  
  function displayTrackingResult(data) {
    var resultDiv = document.getElementById('tracking-result');
    resultDiv.innerHTML = ''; // Clear previous content
  
    for (var i = data.length - 1; i >= 0; i--) {
      var trackingInfo = data[i];
      var timeStatusDiv = document.createElement('div');
      timeStatusDiv.innerHTML = '<strong>Time:</strong> ' + trackingInfo.time + ', <strong>Status:</strong> ' + trackingInfo.status;
      resultDiv.appendChild(timeStatusDiv);
    }
  }
  