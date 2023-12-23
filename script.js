document.addEventListener("DOMContentLoaded", function () {
    const typingText = "Sebuah website bekerja dengan menggabungkan tiga elemen utama: web server, domain, dan hosting. Ketika seseorang memasukkan alamat domain seperti www.contohwebsite.com di peramban web, permintaan dikirim ke server DNS untuk mendapatkan alamat IP terkait. Setelah itu, permintaan tersebut diteruskan ke web server yang dihosting di alamat IP tersebut. Web server merespons dengan mengirimkan halaman web yang diminta kepada peramban pengguna. Hosting berperan menyimpan file-file website yang diperlukan oleh web server, memastikan konten dapat diakses secara online. Dengan demikian, domain memberikan alamat mudah diingat, web server menyediakan konten, dan hosting menyimpan file-file website, semua berkolaborasi untuk menyajikan pengalaman online yang lengkap.";

    let index = 0;
    let isTyping = true;

    function typeText() {
        const textContainer = document.getElementById("typing-text");
        textContainer.innerHTML = typingText.slice(0, index);

        if (isTyping && index < typingText.length) {
            index++;
            setTimeout(typeText, 5);
        }
    }

    typeText();
});
