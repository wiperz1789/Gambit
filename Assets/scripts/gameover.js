#pragma strict
import System.Collections.Generic;
var escape = 0;
var end : GameObject;

function Start () {
//GUI.skin=myskin;

end.SetActive(true);

}


function onRetry()
{
      Application.LoadLevel("first");

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