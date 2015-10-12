#pragma strict
import System.Collections.Generic;
var myskin :GUISkin;

var escape = 0;
var end1 : GameObject;

function Start () {
//GUI.skin=myskin;

end1.SetActive(true);

}


function onRetry()
{
      Application.LoadLevel("second");

}
function onMain()
{
      Application.LoadLevel("main");

}


function exit()
{
Application.Quit();

}

function Update () {
}