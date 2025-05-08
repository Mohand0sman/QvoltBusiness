document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.brands-track');
    const logos = track.innerHTML; // نحفظ الصور الأصلية
    track.innerHTML += logos; // نكررها مرة ثانية




});


function wats() {
    // ضع رقم الواتساب بصيغة دولية بدون "+" أو فراغات
    var phone = "201126881762";
    window.location.href = "https://wa.me/" + phone;
}


  function openEmail() {
    // window.location.href = "mailto:kalihdosman6@gmail.com";
    window.location.href = href="https://mail.google.com/mail/?view=cm&fs=1&to=kalihdosman6@gmail.com";
  }
