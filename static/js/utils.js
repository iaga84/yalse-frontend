const COLORS = {
    avi: '#faec24',
    azw3: '#37c8a1',
    doc: '#8a64c8',
    docx: '#8fc819',
    epub: '#20b2aa',
    gif: '#fa81a9',
    htm: '#25fa79',
    html: '#4a16ff',
    jpg: '#ff67b3',
    lit: '#c81c2c',
    mobi: '#ff44de',
    mp3: '#a6c836',
    mp4: '#c89576',
    odt: '#5e33fa',
    opf: '#05c820',
    pdf: '#ff523f',
    png: '#9123ff',
    pub: '#40b7ff',
    rar: '#ffd716',
    rtf: '#fa5f13',
    stl: '#2e63c8',
    tmp: '#4e4e4e',
    txt: '#0cb534',
    xml: '#c822b0',
    zip: '#c8bc42',
};


function byte_to_size(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function time_difference(timestamp) {

    current = new Date().getTime();
    previous = Date.parse(timestamp)

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
        return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
    }
}