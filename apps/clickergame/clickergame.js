var clicks = 0;
var clickpower = 1;
var autoclickpower = 1;
var autoclicktime = 5000;
var costs = [
    { UpgradeName: "clickpower", Cost: 100, whatitupgrade: clickpower, costtextid: document.getElementById("clickpowercost") },
    { UpgradeName: "autoclickpower", Cost: 100, whatitupgrade: autoclickpower, costtextid: document.getElementById("autoclickpowercost") },
    { UpgradeName: "autoclicktime", Cost: 100, whatitupgrade: autoclicktime, costtextid: document.getElementById("autoclicktimecost") }
]
setInterval(AutoClick, autoclicktime);
function Click() {
    clicks = clicks + clickpower;
    UpdateScreen();
}
function AutoClick() {
    clicks = clicks + autoclickpower;
    UpdateScreen();
}
function BuyFail() {
    document.getElementById("buyclicks").style.backgroundColor = "red";
    setTimeout(document.getElementById("buyclicks").style.backgroundColor = "blue", 1000)
}
function UpdateScreen() {
    clicks = Math.ceil(clicks);
    clickpower = Math.ceil(clickpower);
    autoclickpower = Math.ceil(autoclickpower);
    autoclicktime = Math.ceil(autoclicktime);
    clickpower = costs[0].whatitupgrade;
    autoclickpower = costs[1].whatitupgrade;
    autoclicktime = costs[2].whatitupgrade;
    document.getElementById("clickingpower").textContent = clickpower;
    document.getElementById("autoclickpower").textContent = autoclickpower;
    document.getElementById("autoclicktime").textContent = autoclicktime;
    document.getElementById("numofclicks").textContent = clicks;
    costs[0].costtextid.textContent = costs[0].Cost;
    costs[1].costtextid.textContent = costs[1].Cost;
    costs[2].costtextid.textContent = costs[2].Cost;
}
function BuyUpgrade(upgradename) {
    for (var i = 0; i < costs.length; i++) { // loop through upgrades find match
        if (upgradename == costs[i].UpgradeName) {
            if (clicks >= costs[i].Cost) {
                clicks = clicks - costs[i].Cost;
                if (upgradename == "autoclicktime") { costs[2].whatitupgrade = costs[2].whatitupgrade / 2; } else { costs[i].whatitupgrade = costs[i].whatitupgrade * 2; }
                break;
            }
            else { BuyFail(); }
        }
    }
    UpdateScreen();
}