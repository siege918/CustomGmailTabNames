setInterval(function () {
    chrome.runtime.sendMessage({nothing: "nothing"}, function(response)
    {
        
        var msg = document.querySelector('.msg').innerHTML;
        var em = msg.split(" ");
        var realEmail = em[1];
        var prefEmails = JSON.parse(response.emails);
        var id = -1;

        Array.prototype.forEach.call(prefEmails, function (el, i) {
            var checkEmail = realEmail.substring(0, el.length);
            if (checkEmail == el) {
                id = i;
            }
        });


        var stuff = document.querySelectorAll('.aKz');

        if (id >= 0) {

            var namesJSON = response.names;
            var names = JSON.parse(namesJSON);

            var primary = names[id].primary;
            var social = names[id].social;
            var promotions = names[id].promotions;
            var updates = names[id].updates;
            var forums = names[id].forums;

            var tooltipsJSON = response.tooltips;
            var tooltips = JSON.parse(tooltipsJSON);

            var primarytt = tooltips[id].primary;
            var socialtt = tooltips[id].social;
            var promotionstt = tooltips[id].promotions;
            var updatestt = tooltips[id].updates;
            var forumstt = tooltips[id].forums;

            Array.prototype.forEach.call(stuff, function (el, i) {
                var inner = el.innerHTML;
                switch (inner) {
                    case 'Primary':
                        if (primary != "")
                            el.innerHTML = primary;
                        if (primarytt != "")
                            el.setAttribute('data-tooltip', primarytt + ' (Primary)');
                        break;
                    case 'Social':
                        if (social != "")
                            el.innerHTML = social;
                        if (socialtt != "")
                            el.setAttribute('data-tooltip', socialtt + ' (Social)');
                        break;
                    case 'Promotions':
                        if (promotions != "")
                            el.innerHTML = promotions;
                        if (promotionstt != "")
                            el.setAttribute('data-tooltip', promotionstt + ' (Promotions)');
                        break;
                    case 'Updates':
                        if (updates != "")
                            el.innerHTML = updates;
                        if (updatestt != "")
                            el.setAttribute('data-tooltip', updatestt + ' (Updates)');
                        break;
                    case 'Forums':
                        if (forums != "")
                            el.innerHTML = forums;
                        if (forumstt != "")
                            el.setAttribute('data-tooltip', forumstt + ' (Forums)');
                        break;
                    default:
                        break;
                }
            });
        }
        
    })}, 2000);