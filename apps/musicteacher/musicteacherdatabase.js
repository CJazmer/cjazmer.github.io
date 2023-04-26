const musicteacherdatabase = [
    {title: "Drums", thehtml: `
        <p>the setup below is the standard setup for right hand players.</p>    
        <img src="./assets/drumslabled.jpg">
        <h1>Cymbals</h1>
        <p>4 cymbal types: High-Hat, Crash, Ride, Splash. Leave a gap between the Highhat cymbals so they're not touching when in rest position.</p>
        <h1>Drum Sticks</h1>
        <p>Most drums sticks have a number and letter. The number is the stick thickness (7 thinnest, 2 thickest, 5 is middle/default). Letter is the tip shape (A "acorn", B "Barrel")</p>
    `
    },
    {title: "Electric Instruments", thehtml: `
        <h1>Pickups</h1>
        <img src="./assets/pickuptypeslabled.jpg">
        <p>Single Coil, Humbucker, P90</p>
        <h1>Body Types</h1>
        <p>acoustic, </p>
    `
    },
    {title: "Mixers", thehtml: `
        <h1>Analog & Digital</h1>
        <p></p>
        <h1>Volume</h1>
        <p></p>
    `
    },
    {title: "Speakers", thehtml: `
        <h1>Active & Passive</h1>
        <p>Active is powered and has plugin or battery. Passive does'nt have power source and needs amplifier.</p>
    `
    },
    {title: "Mics", thehtml: `
        <h1>Active & Passive</h1>
        <p>Active is powered and has plugin or battery. Passive does'nt have power source and needs amplifier.</p>
        <h1>Dynamic & Condenser</h1>
        <p>...</p>
    `
    },
    {title: "Cables", thehtml: `
    <img src="./assets/cabletypeslabled.jpg">    
        <h1>Cable Types</h1>
        <table>
        <tr><th>XLR</th><td>"Mic Cable" usually mics and mixer outputs, very strong and durable connection safe from electric distortion (balanced)</td></tr>
        <tr><th>TS</th><td>"instrument cable"</td></tr>
        <tr><th>TRS 1/8in</th><td>"Headphone jack"</td></tr>
        </table>
        <p>RA stands for Right Angle</p>
        <h1>Balanced & Unbalanced</h1>
        <p>...</p>
    `
    },
    {title: "Hand Precussion", thehtml: `
    <img src="./assets/handdrumslabled.jpg">    
    <h1>Conga</h1>
        <h1>Bongo</h1>
        <h1>Cajon</h1>
        <p>Cajon means box in spanish. Sit on it and hit the front face. 2 Types: Cajon with snare inside, and cajon without a snare.</p>
        <h1>Djembe</h1>
        <p>African drum either tightened with rope (traditional) or tightened with a metal frame.</p>
        <h1>Darbuka</h1>
        <p>Middle easter belly dancing drum. Made of metal sound has very tinny sound.</p>
        <img src="./assets/smallhandlabled.jpg">    
        <h1>Clave</h1>
        <p>...</p>
        <h1>Guiro</h1>
        <p>...</p>
        <img src="./assets/handdrumtypeslabled.jpg">    
        <h1>Synthetic & Hide</h1>
        <p>Synthetic heads last longer. Hide is brownish and has a spotty texture</p>

    `
    },
];

function getcurrentmusictopic(){
    let asdfasdf = musicteacherdatabase[0]
    musicteacherdatabase.forEach(m => {
        if(m.title == localStorage.getItem("currentmusictopic")){asdfasdf = m}
    })
    return asdfasdf;
}