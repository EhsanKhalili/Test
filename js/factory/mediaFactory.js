define(function (require) {
    'use strict';

    var media = {
        Video: require('factory/video'),
        Image: require('factory/Image')
    }

    return {
        createMedia: function (type, attributes) {
            var MediaType = media[type];

            return new MediaType(attributes);
        }
    }
})