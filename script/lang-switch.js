"use strict";
let lang = document.getElementById('lang');
lang.onclick = function () {
    let link = document.getElementById('lang_switch')
    if (!link) {
        return false
    };
    if (link.title == 'ua') {
        link.href = '../rus/index.html';
    } else if (link.title == 'rus') {
        link.href = '../eng/index.html';
    } else {
        link.href = '../ua/index.html';
    }
};