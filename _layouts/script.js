// script.js

function redirectToDetails() {
    var trackingNumber = document.getElementById('tracking-number').value;
    if (trackingNumber) {
      // 使用 window.location.href 跳转到新页面，并传递追踪号码作为参数
      window.location.href = 'tracking-details.html?trackingNumber=' + encodeURIComponent(trackingNumber);
    } else {
      alert('Please enter a tracking number.');
    }
  }
  