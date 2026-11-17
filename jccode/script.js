document.body.addEventListener('click', function() {
    const heart = document.getElementById('mainHeart');
    
    // Animatsiyani vaqtincha olib tashlaymiz
    heart.style.animation = 'none';
    
    // Brauzer kadrni qayta o'qishi uchun kichik tanaffus beramiz
    void heart.offsetWidth;
    
    // Animatsiyani qaytadan yoqamiz
    heart.style.animation = 'heartReveal 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
});