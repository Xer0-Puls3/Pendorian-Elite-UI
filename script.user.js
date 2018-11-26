// ==UserScript==
// @name Pendorian Elite UI
// @namespace http://pendoria.net/
// @version 1.5
// @author Puls3
// @include http*://*pendoria.net* 
// @downloadURL https://github.com/Xer0-Puls3/Pendorian-Elite-UI/raw/master/script.user.js
// @grant none
// @description Changes a large portion of the text and UI to 'Elite' blue and makes small changes to the UI.
// ==/UserScript==

//Made by Puls3 from Pendoria!
//It's very easy to edit!
//If cloned please give credit!

//Options
// 1 = True & 0 = False

//Toggle the recolor
var EliteRecolor = 1

// - Remove Battle Stats <0 - 1>
var RemoveBattleStats = 0

//Remove quest options from select quest <0 - 1>
var RemoveBattleQuest = 0
var RemoveFoodQuest = 0
var RemoveCopperQuest = 0
var RemoveGemsQuest = 0
var RemoveWoodQuest = 0

//Edit these values to change colors as a whole
var elite = "rgb(0, 153, 255)";
var darkelite = "rgb(0, 123, 235)";
var leetbutton = "rgba(0, 153, 255, 0.5)";
var leetbuttonhover = "rgba(0, 153, 255, 0.8)";
var leetdungeonback = "#334771";
var profileguildname = "rgb(0, 123, 235)";

//Options End

if (EliteRecolor == 1) {
//Add Style Element
var head = document.getElementsByTagName('head')[0];
head.insertAdjacentHTML("beforeend", `
<link rel="icon" href="https://raw.githubusercontent.com/Xer0-Puls3/Pendorian-Elite-UI/master/favicon.ico"/>
<style>

/* CHAT CSS BELOW */

.chat-username {
  color: ` + elite + `;
}

/* UI CSS Below */

body {
  background-image: url(https://zerthox.github.io/ClearVision/images/sapphire.jpg) !important;
}
.green {
  background-color: ` + elite + ` !important;
}
#expwidth {
  background-color: ` + elite + ` !important;
}
#profile, #menu, #stats-hourly {
  top: -50px;
  background-color: rgba(0,0,0,0) !important;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) , rgba(0,0,0,0.3)) !important;
}
#logo {
  display: none;
}
#quest_done {
  color: ` + elite + `;
}
#quest_prog {
  color: ` + elite + `;
}
#event {
  color: ` + elite + ` !important;
}
quest_abandon {
  background-color: ` + elite + ` !important;
}
button {
  background: ` + leetbutton + ` !important;
}
button:hover {
  background: ` + leetbuttonhover + ` !important;
}
#invinfo {
  color: ` + elite + ` !important;
}
#building-progress {
  background-color: ` + elite + ` !important;
}
#scraptowninfo {
  color: ` + elite + ` !important;
}
.activity-log-username {
  color: ` + elite + ` !important;
}
.guild-section [style*="color: rgb(29, 166, 87);"] {
    color: ` + elite + ` !important;
}
.guild-section [style*="color: #1da657;"] {
   color: ` + elite + ` !important;
}
.item-rarity-runic {
  color: ` + elite + ` !important;
  text-shadow: 0 0 1px blue !important;
}
.display-item [style*="color: rgb(29, 166, 87);"] {
  color: ` + elite + ` !important;
}
.display-item [style*="color: green;"] {
  color: ` + elite + ` !important;
}
.display-item [style*="color: #98bda1; padding-top: 5px;"] {
  color: ` + darkelite + ` !important;
}
::selection {
  color: white;
  background: ` + elite + `;
}
.guild-name {
  font-weight: bold;
  color: ` + profileguildname + `;
}
.chat-command {
  color: ` + elite + `;
}
progress {
  color: ` + elite + `;
}
progress::-webkit-progress-value {
  background: ` + elite + `;
}
progress::-moz-progress-bar {
  background: ` + elite + `;
}
progress::-webkit-progress-bar {
  background: ` + elite + `;
}

/* DUNGEON CSS BELOW */

#dungeon-progressbar-wrapper {
  background-color: ` + leetdungeonback + `;
}
#dungeon-progressbar-wrapper .progressbar {
  background-color: ` + elite + ` !important;
}
#dungeon-dialogue {
  display: none;
}

/* VIP Section */
[data-player-id*="334"] .chat-username {
  color: rgb(0, 153, 255) !important;
}

/* TS CSS BELOW */

#gainedres {
  color: ` + elite + ` !important;
}
#gainedtype {
  color: ` + elite + ` !important;
}
#guild_currency {
  color: ` + elite + ` !important;
}
#guild_amount {
  color: ` + elite + ` !important;
}
#quint span {
  color: ` + elite + ` !important;
}
.actionexperience, .actionexperience span {
  color: ` + elite + ` !important;
}
#double_tradeskill span {
  color: ` + elite + ` !important;
}
.terms-section-header {
  color: ` + elite + ` !important;
}

/* COMBAT CSS BELOW */

.timeshit, .timescrit, .timesdodged, .hitstaken, #gainedgold, .actiongold, #guild_gold {
  color: ` + elite + ` !important;
}
#double_battle span {
  color: ` + elite + ` !important;
}
</style>
`);}

//Add Link Elements
var elem = document.getElementById('gameframe-menu').childNodes[0].childNodes[0].childNodes[0];
elem.insertAdjacentHTML("beforebegin", `
<li style="vertical-align: top;"><a href="http://xer0-puls3.github.io/" target="_blank">TSMR</a></li>`);

//Remove Battle Stats
if (RemoveBattleStats == 1) {
  leetbattleelem = document.getElementsByClassName('header-stats-user')[0]
  leetbattleelem.parentNode.removeChild(leetbattleelem);
}

//Remove Battle Quest
if (RemoveBattleQuest == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#quest-dropdown [value*="1"] {
  display: none !important;
}
</style>
`);
}

//Remove Food Quest
if (RemoveFoodQuest == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#quest-dropdown [value*="4"] {
  display: none !important;
}
</style>
`);
}

//Remove Copper Quest
if (RemoveCopperQuest == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#quest-dropdown [value*="3"] {
  display: none !important;
}
</style>
`);
}

//Remove Gems Quest
if (RemoveGemsQuest == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#quest-dropdown [value*="5"] {
  display: none !important;
}
</style>
`);
}

//Remove Wood Quest
if (RemoveWoodQuest == 1) {
  var head = document.getElementsByTagName('head')[0];
  head.insertAdjacentHTML("beforeend", `
<style>
#quest-dropdown [value*="2"] {
  display: none !important;
}
</style>
`);
}
