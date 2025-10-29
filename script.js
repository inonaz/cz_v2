const sentences = [
    "Cory Zanoni is going to town on a tub of yoghurt.",
    "Cory Zanoni fell down a well in '04 and just stayed there.",
    "Cory Zanoni has been on the run from the federales for 13 years and shows no signs of slowing down.",
    "Cory Zanoni yearns to be known as a 'hat guy'.",
"Cory Zanoni has never been stung by a bee and lives in fear of that changing.",
	"Cory Zanoni is a friend to all birds.",
	"Cory Zanoni very clearly wants someone to ask about the pin he's wearing.",
	"Cory Zanoni spent 14 weeks trying to make 'well aint that a pile of thistles' his catchphrase.",
	"Cory Zanoni is stuck in the crawl space again.",
	"Cory Zanoni stumbled and couldn't play it off.",
	"Cory Zanoni insists on playing Monopoly without any house rules.",
	"Cory Zanoni really needs help fishing the drawstring out of his jacket's hood.",
	"Cory Zanoni just can't find a pen for the life of him.",
	"Cory Zanoni is sure his keys are around here somewhere.",
	"Cory Zanoni is desperate for a nickname.",
	"Cory Zanoni swears he lost that game of Connect 4 to a 7 year old on purpose.",
	"Cory Zanoni spent the weekend practicing his whistlin' and is no better for it."	
];

document.getElementById("random-sentence").textContent = 
    sentences[Math.floor(Math.random() * sentences.length)];
