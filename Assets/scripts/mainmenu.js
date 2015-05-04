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
    if(GUI.Button(Rect (450,290,80,80), "One Player"))
    {
      // On Click, load the first level.
      // "Stage1" is the name of the first scene we created.
      Application.LoadLevel("first");
    }
     if(GUI.Button(Rect (550,290,80,80), "Two Players"))
    {
      // On Click, load the first level.
      // "Stage1" is the name of the first scene we created.
      Application.LoadLevel("second");
    }
  }


function Update () {

}