#pragma strict
import System.Collections.Generic;
var myskin :GUISkin;
function Start () {
//GUI.skin=myskin;



}

/// <summary>
/// Title screen script
/// </summary>
function OnGUI()
  {
    //const int buttonWidth = 84;
    //const int buttonHeight = 60;

    // Determine the button's place on screen
    // Center in X, 2/3 of the height in Y
  //if (GUI.Button (Rect (10,100,60,60), "HIT"))
    // Draw a button to start the game
    if(GUI.Button(Rect (600,100,80,80), "Retry"))
    {
      // On Click, load the first level.
      // "Stage1" is the name of the first scene we created.
      Application.LoadLevel("second");
    }
  
	if(GUI.Button(Rect (600,170,120,80), "Back to Main Menu"))
    {
      // On Click, load the first level.
      // "Stage1" is the name of the first scene we created.
      Application.LoadLevel("main");
   	 }
 	}

function Update () {

}