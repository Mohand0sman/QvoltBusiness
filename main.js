document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.brands-track');
    const logos = track.innerHTML; // نحفظ الصور الأصلية
    track.innerHTML += logos; // نكررها مرة ثانية




});


function wats() {
    // ضع رقم الواتساب بصيغة دولية بدون "+" أو فراغات
    var phone = "201281587997";
    window.location.href = "https://wa.me/" + phone;
}

