// ==UserScript==
// @name         kieron went on your pc
// @namespace    http://tampermonkey.net/
// @version      2024-11-29
// @description  kieron stole your keyboard and infected your pc by the kieron virus
// @author       You
// @include      https://*/*
// @match        http*://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      http://code.jquery.com/jquery-3.5.1.js
// ==/UserScript==

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Test() {
    'use strict';
    let rand2 = getRandomInt(7)
    if (rand2 == 0) {
        document.title = "get hacked by kieron"
    }
    if (rand2 == 1) {
        document.title = "So UnSigma and UnSkibidi"
    }
    if (rand2 == 2) {
        document.title = "gagagadegagagagagoo ey bean"
    }
    if (rand2 == 3) {
        document.title = "-5000 aura"
    }
    if (rand2 == 4) {
        document.title = "erm what the sigma"
    }
    if (rand2 == 5) {
        document.title = "get fanum taxed"
    }
    if (rand2 == 6) {
        document.title = "knee surgery tomorrow"
    }
    console.log("Kieron Hacked you Lol -5000 aura 😆")
    let imgs = document.getElementsByTagName("img")
    for (let i = 0; i < imgs.length; i++) {
        let rand = getRandomInt(13)
        let image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcICn-uH-tV2relgTUHXGHJb8czwRjde4oBw&s' // Crash out Guy
        let img1 = imgs[i]
            if (rand == 0) {
                image = 'https://preview.redd.it/hey-guys-this-is-my-new-character-his-whole-deal-is-hes-a-v0-3onocd3am4od1.jpeg?width=640&crop=smart&auto=webp&s=da70c2fa77cce6a302c3c7d2469d403cbc56f998'; // Normal Chill Guy
            }
            if (rand == 1) {
                image = 'https://i.ytimg.com/vi/-y18ZCcYuqo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCT9bYBREAX_uWlNehpkWn90rn4wQ'; // Minecraft Chill Guy
            }
            if (rand == 2) {
                image = 'https://preview.redd.it/hey-guys-this-is-my-new-character-his-whole-deal-is-hes-a-v0-3onocd3am4od1.jpeg?width=640&crop=smart&auto=webp&s=da70c2fa77cce6a302c3c7d2469d403cbc56f998'; // Normal Chill Guy
            }
            if (rand == 3) {
                image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcICn-uH-tV2relgTUHXGHJb8czwRjde4oBw&s'; // Crash out Guy
            }
            if (rand == 4) {
                image = 'https://preview.redd.it/that-feeling-when-knee-surgery-is-tomorrow-v0-oe0jwdyzy4zd1.jpeg?auto=webp&s=969cb2ac9bef7f56fcf854ba6acf47b7d4efa4e8'; // knee surgery Guy
            }
            if (rand == 5) {
                image = 'https://ih1.redbubble.net/image.5445360619.0117/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp'; // Sussy guy
            }
            if (rand == 6) {
                image = 'https://m.media-amazon.com/images/M/MV5BMzgzMzY2MmMtMWNkNy00ZjVkLWIxOWUtZDJjODNmY2IyOWFiXkEyXkFqcGc@._V1_.jpg'; // Skibidi Toilet
            }
            if (rand == 7) {
                image = 'https://media.tenor.com/m0Sqts1urfQAAAAe/omega-nuggets.png'; // Chicken Nugget
            }
            if (rand == 8) {
                image = 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c991b69390fcab978295d198d'; // Sigma
            }
            if (rand == 9) {
                image = 'https://iili.io/2EkIKqg.th.png'; // Sigma gareth
            }
            if (rand == 10) {
                image = 'https://preview.redd.it/xxlhlp5gbs591.jpg?width=640&crop=smart&auto=webp&s=67e68e43fe91dae156cd95df975cc9ecb0153d72'; // Sigma gareth
            }
            if (rand == 11) {
                image = 'https://pbs.twimg.com/profile_images/1815565034593914880/IU8ewx-j_400x400.jpg'; // Sigma gareth
            }
            if (rand == 12) {
                image = 'https://static.wikia.nocookie.net/surrealmemes/images/8/80/2f0.png/revision/latest?cb=20190823154313'; // Sigma gareth
            }
            img1.src = image
            // create a new HTML link element
            let link = document.createElement('link');
            link.rel = 'icon';
            link.type = image;
            link.href = image;
            // remove any existing favicon
            var existingLink = document.querySelector('link[rel="icon"]');
            if (existingLink) {
                document.head.removeChild(existingLink);
            }

        // add the new favicon
        document.head.appendChild(link);
    }
    setTimeout(Test, 2000)
}

(function() {
    'use strict'
    console.log("Started")
    Test();
    console.log("Ran")


})();
