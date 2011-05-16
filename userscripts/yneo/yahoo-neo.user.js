// ==UserScript==
// @name           Spacier Yahoo Neo
// @namespace      sarathonline
// @author         sarathonline (http://userscripts.org/users/50784)
// @license        GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html)
// @homepage       http://www.sarathonline.com/scripts/
// @version        1.0
// @description    Removes unnecessary top header in yahoo mail beta (neo).
// @include        http://*.mail.yahoo.com/neo/*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js
//
// @history        1.0 first version
//
// ==/UserScript==

$(function(){
    $('head').append('<link rel="stylesheet" href="yahoo-neo.css" type="text/css" />');
});