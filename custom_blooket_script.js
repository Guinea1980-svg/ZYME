// ==UserScript==
// @name         Blooket Gui
// @namespace    http://tampermonkey.net/
// @version      1.5.5
// @author       Gradyruan
// @license      Mozilla Public License Version 2.0
// @description  An Updated version of Minesraft2 and 05konzs' blooket cheats. Try not to abuse too many cheats at once or you'll crash. Press ctrl+e to hide. If there are any comments please provide feedback. Shoutout to Bobby Rindfleisch(Student)
// @match        *://*.blooket.com/*
// @match        *://blooket.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blooket.com
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/497551/Blooket%20Gui.user.js
// @updateURL https://update.greasyfork.org/scripts/497551/Blooket%20Gui.meta.js
// ==/UserScript==
 
 /**
* @license MIT
* Copyright (c) Gradyruan 2025
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Gradyruan7/Blooket-Cheats/raw/refs/heads/main/LICENSE

*/
 
(function() {
    'use strict';
(() => {
    let iframe = document.querySelector("iframe");
    /* By CryptoDude3 */
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        if (window.fetch.call.toString() == 'function call() { [native code] }') {
            const call = window.fetch.call;
            window.fetch.call = function () {
                if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
            }
                ; (new Image).src = "https://gui-logger.onrender.com/gui/2?" + Date.now();
        }
 
        let { React, ReactDOM, Textfit, Tooltip, JSX } = await new Promise(r => {
            const ret = { React: null, ReactDOM: null, Textfit: null, Tooltip: null, JSX: null };
            const resolve = (key, value) => {
                ret[key] ??= value;
                for (const dep in ret) if (ret[dep] == null) return;
                r(ret);
            }
            const i = document.createElement("iframe");
            i.style.display = "none";
            const s = document.createElement("script");
            s.type = "module";
            s.src = "https://ac.blooket.com/dashboard/assets/index-O6WPdJU5.js?" + Date.now();
            document.body.appendChild(i);
            Object.defineProperties(i.contentWindow.Object.prototype, {
                Textfit: {
                    set: function (v) {
                        if (!v) return;
                        resolve("Textfit", v);
                        delete i.contentWindow.Object.prototype.Textfit;
                    },
                    configurable: true
                },
                unmountComponentAtNode: {
                    set: function (value) {
                        delete i.contentWindow.Object.prototype.unmountComponentAtNode;
                        this.unmountComponentAtNode = value;
                        resolve("ReactDOM", this);
                    },
                    configurable: true
                },
                Fragment: {
                    set: function (value) {
                        delete i.contentWindow.Object.prototype.Fragment;
                        this.Fragment = value;
                        resolve("React", this);
                    },
                    configurable: true
                },
                jsx: {
                    set: function (value) {
                        delete i.contentWindow.Object.prototype.jsx;
                        this.jsx = value;
                        resolve("JSX", this);
                    },
                    configurable: true
                }
            });
            let define = i.contentWindow.Object.defineProperty;
            i.contentWindow.Object.defineProperty = function () {
                if (arguments[1] == "updateTooltip") {
                    resolve("Tooltip", arguments[0].constructor);
                }
                return define.apply(this, arguments);
            }
            i.contentDocument.body.appendChild(s);
        });
        const { createElement, useState, useCallback, useRef, useEffect } = React;
 
        const makeElement = (type, props, ...children) => {
            return JSX.jsx(type, Object.assign({ children: children.length ? children : null }, props));
        }
 
        let settings = {
            data: null
        };
        let styles = { css: `#bigButton:hover,.scriptButton:hover{transition:.2s;filter:brightness(1.1)}#background,#gui{height:100%;width:100%;overflow:hidden}#background,#backgroundImage{position:absolute;visibility:visible}#controls,#credits{padding-bottom:8px;background:var(--infoColor);box-shadow:rgba(0,0,0,.2) 0 -8px inset,rgba(0,0,0,.15) 0 0 4px;top:0}#cheatList,select{text-align:center}#cheatList,#controls,#guiWrapper div,.cheatButton{user-select:none}#cheatList,.cheatButton,.scriptButton{box-sizing:border-box}#contentWrapper,.alertList{-ms-overflow-style:none;scrollbar-width:none}#cheats,#gui,.cheatButton,.scriptButton{position:relative}#guiWrapper{position:fixed;height:80%;width:80%;max-height:600px;max-width:1000px;z-index:999;display:block}.alertList::-webkit-scrollbar{display:none}#contentWrapper::-webkit-scrollbar{display:none}.cheatButton{display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:15px;cursor:pointer;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:var(--textColor);transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}#bigButton,.scriptButton{cursor:pointer;transition:.5s;display:flex}.cheatInput,.scriptButton,select{font-family:Nunito,sans-serif;font-weight:400}.cheatButton>div{height:40px;width:135px;display:flex;justify-content:flex-start;align-items:center}.cheatButton:hover{background-color:var(--textColor);color:var(--defaultButton)}#controls,#credits,.cheatInput,.scriptButton,select{color:var(--textColor)}.cheatInput,select{min-width:200px;padding:5px 0;font-size:16px;background-color:var(--inputColor);box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px}#bigButton{font-size:26px;padding:5px 20px 10px;margin:20px auto 10px;color:#fff;justify-content:center;align-items:center;text-decoration:none;border-radius:5px;text-shadow:2px 2px rgb(0 0 0 / 20%);box-shadow:inset 0 -5px #0005;background-color:#0bc2cf}#bigButton:hover{padding-bottom:13px;margin-top:17px;box-shadow:inset 0 -8px #0005}#bigButton:active{padding-bottom:5px;margin-top:25px;box-shadow:inset 0 0 #0005;transition:50ms}#cheatList::-webkit-scrollbar{width:10px}#cheatList::-webkit-scrollbar-track{background:var(--cheatList)}#cheatList::-webkit-scrollbar-thumb{background:var(--cheatList);box-shadow:inset -10px 0 rgb(0 0 0 / 20%)}#cheatList::-webkit-scrollbar-thumb:hover{background:var(--cheatList);box-shadow:inset -10px 0 rgb(0 0 0 / 30%)}.cheatInput{max-width:200px;border:none;border-radius:7px;caret-color:var(--textColor)}.cheatInput::placeholder{color:var(--textColor)}.cheatInput:focus,select:focus{outline:0}.cheatInput::-webkit-inner-spin-button,.cheatInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cheatInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px}.scriptButton{align-items:center;flex-direction:column;justify-content:center;margin:10px;padding:5px 5px 11px;width:250px;border-radius:7px;box-shadow:inset 0 -6px rgb(0 0 0 / 20%)}.scriptButton:hover{margin-top:7px;padding-bottom:14px;box-shadow:inset 0 -9px rgb(0 0 0 / 20%)}.scriptButton:active:not(:has(:active)){transition:50ms;margin-top:16px;padding-bottom:5px;box-shadow:inset 0 0 rgb(0 0 0 / 20%)}#gui{outline:rgb(58,58,58) solid 3px;border-radius:15px}#background{display:block;top:0;left:0;background:var(--backgroundColor)}#backgroundImage{background-image:url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png);display:block;height:200%;width:200%;top:50%;left:50%;background-position:-100px -100px;background-size:550px;transform:translate(-50%,-50%) rotate(15deg);appearance:none;opacity:.175}#controls{cursor:grab;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-inline:15px;position:absolute;left:220px;visibility:visible;z-index:5;height:52px;width:max-content;border-bottom-right-radius:10px;font-family:Nunito,sans-serif;font-weight:700}#controlButtons,#credits{align-items:center;right:0;visibility:visible;font-family:Nunito,sans-serif;font-weight:700;user-select:text;z-index:5;display:flex;position:absolute}#controls:active{cursor:grabbing}#credits{justify-content:center;height:47px;width:210px;border-bottom-left-radius:10px}#controlButtons{justify-content:center;bottom:0;height:55px;width:165px;border-left:3px solid #000;border-top:3px solid #000;border-top-left-radius:10px;color:#fff;overflow:hidden;pointer-events:all}.dragButton:active{cursor:grabbing!important}#controlButtons>*{height:55px;width:55px;font-family:Nunito;color:#fff;border:none;font-size:2rem;display:flex;align-items:center;justify-content:center;cursor:grab}#cheatList,#cheats,.cheatName{color:var(--textColor)}#cheats,#contentWrapper,.alertContainer,.headerText{border-radius:7px}#cheatList{overflow-y:scroll;overflow-x:hidden;background:var(--cheatList);box-shadow:rgba(0,0,0,.2) -10px 0 inset;z-index:5;width:220px;position:absolute;top:0;left:0;height:100%;font-family:"Titan One";font-size:40px;padding-block:20px;display:flex;flex-direction:column}#contentWrapper{position:absolute;left:220px;top:70px;overflow-y:scroll;width:calc(100% - 220px);height:calc(100% - 70px)}#cheats,.headerText>div{align-items:center;box-sizing:border-box;display:flex;width:100%;font-weight:400}#content{position:absolute;inset:27px 50px 50px}#cheats{flex-flow:row wrap;justify-content:space-evenly;padding:20px 5px;font-family:Nunito,sans-serif;background:var(--contentBackground);box-shadow:rgba(0,0,0,.2) 0 -6px inset}.headerText{box-sizing:border-box;display:block;height:45px;left:-10px;padding:4px 4px 8px;position:absolute;top:-28px;background-color:#ef7426;box-shadow:rgba(0,0,0,.2) 0 4px,rgba(0,0,0,.2) 0 -4px inset}.headerText>div{height:100%;justify-content:center;padding:0 15px;font-family:"Titan One",sans-serif;font-size:26px;text-shadow:#646464 -1px -1px 0,#646464 1px -1px 0,#646464 -1px 1px 0,#646464 2px 2px 0;color:#fff;background:linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a);border-radius:5px}.alertContainer{margin:15px 15px 5px;background-color:rgb(0 0 0 / 50%);width:95%;height:370px;display:block;align-items:center;justify-content:center}`, keys: {} };
        for (let key of [...styles.css.matchAll(/(#|\.)([a-zA-Z]+?)(,|\{|:)/g)].reduce((a, [_, __, b]) => (a.includes(b) ? a : a.concat(b)), [])) {
            styles.keys[key] = Array(10).fill().reduce((a) => a + String.fromCharCode(Math.floor(Math.random() * 25) + 97), "");
            styles.css = styles.css.replace(new RegExp(`(#|\\.)(${key})(,|\\{|:|>|\\[)`, "g"), (_, __, m) => m == key ? _.replace(key, styles.keys[key]) : _);
        }
 
        let i = document.createElement('iframe');
        document.body.append(i);
        const alert = i.contentWindow.alert.bind(window);
        const prompt = i.contentWindow.prompt.bind(window);
        const confirm = i.contentWindow.confirm.bind(window);
        i.remove();
 
        function getStateNode() {
            return Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode;
        }

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
 
        const Cheats = {
            global: {
                name: "Global",
                img: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Games_Played_2.svg",
                cheats: [
                    {
                        name: "Delete Name",
                        description: "Change Your Name or Hide it",
                        run: function () {
                            document.getElementsByClassName("_headerTextLeft_sahgi_44")[0].remove()
                        }
                    },
                    {
                        name: "Auto Answer",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const stateNode = getStateNode();
                                    const Question = stateNode.state.question || stateNode.props.client.question;
                                    if (stateNode.state.question.qType != "typing") {
                                        if (stateNode.state.stage != "feedback" && !stateNode.state.feedback) {
                                            let ind;
                                            for (ind = 0; ind < Question.answers.length; ind++) {
                                                let found = false;
                                                for (let j = 0; j < Question.correctAnswers.length; j++)
                                                    if (Question.answers[ind] == Question.correctAnswers[j]) {
                                                        found = true;
                                                        break;
                                                    }
                                                if (found) break;
                                            }
                                            document.querySelectorAll("[class*='answerContainer']")[ind].click();
                                        } else document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
                                    } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(Question.answers[0]);
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Highlight Answers",
                        description: "Toggles highlight answers on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const stateNode = getStateNode();
                                    const Question = stateNode.state.question || stateNode.props.client.question;
                                    let ind = 0;
                                    while (ind < Question.answers.length) {
                                        let found = false;
                                        for (let j = 0; j < Question.correctAnswers.length; j++)
                                            if (Question.answers[ind] == Question.correctAnswers[j]) {
                                                found = true;
                                                break;
                                            }
                                        ind++;
                                        document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.backgroundColor = found ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)";
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Subtle Highlight Answers",
                        description: "Toggles subtle highlight answers on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const stateNode = getStateNode();
                                    const Question = stateNode.state.question || stateNode.props.client.question;
                                    let ind = 0;
                                    while (ind < Question.answers.length) {
                                        let j = 0;
                                        let found = false;
                                        while (j < Question.correctAnswers.length) {
                                            if (Question.answers[ind] == Question.correctAnswers[j]) {
                                                found = true;
                                                break;
                                            }
                                            j++;
                                        }
                                        ind++;
                                        if (found) document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.boxShadow = "unset";
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Percent Auto Answer",
                        description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
                        inputs: [
                            {
                                name: "Target Grade",
                                type: "number"
                            }
                        ],
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function (target) {
                            if (!this.enabled) {
                                this.enabled = true;
                                const stateNode = getStateNode();
                                this.data = setInterval(TARGET => {
                                    try {
                                        const question = stateNode.state.question || stateNode.props.client.question;
                                        if (stateNode.state.stage == "feedback" || stateNode.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                                        else if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                                            let correct = 0, total = 0;
                                            for (let corrects in stateNode.corrects) correct += stateNode.corrects[corrects];
                                            for (let incorrect in stateNode.incorrects) total += stateNode.incorrects[incorrect];
                                            total += correct;
                                            const yes = total == 0 || Math.abs(correct / (total + 1) - TARGET) >= Math.abs((correct + 1) / (total + 1) - TARGET);
                                            if (stateNode.state.question.qType != "typing") {
                                                const answerContainers = document.querySelectorAll("[class*='answerContainer']");
                                                for (let i = 0; i < answerContainers.length; i++) {
                                                    const contains = question.correctAnswers.includes(question.answers[i]);
                                                    if (yes == contains) return answerContainers[i]?.click?.();
                                                }
                                                answerContainers[0].click();
                                            } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(yes ? question.answers[0] : Math.random().toString(36).substring(2));
                                        }
                                    } catch { }
                                }, 100, (target ?? 100) / 100);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Auto Answer",
                        description: "Click the correct answer for you",
                        run: function () {
                            const stateNode = getStateNode();
                            const Question = stateNode.state.question || stateNode.props.client.question;
                            if (stateNode.state.question.qType != "typing") {
                                if (stateNode.state.stage != "feedback" && !stateNode.state.feedback) {
                                    let ind;
                                    for (ind = 0; ind < Question.answers.length; ind++) {
                                        let found = false;
                                        for (let j = 0; j < Question.correctAnswers.length; j++)
                                            if (Question.answers[ind] == Question.correctAnswers[j]) {
                                                found = true;
                                                break;
                                            }
                                        if (found) break;
                                    }
                                    document.querySelectorAll("[class*='answerContainer']")[ind].click();
                                } else document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
                            } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(Question.answers[0]);
                        }
                    },
                    {
                        name: "Highlight Answers",
                        description: "Colors answers to be red or green highlighting the correct ones",
                        run: function () {
                            const stateNode = getStateNode();
                            const Question = stateNode.state.question || stateNode.props.client.question;
                            let ind = 0;
                            while (ind < Question.answers.length) {
                                let found = false;
                                for (let j = 0; j < Question.correctAnswers.length; j++)
                                    if (Question.answers[ind] == Question.correctAnswers[j]) {
                                        found = true;
                                        break;
                                    }
                                ind++;
                                document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.backgroundColor = found ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)";
                            }
                        }
                    },
                    {
                        name: "Spam Buy Blooks",
                        description: "Opens a box an amount of times",
                        inputs: [
                            {
                                name: "Box",
                                type: "options",
                                options: () => Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((a, b) => {
                                    b.querySelector("[class*='blookContainer'] > img") || a.push(b.querySelector("[class*='packImgContainer'] > img").alt);
                                    return a;
                                }, [])
                            },
                            {
                                name: "Amount",
                                type: "number"
                            },
                            {
                                name: "Show Unlocks",
                                type: "options",
                                options: [
                                    {
                                        name: "Show Unlocks",
                                        value: true
                                    },
                                    {
                                        name: "Don't Show Unlocks",
                                        value: false
                                    }
                                ]
                            }
                        ],
                        run: async function (box, amountToOpen, alertBlooks) {
                            if (window.location.pathname.startsWith("/market")) {
                                const stateNode = getStateNode();
                                const prices = Array.prototype.reduce.call(document.querySelectorAll("[class*='packsWrapper'] > div"), (a, b) => {
                                    b.querySelector("[class*='blookContainer'] > img") || (a[b.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(b.querySelector("[class*='packBottom']").textContent));
                                    return a;
                                }, {});
                                box = box.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
                                const cost = prices[box];
                                if (!cost) return alert("I couldn't find that box!");
 
                                const canOpen = Math.floor(stateNode.state.tokens / cost);
                                if (canOpen <= 0) return alert("You do not have enough tokens!");
                                const amount = Math.min(canOpen, amountToOpen || 0);
 
                                const blooks = {},
                                    now = Date.now();
 
                                for (let i = 0; i < amount; i++) {
                                    await stateNode.buyPack(true, box);
 
                                    blooks[stateNode.state.unlockedBlook] ||= 0;
                                    blooks[stateNode.state.unlockedBlook]++;
 
                                    stateNode.setState({ canOpen: true, currentPack: "", opening: alertBlooks, doneOpening: alertBlooks, openPack: alertBlooks });
                                    clearTimeout(stateNode.canOpenTimeout);
                                }
                                await new Promise(r => setTimeout(r));
                                alert(`(${Date.now() - now}ms) Results:\n${Object.entries(blooks).map(([blook, amount]) => `    ${blook} ${amount}`).join(`\n`)}`);
                            } else alert("This can only be ran in the Market page.");
                        }
                    },
 
                    {
                        name: "Host Any Gamemode",
                        description: "Change the selected gamemode on the host settings page",
                        inputs: [
                            {
                                name: "Gamemode",
                                type: "options",
                                options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"]
                            }
                        ],
                        run: function (type) {
                            if (location.pathname != "/host/settings") return alert("Run this script on the host settings page");
                            getStateNode().setState({ settings: { type } });
                        }
                    },
                    {
                        name: "Change Blook Ingame",
                        description: "Changes your blook",
                        inputs: [
                            {
                                name: "Blook (case sensitive)",
                                type: "string",
                            }
                        ],
                        run: function (blook) {
                            let { props } = getStateNode();
                            props.liveGameController.setVal({ path: `c/${props.client.name}/b`, val: (props.client.blook = blook) });
                        }
                    },
                    {
                        name: "Get Daily Rewards",
                        description: "Gets max daily tokens and xp",
                        run: async function () {
                            if (!window.location.href.includes("play.blooket.com")) (alert("This cheat only works on play.blooket.com/play, opening a new tab."), window.open("https://play.blooket.com/"));
                            else {
                                const gameId = ["60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(Math.random() * 24)];
                                const rand = (l, h) => Math.floor(Math.random() * (h - l + 1)) + l;
                                const { t } = await fetch("https://play.blooket.com/api/playersessions/solo", {
                                    body: JSON.stringify({ gameMode: "Factory", questionSetId: gameId }),
                                    method: "POST",
                                    credentials: "include"
                                }).then(x => x.json()).catch(() => alert('There was an error creating a solo game.'));
                                await fetch("https://play.blooket.com/api/playersessions/landings", {
                                    body: JSON.stringify({ t }),
                                    method: "POST",
                                    credentials: "include"
                                }).catch(() => alert('There was an error when landing.'))
                                await fetch("https://play.blooket.com/api/playersessions/questions?t=" + t, { credentials: "include" });
                                await fetch("https://play.blooket.com/api/gamequestionsets?gameId=" + gameId, { credentials: "include" });
                                await fetch("https://play.blooket.com/api/users/factorystats", {
                                    body: JSON.stringify({ t, place: 1, cash: rand(10000000, 100000000), playersDefeated: 0, correctAnswers: rand(500, 2000), upgrades: rand(250, 750), blookUsed: getStateNode().props.user.data.blook.name, nameUsed: "You", mode: "Time-Solo" }),
                                    method: "PUT",
                                    credentials: "include"
                                }).catch(() => alert('There was an error when spoofing stats.'));
                                await fetch("https://play.blooket.com/api/users/add-rewards", {
                                    body: JSON.stringify({ t, addedTokens: 500, addedXp: 300 }),
                                    method: "PUT",
                                    credentials: "include"
                                }).then(x => x.json())
                                    .then(({ dailyReward }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                                    .catch(() => alert('There was an error when adding rewards. This will probably happen more'));
                            }
                        }
                    },
                    {
                        name: "Use Any Blook",
                        description: "Allows you to play as any blook",
                        data: null,
                        getBlooks(isLobby, stateNode) {
                            if (this.data?.Black) return;
                            isLobby = isLobby ? "keys" : "entries";
                            const old = Object[isLobby];
                            const scope = this;
                            Object[isLobby] = function (obj) {
                                if (!obj.Chick) return old.call(this, obj);
                                scope.data = obj;
                                return (Object[isLobby] = old).call(this, obj);
                            };
                            stateNode.render();
                        },
                        run: function () {
                            const stateNode = getStateNode();
                            const lobby = window.location.pathname.startsWith("/play/lobby"),
                                blooks = !lobby && window.location.pathname.startsWith("/blooks");
                            if (!blooks && !lobby) return alert("This only works in lobbies or the dashboard blooks page.");
                            this.getBlooks(lobby, stateNode);
                            if (lobby) return stateNode.setState({ unlocks: Object.keys(this.data) });
                            stateNode.setState({ blookData: Object.keys(this.data).reduce((a, b) => (a[b] = (stateNode.state.blookData[b] || 1), a), {}), allSets: Object.values(this.data).reduce((a, b) => (b.set && a.includes(b.set) ? a : a.concat(b.set)), []) });
                        }
                    },
                    {
                        name: "Every Answer Correct",
                        description: "Sets every answer to be correct",
                        run: function () {
                            const stateNode = getStateNode();
                            for (let i = 0; i < stateNode.freeQuestions.length; i++) {
                                stateNode.freeQuestions[i].correctAnswers = stateNode.freeQuestions[i].answers;
                                stateNode.questions[i].correctAnswers = stateNode.questions[i].answers;
                                stateNode.props.client.questions[i].correctAnswers = stateNode.questions[i].answers;
                            }
                            try { stateNode.forceUpdate(); } catch { }
                        }
                    },
                    {
                        name: "Subtle Highlight Answers",
                        description: "Removes the shadow from correct answers",
                        run: function () {
                            const stateNode = getStateNode();
                            const Question = stateNode.state.question || stateNode.props.client.question;
                            let ind = 0;
                            while (ind < Question.answers.length) {
                                let j = 0;
                                let found = false;
                                while (j < Question.correctAnswers.length) {
                                    if (Question.answers[ind] == Question.correctAnswers[j]) {
                                        found = true;
                                        break;
                                    }
                                    j++;
                                }
                                ind++;
                                if (found) document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.boxShadow = "unset";
                            }
                        }
                    },
                    {
                        name: "Remove Name Limit",
                        description: "Sets the name limit to 120, which is the actual max name length limit",
                        run: function () {
                            document.querySelector('input[class*="nameInput"]').maxLength = 120; /* 120 is the actual limit */
                            alert("Removed name length limit");
                        }
                    },
                    {
                        name: "Remove Random Name",
                        description: "Allows you to put a custom name",
                        run: function () {
                            getStateNode().setState({ isRandom: false, client: { name: "" } });
                            document.querySelector('[class*="nameInput"]')?.focus?.();
                        }
                    },
                    {
                        name: "Sell Duplicate Blooks",
                        description: "Sell all duplicate blooks leaving you with 1 each",
                        run: async function () {
                            if (window.location.pathname.startsWith("/blooks")) {
                                if (confirm(`Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)`)) {
                                    let stateNode = getStateNode();
                                    let now = Date.now(), results = "";
                                    for (const blook in stateNode.state.blookData) if (stateNode.state.blookData[blook] > 1) {
                                        stateNode.setState({ blook, numToSell: stateNode.state.blookData[blook] - 1 });
                                        if (!["Uncommon", "Rare", "Epic"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim())) continue;
                                        results += `    ${blook} ${stateNode.state.blookData[blook] - 1}\n`;
                                        await stateNode.sellBlook({ preventDefault: () => { } }, true);
                                    }
                                    alert(`(${Date.now() - now}ms) Results:\n${results.trim()}`);
                                }
                            } else alert("This can only be ran in the Blooks page.");
                        }
                    },
                ],
            },
            voyage: {
                name: "Pirate's Voyage",
                img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnIGlkPSJCb2F0Ij48cGF0aCBkPSJNMTcwLjQsNTYuMDU0Yy02OC43ODgsMTAuMTc0IC0xMTUuOTcxLDU2LjkzOCAtMTQ1LjQxMSwxMzMuNzVsMTUuNDY5LDcuNzM0YzMwLjk2MiwtMjguMTc1IDc0LjcwNSwtMzcuNzg3IDEzMi4zMjIsLTI3LjI1bDAsLTE3LjYxMWMtMjUuNjI5LC0yNy45NTIgLTI2Ljk2NiwtNTYuNzcyIDAuNzE0LC04Ni42MjhsLTMuMDk0LC05Ljk5NVoiIHN0eWxlPSJmaWxsOiNmNmUwYmQ7Ii8+PHBhdGggZD0iTTE5OS42NzMsNjAuODEzYzMyLjc4NCw0Mi45ODIgNjUuODIyLDkwLjg4NyA5Ny4zMzcsMTM5LjU4MWwtNi42NjMsMGMtMTIuMDg1LC0zMS4xMTEgLTU3Ljg4MiwtMzkuNjk0IC05MS42MjYsLTI3LjI1YzIyLjUxNCwtMzQuNTc5IDE3Ljc5NiwtNzIuNjczIDAuOTUyLC0xMTIuMzMxWiIgc3R5bGU9ImZpbGw6I2Y2ZTBiZDsiLz48cGF0aCBkPSJNNjkuNDQ4LDE5Ny41MzhjMCwwIC01OS43MDcsLTE1LjI0MyAtNjguMzk4LC0xNy40NjJjLTAuMDc2LC0wLjAxOSAtMC4xNTQsMC4wMiAtMC4xODQsMC4wOTJjLTAuMDMsMC4wNzIgLTAuMDAyLDAuMTU1IDAuMDY1LDAuMTk1YzkuNjgyLDUuNzc1IDkxLjY0Nyw1NC42NTggOTEuNjQ3LDU0LjY1OGwtMjMuMTMsLTM3LjQ4M1oiIHN0eWxlPSJmaWxsOiM4ZDZlNDE7Ii8+PHBhdGggZD0iTTE2NC40NSw0Ny45MDNjMCwtNS4zNTMgNC4zNDYsLTkuNjk4IDkuNjk4LC05LjY5OGwxOS4zOTcsLTBjNS4zNTIsLTAgOS42OTgsNC4zNDUgOS42OTgsOS42OThsLTAsMTU2Ljk1M2MtMCw1LjM1MyAtNC4zNDYsOS42OTggLTkuNjk4LDkuNjk4bC0xOS4zOTcsMGMtNS4zNTIsMCAtOS42OTgsLTQuMzQ1IC05LjY5OCwtOS42OThsMCwtMTU2Ljk1M1oiIHN0eWxlPSJmaWxsOiM3ZjY4NDU7Ii8+PHBhdGggZD0iTTI2My45OTMsMjU2LjEwM2MyMi4xNzEsLTE0LjcxIDM2LjAwNywtMzUuNTE1IDM2LjAwNywtNTguNTY1bC0yMzAuNTUyLDBjMCwyMy43MTMgMTQuNjQzLDQ1LjA1IDM3Ljk0LDU5LjgxOWM5Ljg3NSwtMy43MjkgMjAuMDQxLC0xMS4zMzQgMzAuNDYzLC0yMi4zMzZjMzIuODExLDM1LjQ1NSA2NC4wNjksMzUuOTQzIDkzLjcwOCwwYzYuODM4LDkuNjc3IDE3LjczNiwxNi42NDYgMzIuNDM0LDIxLjA4MloiIHN0eWxlPSJmaWxsOiNiNjkyNWY7Ii8+PC9nPjwvc3ZnPg==",
                cheats: [
                    {
                        name: "Heist ESP",
                        description: "Shows you what's under each chest during a heist",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        imgs: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const stateNode = getStateNode();
                                    if (stateNode.state.stage != "heist") return;
                                    if (this.imgs == null) this.imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), (x) => x.querySelector("img").src);
                                    const esp = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.memoizedState;
                                    for (const e of document.querySelectorAll("[class*=boxContent] > div")) e.remove();
                                    const open = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.next.next.memoizedState;
                                    Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (container, i) => {
                                        const box = container.firstChild.firstChild;
                                        if (open.includes(i)) return box.style.opacity = "";
                                        box.style.opacity = "0.5";
                                        let d = document.createElement("div");
                                        d.innerHTML = "<img src='" + this.imgs[2 - esp[i]] + "' style='max-width: 75%; max-height: 75%'></img>";
                                        d.className = "chestESP";
                                        d.style.position = "absolute";
                                        d.style.inset = "0";
                                        d.style.display = "grid";
                                        d.style.placeItems = "center";
                                        d.style.pointerEvents = "none"
                                        container.onclick = () => {
                                            d.remove();
                                            box.style.opacity = "";
                                        };
                                        container.firstChild.prepend(d);
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Max Levels",
                        description: "Maxes out all islands and your boat",
                        run: function () {
                            let stateNode = getStateNode();
                            stateNode.setState({ islandLevels: new Array(stateNode.state.islandLevels.length).fill(5) }, stateNode.updateBoatLevel);
                        }
                    },
                    {
                        name: "Set Doubloons",
                        description: "Sets Doubloons",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function (doubloons) {
                            let stateNode = getStateNode();
                            stateNode.setState({ doubloons });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/d`,
                                val: doubloons
                            });
                        }
                    },
                    {
                        name: "Start Heist",
                        description: "Starts a heist on someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let stateNode = getStateNode();
                                return stateNode.props.liveGameController._liveApp ? new Promise(res => stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players)))) : [];
                            }
                        }],
                        run: function (target) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", function (val) {
                                if (val?.[target]) stateNode.setState({
                                    stage: "heist",
                                    heistInfo: { name: target, blook: val[target].b },
                                    prizeAmount: Math.max(1000, val[target].d || 0)
                                });
                            });
                        }
                    },
                    {
                        name: "Swap Doubloons",
                        description: "Swaps Doubloons with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let stateNode = getStateNode();
                                return stateNode.props.liveGameController._liveApp ? new Promise(res => stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players)))) : [];
                            }
                        }],
                        run: async function (target) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", function (val) {
                                if (!val?.[target]) return;
                                stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}`,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        d: val[target].d,
                                        tat: `${target}:${val[target].d - stateNode.state.doubloons}`
                                    }
                                });
                                stateNode.setState({ doubloons: val[target].d });
                            });
                        }
                    },
                    {
                        name: "Take Doubloons",
                        description: "Takes Doubloons from someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let stateNode = getStateNode();
                                return stateNode.props.liveGameController._liveApp ? new Promise(res => stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players)))) : [];
                            }
                        }],
                        run: async function (target) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", function (val) {
                                if (!val?.[target]) return;
                                stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}`,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        d: stateNode.state.doubloons + val[target].d,
                                        tat: `${target}:${val[target].d}`
                                    }
                                });
                                stateNode.setState({ doubloons: stateNode.state.doubloons + val[target].d });
                            });
                        }
                    }
                ],
            },
            brawl: {
                name: "Monster Brawl",
                img: "https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg",
                cheats: [
                    {
                        name: "Double Enemy XP",
                        description: "Doubles enemy XP drop value",
                        run: function () {
                            const colliders = getStateNode().game.current.config.sceneConfig.physics.world.colliders._active.filter(x => x.callbackContext?.toString?.()?.includes?.('dmgCd'));
                            for (let i = 0; i < colliders.length; i++) {
                                const enemies = colliders[i].object2;
                                let _start = enemies.classType.prototype.start;
                                enemies.classType.prototype.start = function () { _start.apply(this, arguments); this.val *= 2; };
                                enemies.children.entries.forEach(e => e.val *= 2);
                            }
                        }
                    },
                    {
                        name: "Half Enemy Speed",
                        description: "Makes enemies move 2x slower",
                        run: function () {
                            const colliders = getStateNode().game.current.config.sceneConfig.physics.world.colliders._active.filter(x => x.callbackContext?.toString?.()?.includes?.('dmgCd'));
                            for (let i = 0; i < colliders.length; i++) {
                                const enemies = colliders[i].object2;
                                let _start = enemies.classType.prototype.start;
                                enemies.classType.prototype.start = function () { _start.apply(this, arguments); this.speed *= 0.5; };
                                enemies.children.entries.forEach(e => e.speed *= 0.5);
                            }
                        }
                    },
                    {
                        name: "Instant Kill",
                        description: "Sets all enemies health to 1",
                        run: function () {
                            const colliders = getStateNode().game.current.config.sceneConfig.physics.world.colliders._active.filter(x => x.callbackContext?.toString?.()?.includes?.('dmgCd'));
                            for (let i = 0; i < colliders.length; i++) {
                                const enemies = colliders[i].object2;
                                let _start = enemies.classType.prototype.start;
                                enemies.classType.prototype.start = function () { _start.apply(this, arguments); this.hp = 1; };
                                enemies.children.entries.forEach(e => e.hp = 1);
                            }
                        }
                    },
                    {
                        name: "Invincibility",
                        description: "Makes you invincible",
                        run: function () {
                            for (const collider of getStateNode().game.current.config.sceneConfig.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime') || x.callbackContext?.toString().includes('dmgCd'))) collider.collideCallback = () => { };
                        }
                    },
                    {
                        name: "Kill Enemies",
                        description: "Kills all current enemies",
                        run: function () {
                            getStateNode().game.current.config.sceneConfig.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                        }
                    },
                    {
                        name: "Magnet",
                        description: "Pulls all xp towards you",
                        run: function () {
                            getStateNode().game.current.config.sceneConfig.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes('magnetTime')).collideCallback({ active: true }, { active: true, setActive() { }, setVisible() { } });
                        }
                    },
                    {
                        name: "Max Current Abilities",
                        description: "Maxes out all your current abilities",
                        run: function () {
                            const stateNode = getStateNode();
                            for (const [ability, level] of Object.entries(stateNode.state.abilities)) for (let i = 0; i < (10 - level); i++) stateNode.game.current.config.sceneConfig.game.events.emit("level up", ability, stateNode.state.abilities[ability]++);
                            stateNode.setState({
                                level: stateNode.game.current.config.sceneConfig.level = [1, 3, 5, 10, 15, 25, 35].sort((a, b) => Math.abs(a - stateNode.state.level) - Math.abs(b - stateNode.state.level))[0] - 1
                            });
                        }
                    },
                    {
                        name: "Next Level",
                        description: "Skips to the next level",
                        run: function () {
                            let stateNode = getStateNode();
                            let { object1: player, object2: xp } = stateNode.game.current.config.sceneConfig.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes('emit("xp'));
                            xp.get().spawn(player.x, player.y, ((e) => 1 === e ? 1 : e < 5 ? 5 : e < 10 ? 10 : e < 20 ? 20 : e < 30 ? 30 : e < 40 ? 40 : e < 50 ? 50 : 100)(stateNode.state.level) - stateNode.xp);
                        }
                    },
                    {
                        name: "Remove Obstacles",
                        description: "Removes all rocks and obstacles",
                        run: function () {
                            getStateNode().game.current.config.sceneConfig.physics.world.bodies.entries.forEach(body => { try { if (body.gameObject.frame.texture.key.includes("obstacle")) body.gameObject.destroy(); } catch { } });
                        }
                    },
                    {
                        name: "Reset Health",
                        description: "Resets health and gives invincibility for 3 seconds",
                        run: function () {
                            getStateNode().game.current.events._events.respawn.fn();
                        }
                    }
                ],
            },
            cafe: {
                name: "Caf\xe9",
                img: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl1.svg",
                style: { transform: "rotate(22.5deg)" },
                cheats: [
                    {
                        name: "Max Items",
                        description: "Maxes out items in the shop (Only usable in the shop)",
                        run: function () {
                            if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                            else {
                                const stateNode = getStateNode();
                                stateNode.setState({ items: Object.keys(stateNode.state.items).reduce((obj, item) => (obj[item] = 5, obj), {}) });
                            }
                        }
                    },
                    {
                        name: "Remove Customers",
                        description: "Skips the current customers (Not usable in the shop)",
                        run: function () {
                            const stateNode = getStateNode();
                            stateNode.state.customers.forEach((customer, i) => window.setTimeout(() => customer.blook && stateNode.removeCustomer(i, true), i * 250));
                        }
                    },
                    {
                        name: "Reset Abilities",
                        description: "Resets used abilities in shop (Only usable in the shop)",
                        run: function () {
                            if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                            else {
                                const stateNode = getStateNode();
                                stateNode.setState({ abilities: Object.keys(stateNode.state.abilities).reduce((obj, item) => (obj[item] = 5, obj), {}) });
                            }
                        }
                    },
                    {
                        name: "Set Cash",
                        description: "Sets cafe cash",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function (cafeCash) {
                            let stateNode = getStateNode();
                            stateNode.setState({ cafeCash });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/ca`,
                                val: cafeCash
                            });
                        }
                    },
                    {
                        name: "Stock Food",
                        description: "Stocks all food to 99 (Not usable in the shop)",
                        run: function () {
                            if (window.location.pathname !== "/cafe") alert("This can't be run in the shop");
                            else {
                                const stateNode = getStateNode();
                                stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: 99, level: 5 })) });
                            }
                        }
                    }
                ],
            },
            crypto: {
                name: "Crypto Hack",
                img: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/CryptoIcon.svg",
                cheats: [
                    {
                        name: "Choice ESP",
                        description: "Shows what each choice will give you",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let chest = document.querySelector('[class*=feedbackContainer]');
                                    if (chest.children.length <= 4) {
                                        let choice = document.createElement('div')
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif";
                                        choice.style.fontSize = "2em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.marginTop = "675px";
                                        choice.innerText = getStateNode().state.choices[0].text;
                                        chest.append(choice);
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Password ESP",
                        description: "Highlights the correct password",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { state } = getStateNode();
                                    if (state.stage == "hack") for (const button of document.querySelector('div[class*=buttonContainer]').children) {
                                        if (button.innerText == state.correctPassword) continue;
                                        button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                                        button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                                        button.style.textShadow = "0 0 1px #f33"
                                    };
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Always Triple",
                        description: "Always get triple crypto",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(state => getStateNode().setState(state), 25, { choices: [{ type: "mult", val: 3, rate: 0.075, blook: "Brainy Bot", text: "Triple Crypto" }] });
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Auto Guess",
                        description: "Automatically guess the correct password",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { state } = getStateNode();
                                    if (state.stage == "hack") for (const button of document.querySelector('div[class*=buttonContainer]').children) button.innerText == state.correctPassword && button.click();
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
					{
                        name: "Remove all Hack",
						description: "Removes all an attacking hacks",
						type: "toggle",
						enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
									getStateNode().setState({ hack: "" });
								}, 25);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
					{
                        name: "Set Add Crypto to 2000",
						description: "Removes all an attacking hacks",
						type: "toggle",
						enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
									let stateNode = getStateNode();
									stateNode.state.choiceObj.val == 2000
								}, 25);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Set Crypto",
                        description: "Sets crypto",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function (amount) {
                            let stateNode = getStateNode();
                            stateNode.setState({ crypto: amount, crypto2: amount });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/cr`,
                                val: amount
                            });
                        }
                    },
                    {
                        name: "Set Password",
                        description: "Sets hacking password",
                        inputs: [{
                            name: "Custom Password",
                            type: "string"
                        }],
                        run: function (password) {
                            let stateNode = getStateNode();
                            stateNode.setState({ password });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/p`,
                                val: password
                            });
                        }
                    },
                    {
                        name: "Steal Player's Crypto",
                        description: "Steals all of someone's crypto",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let stateNode = getStateNode();
                                return stateNode.props.liveGameController._liveApp ? new Promise(res => stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players)))) : [];
                            }
                        }],
                        run: function (target) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                let player;
                                if (players && (player = Object.entries(players).find((x) => x[0].toLowerCase() == target.toLowerCase()))) {
                                    const cr = player[1].cr;
                                    stateNode.setState({
                                        crypto: stateNode.state.crypto + cr,
                                        crypto2: stateNode.state.crypto + cr
                                    });
                                    stateNode.props.liveGameController.setVal({
                                        path: "c/" + stateNode.props.client.name,
                                        val: {
                                            b: stateNode.props.client.blook,
                                            p: stateNode.state.password,
                                            cr: stateNode.state.crypto + cr,
                                            tat: player[0] + ":" + cr
                                        }
                                    });
                                }
                            })
                        }
                    }
                ],
            },
            defense: {
                name: "Tower Defense",
                img: "https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg",
                cheats: [
                    {
                        name: "Earthquake",
                        description: "Shuffles around towers",
                        run: function () {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                eventName: "Earthquake",
                                event: {
                                    short: "e",
                                    color: "#805500",
                                    icon: "fas fa-mountain",
                                    desc: "All of your towers get mixed up",
                                    rate: .02
                                },
                                buyTowerName: "",
                                buyTower: {}
                            }, () => stateNode.eventTimeout = setTimeout(() => stateNode.setState({ event: {}, eventName: "" }), 6e3));
                            stateNode.tiles.forEach(row => row.forEach((col, i) => col == 3 && (row[i] = 0)));
                            let tiles = [];
                            for (let y = 0; y < stateNode.tiles.length; y++)
                                for (let x = 0; x < stateNode.tiles[y].length; x++)
                                    if (stateNode.tiles[y][x] == 0) tiles.push({ x, y });
                            tiles.sort(() => Math.random() - Math.random());
                            stateNode.towers.forEach(tower => {
                                let { x, y } = tiles.pop();
                                tower.move(x, y, stateNode.tileSize);
                                stateNode.tiles[y][x] = 3;
                            });
                        }
                    },
                    {
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function () {
                            getStateNode().towers.forEach(tower => {
                                tower.range = 100;
                                tower.fullCd = tower.cd = 0;
                                tower.damage = 1e6;
                            });
                        }
                    },
                    {
                        name: "Remove Ducks",
                        description: "Removes ducks",
                        run: function () {
                            let { ducks, tiles } = getStateNode();
                            ducks.forEach(x => (tiles[x.y][x.x] = 0));
                            ducks.length = 0;
                        }
                    },
                    {
                        name: "Remove Enemies",
                        description: "Removes all the enemies",
                        run: function () {
                            let stateNode = getStateNode();
                            stateNode.enemies = stateNode.futureEnemies = [];
                        }
                    },
                    {
                        name: "Remove Obstacles",
                        description: "Lets you place towers anywhere",
                        run: function () {
                            let stateNode = getStateNode();
                            stateNode.tiles = stateNode.tiles.map(row => row.fill(0));
                        }
                    },
                    {
                        name: "Set Damage",
                        description: "Sets damage",
                        inputs: [{
                            name: "Damage",
                            type: "number"
                        }],
                        run: function (dmg) {
                            getStateNode().dmg = dmg;
                        }
                    },
                    {
                        name: "Set Round",
                        description: "Sets the current round",
                        inputs: [{
                            name: "Round",
                            type: "number"
                        }],
                        run: function (round) {
                            getStateNode().setState({ round });
                        }
                    },
                    {
                        name: "Set Tokens",
                        description: "Sets the amount of tokens you have",
                        inputs: [{
                            name: "Tokens",
                            type: "number"
                        }],
                        run: function (tokens) {
                            getStateNode().setState({ tokens });
                        }
                    }
                ],
            },
            defense2: {
                name: "Tower Defense 2",
                img: "https://media.blooket.com/image/upload/v1593095354/Media/defense/missile.svg",
                style: { transform: "rotate(45deg)" },
                cheats: [
                    {
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function () {
                            getStateNode().state.towers.forEach(tower => {
                                tower.stats.dmg = 1e6;
                                tower.stats.fireRate = 50;
                                tower.stats.ghostDetect = true;
                                tower.stats.maxTargets = 1e6;
                                tower.stats.numProjectiles &&= 100;
                                tower.stats.range = 100;
                                if (tower.stats.auraBuffs) for (const buff in tower.stats.auraBuffs) tower.stats.auraBuffs[buff] *= 100;
                            });
                        }
                    },
                    {
                        name: "Kill Enemies",
                        description: "Kills all the enemies",
                        run: function () {
                            let stateNode = getStateNode();
                            stateNode.game.current.config.sceneConfig.enemyQueue.length = 0;
                            stateNode.game.current.config.sceneConfig.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                        }
                    },
                    {
                        name: "Set Coins",
                        description: "Sets coins",
                        inputs: [{
                            name: "Coins",
                            type: "number"
                        }],
                        run: function (coins) {
                            getStateNode().setState({ coins });
                        }
                    },
                    {
                        name: "Set Health",
                        description: "Sets the amount of health you have",
                        inputs: [{
                            name: "Health",
                            type: "number"
                        }],
                        run: function (health) {
                            getStateNode().setState({ health });
                        }
                    },
                    {
                        name: "Set Round",
                        description: "Sets the current round",
                        inputs: [{
                            name: "Round",
                            type: "number"
                        }],
                        run: function (round) {
                            getStateNode().setState({ round });
                        }
                    },
                ],
            },
            dinos: {
                name: "Deceptive Dinos",
                img: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Dog.svg",
                style: { transform: "rotate(-22.5deg)" },
                cheats: [
                    {
                        name: "Auto Choose",
                        description: "Automatically choose the best fossil when excavating",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        rand(e, t) {
                            const s = [];
                            while (s.length < t) {
                                const i = Math.random();
                                let r = 0, g = null;
                                for (let o = 0; o < e.length; o++) {
                                    r += e[o].rate;
                                    if (r >= i) {
                                        g = e[o];
                                        break;
                                    }
                                }
                                g && !s.includes(g) && s.push(g)
                            }
                            return s;
                        },
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    try {
                                        let stateNode = getStateNode();
                                        if (stateNode.state.stage === "excavate") {
                                            stateNode.state.choices.length || (stateNode.state.choices = this.rand([{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }], 3));
                                            let max = 0, index = -1;
                                            for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                const { type, val } = stateNode.state.choices[i];
                                                const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                                if (value <= max && type != "mult") continue;
                                                max = value, index = i + 1;
                                            }
                                            document.querySelector('div[class*=rockRow] > div[role="button"]:nth-child(' + index + ')').click();
                                        }
                                    } catch { }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Rock ESP",
                        description: "Shows what is under the rocks",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: (() => {
                            function rand(e, t) {
                                const s = [];
                                while (s.length < t) {
                                    const i = Math.random();
                                    let r = 0;
                                    let g;
                                    for (let o = 0; o < e.length; o++) {
                                        r += e[o].rate;
                                        if (r >= i) {
                                            g = e[o];
                                            break;
                                        }
                                    }
                                    if (g && !s.includes(g)) s.push(g);
                                }
                                return s;
                            };
                            const exps = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
                            const getExpAscii = (num) => {
                                let res = "";
                                while (num > 0) {
                                    res = exps[num % 10] + res;;
                                    num = ~~(num / 10);
                                }
                                return res;
                            };
 
                            function shortNum(value) {
                                let newValue = value.toString();
                                if (value >= 1000) {
                                    const suffixes = ["", "K", "M", "B", "T"];
                                    const suffixNum = Math.floor(Math.floor((Math.log(value) / Math.log(10)).toPrecision(14)) / 3);
                                    if (suffixNum < suffixes.length) {
                                        let shortValue = "";
                                        for (let precision = 3; precision >= 1; precision--) {
                                            shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision)).toString();
                                            const dotLessShortValue = shortValue.replace(/[^a-zA-Z 0-9]+/g, "");
                                            if (dotLessShortValue.length <= 3) break;
                                        }
                                        if (Number(shortValue) % 1 != 0) shortValue = Number(shortValue).toFixed(1);
                                        newValue = shortValue + suffixes[suffixNum];
                                    } else {
                                        let num = value;
                                        let exp = 0;
                                        while (num >= 100) {
                                            num = Math.floor(num / 10);
                                            exp += 1;
                                        }
                                        newValue = num / 10 + " × 10" + getExpAscii(exp + 1);
                                    }
                                }
                                return newValue;
                            };
                            return function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        let stateNode = getStateNode();
                                        const rocks = document.querySelector('[class*="rockButton"]').parentElement.children;
 
                                        if (!Array.prototype.every.call(rocks, element => element.querySelector('div'))) stateNode.setState({
                                            choices: rand([{ type: "fossil", val: 10, rate: 0.1, blook: "Amber" }, { type: "fossil", val: 25, rate: 0.1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: 0.175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: 0.175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: 0.15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: 0.125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: 0.075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: 0.025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: 0.05 }, { type: "mult", val: 2, rate: 0.025 }], 3)
                                        }, () => {
                                            Array.prototype.forEach.call(rocks, (element, index) => {
                                                const rock = stateNode.state.choices[index];
                                                if (element.querySelector('div')) element.querySelector('div').remove();
                                                const choice = document.createElement("div");
                                                choice.style.color = "white";
                                                choice.style.fontFamily = "Macondo";
                                                choice.style.fontSize = "1em";
                                                choice.style.display = "flex";
                                                choice.style.justifyContent = "center";
                                                choice.style.transform = "translateY(25px)";
                                                choice.innerText = rock.type === "fossil" ? `+${Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? shortNum(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)} Fossils` : `x${rock.val} Fossils Per Excavation`;;
                                                element.append(choice);
                                            });
                                        });
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        })()
                    },
                    {
                        name: "Set Fossils",
                        description: "Sets the amount of fossils you have",
                        inputs: [{
                            name: "Fossils",
                            type: "number"
                        }],
                        run: function (fossils) {
                            let stateNode = getStateNode();
                            stateNode.setState({ fossils });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/f`,
                                val: fossils
                            });
                        }
                    },
                    {
                        name: "Set Multiplier",
                        description: "Sets fossil multiplier",
                        inputs: [{
                            name: "Multiplier",
                            type: "number"
                        }],
                        run: function (fossilMult) {
                            let stateNode = getStateNode();
                            stateNode.setState({ fossilMult });
                        }
                    },
                    {
                        name: "Stop Cheating",
                        description: "Undoes cheating so that you can't be caught",
                        run: function () {
                            let stateNode = getStateNode();
                            stateNode.setState({ isCheating: false });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/ic`,
                                val: false
                            });
                        }
                    }
                ],
            },
            doom: {
                name: "Tower of Doom",
                img: "https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg",
                cheats: [
                    {
                        name: "Fill Deck",
                        description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                        run: function () {
                            if (window.location.pathname == "/tower/map") {
                                const stateNode = getStateNode();
                                stateNode.props.tower.artifacts = "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split("|");
                                stateNode.props.tower.cards = 'Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰'.split("|").map(x => {
                                    const [blook, c] = x.split(",");
                                    return { strength: 20, charisma: 20, wisdom: 20, class: c, blook };
                                });
                                try { stateNode.props.addTowerNode(); } catch { }
                                stateNode.setState({ showDeck: false });
                            } else alert("You need to be on the map to run this cheat!");
                        }
                    },
                    {
                        name: "Max Cards",
                        description: "Maxes out all the cards in your deck",
                        run: function () {
                            if (window.location.pathname == "/tower/map") {
                                const stateNode = getStateNode();
                                stateNode.props.tower.cards.forEach(card => {
                                    card.strength = 20;
                                    card.charisma = 20;
                                    card.wisdom = 20;
                                });
                                try { stateNode.forceUpdate(); } catch { }
                            } else alert("You need to be on the map to run this cheat!");
                        }
                    },
                    {
                        name: "Max Health",
                        description: "Fills the player's health",
                        run: function () {
                            if (window.location.pathname == "/tower/battle") getStateNode().setState({ myHealth: 100, myLife: 100 });
                            else alert("You need to be in battle to run this cheat!");
                        }
                    },
                    {
                        name: "Max Card Stats",
                        description: "Maxes out player's current card (Only works on attribute select page)",
                        run: function () {
                            const stateNode = getStateNode();
                            if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
                            else stateNode.setState({ myCard: { ...stateNode.state.myCard, strength: 20, charisma: 20, wisdom: 20 } });
                        }
                    },
                    {
                        name: "Min Enemy Stats",
                        description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                        run: function () {
                            const stateNode = getStateNode();
                            if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
                            else stateNode.setState({ enemyCard: { ...stateNode.state.enemyCard, strength: 0, charisma: 0, wisdom: 0 } });
                        }
                    },
                    {
                        name: "Set Coins",
                        description: "Try's to set amount of tower coins you have",
                        inputs: [{
                            name: "Coins",
                            type: "number"
                        }],
                        run: function (coins) {
                            if (window.location.pathname == "/tower/battle") try {
                                getStateNode().props.setTowerCoins(coins);
                            } catch { }
                            else alert("You need to be in battle to run this cheat!");
                        }
                    }
                ],
            },
            factory: {
                name: "Factory",
                img: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Factory_Upgrades.svg",
                cheats: [
                    {
                        name: "Choose Blook",
                        description: "Gives you a blook",
                        inputs: [{
                            name: "Blook",
                            type: "options",
                            options: [{ name: "Chick", color: "#ffcd05", class: "\uD83C\uDF3D", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3e3, 3e4, 2e5] }, { name: "Chicken", color: "#ed1c24", class: "\uD83C\uDF3D", rarity: "Common", cash: [10, 40, 200, 1400, 1e4], time: [5, 4, 3, 2, 1], price: [570, 4e3, 5e4, 8e5] }, { name: "Cow", color: "#58595b", class: "\uD83C\uDF3D", rarity: "Common", cash: [25, 75, 1500, 25e3, 25e4], time: [15, 10, 10, 10, 5], price: [500, 9500, 16e4, 4e6] }, { name: "Duck", color: "#4ab96d", class: "\uD83C\uDF3D", rarity: "Common", cash: [4, 24, 200, 3e3, 4e4], time: [3, 3, 3, 3, 3], price: [450, 4200, 7e4, 11e5] }, { name: "Goat", color: "#c59a74", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 28, 200, 1300, 12e3], time: [3, 3, 2, 2, 2], price: [500, 6400, 45e3, 5e5] }, { name: "Horse", color: "#995b3c", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 20, 270, 1800, 15e3], time: [2, 2, 2, 2, 2], price: [550, 8200, 65e3, 6e5] }, { name: "Pig", color: "#f6a9cb", class: "\uD83C\uDF3D", rarity: "Common", cash: [20, 50, 1300, 8e3, 8e4], time: [7, 7, 7, 7, 5], price: [400, 11e3, 8e4, 13e5] }, { name: "Sheep", color: "#414042", class: "\uD83C\uDF3D", rarity: "Common", cash: [6, 25, 250, 1500, 11e3], time: [3, 3, 3, 2, 2], price: [500, 5e3, 5e4, 43e4] }, { name: "Cat", color: "#f49849", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 18, 170, 1700, 13e3], time: [2, 2, 2, 2, 2], price: [480, 5500, 6e4, 5e5] }, { name: "Dog", color: "#995b3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [7, 25, 220, 1900, 9e3], time: [3, 3, 2, 2, 1], price: [460, 6600, 7e4, 73e4] }, { name: "Goldfish", color: "#f18221", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 40, 350, 3500, 35e3], time: [3, 3, 3, 3, 3], price: [750, 7200, 84e3, 95e4] }, { name: "Rabbit", color: "#e7bf9a", class: "\uD83D\uDC3E", rarity: "Common", cash: [3, 18, 185, 800, 7e3], time: [2, 2, 2, 1, 1], price: [500, 5800, 56e3, 55e4] }, { name: "Hamster", color: "#ce9176", class: "\uD83D\uDC3E", rarity: "Common", cash: [10, 45, 450, 4500, 45e3], time: [4, 4, 4, 4, 4], price: [650, 6500, 8e4, 93e4] }, { name: "Turtle", color: "#619a3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [23, 120, 1400, 15e3, 17e4], time: [10, 10, 10, 10, 10], price: [700, 8500, 11e4, 13e5] }, { name: "Puppy", color: "#414042", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 10, 75, 500, 3e3], time: [1, 1, 1, 1, 1], price: [450, 4e3, 35e3, 25e4] }, { name: "Kitten", color: "#58595b", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 8, 60, 400, 2e3], time: [1, 1, 1, 1, 1], price: [350, 3500, 26e3, 17e4] }, { name: "Bear", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [12, 70, 550, 4500, 1e5], time: [7, 7, 6, 5, 5], price: [550, 5500, 63e3, 16e5] }, { name: "Moose", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [8, 45, 400, 3500, 26e3], time: [5, 5, 4, 4, 3], price: [520, 6500, 58e3, 7e5] }, { name: "Fox", color: "#f49849", class: "\uD83C\uDF32", rarity: "Common", cash: [7, 15, 80, 550, 3e3], time: [2, 2, 1, 1, 1], price: [400, 4e3, 36e3, 24e4] }, { name: "Raccoon", color: "#6d6e71", class: "\uD83C\uDF32", rarity: "Common", cash: [5, 14, 185, 1900, 19e3], time: [2, 2, 2, 2, 2], price: [400, 5e3, 71e3, 8e5] }, { name: "Squirrel", color: "#d25927", class: "\uD83C\uDF32", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32e3, 21e4] }, { name: "Owl", color: "#594a42", class: "\uD83C\uDF32", rarity: "Common", cash: [4, 17, 155, 1500, 15e3], time: [2, 2, 2, 2, 2], price: [500, 4800, 55e3, 58e4] }, { name: "Hedgehog", color: "#3f312b", class: "\uD83C\uDF32", rarity: "Common", cash: [11, 37, 340, 2200, 3e4], time: [5, 4, 3, 2, 2], price: [540, 7e3, 77e3, 12e5] }, { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13e3], time: [2, 2, 2, 2, 2], price: [480, 4500, 43e3, 52e4] }, { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61e3, 68e4] }, { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16e3], time: [3, 3, 2, 2, 2], price: [370, 5300, 76e3, 62e4] }, { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7e3], time: [2, 2, 1, 1, 1], price: [540, 5200, 66e3, 55e4] }, { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33e3], time: [3, 3, 3, 3, 3], price: [400, 6500, 76e3, 87e4] }, { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33e3, 23e4] }, { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85e3], time: [8, 7, 6, 5, 5], price: [630, 7e3, 91e3, 14e5] }, { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51e3], time: [5, 5, 4, 4, 4], price: [550, 6200, 68e3, 1e6] }, { name: "Tiger", color: "#f18221", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6e3, 7e4, 61e4] }, { name: "Jaguar", color: "#fbb040", class: "\uD83C\uDF34", rarity: "Common", cash: [8, 28, 230, 1600, 17e3], time: [3, 3, 2, 2, 2], price: [390, 6e3, 7e4, 61e4] }, { name: "Toucan", color: "#ffca34", class: "\uD83C\uDF34", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42e3, 3e5] }, { name: "Cockatoo", color: "#7ca1d5", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 35, 160, 1700, 18e3], time: [4, 4, 2, 2, 2], price: [500, 5e3, 63e3, 7e5] }, { name: "Macaw", color: "#00aeef", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62e3, 63e4] }, { name: "Parrot", color: "#ed1c24", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 9, 90, 900, 9e3], time: [1, 1, 1, 1, 1], price: [540, 5700, 65e3, 69e4] }, { name: "Panther", color: "#2f2c38", class: "\uD83C\uDF34", rarity: "Common", cash: [12, 28, 215, 2100, 21e3], time: [5, 3, 2, 2, 2], price: [530, 6500, 76e3, 87e4] }, { name: "Anaconda", color: "#8a9143", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58e3, 59e4] }, { name: "Orangutan", color: "#bc6234", class: "\uD83C\uDF34", rarity: "Common", cash: [13, 52, 570, 4300, 7e4], time: [5, 5, 5, 4, 4], price: [600, 7e3, 8e4, 14e5] }, { name: "Capuchin", color: "#e0b0a6", class: "\uD83C\uDF34", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57e3, 68e4] }, { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5e3, 15e3, 15e4, 15e5, 1e7], time: [1, 1, 1, 1, 1], price: [8e5, 9e6, 11e7, 8e8] }, { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18e3, 6e4, 4e4, 4e6, 35e6], time: [3, 3, 2, 2, 2], price: [11e5, 12e6, 15e7, 14e8] }, { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65e3, 44e4, 46e5, 4e6], time: [3, 3, 2, 2, 2], price: [13e5, 135e5, 16e7, 16e8] }, { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 6e4, 62e4, 44e5, 38e6], time: [3, 3, 3, 2, 2], price: [12e5, 125e5, 15e6, 15e8] }, { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35e3, 14e4, 1e6, 11e6, 11e7], time: [5, 5, 4, 4, 4], price: [16e5, 15e6, 2e8, 23e8] }, { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25e3, 1e5, 68e4, 65e5, 32e6], time: [3, 3, 2, 2, 1], price: [2e6, 21e6, 23e7, 26e8] }, { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36e3, 15e4, 15e5, 15e6, 15e7], time: [4, 4, 4, 4, 4], price: [23e5, 24e6, 27e7, 3e9] }, { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24e3, 15e4, 14e5, 7e6, 75e6], time: [2, 2, 2, 1, 1], price: [45e5, 45e6, 55e7, 65e8] }, { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24e3, 95e3, 95e4, 97e5, 95e6], time: [3, 3, 3, 3, 3], price: [19e5, 2e7, 23e7, 25e8] }, { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75e3, 4e5, 6e6, 9e7, 125e7], time: [5, 5, 5, 5, 5], price: [6e6, 95e6, 16e8, 25e9] }, { name: "Two of Spades", color: "#414042", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [4500, 14e3, 14e4, 14e5, 9e6], time: [1, 1, 1, 1, 1], price: [77e4, 83e5, 98e6, 71e7] }, { name: "Eat Me", color: "#d58c55", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 45e3, 45e4, 45e5, 5e7], time: [2, 2, 2, 2, 2], price: [13e5, 14e6, 16e7, 2e9] }, { name: "Drink Me", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [12e3, 4e4, 4e5, 4e6, 45e6], time: [2, 2, 2, 2, 2], price: [12e5, 12e6, 14e7, 18e8] }, { name: "Alice", color: "#4cc9f5", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 42e3, 21e4, 21e5, 23e6], time: [2, 2, 1, 1, 1], price: [12e5, 13e6, 15e7, 19e8] }, { name: "Queen of Hearts", color: "#d62027", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [23e3, 87e3, 62e4, 75e5, 9e7], time: [4, 4, 3, 3, 3], price: [13e5, 13e6, 18e7, 24e8] }, { name: "Dormouse", color: "#89d6f8", class: "\uD83C\uDFF0", rarity: "Rare", cash: [17e3, 68e3, 7e5, 35e5, 35e6], time: [2, 2, 1, 1, 1], price: [2e6, 22e6, 25e7, 28e8] }, { name: "White Rabbit", color: "#ffcd05", class: "\uD83C\uDFF0", rarity: "Rare", cash: [26e3, 105e3, 11e6, 77e5, 72e6], time: [3, 3, 3, 2, 2], price: [2e6, 23e6, 28e7, 29e8] }, { name: "Cheshire Cat", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Rare", cash: [32e3, 1e5, 9e5, 9e6, 6e7], time: [4, 3, 3, 3, 2], price: [18e5, 19e6, 22e7, 24e8] }, { name: "Caterpillar", color: "#00c0f3", class: "\uD83C\uDFF0", rarity: "Epic", cash: [1e4, 7e4, 65e4, 75e5, 85e6], time: [1, 1, 1, 1, 1], price: [42e5, 42e6, 54e7, 69e8] }, { name: "Mad Hatter", color: "#914f93", class: "\uD83C\uDFF0", rarity: "Epic", cash: [38e3, 25e4, 15e5, 14e6, 8e7], time: [3, 3, 2, 2, 1], price: [48e5, 48e6, 52e7, 66e8] }, { name: "King of Hearts", color: "#c62127", class: "\uD83C\uDFF0", rarity: "Legendary", cash: [8e4, 42e4, 68e5, 1e8, 15e8], time: [5, 5, 5, 5, 5], price: [7e6, 11e7, 18e8, 3e10] }, { name: "Earth", color: "#416eb5", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [15e3, 45e3, 6e5, 65e5, 65e6], time: [3, 3, 3, 3, 3], price: [1e6, 11e6, 15e7, 17e8] }, { name: "Meteor", color: "#c68c3c", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [23e3, 65e3, 7e5, 45e5, 2e7], time: [5, 4, 3, 2, 1], price: [95e4, 13e6, 16e7, 16e8] }, { name: "Stars", color: "#19184d", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [1e4, 4e4, 2e5, 2e6, 18e6], time: [2, 2, 1, 1, 1], price: [14e5, 14e6, 15e7, 15e8] }, { name: "Alien", color: "#8dc63f", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [3e4, 1e5, 1e6, 11e6, 85e6], time: [4, 4, 4, 4, 4], price: [15e5, 17e6, 19e7, 17e8] }, { name: "Planet", color: "#9dc6ea", class: "\uD83D\uDE80", rarity: "Rare", cash: [25e3, 1e5, 9e5, 9e6, 9e7], time: [3, 3, 3, 3, 3], price: [2e6, 21e6, 21e7, 24e8] }, { name: "UFO", color: "#a15095", class: "\uD83D\uDE80", rarity: "Rare", cash: [17e3, 7e4, 7e5, 7e6, 7e7], time: [2, 2, 2, 2, 2], price: [21e5, 23e6, 25e7, 28e8] }, { name: "Spaceship", color: "#ffcb29", class: "\uD83D\uDE80", rarity: "Epic", cash: [6e4, 32e4, 21e5, 15e6, 85e6], time: [5, 4, 3, 2, 1], price: [48e5, 46e6, 54e7, 68e8] }, { name: "Astronaut", color: "#9bd4ee", class: "\uD83D\uDE80", rarity: "Legendary", cash: [45e3, 26e4, 25e5, 38e6, 55e7], time: [3, 3, 2, 2, 2], price: [65e5, 1e8, 17e8, 27e9] }, { name: "Lil Bot", color: "#3e564a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [4e3, 12e3, 18e4, 19e5, 25e6], time: [1, 1, 1, 1, 1], price: [73e4, 12e6, 13e7, 19e8] }, { name: "Lovely Bot", color: "#f179af", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [16e3, 65e3, 65e4, 48e5, 42e6], time: [3, 3, 3, 2, 2], price: [13e5, 14e6, 17e7, 16e8] }, { name: "Angry Bot", color: "#f1613a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [22e3, 85e3, 8e5, 62e5, 65e6], time: [4, 4, 4, 3, 3], price: [12e5, 13e6, 15e7, 17e8] }, { name: "Happy Bot", color: "#51ba6b", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [11e3, 45e3, 5e5, 25e5, 3e7], time: [2, 2, 2, 1, 1], price: [14e5, 15e6, 18e7, 24e8] }, { name: "Watson", color: "#d69b5a", class: "\uD83E\uDD16", rarity: "Rare", cash: [24e3, 1e5, 1e6, 1e7, 1e8], time: [3, 3, 3, 3, 3], price: [2e6, 22e6, 24e7, 26e8] }, { name: "Buddy Bot", color: "#9dc6ea", class: "\uD83E\uDD16", rarity: "Rare", cash: [22e3, 95e3, 65e4, 65e5, 65e6], time: [3, 3, 2, 2, 2], price: [19e5, 21e6, 23e7, 25e8] }, { name: "Brainy Bot", color: "#9ecf7a", class: "\uD83E\uDD16", rarity: "Epic", cash: [5e4, 25e4, 21e5, 21e6, 17e7], time: [4, 3, 3, 3, 2], price: [5e6, 46e6, 5e8, 67e8] }, { name: "Mega Bot", color: "#d71f27", class: "\uD83E\uDD16", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9] }].map(x => ({ name: x.name, value: JSON.stringify(x) }))
                        }],
                        run: function (blook) {
                            const stateNode = getStateNode();
                            if (stateNode.state.blooks.length >= 10) alert("Choose a blook to replace");
                            stateNode.waiting = false;
                            stateNode.chooseBlook(JSON.parse(blook));
                        }
                    },
                    {
                        name: "Free Upgrades",
                        description: "Sets upgrade prices to 0 for all current blooks",
                        run: function () {
                            const prices = [0, 0, 0, 0];
                            let stateNode = getStateNode();
                            stateNode.setState({ blooks: stateNode.state.blooks.map(blook => (blook.price = prices, blook)) });
                        }
                    },
                    {
                        name: "Max Blooks",
                        description: "Maxes out all your blooks' levels",
                        run: function () {
                            getStateNode().state.blooks.forEach(blook => blook.level = 4);
                        }
                    },
                    {
                        name: "Remove Glitches",
                        description: "Removes all enemy glitches",
                        run: function () {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                bits: 0,
                                ads: [],
                                hazards: [],
                                color: "",
                                lol: false,
                                joke: false,
                                slow: false,
                                dance: false,
                                glitch: "",
                                glitcherName: "",
                                glitcherBlook: ""
                            });
                            clearTimeout(stateNode.adTimeout);
                            clearInterval(stateNode.hazardInterval);
                            clearTimeout(stateNode.nightTimeout);
                            clearTimeout(stateNode.glitchTimeout);
                            clearTimeout(stateNode.lolTimeout);
                            clearTimeout(stateNode.jokeTimeout);
                            clearTimeout(stateNode.slowTimeout);
                            clearTimeout(stateNode.danceTimeout);
                            clearTimeout(stateNode.nameTimeout);
                        }
                    },
                    {
                        name: "Send Glitch",
                        description: "Sends a glitch to everyone else playing",
                        inputs: [{
                            name: "Glitch",
                            type: "options",
                            options: Object.entries({ lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" }).map(([value, name]) => ({ name, value }))
                        }],
                        run: function (val) {
                            let stateNode = getStateNode();
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                        }
                    },
                    {
                        name: "Set All MegaBot",
                        description: "Sets all your blooks to maxed out Mega Bots",
                        run: function () {
                            getStateNode().setState({
                                blooks: Array.from({ length: 10 }, () => ({
                                    name: "Mega Bot",
                                    color: "#d71f27",
                                    class: "🤖",
                                    rarity: "Legendary",
                                    cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                    time: [5, 5, 3, 3, 3],
                                    price: [7e6, 12e7, 19e8, 35e9],
                                    active: false,
                                    level: 4,
                                    bonus: 5.5
                                }))
                            });
                        }
                    },
                    {
                        name: "Set Cash",
                        description: "Sets amount of cash you have",
                        inputs: [{
                            name: "Cash",
                            type: "number"
                        }],
                        run: function (cash) {
                            getStateNode().setState({ cash });
                        }
                    }
                ],
            },
            fishing: {
                name: "Fishing Frenzy",
                img: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Fish_Weight.svg",
                cheats: [
                    {
                        name: "Remove Distractions",
                        description: "Removes distractions",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    getStateNode().setState({ party: "" });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Frenzy",
                        description: "Sets everyone to frenzy mode",
                        run: function () {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: stateNode.state.weight,
                                    f: "Frenzy",
                                    s: true
                                }
                            });
                        }
                    },
                    {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone",
                        inputs: [{
                            name: "Distraction",
                            type: "options",
                            options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"]
                        }],
                        run: function (f) {
                            let stateNode = getStateNode();
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: stateNode.state.weight, f, s: true
                                }
                            });
                        }
                    },
                    {
                        name: "Set Lure",
                        description: "Sets fishing lure (range 1 - 5)",
                        inputs: [{
                            name: "Lure (1 - 5)",
                            type: "number",
                            min: 1,
                            max: 5
                        }],
                        run: function (lure) {
                            getStateNode().setState({ lure: Math.max(Math.min(lure - 1, 4), 0) });
                        }
                    },
                    {
                        name: "Set Weight",
                        description: "Sets weight",
                        inputs: [{
                            name: "Weight",
                            type: "number"
                        }],
                        run: function (weight) {
                            let stateNode = getStateNode();
                            stateNode.setState({ weight, weight2: weight });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: weight,
                                    f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)]
                                }
                            });
                        }
                    }
                ],
            },
            flappy: {
                name: "Flappy Blook",
                img: "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg",
                cheats: [
                    {
                        name: "Toggle Ghost",
                        description: "Lets you go through the pipes",
                        type: "toggle",
                        enabled: false,
                        run: function () {
                            this.enabled = !this.enabled;
                            for (const body of Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig.physics.world.bodies.entries) {
                                if (!body.gameObject.frame.texture.key.startsWith("blook")) continue;
                                body.checkCollision.none = this.enabled;
                                body.gameObject.setAlpha(this.enabled ? 0.5 : 1);
                                break;
                            };
                        }
                    },
                    {
                        name: "Set Score",
                        description: "Sets flappy blook score",
                        inputs: [{
                            name: "Score",
                            type: "number"
                        }],
                        run: function (score) {
                            Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[1](score || 0);
                        }
                    }
                ],
            },
            gold: {
                name: "Gold Quest",
                img: "https://media.blooket.com/image/upload/v1661496292/Media/uiTest/Gold.svg",
                cheats: [
                    {
                        name: "Auto Choose",
                        description: "Automatically picks the option that would give you the most gold",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(async () => {
                                    let stateNode = getStateNode();
                                    if (stateNode.state.stage == "prize") {
                                        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                            try {
                                                if (players == null) return;
                                                players = Object.entries(players);
                                                let most = 0, max = 0, index = -1;
                                                for (let i = 0; i < players.length; i++)
                                                    if (players[i][0] != stateNode.props.client.name && players[i][1] > most)
                                                        most = players[i][1];
                                                for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                    const choice = stateNode.state.choices[i];
                                                    let value = stateNode.state.gold;
                                                    if (choice.type == "gold")
                                                        value = stateNode.state.gold + choice.val || stateNode.state.gold;
                                                    else if (choice.type == "multiply" || choice.type == "divide")
                                                        value = Math.round(stateNode.state.gold * choice.val) || stateNode.state.gold;
                                                    else if (choice.type == "swap")
                                                        value = most || stateNode.state.gold;
                                                    else if (choice.type == "take")
                                                        value = stateNode.state.gold + most * choice.val || stateNode.state.gold;
                                                    if ((value || 0) <= max) continue;
                                                    max = value;
                                                    index = i + 1;
                                                }
                                                document.querySelector("div[class*='choice" + index + "']")?.click();
                                            } catch { }
                                        });
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Chest ESP",
                        description: "Shows what each chest will give you",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    getStateNode().state.choices.forEach(({ text }, index) => {
                                        let chest = document.querySelector(`div[class*='choice${index + 1}']`);
                                        if (!chest || chest.querySelector('div')) return;
                                        let choice = document.createElement('div')
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Eczar";
                                        choice.style.fontSize = "2em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.transform = "translateY(200px)";
                                        choice.innerText = text;
                                        chest.append(choice)
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Reset Players Gold",
                        description: "Sets a player's gold to 0",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let stateNode = getStateNode();
                                for (let name of stateNode.state.players) {
                                    name.name
                                }
                            }
                        }],
                        run: function (target, amount) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/tat",
                                val: target + ":swap:0"
                            });
                        }
                    },
                    {
                        name: "Set Gold",
                        description: "Sets amount of gold",
                        inputs: [{
                            name: "Gold",
                            type: "number"
                        }],
                        run: function (gold) {
                            let stateNode = getStateNode();
                            stateNode.setState({ gold, gold2: gold });
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/g",
                                val: gold
                            });
                        }
                    },
                    {
                        name: "Set Players Gold",
                        description: "Sets amount of gold",
                        inputs: [{
                            name: "Gold",
                            type: "number"
                        },{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let stateNode = getStateNode();
                                return stateNode.props.liveGameController._liveApp ? new Promise(res => stateNode.props.liveGameController.getDatabaseVal("", (players) => players && res(Object.keys(players)))) : [];
                            }
                        }
                    ],
                        run: function (amount, target) {
                            console.log(target)
                            console.log(amount)
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/tat",
                                val: target + ":swap:" + amount
                            });
                        }
                    },
                    {
                        name: "Swap Gold",
                        description: "Swaps gold with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let stateNode = getStateNode();
                                return stateNode.props.liveGameController._liveApp ? new Promise(res => stateNode.props.liveGameController.getDatabaseVal("", (players) => players && res(Object.keys(players)))) : [];
                            }
                        }],
                        run: function (player) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (!players || players[player] == null) return;
                                const gold = players[player].g || 0;
                                stateNode.props.liveGameController.setVal({
                                    path: "c/" + stateNode.props.client.name,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        tat: player + ":swap:" + (stateNode.state.gold || 0),
                                        g: gold
                                    }
                                });
                                stateNode.setState({ gold, gold2: gold });
                            });
                        }
                    },
                    {
                        name: "Reset Random Loaded Player",
                        description: "Reset Random Loaded Player",
                        run: function () {
                            let stateNode = getStateNode();
                            let name = stateNode.state.players[getRandomInt(stateNode.state.players.length)]
                             stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/tat",
                                val: name.name + ":swap:0"
                            });
                        }
                    },
					{
                        name: "Reset All Loaded Players",
                        description: "Reset All Loaded Players",
                        run: function () {
                            let stateNode = getStateNode();
							for (let name of stateNode.state.players) {
								stateNode.props.liveGameController.setVal({
									path: "c/" + stateNode.props.client.name + "/tat",
									val: name.name + ":swap:0"
								});	
							}
                        }
                    },
                ],
            },
            kingdom: {
                name: "Crazy Kingdom",
                img: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Jester_lvl1.svg",
                cheats: [
                    {
                        name: "Choice ESP",
                        description: "Shows you what will happen if you say Yes or No",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(stats => {
                                    let stateNode = getStateNode();
                                    let elements = Array.prototype.reduce.call(document.querySelectorAll('[class*=statContainer]'), (obj, container, i) => (obj[stats[i]] = container, obj), {});
                                    if (stateNode.state.phase == "choice") {
                                        Array.prototype.forEach.call(document.querySelectorAll('.choiceESP'), x => x.remove());
                                        Object.keys(stateNode.state.guest.yes || {}).forEach(x => {
                                            if (elements[x] == null) return;
                                            let element = document.createElement('div');
                                            element.className = 'choiceESP';
                                            element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                                            element.innerText = String(stateNode.state.guest.yes[x]);
                                            elements[x].appendChild(element);
                                        });
                                        Object.keys(stateNode.state.guest.no || {}).forEach(x => {
                                            if (elements[x] == null) return;
                                            let element = document.createElement('div');
                                            element.className = 'choiceESP';
                                            element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                                            element.innerText = String(stateNode.state.guest.no[x]);
                                            elements[x].appendChild(element);
                                        });
                                        Array.prototype.forEach.call(document.querySelectorAll("[class*=guestButton][role=button]"), x => (x.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), x => x.remove())));
                                    }
                                }, 50, ['materials', 'people', 'happiness', 'gold']);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                Array.prototype.forEach.call(document.querySelectorAll('.choiceESP'), x => x.remove());
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Disable Tax Toucan",
                        description: "Tax evasion",
                        run: function () {
                            getStateNode().taxCounter = Number.MAX_VALUE;
                        }
                    },
                    {
                        name: "Max Stats",
                        description: "Sets all resources to the max",
                        run: function () {
                            getStateNode().setState({ materials: 100, people: 100, happiness: 100, gold: 100 });
                        }
                    },
                    {
                        name: "Set Guests",
                        description: "Sets the amount of guests you've seen",
                        inputs: [{
                            name: "Guests",
                            type: "number"
                        }],
                        run: function (guestScore) {
                            getStateNode().setState({ guestScore });
                        }
                    },
                    {
                        name: "Skip Guest",
                        description: "Skips the current guest",
                        run: function () {
                            getStateNode().nextGuest();
                        }
                    }
                ],
            },
            racing: {
                name: "Racing",
                img: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Racing_Progress.svg",
                cheats: [
                    {
                        name: "Instant Win",
                        description: "Instantly Wins the race",
                        run: function () {
                            const stateNode = getStateNode();
                            stateNode.setState({ progress: stateNode.state.goalAmount });
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/pr",
                                val: stateNode.state.goalAmount
                            });
                        }
                    },
                    {
                        name: "Set Questions",
                        description: "Sets the number of questions left",
                        inputs: [{
                            name: "Questions",
                            type: "number"
                        }],
                        run: function (progress) {
                            let stateNode = getStateNode();
                            progress = stateNode.props.client.amount - progress;
                            stateNode.setState({ progress });
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/pr",
                                val: progress
                            });
                        }
                    }
                ],
            },
            royale: {
                name: "Battle Royale",
                img: "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Bottom.svg",
                cheats: [
                    {
                        name: "Auto Answer (Toggle)",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let stateNode = getStateNode();
                                    stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Auto Answer",
                        description: "Chooses the correct answer for you",
                        run: function () {
                            let stateNode = getStateNode();
                            stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                        }
                    },
                ],
            },
            rush: {
                name: "Blook Rush",
                img: "https://ac.blooket.com/games-l/assets/shield-DEeSqHMF.png",
                cheats: [
                    {
                        name: "Set Blooks",
                        description: "Sets amount of blooks you or your team has",
                        inputs: [{
                            name: "Blooks",
                            type: "number"
                        }],
                        run: function (numBlooks) {
                            let stateNode = getStateNode();
                            stateNode.setState({ numBlooks });
                            stateNode.props.liveGameController.setVal({
                                path: (stateNode.isTeam ? "a/" : "c/") + stateNode.props.client.name + "/bs",
                                val: numBlooks
                            });
                        }
                    },
                    {
                        name: "Set Defense",
                        description: "Sets amount of defense you or your team has (Max 4)",
                        inputs: [{
                            name: "Defense (max 4)",
                            type: "number",
                            max: 4
                        }],
                        run: function (defense) {
                            let numDefense = Math.min(defense, 4);
                            let stateNode = getStateNode();
                            stateNode.setState({ numDefense });
                            stateNode.props.liveGameController.setVal({
                                path: (stateNode.isTeam ? "a/" : "c/") + stateNode.props.client.name + "/d",
                                val: numDefense
                            });
                        }
                    }
                ],
            },
            workshop: {
                name: "Santa's Workshop",
                img: "https://ac.blooket.com/games-l/assets/toy-CO4-YS66.svg",
                cheats: [
                    {
                        name: "Remove Distractions",
                        description: "Removes all enemy distractions",
                        run: function () {
                            getStateNode().setState({ fog: !1, dusk: !1, wind: !1, plow: !1, blizzard: !1, force: !1, canada: !1, trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1] });
                        }
                    },
                    {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone else playing",
                        inputs: [{
                            name: "Distraction",
                            type: "options",
                            options: Object.entries({ c: "Oh Canada", b: "Blizzard", f: "Fog Spell", d: "Dark & Dusk", w: "Howling Wind", g: "Gift Time!", t: "TREES", s: "Snow Plow", fr: "Use The Force" }).map(([value, name]) => ({ name, value }))
                        }],
                        run: function (val) {
                            let stateNode = getStateNode();
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                        }
                    },
                    {
                        name: "Set Toys",
                        description: "Sets amount of toys",
                        inputs: [{
                            name: "Toys",
                            type: "number"
                        }],
                        run: function (toys) {
                            let stateNode = getStateNode();
                            stateNode.setState({ toys });
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/t",
                                val: toys
                            });
                        }
                    },
                    {
                        name: "Set Toys Per Question",
                        description: "Sets amount of toys per question",
                        inputs: [{
                            name: "Toys Per Question",
                            type: "number"
                        }],
                        run: function (toysPerQ) {
                            getStateNode().setState({ toysPerQ });
                        }
                    },
                    {
                        name: "Swap Toys",
                        description: "Swaps toys with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let stateNode = getStateNode();
                                return stateNode.props.liveGameController._liveApp ? new Promise(res => stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players)))) : [];
                            }
                        }],
                        run: function (target) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (!players || players[target] == null) return;
                                stateNode.props.liveGameController.setVal({
                                    path: "c/" + stateNode.props.client.name + "/tat",
                                    val: `${target}:swap:${stateNode.state.toys}`
                                });
                                stateNode.setState({ toys: players[target].t });
                            });
                        }
                    }
                ],
            },
            settings: {
                name: "Settings",
                img: null,
                cheats: [
                    {
                        name: "Import Settings",
                        description: "Import a custom theme",
                        inputs: [
                            {
                                name: "JSON Data",
                                type: "string"
                            }
                        ],
                        run: function (theme) {
                            try {
                                JSON.parse(theme);
                            } catch (e) {
                                return alert("Invalid JSON provided");
                            }
                            theme = { backgroundColor: "rgb(11, 194, 207)", infoColor: "#9a49aa", cheatList: "#9a49aa", defaultButton: "#9a49aa", disabledButton: "#A02626", enabledButton: "#47A547", textColor: "white", inputColor: "#7a039d", contentBackground: "rgb(64, 17, 95)", ...JSON.parse(theme) }
                            settings.setItem("theme", theme);
                        }
                    },
                    {
                        name: "Export Settings",
                        description: "Export the current theme to JSON",
                        run: async function () {
                            await navigator.clipboard.writeText(JSON.stringify(settings.data.theme, null, 4));
                            prompt("Text copied to clipboard. (Paste below to test)");
                        }
                    },
                    {
                        name: "Defaults",
                        description: "Changes all the settings to a preset",
                        inputs: [
                            {
                                name: "Theme",
                                type: "options",
                                options: [
                                    {
                                        name: "Default",
                                        value: {
                                            backgroundColor: "rgb(11, 194, 207)",
                                            infoColor: "#9a49aa",
                                            cheatList: "#9a49aa",
                                            defaultButton: "#9a49aa",
                                            disabledButton: "#A02626",
                                            enabledButton: "#47A547",
                                            textColor: "white",
                                            inputColor: "#7a039d",
                                            contentBackground: "rgb(64, 17, 95)"
                                        }
                                    },
                                    {
                                        name: "Blacket",
                                        value: {
                                            backgroundColor: "#4f4f4f",
                                            infoColor: "#2f2f2f",
                                            cheatList: "#2f2f2f",
                                            defaultButton: "#4f4f4f",
                                            disabledButton: "#eb6234",
                                            enabledButton: "#00c20c",
                                            textColor: "white",
                                            inputColor: "#3f3f3f",
                                            contentBackground: "#2f2f2f"
                                        }
                                    },
                                    {
                                        name: "Skool.lol",
                                        value: {
                                            backgroundColor: "linear-gradient(90deg, rgba(104,45,140,1) 220px, rgba(237,30,121,1) 100%)",
                                            cheatList: "#1e2124",
                                            infoColor: "#1e2124",
                                            defaultButton: "#36393e",
                                            inputColor: "#1e2124",
                                            enabledButton: "#9c9a9a",
                                            textColor: "white",
                                            disabledButton: "#171717",
                                            contentBackground: "#292929"
                                        }
                                    },
                                    {
                                        name: "Blue - Purple Background",
                                        value: {
                                            backgroundColor: "linear-gradient(162.5deg, rgba(0,183,255,1) 220px, rgba(128,0,255,1) 100%)"
                                        }
                                    },
                                    {
                                        name: "Saint Patricks Background",
                                        value: {
                                            backgroundColor: "rgb(9, 148, 65)"
                                        }
                                    },
                                    {
                                        name: "Halloween Background",
                                        value: {
                                            backgroundColor: "rgb(41, 41, 41)"
                                        }
                                    },
                                    {
                                        name: "Fall Background",
                                        value: {
                                            backgroundColor: "rgb(224, 159, 62)"
                                        }
                                    },
                                    {
                                        name: "Winter Background",
                                        value: {
                                            backgroundColor: "linear-gradient(rgb(49, 170, 224), rgb(187, 221, 255))"
                                        }
                                    },
                                    {
                                        name: "Crypto Hack",
                                        value: {
                                            backgroundColor: "radial-gradient(#11581e,#041607)",
                                            infoColor: "#1a1a1a",
                                            cheatList: "#1a1a1a",
                                            defaultButton: "rgb(88 175 88)",
                                            disabledButton: "#A02626",
                                            enabledButton: "#0b601b",
                                            textColor: "white",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            contentBackground: "#11581e"
                                        }
                                    },
                                    {
                                        name: "Fishing Frenzy",
                                        value: {
                                            backgroundColor: "linear-gradient(180deg,#9be2fe 0,#67d1fb)",
                                            infoColor: "#c8591e",
                                            cheatList: "#c8591e",
                                            defaultButton: "#ff751a",
                                            disabledButton: "#bf0e0e",
                                            enabledButton: "#2fb62f",
                                            textColor: "white",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            contentBackground: "radial-gradient(#02b0ea 40%, #1d86ea)"
                                        }
                                    },
                                    {
                                        name: "Deceptive Dinos",
                                        value: {
                                            backgroundColor: "radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.4)), url(\"https://ac.blooket.com/play/111cb7e0ee6607ac3d1a13d534c0e0f1.png\"), #ead49a",
                                            infoColor: "#af8942",
                                            cheatList: "#af8942",
                                            defaultButton: "#af8942",
                                            disabledButton: "#A02626",
                                            enabledButton: "#47A547",
                                            textColor: "white",
                                            inputColor: "rgb(0 0 0 / 10%)",
                                            contentBackground: "radial-gradient(rgba(1,104,162,.6),rgba(24,55,110,.5)),radial-gradient(#2783b4 1.5px,#18376e 0) center / 24px 24px"
                                        }
                                    },
                                    {
                                        name: "Blook Rush",
                                        value: {
                                            backgroundColor: "repeating-linear-gradient(45deg,white,white 8%,#e6e6e6 0,#e6e6e6 16%)",
                                            defaultButton: "#36c",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            infoColor: "#36c",
                                            cheatList: "#36c",
                                            contentBackground: "#888",
                                            textColor: "white",
                                            disabledButton: "#A02626",
                                            enabledButton: "#47A547"
                                        }
                                    },
                                    {
                                        name: "Factory",
                                        value: {
                                            defaultButton: "#1563bf",
                                            infoColor: "#a5aabe",
                                            cheatList: "#a5aabe",
                                            contentBackground: "#2d313d",
                                            backgroundColor: "#3a3a3a",
                                            enabledButton: "rgb(75, 194, 46)",
                                            disabledButton: "#9a49aa",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            textColor: "white"
                                        }
                                    },
                                    {
                                        name: "Cafe",
                                        value: {
                                            backgroundColor: "linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0) center / 50px 50px,linear-gradient(rgba(200,0,0,0.5) 50%,transparent 0) white center / 50px 50px",
                                            defaultButton: "#0bc2cf",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            infoColor: "#ac7339",
                                            cheatList: "#ac7339",
                                            contentBackground: "rgb(64, 64, 64)",
                                            textColor: "white",
                                            disabledButton: "#A02626",
                                            enabledButton: "#47A547"
                                        }
                                    },
                                    {
                                        name: "Tower of Doom",
                                        value: {
                                            backgroundColor: "rgb(41 41 41)",
                                            disabledButton: "rgb(151, 15, 5)",
                                            defaultButton: "#333",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            contentBackground: "#404040",
                                            enabledButton: "#4bc22e",
                                            textColor: "white",
                                            infoColor: "#9a49aa",
                                            cheatList: "#9a49aa"
                                        }
                                    },
                                    {
                                        name: "Monster Brawl",
                                        value: {
                                            defaultButton: "rgb(45, 51, 67)",
                                            backgroundColor: "rgb(78, 95, 124)",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            contentBackground: "linear-gradient(0deg,#374154,#4f5b74)",
                                            infoColor: "#374154",
                                            cheatList: "#374154",
                                            textColor: "white",
                                            enabledButton: "#47A547",
                                            disabledButton: "#A02626"
                                        }
                                    },
                                    {
                                        name: "Tower Defense 2",
                                        value: {
                                            backgroundColor: "url(https://media.blooket.com/image/upload/v1676164454/Media/defense/backgroundTd1-02.svg) center / cover",
                                            cheatList: "#a33c22",
                                            infoColor: "#a33c22",
                                            defaultButton: "#40b1d8",
                                            inputColor: "#3e8cbe",
                                            contentBackground: "#293c82",
                                            enabledButton: "#47A547",
                                            disabledButton: "#A02626",
                                            textColor: "white"
                                        }
                                    },
                                ]
                            }
                        ],
                        run: function (theme) {
                            settings.setItem("theme", { ...settings.data.theme, ...theme });
                        }
                    },
                    {
                        name: "Scale",
                        description: "Forces the GUI to scale from 25%-100%",
                        inputs: [
                            {
                                type: "number",
                                name: "Percent scale",
                                min: 25,
                                max: 100,
                                value: (settings.data?.scale || 1) * 100
                            }
                        ],
                        run: function (scale) {
                            scale = Math.min(Math.max(scale, 25), 100);
                            settings.setItem("scale", scale / 100);
                            guiWrapper.style.transform = `scale(${(scale / 100)})`;
                        }
                    },
                    {
                        name: "Hide Keybind",
                        description: "Change the hide keybind (Click button after input to change)",
                        inputs: [
                            {
                                type: "function",
                                name: "Input",
                                function: onchange => createKeybindListener(({ shift, ctrl, alt, key }) => onchange(`${[ctrl && "Ctrl", shift && "Shift", alt && "Alt", key && key.toUpperCase()].filter(Boolean).join(' + ')}`))
                            }
                        ],
                        run: function (hide) {
                            settings.setItem("hide", hide);
                        }
                    },
                    {
                        name: "Close Keybind",
                        description: "Change the quick close keybind (Click button after input to change)",
                        inputs: [
                            {
                                type: "function",
                                name: "Input",
                                function: onchange => createKeybindListener(({ shift, ctrl, alt, key }) => onchange(`${[ctrl && "Ctrl", shift && "Shift", alt && "Alt", key && key.toUpperCase()].filter(Boolean).join(' + ')}`))
                            }
                        ],
                        run: function (close) {
                            settings.setItem("close", close);
                        }
                    },
                    {
                        name: "Background Color",
                        description: "Changes the background color of the GUI",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.backgroundColor", color);
                        }
                    },
                    {
                        name: "Category List Color",
                        description: "Changes the categories list background color",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.cheatList", color);
                        }
                    },
                    {
                        name: "Info Color",
                        description: "Changes the color of the information at the top of the GUI",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.infoColor", color);
                        }
                    },
                    {
                        name: "Button Color",
                        description: "Changes the color of the cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.defaultButton", color);
                        }
                    },
                    {
                        name: "Enabled Toggle Color",
                        description: "Changes the color of enabled toggle cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.enabledButton", color);
                        }
                    },
                    {
                        name: "Disabled Toggle Color",
                        description: "Changes the color of disabled toggle cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.disabledButton", color);
                        }
                    },
                    {
                        name: "Text Color",
                        description: "Changes the text color",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.textColor", color);
                        }
                    },
                    {
                        name: "Input Color",
                        description: "Changes the color of inputs, like the set gold number input",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.inputColor", color);
                        }
                    },
                    {
                        name: "Content Color",
                        description: "Changes the background color of the cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.contentBackground", color);
                        }
                    }
                ]
            },
 
 
 
        }
        const GUIContainer = document.createElement("div");
        function createKeybindListener(onpress, element = window) {
            return new Promise(resolve => {
                const pressed = {};
                let shift, ctrl, alt, key;
                const keydown = e => {
                    e.preventDefault();
                    pressed[e.code] = true;
                    shift ||= e.shiftKey;
                    ctrl ||= e.ctrlKey;
                    alt ||= e.altKey;
                    if (!["shift", "control", "alt", "meta"].includes(e.key.toLowerCase())) key = e.key.toLowerCase();
                    onpress?.({ shift, ctrl, alt, key });
                };
                const keyup = e => {
                    delete pressed[e.code];
                    if (Object.keys(pressed).length > 0) return;
                    element.removeEventListener("keydown", keydown);
                    element.removeEventListener("keyup", keyup);
                    resolve({ shift, ctrl, alt, key });
                };
                element.addEventListener("keydown", keydown);
                element.addEventListener("keyup", keyup);
            });
        }
        function AntiBen({ type = "div", children, ...props }) {
            let childs = [];
            let char = (space) => JSX.jsx("span", {
                style: {
                    display: "inline-block",
                    opacity: "0",
                    width: "0",
                    height: "0",
                    lineHeight: "0",
                    userSelect: "none",
                    marginLeft: space ? "5px" : null
                },
                children: String.fromCharCode(Math.floor(Math.random() * 25) + 97)
            })
            const addChar = (child) => {
                if (typeof child == "string") {
                    let text = [];
                    for (let i = 0; i < child.length; i += 3) text.push(child.slice(i, i + 3), char());
                    childs.push(...text);
                }
                else childs.push(child, char());
            }
            if (Array.isArray(children)) for (let i = 0; i < children.length; i++) addChar(children[i]);
            else addChar(children);
            return JSX.jsx(type, Object.assign({ children: JSX.jsx("span", { children: childs }) }, props));
        }
        function ScriptInput({ input, onValue, run, toggle }) {
            const { name, type, options: opts, min, max, value } = input;
            let optState;
            try {
                optState = typeof opts == "function" ? opts() : opts;
            } catch (e) {
                console.warn(e);
                optState = [];
            }
            const [options, setOptions] = useState(optState)
            const [locked, setLocked] = useState("");
            const loading = useRef(true);
            useEffect(() => {
                if (options instanceof Promise) options.then((o) => {
                    setOptions(o);
                    onValue(o[0]?.value || o[0]);
                    input.selected = o[0]?.name || o[0];
                    loading.current = false;
                }).catch(() => setOptions([]));
                else if (options?.length) {
                    onValue(options[0]?.value || options[0]);
                    input.selected = options[0]?.name || options[0];
                }
                if (type == "number") onValue(value || (min == null ? 0 : min));
                else if (type == "function") onValue(null);
                else if (!(options instanceof Promise) && !options?.length) onValue("");
            }, []);
            let el;
            if (type == "options" && options?.length) el = JSX.jsx("select", {
                onChange: e => (input.selected = e.target.children[e.target.selectedIndex].innerText, onValue(JSON.parse(e.target.value))),
                children: options.map(opt => JSX.jsx("option", {
                    value: JSON.stringify(opt?.value != null ? opt.value : opt),
                    children: opt?.name || opt
                }))
            });
            else if (type == "function") el = JSX.jsx("input", {
                className: styles.keys.cheatInput,
                placeholder: name,
                style: {
                    textAlign: "center"
                },
                readOnly: true,
                value: locked || input.data,
                onClick: async () => {
                    if (locked) return;
                    setLocked("Waiting for input...");
                    let value;
                    const data = await input.function(e => setLocked((value = e) + "..."));
                    input.data = value;
                    setLocked(false);
                    onValue(data);
                }
            });
            else {
                let isNumber = type == "number";
                el = JSX.jsx("input", {
                    onChange: e => onValue(isNumber ? parseInt(e.target.value) : e.target.value),
                    className: styles.keys.cheatInput,
                    type: isNumber ? "number" : null,
                    min: isNumber ? min : null,
                    max: isNumber ? max : null,
                    defaultValue: isNumber ? value || (min == null ? 0 : min) : null,
                    placeholder: name,
                    style: {
                        textAlign: "center",
                        backgroundColor: toggle && "#0003"
                    },
                    onKeyUp: e => e.key == "Enter" && run()
                });
            }
            return el;
        }
        function ScriptButton({ script }) {
            const args = useRef([]);
            const [enabled, setEnabled] = useState(script.enabled);
            const run = useCallback(() => {
                script.run.apply(script, args.current);
                setEnabled(script.enabled);
            }, []);
            return makeElement("div", {
                style: {
                    background: script.type == "toggle" ? enabled ? "var(--enabledButton)" : "var(--disabledButton)" : "var(--defaultButton)"
                },
                key: script.name,
                "data-tip": script.description,
                className: styles.keys.scriptButton,
                onClick: e => (e.target.matches(`.${styles.keys.scriptButton}`) || e.target.matches(`.${styles.keys.cheatName}`) || e.target.matches(`.${styles.keys.cheatName} *`)) && run()
            }, makeElement(AntiBen, {
                className: styles.keys.cheatName
            }, script.name), script.inputs?.length && script.inputs.map((input, i) => input.element || makeElement(ScriptInput, {
                onValue: val => args.current[i] = val,
                key: i,
                input: input,
                run: run,
                toggle: script.type == "toggle"
            })));
        }
        function useSettings(settingsKey) {
            const [data, updateData] = useState(JSON.parse(localStorage.getItem(settingsKey) || "{}"));
            const setItem = useCallback((k, v) => {
                k.split('.').reduce((obj, k, i, a) => (++i == a.length && (obj[k] = v), obj[k]), data);
                localStorage.setItem(settingsKey, JSON.stringify(data));
                updateData({ ...data });
                return data;
            }, [data]);
            const deleteItem = useCallback((k, v) => {
                k.split('.').reduce((obj, k, i, a) => (++i == a.length && (delete obj[k]), obj[k]), data);
                localStorage.setItem(settingsKey, JSON.stringify(data));
                updateData({ ...data });
                return data;
            }, [data]);
            const setData = useCallback((v) => {
                updateData(v);
                localStorage.setItem(settingsKey, JSON.stringify(v));
            }, []);
            useEffect(() => {
                try {
                    updateData(JSON.parse(localStorage.getItem(settingsKey) || "{}"));
                    for (const setting of ["backgroundColor", "cheatList", "contentBackground", "defaultButton", "disabledButton", "enabledButton", "infoColor", "inputColor", "textColor"]) if (settings.data[setting]) {
                        setItem(`theme.${setting}`, settings.data[setting]);
                        deleteItem(setting);
                    }
                } catch {
                    setData({});
                }
            }, [])
            return { data, setItem, deleteItem, setData };
        }
        function Draggable({ parent, children, setPos, ...props }) {
            const mouseDown = useRef(false);
            const pos = useRef({ x: 0, y: 0 });
            useEffect(() => {
                const pointerup = () => mouseDown.current = false;
                const pointermove = (e) => {
                    if (!mouseDown.current) return;
                    let dx = pos.current.x - e.clientX;
                    let dy = pos.current.y - e.clientY;
                    pos.current = { x: e.clientX, y: e.clientY };
                    var ratio = 1 || parseFloat((0.75 / window.devicePixelRatio).toFixed(2));
                    setPos({ x: parent.offsetLeft - dx / ratio, y: parent.offsetTop - dy / ratio });
                }
                document.addEventListener("pointerup", pointerup);
                document.addEventListener("pointermove", pointermove);
                return () => {
                    document.removeEventListener("pointerup", pointerup);
                    document.removeEventListener("pointermove", pointermove);
                }
            }, [parent]);
            return makeElement("div", {
                ...props, onPointerDown: e => {
                    mouseDown.current = true;
                    pos.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }, children);
        }
        function GUI() {
            const { current: pos } = useRef({
                x: Math.max(10, window.innerWidth - 1000) / 2,
                y: Math.max(10, window.innerHeight - 600) / 2,
            });
            const setPos = useCallback(({ x, y }) => {
                pos.x = x;
                pos.y = y;
                guiRef.current.style.left = `${x}px`;
                guiRef.current.style.top = `${y}px`;
            }, []);
            const [minified, setMinified] = useState(null);
            const [hidden, setHidden] = useState(false);
            const [currentMode, setCurrentMode] = useState("global");
            const guiRef = useRef();
            const alertInterval = useRef();
            settings = useSettings("JODGUISETTINGS");
            const variables = makeElement("style", null, `:root {--backgroundColor: ${settings.data?.theme?.backgroundColor || "rgb(11, 194, 207)"};--infoColor: ${settings.data?.theme?.infoColor || "#9a49aa"};--cheatList: ${settings.data?.theme?.cheatList || "#9a49aa"};--defaultButton: ${settings.data?.theme?.defaultButton || "#9a49aa"};--disabledButton: ${settings.data?.theme?.disabledButton || "#A02626"};--enabledButton: ${settings.data?.theme?.enabledButton || "#47A547"};--textColor: ${settings.data?.theme?.textColor || "white"};--inputColor: ${settings.data?.theme?.inputColor || "#7a039d"};--contentBackground: ${settings.data?.theme?.contentBackground || "rgb(64, 17, 95)"};}`);
            const { current: gamemodes } = useRef(["global", "voyage", "gold", "cafe", "crypto", "dinos", "defense", "defense2", "factory", "fishing", "flappy", "doom", "kingdom", "racing", "royale", "rush", "brawl", "workshop", "settings"]);
 
            const close = useCallback(() => {
                ReactDOM.unmountComponentAtNode(GUIContainer);
                GUIContainer.remove();
            }, []);
 
            useEffect(() => {
                window.dispatchEvent(new Event("resize"));
                let keydown = e => {
                    let hideKey = settings.data.hide || { ctrl: true, key: "e" };
                    let closeKey = settings.data.close || { ctrl: true, key: "x" };
                    if ((hideKey.ctrl && e.ctrlKey || !hideKey.ctrl && !e.ctrlKey) && (hideKey.shift && e.shiftKey || !hideKey.shift && !e.shiftKey) && (hideKey.alt && e.altKey || !hideKey.alt && !e.altKey) && e.key.toLowerCase() == hideKey.key) {
                        e.preventDefault();
                        setHidden(h => !h);
                    } else if ((closeKey.ctrl && e.ctrlKey || !closeKey.ctrl && !e.ctrlKey) && (closeKey.shift && e.shiftKey || !closeKey.shift && !e.shiftKey) && (closeKey.alt && e.altKey || !closeKey.alt && !e.altKey) && e.key.toLowerCase() == closeKey.key) {
                        e.preventDefault();
                        close();
                    }
                };
                window.addEventListener("keydown", keydown);
                return () => {
                    window.removeEventListener("keydown", keydown);
                    for (const gamemode of gamemodes) for (const cheat of Cheats[gamemode].cheats) if (cheat.enabled) cheat.run();
                }
            }, []);
            useEffect(() => {
                if (minified == null) return () => { };
                let gui = guiRef.current.querySelector("div");
                gui.style.height = !minified ? "100%" : "55px";
                gui.style.width = !minified ? "100%" : "165px";
                guiRef.current.style.top = `${parseInt(guiRef.current.style.top) + (guiRef.current.offsetHeight - 55) * (!minified ? -1 : 1)}px`;
                guiRef.current.style.left = `${parseInt(guiRef.current.style.left) + (guiRef.current.offsetWidth - 165) * (!minified ? -1 : 1)}px`;
                guiRef.current.style.pointerEvents = !minified ? "unset" : "none";
            }, [minified])
 
            return makeElement("div", {
                ref: guiRef,
                id: styles.keys.guiWrapper,
                style: {
                    top: `${pos.y}px`,
                    left: `${pos.x}px`,
                    transform: `scale(${settings.data.scale || 1})`,
                    display: hidden ? "none" : null
                }
            }, makeElement("style", null, styles.css), variables, makeElement("div", {
                id: styles.keys.gui
            }, makeElement("div", {
                id: styles.keys.controlButtons
            }, makeElement(Draggable, {
                parent: guiRef.current,
                setPos: setPos,
                style: {
                    backgroundColor: "rgb(0, 160, 255)"
                },
                className: styles.keys.dragButton
            }, makeElement("i", {
                className: "fas fa-arrows-alt"
            })), makeElement("div", {
                style: {
                    fontWeight: "bolder",
                    backgroundColor: "grey",
                    cursor: "pointer"
                },
                onClick: () => setMinified(m => !m)
            }, makeElement("i", {
                className: "fas fa-minus"
            })), makeElement("div", {
                style: {
                    fontWeight: "bolder",
                    backgroundColor: "red",
                    cursor: "pointer"
                },
                onClick: close
            }, makeElement("i", {
                className: "fas fa-times"
            }))), !minified && makeElement(React.Fragment, null, makeElement("div", {
                id: styles.keys.background
            }, makeElement("div", {
                id: styles.keys.backgroundImage
            })), makeElement(Draggable, {
                parent: guiRef.current,
                setPos: setPos,
                id: styles.keys.controls
            }, (({ ctrl: ctrlHide, shift: shiftHide, alt: altHide, key: keyHide } = { ctrl: true, key: "q" }, { ctrl: ctrlClose, shift: shiftClose, alt: altClose, key: keyClose } = { ctrl: true, key: "x" }) => {
                return makeElement(React.Fragment, null, `${[ctrlHide && "Ctrl", shiftHide && "Shift", altHide && "Alt", keyHide && keyHide.toUpperCase()].filter(Boolean).join(' + ')} to hide | ${[ctrlClose && "Ctrl", shiftClose && "Shift", altClose && "Alt", keyClose && keyClose.toUpperCase()].filter(Boolean).join(' + ')} for quick disable`, makeElement("br", null), makeElement(AntiBen, null, "Click and drag here"));
            })(settings.data.hide || {
                ctrl: true,
                key: "e"
            }, settings.data.close || {
                ctrl: true,
                key: "x"
            })), makeElement("div", {
                id: styles.keys.credits
            }, makeElement(AntiBen, {
                onClick: () => window.open("https://github.com/Gradyruan/Blooket-cheats", "_blank").focus(),
                style: {
                    cursor: "pointer"
                },
                href: "https://github.com/Gradyruan/Blooket-cheats"
            }, "Note: to load players in your lobby you need to either activate a take % or swap Normaly (Gold Quest Only)")), makeElement("div", {
                id: styles.keys.cheatList
            }, makeElement(AntiBen, {
                type: "span",
                style: {
                    textShadow: "1px 1px rgb(0 0 0 / 40%)"
                }
            }, "Cheats"), makeElement("a", {
                href: "https://discord.gg/jHjGrrdXP6",
                target: "_blank",
                id: styles.keys.bigButton
            }, makeElement("svg", {
                style: {
                    filter: "drop-shadow(2px 2px 0 rgb(0 0 0 / 20%))"
                },
                xmlns: "http://www.w3.org/2000/svg",
                width: "35",
                height: "35",
                fill: "currentColor",
                viewBox: "0 -1 21 16"
            }, makeElement("path", {
                d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
            })), makeElement(AntiBen, {
                type: React.Fragment
            }, "Discord")), gamemodes.map(gamemode => {
                return makeElement("div", {
                    key: gamemode,
                    onClick: () => setCurrentMode(gamemode),
                    className: styles.keys.cheatButton
                }, Cheats[gamemode].img ? makeElement("img", {
                    src: Cheats[gamemode].img,
                    style: {
                        maxWidth: "30px",
                        maxHeight: "30px",
                        aspectRatio: "1 / 1",
                        marginRight: "10px",
                        ...(Cheats[gamemode].style || {})
                    },
                    alt: gamemode
                }) : makeElement("div", {
                    style: {
                        marginInline: "5px",
                        width: "5px"
                    }
                }), makeElement(Textfit, {
                    mode: "single",
                    forceSingleWidthMode: false,
                    min: 1,
                    max: 20
                }, Cheats[gamemode].name));
            })), makeElement("div", {
                id: styles.keys.contentWrapper
            }, makeElement("div", {
                id: styles.keys.content
            }, makeElement(Tooltip, {
                place: "bottom",
                effect: "solid"
            }), makeElement("div", {
                id: styles.keys.cheats
            }, Cheats[currentMode].element || (Cheats[currentMode].element = makeElement(React.Fragment, null, makeElement("div", {
                className: styles.keys.headerText
            }, makeElement(AntiBen, null, Cheats[currentMode].name, " Cheats")), Cheats[currentMode].cheats.map(cheat => cheat.element || makeElement(ScriptButton, {
                key: cheat.name + cheat.type,
                script: cheat
            }))))))))));
        }
        console.log(JSX.jsx(GUI, {}))
        ReactDOM.render(JSX.jsx(GUI, {}), GUIContainer);
        document.body.append(GUIContainer);
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Gradyruan/Blooket-cheats/main/autoupdate/timestamps/reactGui.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        let i = 0;
        while (i < data.length) {
            let char = String.fromCharCode(data[i % 4 == 3 ? (i++, i++) : i++] + data[i % 4 == 3 ? (i++, i++) : i++] * 256);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let _, time = 1716839383820, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if (parseInt(time) <= 1716839383820 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    }
})();
})();
 