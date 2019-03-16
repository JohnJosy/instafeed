$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '8137087849',
        limit: 100,
        resolution: 'standard_resolution',
        accessToken: '8137087849.1677ed0.a665b0cd635b448893f9d5b6291e4c20',
        sortBy: 'random',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run();
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});