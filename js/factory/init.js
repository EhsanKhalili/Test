define(function (require) {
    'use strict';

    return {
        init: function () {

            var myVideo, myImage,
                mediaFactory = require('factory/mediaFactory');

            myVideo = mediaFactory.createMedia('Video', {
                name: 'My Video',
                length: 3.5
            });

            myImage = mediaFactory.createMedia('Image', {
                name: 'My Image',
                width: 100,
                height: 100 
            });

            console.log(myVideo);
            console.log(myImage);
        }
    };
})