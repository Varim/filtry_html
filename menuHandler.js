const $ = require('jquery');
const { remote } = require('electron');

var win = remote.getCurrentWindow();

$('#minimize').click(function(){
    win.minimize();
});

$('#close').click(function(){
    win.close();
});

