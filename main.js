quickDrawDataSet = ["aircraft_carrier", "airplane", "alarm_clock", "ambulance", "angel", "animal_migration", "ant", "anvil", "apple", "arm", "asparagus", "axe", "backpack", "banana", "bandage", "barn", "baseball", "baseball_bat", "basket", "basketball", "bat", "bathtub", "beach", "bear", "beard", "bed", "bee", "belt", "bench", "bicycle", "binoculars", "bird", "birthday_cake", "blackberry", "blueberry", "book", "boomerang", "bottlecap", "bowtie", "bracelet", "brain", "bread", "bridge", "broccoli", "broom", "bucket", "bulldozer", "bus", "bush", "butterfly", "cactus", "cake", "calculator", "calendar", "camel", "camera", "camouflage", "campfire", "candle", "cannon", "canoe", "car", "carrot", "castle", "cat", "ceiling_fan", "cello", "cell_phone", "chair", "chandelier", "church", "circle", "clarinet", "clock", "cloud", "coffee cup", "compass", "computer", "cookie", "cooler", "couch", "cow", "crab", "crayon", "crocodile", "crown", "cruise ship", "cup", "diamond", "dishwasher", "diving_board", "dog", "dolphin", "donut", "door", "dragon", "dresser", "drill", "drums", "duck", "dumbbell", "ear", "elbow", "elephant", "envelope", "eraser", "eye", "eyeglasses", "face", "fan", "feather", "fence", "finger", "fire_hydrant", "fireplace", "firetruck", "fish", "flamingo", "flashlight", "flip_flops", "floor_lamp", "flower", "flying_saucer", "foot", "fork", "frog", "frying_pan", "garden", "garden_hose", "giraffe", "goatee", "golf_club", "grapes", "grass", "guitar", "hamburger", "hammer", "hand", "harp", "hat", "headphones", "hedgehog", "helicopter", "helmet", "hexagon", "hockey_puck", "hockey_stick", "horse", "hospital", "hot_air_balloon", "hot_dog", "hot_tub", "hourglass", "house", "house_plant", "hurricane", "ice_cream", "jacket", "jail", "kangaroo", "key", "keyboard", "knee", "knife", "ladder", "lantern", "laptop", "leaf", "leg", "light_bulb", "lighter", "lighthouse", "lightning", "line", "lion", "lipstick", "lobster", "lollipop", "mailbox", "map", "marker", "matches", "megaphone", "mermaid", "microphone", "microwave", "monkey", "moon", "mosquito", "motorbike", "mountain", "mouse", "moustache", "mouth", "mug", "mushroom", "nail", "necklace", "nose", "ocean", "octagon", "octopus", "onion", "oven", "owl", "paintbrush", "paint_can", "palm_tree", "panda", "pants", "paper_clip", "parachute", "parrot", "passport", "peanut", "pear", "peas", "pencil", "penguin", "piano", "pickup_truck", "picture_frame", "pig", "pillow", "pineapple", "pizza", "pliers", "police_car", "pond", "pool", "popsicle", "postcard", "potato", "power_outlet", "purse", "rabbit", "raccoon", "radio", "rain", "rainbow", "rake", "remote_control", "rhinoceros", "rifle", "river", "roller_coaster", "rollerskates", "sailboat", "sandwich", "saw", "saxophone", "school_bus", "scissors", "scorpion", "screwdriver", "sea_turtle", "see_saw", "shark", "sheep", "shoe", "shorts", "shovel", "sink", "skateboard", "skull", "skyscraper", "sleeping_bag", "smiley_face", "snail", "snake", "snorkel", "snowflake", "snowman", "soccer_ball", "sock", "speedboat", "spider", "spoon", "spreadsheet", "square", "squiggle", "squirrel", "stairs", "star", "steak", "stereo", "stethoscope", "stitches", "stop_sign", "stove", "strawberry", "streetlight", "string_bean", "submarine", "suitcase", "sun", "swan", "sweater", "swingset", "sword", "syringe", "table", "teapot", "teddy_bear", "telephone", "television", "tennis_racquet", "tent", "The_Eiffel_Tower", "The_Great_Wall_of_China", "The_Mona_Lisa", "tiger", "toaster", "toe", "toilet", "tooth", "toothbrush", "toothpaste", "tornado", "tractor", "traffic_light", "train", "tree", "triangle", "trombone", "truck", "trumpet", "tshirt", "umbrella", "underwear", "van", "vase", "violin", "washing_machine", "watermelon", "waterslide", "whale", "wheel", "windmill", "wine_bottle", "wine_glass", "wristwatch", "yoga", "zebra", "zigzag"]
randomNo = Math.floor((Math.random() * quickDrawDataSet.length) + 1);
Sketch = quickDrawDataSet[randomNo];
console.log(Sketch);

document.getElementById("question").innerHTML = "Sketch to be drawn : " + Sketch;

timerCounter = 0;
timerCheck = "";
drawnSketch = "";
answerHolder = "";
score = 0;

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function updateCanvas() {
    background("white");

    quickDrawDataSet = ["aircraft_carrier", "airplane", "alarm_clock", "ambulance", "angel", "animal_migration", "ant", "anvil", "apple", "arm", "asparagus", "axe", "backpack", "banana", "bandage", "barn", "baseball", "baseball_bat", "basket", "basketball", "bat", "bathtub", "beach", "bear", "beard", "bed", "bee", "belt", "bench", "bicycle", "binoculars", "bird", "birthday_cake", "blackberry", "blueberry", "book", "boomerang", "bottlecap", "bowtie", "bracelet", "brain", "bread", "bridge", "broccoli", "broom", "bucket", "bulldozer", "bus", "bush", "butterfly", "cactus", "cake", "calculator", "calendar", "camel", "camera", "camouflage", "campfire", "candle", "cannon", "canoe", "car", "carrot", "castle", "cat", "ceiling_fan", "cello", "cell_phone", "chair", "chandelier", "church", "circle", "clarinet", "clock", "cloud", "coffee cup", "compass", "computer", "cookie", "cooler", "couch", "cow", "crab", "crayon", "crocodile", "crown", "cruise ship", "cup", "diamond", "dishwasher", "diving_board", "dog", "dolphin", "donut", "door", "dragon", "dresser", "drill", "drums", "duck", "dumbbell", "ear", "elbow", "elephant", "envelope", "eraser", "eye", "eyeglasses", "face", "fan", "feather", "fence", "finger", "fire_hydrant", "fireplace", "firetruck", "fish", "flamingo", "flashlight", "flip_flops", "floor_lamp", "flower", "flying_saucer", "foot", "fork", "frog", "frying_pan", "garden", "garden_hose", "giraffe", "goatee", "golf_club", "grapes", "grass", "guitar", "hamburger", "hammer", "hand", "harp", "hat", "headphones", "hedgehog", "helicopter", "helmet", "hexagon", "hockey_puck", "hockey_stick", "horse", "hospital", "hot_air_balloon", "hot_dog", "hot_tub", "hourglass", "house", "house_plant", "hurricane", "ice_cream", "jacket", "jail", "kangaroo", "key", "keyboard", "knee", "knife", "ladder", "lantern", "laptop", "leaf", "leg", "light_bulb", "lighter", "lighthouse", "lightning", "line", "lion", "lipstick", "lobster", "lollipop", "mailbox", "map", "marker", "matches", "megaphone", "mermaid", "microphone", "microwave", "monkey", "moon", "mosquito", "motorbike", "mountain", "mouse", "moustache", "mouth", "mug", "mushroom", "nail", "necklace", "nose", "ocean", "octagon", "octopus", "onion", "oven", "owl", "paintbrush", "paint_can", "palm_tree", "panda", "pants", "paper_clip", "parachute", "parrot", "passport", "peanut", "pear", "peas", "pencil", "penguin", "piano", "pickup_truck", "picture_frame", "pig", "pillow", "pineapple", "pizza", "pliers", "police_car", "pond", "pool", "popsicle", "postcard", "potato", "power_outlet", "purse", "rabbit", "raccoon", "radio", "rain", "rainbow", "rake", "remote_control", "rhinoceros", "rifle", "river", "roller_coaster", "rollerskates", "sailboat", "sandwich", "saw", "saxophone", "school_bus", "scissors", "scorpion", "screwdriver", "sea_turtle", "see_saw", "shark", "sheep", "shoe", "shorts", "shovel", "sink", "skateboard", "skull", "skyscraper", "sleeping_bag", "smiley_face", "snail", "snake", "snorkel", "snowflake", "snowman", "soccer_ball", "sock", "speedboat", "spider", "spoon", "spreadsheet", "square", "squiggle", "squirrel", "stairs", "star", "steak", "stereo", "stethoscope", "stitches", "stop_sign", "stove", "strawberry", "streetlight", "string_bean", "submarine", "suitcase", "sun", "swan", "sweater", "swingset", "sword", "syringe", "table", "teapot", "teddy_bear", "telephone", "television", "tennis_racquet", "tent", "The_Eiffel_Tower", "The_Great_Wall_of_China", "The_Mona_Lisa", "tiger", "toaster", "toe", "toilet", "tooth", "toothbrush", "toothpaste", "tornado", "tractor", "traffic_light", "train", "tree", "triangle", "trombone", "truck", "trumpet", "tshirt", "umbrella", "underwear", "van", "vase", "violin", "washing_machine", "watermelon", "waterslide", "whale", "wheel", "windmill", "wine_bottle", "wine_glass", "wristwatch", "yoga", "zebra", "zigzag"]
    randomNo = Math.floor((Math.random() * quickDrawDataSet.length) + 1);
    Sketch = quickDrawDataSet[randomNo];
    console.log(Sketch);

    document.getElementById("question").innerHTML = "Sketch to be drawn : " + Sketch;
}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

    checkSketch();
    if (drawnSketch == Sketch) {
        answerHolder = "set";
        score++;
        document.getElementById("score").innerHTML = "Score : " + score;
    }
}

function checkSketch() {
    timerCounter++;
    document.getElementById("timer").innerHTML = "Timer : " + timerCounter;
    console.log(timerCounter);
    if (timerCounter > 1000) {
        timerCheck = "completed";
        timerCounter = 0;
        document.getElementById("timer").innerHTML = timerCounter;
    }

    if (timerCheck == "completed" || answerHolder == "set") {
        timerCheck = "";
        answerHolder = "";
        updateCanvas();
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        drawnSketch = results[0].label;
        document.getElementById("label").innerHTML = "Your Sketch : " + drawnSketch;
        document.getElementById("confidence").innerHTML = "Confidence : " + Math.round(results[0].confidence * 100) + "%";
    }
}