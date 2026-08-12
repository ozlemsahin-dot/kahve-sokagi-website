  // Sayfa yüklendiğinde çalışacak kodlar
        document.addEventListener('DOMContentLoaded', () => {

            const menuBtn = document.querySelector('.btn');

            // Menü butonuna tıklama olayı
            menuBtn.addEventListener('click', () => {
                alert('Menümüz çok yakında dijital ortamda sizlerle olacak!');
            });

            // Navbar kaydırma efekti (isteğe bağlı)
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.style.backgroundColor = '#1a1612';
                } else {
                    navbar.style.backgroundColor = '#332a24';
                }
            });
        });