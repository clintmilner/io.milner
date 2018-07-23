/**
 * User: clint
 * Date: 21/07/2018
 * Time: 20:08
 *
 * ClintMilner.com
 */
const namespace = function (namespaceString) {
    let parts = namespaceString.split('.'),
        parent = window,
        currentPart = '',
        defaultObject = {};

    for (let i = 0, length = parts.length; i < length; i++) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || ( i < length - 1 ? {} : defaultObject );
        parent = parent[currentPart];
    }

    return parent;
};
const CM = namespace('CM');
CM.Utils = {
    uniqueKey: function() {
        let date = new Date(),
            keys = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
        return keys.join('');
    }
};


let tmpl = {
    about: new Template('js/templates/about.tmpl', CM.Utils.uniqueKey()),
    work: new Template('js/templates/work.tmpl', CM.Utils.uniqueKey()),
};
let Events = {
    init: function() {
        console.log('init()');
    },
    test: function(e, data){
        console.log( data );
        tmpl.about.render({data}, (tmpl) => {
            $('#test').append(tmpl);
        });
    },
    // backToTop: function() {
    //     let $BTT = $('#back-to-top');
    //     $(window).scroll(function () {
    //         if ($(this).scrollTop() > 50) {
    //             $BTT.fadeIn();
    //         } else {
    //             $BTT.fadeOut();
    //         }
    //     });
    //     // scroll body to 0px on click
    //     $BTT.click(function () {
    //         $('body,html').animate({
    //             scrollTop: 0
    //         }, 750);
    //         return false;
    //     });
    // }
};


$(document.body)
    .on( 'click touchstart touchend keydown keyup keypress mousedown mouseup mouseenter mouseleave blur focus change',
        '*[data-model][data-action]',
        function(e) {
            let $this = $(this),
                data = $this.data(),
                eventTypes = data.events ? data.events : 'click',
                regExp = new RegExp('(^|\\s)' + e.type + '(\\s|$)');

            if(regExp.test(eventTypes)) {
                $this.trigger(data.action + '-' + data.model, [data, e]);
            }
        }
    )
    .on('test-setup', function (e, data) {
        if (e !== undefined) {
            e.preventDefault();
        }
        Events.test(e, data);
    });



