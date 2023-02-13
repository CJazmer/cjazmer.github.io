var theeplant = localStorage.getItem("choosenplant");
document.getElementById("plantname").textContent = theeplant;
var path = "../../images/plants/";        // ../../images/plants/plants/weed/milkweed/milkweed1.jpg
var plantname = document.getElementById("plantname").innerHTML.toLowerCase() // Lowercase & no spaces
plantname = plantname.replaceAll(' ','');
var puthere = document.getElementById("puthere");
var numofimagesinfolder = 10;
var titlepic = document.getElementById("titlepic");



update();
function update() {
    let planttype = [
        { plant: "beebalm", type: "sent", parentfolder: "" },
        { plant: "catnip", type: "sent", parentfolder: "" },
        { plant: "groundivy", type: "sent", parentfolder: "" },
        { plant: "pineappleweed", type: "sent", parentfolder: "" },
        { plant: "buckthorn", type: "shrub", parentfolder: "" },
        { plant: "dogbane", type: "shrub", parentfolder: "" },
        { plant: "dogwood", type: "shrub", parentfolder: "" },
        { plant: "sumac", type: "shrub", parentfolder: "" },
        { plant: "witchhazel", type: "shrub", parentfolder: "" },
        { plant: "redelderberry", type: "shrub", parentfolder: "elderberry" },
        { plant: "blackraspberry", type: "weed", parentfolder: "raspberry" },
        { plant: "stingingnettle", type: "weed", parentfolder: "nettle" },
        { plant: "canadianwoodnettle", type: "weed", parentfolder: "nettle" },
        { plant: "giantragweed", type: "weed", parentfolder: "ragweed" },
        { plant: "creepingthistle", type: "weed", parentfolder: "thistle" },
        { plant: "globethistle", type: "weed", parentfolder: "thistle" },
        { plant: "redbaneberry", type: "weed", parentfolder: "baneberry" },
        { plant: "whitebaneberry", type: "weed", parentfolder: "baneberry" },
        { plant: "blueviolet", type: "weed", parentfolder: "violet" },




        { plant: "orientalbittersweet", type: "vine", parentfolder: "bittersweet" },
        { plant: "riverbankgrape", type: "vine", parentfolder: "grape" },
        { plant: "virginiacreeper", type: "vine", parentfolder: "" },
        { plant: "hogpeanut", type: "vine", parentfolder: "" },
        { plant: "poisonivy", type: "vine", parentfolder: "" },
        { plant: "wildcucumber", type: "vine", parentfolder: "" },

    ]

   var ogpath = path; var found = false;
   planttype.forEach(p => { // weed/baneberry/whitebaneberry  - make the right path
      if (plantname == p.plant) { // if found
      if (p.parentfolder == "") { path += p.type + "/" + plantname; } 
      else { path += p.type + "/" + p.parentfolder;} // if parent folder normal
      found = true;
      }
    })
    if (found == false) { path += "weed/" + "/" + plantname; }



      
        var count = 1;
        while (count < numofimagesinfolder) {
      var imageee = document.createElement("img"); imageee.src = path + "/" + plantname + count + ".jpg";
      puthere.appendChild(imageee);
      imageee.className = "gallery";
      count++;
        }
      
      count++;
   

    var imageeee = document.createElement("img"); imageeee.src = "../../images/plants/weed/" + plantname + "/" + plantname + ".jpg";
    titlepic.appendChild(imageeee); // Main image
    imageeee.className = "gallery";


    var plantinfo = [
        { plant: "dandelion", commonness: "Very Common", growsin: "Worldwide, Everywhere", othernames: "puff ball, blow ball, cankerwort", scientificname: "Taraxacum", family: "Daisy", origin: "Eurasia", uses: "food, tea", seed: "seed attached to bottom of fuzzy umbrella" },
        { plant: "broadleafplantain", commonness: "Very Common", growsin: "Worldwide, Everywhere", othernames: "plantain, ribgrass, ribwort, white-man's foot", scientificname: "Plantago major", family: "Plantains", origin: "Eurasia", uses: "food", seed: "" },
        { plant: "garlicmustard", commonness: "Common", growsin: "Worldwide, in/along forest edges", othernames: "hedge garlic, poor man's mustard, jack-in-the-bush, garlic root, garlicwort, mustard root", scientificname: "Alliaria petiolata", family: "Mustard", origin: "Europe", uses: "Seasoning, Removes itching, Vitamin A & C Loaded", seed: "grows narrow pods year 2" },
        { plant: "wildginger", commonness: "Common", growsin: "Shady Woodlands", othernames: "Cat's Foot, Coltsfoot, Heart-Leaf", scientificname: "Asarum canadense", family: "Birthwort", origin: "Asia", uses: "Treat Upset Stomachs, Vitamin C Loaded", seed: "" },
        { plant: "woodsorrel", commonness: "Very Common", growsin: "Worldwide, house landscaping", othernames: "sour grass, shamrock weed", scientificname: "Oxalis acetosella", family: "Wood Sorrels", origin: "North America", uses: "", seed: "grows little seed pods" },
        { plant: "purslane", commonness: "Very Common", growsin: "Worldwide, house landscaping", othernames: "spotted euphorbia, spotted sandmat, milk-purslane, prostrate spurge", scientificname: "Euphorbia maculata", family: "Spurge", origin: "North America (East)", uses: "", seed: "" },
        { plant: "creepingthistle", commonness: "Very Common", growsin: "Grassy fields", othernames: "Canada thistle, field thistle", scientificname: "Cirsium arvense", family: "Daisy", origin: "Eurasia", uses: "Food", seed: "" },
        { plant: "burdock", commonness: "Common", growsin: "Fields, trails", othernames: "lappa, bardana, clotbur", scientificname: "Arctium lappa", family: "Daisy", origin: "Eurasia", uses: "", seed: "" },
        { plant: "milkweed", commonness: "Very Common", growsin: "Fields", othernames: "butterfly flower, silkweed", scientificname: "Asclepias", family: "Dogbane", origin: "NorthAmerica", uses: "", seed: "Big seedpod that grows fuzz inside" },
        { plant: "wildcarrot", commonness: "Very Common", growsin: "", othernames: "", scientificname: "", family: "", origin: "", uses: "", seed: "" },
        { plant: "", commonness: "", growsin: "", othernames: "", scientificname: "", family: "", origin: "", uses: "", seed: "" },
        { plant: "", commonness: "", growsin: "", othernames: "", scientificname: "", family: "", origin: "", uses: "", seed: "" },

        { plant: "goldenrod", commonness: "Very Common", growsin: "Grassy Fields, Roadsides", othernames: "ee", scientificname: "Solidago", family: "Daisy (Asteraceae)", origin: "North America", uses: "Tea, Food", seed: "" },

         
    ]

    i = 0
    while (i < plantinfo.length) {
        if (plantinfo[i].plant == plantname) {
            document.getElementById("commonness").innerHTML = plantinfo[i].commonness;
            document.getElementById("growsin").innerHTML = plantinfo[i].growsin;
            document.getElementById("uses").innerHTML = plantinfo[i].uses;
            document.getElementById("scientificname").innerHTML = plantinfo[i].scientificname;
            document.getElementById("family").innerHTML = plantinfo[i].family;
            document.getElementById("origin").innerHTML = plantinfo[i].origin;
            document.getElementById("othernames").innerHTML = plantinfo[i].othernames;

        }
        i++;
    }
}