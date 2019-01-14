//The original fairytale Goldilocks
//The game will only continue if the player makes the ‘right’ choice.

//There are five main choices in our game:
//1.Do we enter the cabin in the first place?
//2.What bowl of oatmeal do we eat?
//3.What chair do we sit in?
//4.What bed do we sleep in?
//5.And How to survive a bear attack!

//The starting confirm box
//For the user to say “Yes” or “No.” --- in this case “Ok” or “Cancel.”
var enterCabin = confirm("You come across a strange looking house in the woods. Do you want to go in?\nPress 'OK' to enter\nPress 'Cancel' to leave");

if (enterCabin == true) {
    //The user enters the cabin (Enter the cabin is true)
    alert("You walk into the cabin to find a lovely kitchen. On the table you see three delicious bowls of oatmeal\n Press 'OK' to Continue");
    var porridgeChoice = prompt("Which bowl do you pick?\nChoose between 'big' 'madium' and 'small'")

    //three porridge choices 
    //only option 1 is correct --- option 2 and 3 will end game
    if (porridgeChoice == "big") {
        alert("The porridge is too HOT!!! The End.");
    }
    else if (porridgeChoice == "medium") {
        alert("The porridge is too COLD!!! The End.");
    }
    //user only continues if they pick the correct option '1' there fore the next set of boolian choices are placed within the 'else' statement
    else {
        alert("This porridge is just right...YUM\nPress 'OK' to Continue");
        //if option 1 is chosen the the user enters the living room
        var chairChoice = prompt("You walk into the living room and see three chairs. A big one, medium one and small one. Which one do you choose?\nChoose between 'big' 'madium' and 'small")
        //again three chair options are presented --- this time only option 'small' will be accepted --- option big and medium will end the game 
        if (chairChoice == "big") {
            alert("This chair is too BIG!!! The End!");
        }
        else if (chairChoice == "medium") {
            alert("This chair is still too Big!!! The End!");
        }
        else {
            alert("This chair is just right...\nPress 'OK' to Continue");
            alert("After a long day in the forest... breaking and entering... stealing porridge, you feel exhausted\nPress 'OK' to Continue");
            alert("You walk into the bedroom and see three beds...\nPress 'OK' to Continue");
            alert("A Big bed...\nPress 'OK' to Continue");
            alert("A medium bed...\nPress 'OK' to Continue");
            alert("And a small bed.\nPress 'OK' to Continue");

            var toNapOrNot = prompt("What time is it? If still before noon you can take a nap.\nEnter a number less than 12 to take a nap, or a number greater than 12 to leave.")

            if (toNapOrNot > 12) {
                alert("It's already late, time to go home. The End!")
            }
            else {
                alert("It's still early, I can take a nap.")

                var bedChoice = prompt("Which bed will you choose?\nChoose between 'big' 'madium' and 'small");

                if (bedChoice == "big") {
                    alert("This bed is too Hard! I can't sleep!!! The End")
                }
                else if (bedChoice == "medium") {
                    alert("This bed is too Soft! I can't sleep!!! The End")
                }
                else {
                    alert("This bed is perfect!\nPress 'OK' to Continue")
                    alert("You fall into a deep slumber...\nPress 'OK' to Continue")
                    alert("You wake up three hours later to find three grizly bears stearing at you...\nPress 'OK' to Continue")

                    switch (prompt("WHAT DO YOU DO?\nChoose between 'run', 'hide', 'play dead', 'fight' or 'sing'.")) {
                        case "run":
                            alert("Bears can run up to 40 mph for short distances.The highest recorded speed a human has ever reached is 27.8 mph...")
                            alert("The hungry bears catch you and EAT YOU! The End!")
                            break;

                        case "hide":
                            alert("A bear's sense of smell is so acute that they can detect animal carcases upwind and from a distance of 20 miles away...")
                            alert("The hungry bears find you and EAT YOU! The End!")
                            break;

                        case "play dead":
                            alert("The bears are Hungry and ANGRY that you ate their breakfast...")
                            alert("The hungry bears find you and EAT YOU! The End!")
                            break;

                        case "fight":
                            alert("A human could never hope to overpower a bear using only physical strength...")
                            alert("The hungry bears tear you to pieces! The End!")
                            break;

                        case "sing":
                            alert("Bears can run up 40 mph for short distances.The highest recorded speed a human has ever reached is 27.8 mph")
                            alert("Identify yourself by speaking in a calm, appeasing tone. Back away slowly. Walk, don't run.")
                            alert("yayyyy... you made it out alive!!! Thats it folks... The End!")
                            break;

                        default:
                            alert("Nope... hungry bears wont have it!!! Thats it folks... The End!")
                            break;
                    }
                }
            }
        }
    }
}

else {
    //the user does not enter the cabin (Enter the cabin is false)
    alert("You don't enter the cabin. Well... thats it folks. The End!!!");
}