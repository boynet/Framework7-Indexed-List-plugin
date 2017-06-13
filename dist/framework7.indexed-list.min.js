/*
 * Framework7 Indexed List 0.2.0
 * Framework7 plugin to add Alphabet indexed list
 *
 * https://github.com/boynet/Framework7-Indexed-List-plugin
 *
 * Copyright 2015, boynet
 *
 * Licensed under MIT
 *
 * Released on: 17 Sep, 2014
*/
Framework7.prototype.plugins.indexedlist=function(t,e){function n(e){function n(t){t.preventDefault(),c=!0;var e=i(t.target);e.is("li")||(e=e.parents("li")),e.length>0&&o(e.eq(0).data("index-letter"))}function a(t){if(c){t.preventDefault();var e;(e=i("mousemove"===t.type?t.target:document.elementFromPoint(t.touches[0].pageX,t.touches[0].pageY))).is("li")||(e=e.parents("li")),0!==e.length&&(e.length>0&&!e.is(".list-index li")||o(e.eq(0).data("index-letter")))}}function r(t){c=d=!1}function o(t){var e=s.find('.list-group ul li[data-index-letter="'+t+'"]').parent();if(e.length){var n=e.offset().top+s.scrollTop()-(p?44:0)-(u?44:0);s.scrollTop(n)}}var l=i(e.container).find(".list-index");if(0!==l.length){var s=i(e.container).find(".page-content");!function(){var t=[],e="";s.find(".list-group").each(function(){var n=i(this).find("ul .list-group-title"),a=n.html().trim().charAt(0).toUpperCase();n.attr("data-index-letter",a),e+='<li data-index-letter="'+a+'">'+a+"</li>",t.push(a)}),l.html(e)}();var c,d,p=s.parents(".navbar-fixed").length>0||s.parents(".navbar-through").length>0,u=i(e.container).find(".searchbar").length>0;u&&l.css("margin-top","44px"),i(e.container).on("click",".list-index li",function(t){var e=i(t.target);e.is("li")||(e=e.parents("li")),e.length>0&&o(e.eq(0).data("index-letter"))}),l.on(t.touchEvents.start,n),l.on(t.touchEvents.move,a),l.on(t.touchEvents.end,r)}}var i=window.Dom7;return{hooks:{pageInit:n}}};
