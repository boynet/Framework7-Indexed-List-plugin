Framework7.prototype.plugins.alphascroll = function (app, params) {
    var $ = window.Dom7;
    var letterToScroll, page;
    var letterscrolled;
    var elementHover;
    var letters=[];
    var eventsTarget;
    var pageContent;

    function initAlphascroll(page) {
        eventsTarget = $(page.container);
        if (!eventsTarget.hasClass('.alphascroll')) {
            eventsTarget = eventsTarget.find('.alphascroll');
        }
        if (eventsTarget.length === 0) return;
        page = page;
        pageContent = $$(page.container).find('.page-content');
        letters = getLetters();

        function handleTouchStart(e) {
            if (app.device.os === 'android') e.preventDefault();
        }

        function handleTouchMove(e) {
            elementHover = $$(document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY));
            if (!$$(elementHover).is('li')) {
                return;
            }
            letterToScroll = elementHover.html();
            hoverLetter();
        }

        function handleTouchEnd(e) {
            pageContent.find('.alphascroll li.hover').removeClass('hover');
            letterscrolled = null;
        }
        
        $$(pageContent).on('click','.alphascroll li',function(e){
            elementHover = $$(e.target);
            letterToScroll = $$(e.target).html();
            hoverLetter();
        });

        function getLetters(){
            var _letters = [];
           pageContent.find('.list-group').each(function () {
               _letterDiv = $$(this).find('ul .list-group-title');
               _letter = _letterDiv.html();
               _letterDiv.addClass('letter-'+_letter);
               eventsTarget.append('<li>' + _letter + '</li>');
              _letters.push(_letter);
           });
            return _letters;
        }

        function hoverLetter() {
            if (letterToScroll !== letterscrolled) {
                pageContent.find('.alphascroll li.hover').removeClass('hover');
                elementHover.addClass('hover');
                offset = -43;
                scrollTo = pageContent.find('.list-group ul li.letter-' + letterToScroll)
                if (!scrollTo.length) return;
                offset = offset + pageContent.offset().top + scrollTo.offset().top;
                pageContent.scrollTop(offset);
                letterscrolled = letterToScroll;
            }

        }

        eventsTarget.on(app.touchEvents.start, handleTouchStart);
        eventsTarget.on(app.touchEvents.move, handleTouchMove);
        eventsTarget.on(app.touchEvents.end, handleTouchEnd);
    }


    return {
        hooks: {
            pageInit:initAlphascroll,
            pageAfterAnimation: initAlphascroll
        }
    };
};
