if (!!window.MSInputMethodContext && !!document.documentMode) {
    // Remove the js class from body so text will display
    var body = document.getElementsByTagName('body')[0];
    body.className = '';

    // Make the header nav links visible
    var headerSelectors = [
        '.header__inner',
        '.header__nav',
        '.header__nav__links',
    ];

    for (var i = 0; i < headerSelectors.length; i++) {
        var headerEl = document.querySelector(headerSelectors[i]);
        headerEl.style.display = 'inline-block';
    }

    // Make footer links visible
    var footerSelectors = [
        '.footer__inner',
        '.footer__grid',
        '.footer__grid__columns',
    ];

    for (var j = 0; j < footerSelectors.length; j++) {
        var footerEl = document.querySelector(footerSelectors[j]);
        footerEl.style.display = 'block';
    }
}