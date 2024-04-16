const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
}

if (isMobile.any()) {
    document.querySelector('body').classList.add('mobile');
    
} else {
    document.querySelector('body').classList.add('pc');
    
}

document.querySelectorAll('.navbar__nav-dropdown-item')
    .forEach((element) => {
        element.addEventListener('click', () => {
            element.classList.toggle('navbar__nav-dropdown-item-active');
            
        });
    });
document.querySelector('.navbar__nav-btn')
    .addEventListener('click', () => {
        document.querySelector('.navbar__nav-block').classList.toggle('navbar__nav-block-active');
        document.body.classList.toggle('body-locked');
        document.querySelector('.navbar__nav-btn').classList.toggle('navbar__nav-btn-active');

});