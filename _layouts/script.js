// script.js

function trackParcel() {
    var trackingNumber = document.getElementById('tracking-number').value;
    
    // Fetch tracking information (assuming you have a data object)
    var trackingData = getTrackingData(trackingNumber);
  
    if (trackingData) {
      displayTrackingResult(trackingData);
    } else {
      alert('Tracking data not found for the provided number.');
    }
  }
  
  function getTrackingData(trackingNumber) {
    // Retrieve tracking data from a data object or an external file
    // For simplicity, you can define tracking data directly in this function
    var data = {
      "ABC123": [
        {"time": "2024-01-19 10:30:00", "status": "In Transit"},
        {"time": "2024-01-20 08:45:00", "status": "Out for Delivery"}
      ],
      // Add more tracking numbers as needed
    };
  
    return data[trackingNumber];
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
  