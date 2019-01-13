//The original fairytale Goldilocks
//The game will only continue if the player makes the ‘right’ choice.

//There are four main choices in our game:
//1.Do we enter the cabin in the first place?
//2.What bowl of oatmeal do we eat?
//3.What chair do we sit in?
//4.What bed do we sleep in?

//The starting confirm box
//For the user to say “Yes” or “No.” --- in this case “Ok” or “Cancel.”
var enterCabin = confirm("You come across a strange looking house in the woods. Do you want to go in?           Press 'OK' to Continue");
alert(enterCabin);

    if(enterCabin==true){
        //The user enters the cabin (Eneter the cabin is true)
        alert("You walk into the cabin to find a lovely kitchen. On the table you see three delicious bowls of oatmeal...           Press 'OK' to Continue");
        var porridgeChoice = prompt("Wich bowl do you pick?")

            //three porridge choices 
            //only option 1 is correct --- option 2 and 3 will end game
            if(porridgeChoice == big){
                alert("The porridge is too HOT!!! The End.");
            }
            else if(porridgeChoice== medium){
                alert("The porridge is too COLD!!! The End.");
            }
            //user only continues if they pick the correct option '1' there fore the next set of boolian choices are placed within the 'else' statement
            else{
                alert("This porridge is just right...YUM            Press 'OK' to Continue");
                //if option 1 is chosen the the user enters the living room
                var chairChoice = prompt("You walk into the living room and see three chairs. A big one, medium one and small one. Which one do you choose?")
                    //again three chair options are presented --- this time only option 'small' will be accepted --- option big and medium will end the game 
                    if(chairChoice=="big"){
                        alert("This chair is too BIG!!! The End!");
                    }
                    else if(chairChoice=="medium"){
                        alert("This chair is still too Big!!! The End!");
                    }
                    else{
                        alert("This chair is just right...");

                        alert("After a long day in the forest... breaking and entering... stealing porridge, you feel exhausted         Press 'OK' to Continue");
                        alert("You walk into the bedroom and see three beds...          Press 'OK' to Continue");
                        alert("A Big bed...         Press 'OK' to Continue");
                        alert("A medium bed...          Press 'OK' to Continue");
                        alert("And a small bed.         Press 'OK' to Continue");

                            var toNapOrNot = prompt("What time is it? If it's still before noon you can take a nap.")
                                
                            if(toNapOrNot > 12){
                                 alert("It's already late, time to go home. The End!")
                            }
                             else{
                                alert("Its still early, I can take a nap.")
                        
                                    var bedChoice = prompt("which bed will you choose?");

                                        if(bedChoice=="big"){
                                            alert("This bed is too Hard! I can't sleep!!! The End")
                                        }
                                        else if(bedChoice=="medium"){
                                            alert("This bed is too Soft! I can't sleep!!! The End")
                                        }
                                        else{
                                            alert("This bed is the definately the one!          Press 'OK' to Continue")
                                            alert("You fall into a deep slumber...          Press 'OK' to Continue")
                                            alert("You wake up three hours later to find three grizly bears stearing at you...          Press 'OK' to Continue")
                                            
                                            switch (prompt("WHAT DO YOU DO?")) {
                                                    case "run":
                                                        alert("Bears can run up to 40 mph for short distances.The highest recorded speed a human has ever reached is 27.8 mph...")
                                                        alert("The hungry bears catch you and EAT YOU! The End!")
                                                        break;
                                                
                                                    case "hide":
                                                        alert("A bear's sense of smell is so acute that they can detect animal carcases upwind and from a distance of 20 miles away...")
                                                        alert("The hungry bears find you and EAT YOU! The End!")
                                                        break;

                                                    case "fetal position":
                                                        alert("The bears are Hungr and ANGRY that you ate there breakfast....")
                                                        alert("The hungry bears find you and EAT YOU! The End!")
                                                        break;
                                                
                                                    case "sing":
                                                        alert("Bears can run up 40 mph for short distances.The highest recorded speed a human has ever reached is 27.8 mph")
                                                        alert("Identify yourself by speaking in a calm, appeasing tone. Back away slowly, preferably in the direction you came. Walk, don't run, and keep your eye on the bear so you can see how it will react.")
                                                        alert("yayyyy... you made it out alive!!!")
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

else{
    //the user does not enter the cabin (Enter the cabin is false)
    alert("You don't enter the cabin. Well... thats it folks. The End!!!");
}