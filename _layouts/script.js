// script.js

function trackParcel() {
    var trackingNumber = document.getElementById('tracking-number').value;
    if (trackingNumber) {
      // 如果追踪号码等于 "123456"，则跳转到特定的 HTML 页面
      if (trackingNumber === "123456") {
        window.location.href = 'specific-details.html';
      } else {
        // 否则，跳转到默认的页面，并传递追踪号码作为参数
        window.location.href = 'tracking-details.html?trackingNumber=' + encodeURIComponent(trackingNumber);
      }
    } else {
      alert('Please enter a tracking number.');
    }
  }
  