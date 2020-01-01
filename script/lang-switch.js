"use strict";
let lang = document.getElementById('lang');
lang.onclick = function () {
    let link = document.getElementById('lang_switch')
    if (!link) {
        return false
    };
    if (link.title == 'ua') {
        link.href = 'html/rus/index.html';
    } else if (link.title == 'rus') {
        link.href = '../eng/index.html';
    } else {
        link.href = '../../index.html';
    }
};