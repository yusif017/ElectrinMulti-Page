// renderer.js dosyasında openPage fonksiyonu tanımlanmış olsun
function openPage(page) {
    let newWindow = window.open(page, '_self');
    setTimeout(() => {
        window.close();
    }, 100); // 100 milisaniye bekleyip pencereyi kapat
}
