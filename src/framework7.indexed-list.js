Framework7.prototype.plugins.indexedlist = function (app, params) {
    var $ = window.Dom7;
    

    function initIndexedList(page) {
        var eventsTarget = $(page.container).find('.list-index');
        if (eventsTarget.length === 0) return;
        
        var pageContent = $(page.container).find('.page-content');
        buildLetters();
        var isTouched, isMoved;
        var letterToScroll;
        var elementHover;
        var fixedNavbar = pageContent.parents('.navbar-fixed').length > 0 || pageContent.parents('.navbar-through').length > 0;
        var searchBar = $(page.container).find('.searchbar').length > 0;
        
        if (searchBar){
            console.log(eventsTarget);
            eventsTarget.css('margin-top','44px');
        }
        
        function handleTouchStart(e) {
            e.preventDefault();
            isTouched = true;

            var target = $(e.target);
            if (!target.is('li')) target = target.parents('li');
            if (target.length > 0) {
                scrollToLetter(target.eq(0).data('index-letter'));
            }
        }

        function handleTouchMove(e) {
            if (!isTouched) return;
            e.preventDefault();
            var target;
            if (e.type === 'mousemove') {
                target = $(e.target);
            }
            else {
                target = $(document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY));
            }
            if (!target.is('li')) target = target.parents('li');
                
            if (target.length === 0) return;
            if (target.length > 0 && !target.is('.list-index li')) return;

            scrollToLetter(target.eq(0).data('index-letter'));
        }

        function handleTouchEnd(e) {
            isTouched = isMoved = false;
        }
        
        $(page.container).on('click','.list-index li',function(e){
            var target = $(e.target);
            if (!target.is('li')) target = target.parents('li');
            if (target.length > 0) {
                scrollToLetter(target.eq(0).data('index-letter'));
            }
        });

        function buildLetters(){
            var _letters = [];
            var lettersHtml = '';
            pageContent.find('.list-group').each(function () {
                var _letterDiv = $(this).find('ul .list-group-title');
                var _letter = _letterDiv.html().trim().charAt(0).toUpperCase();
                _letterDiv.attr('data-index-letter', _letter);
                lettersHtml += '<li data-index-letter="' + _letter + '">' + _letter + '</li>';
                _letters.push(_letter);
            });
            eventsTarget.html(lettersHtml);
            return _letters;
        }

        function scrollToLetter(letter) {
            var scrollToEl = pageContent.find('.list-group ul li[data-index-letter="' + letter + '"]');
            if (!scrollToEl.length) return;
            var scrollTop = scrollToEl.offset().top + pageContent.scrollTop() - (fixedNavbar ? 44 : 0) - (searchBar ? 44 : 0);
            pageContent.scrollTop(scrollTop);
        }

        eventsTarget.on(app.touchEvents.start, handleTouchStart);
        eventsTarget.on(app.touchEvents.move, handleTouchMove);
        eventsTarget.on(app.touchEvents.end, handleTouchEnd);
    }


    return {
        hooks: {
            pageInit: initIndexedList,
        }
    };
};
