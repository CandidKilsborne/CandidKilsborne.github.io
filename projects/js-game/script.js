confirm("Choose your own adventure... Well somewhat.");

var player = {
	name: "",
	age: ""
};

var knockOnPicture;
var attackPicture;

// Setting the players information.

player["name"] = prompt("What is your name?");

while(player["name"] === "") {
	player["name"] = prompt("Alright wise guy, what's your name? ...Please.");
}

if(player["name"] !== "") {
	player["age"] = prompt("Welcome " + player["name"] + ". How old are you?");
}

while(player["age"] === "") {
	player["age"] = prompt("Welcome " + player["name"] + ". How old are you?");
}

if (player["age"] < 16) {
	alert("You are just a lad. We need an adventurer. But you'll do.");
} else if (player["age"] > 55) {
	alert("Well you've had a good life. Follow me to your....er...future. Yeah! That's it. Future!");
} else {
	alert("What a shame to see youth wasted....er...not on this quest! This quest is the best. Really! It's not a suicide mission!");
}

// Instructions for the game.

alert("Ok. You have to find a key, it's hidden behind a picture. You can move left and right to go to different pictures. You must knock on the picture to see if its solid or hollow. The hollow on will have the key. All you have is a small dagger to attack with. Once you have the key, you can escape. Good luck!"); 
var ready = confirm("Ready?"); 
while(ready == false) {     
	alert("Ok. You have to find a key, it's hidden behind a picture. You can move left and right to go to different pictures. You must knock on the picture to see if its solid or hollow. The hollow on will have the key. All you have is a small dagger to attack with Once you have the key, you can escape. Good luck!");
	ready = confirm("Ready?"); 
}

// Start of quest
var playersMove = prompt("As you awake in a room, you can see the exit far to your right. There are two pictures in the room. One towards the left and one towards the right. Which way would you like to go?");
	
	if (playersMove == "left" || playersMove == "l") {
		knockOnPicture = confirm("You are at a picture. Try knocking on it?");
		switch (knockOnPicture) {
			case true:
				alert("You nearly broke your hand hitting it so hard. Well atleast we know it's solid");
				break;
			case false:
				alert("Okay, we'll try a different one.");
				break;
			}
	} else if (playersMove == "right" || playersMove == "r") {
		knockOnPicture = confirm("You are at a picture. Try knocking on it?");
		switch (knockOnPicture) {
			case true:
				alert("Swinging at it like that, you're asking for a broken hand. Well good thing this one didn't have a wall behind it. Wait no wall!");
				attackPicture = confirm("Well what are you waiting for? Stab away my friend!")
				break;
			case false:
				alert("Okay, we'll try a different one.");
				break;
			}
	}

if(attackPicture == true) {
	alert("You found the key! Freedom is now yours!");
	alert("Sad about leaving the random person in the room? Play again and don't stab at the picture.");
} else {
	alert("Okay, you want to stay here? Well if you really want to I won't argue. I would actaully enjoy the company. I know something that would be fun, lets play eye spy. I'll go first....");
	alert("Thanks for playing.");
}




