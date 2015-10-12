#pragma strict
import System.Collections.Generic;

var myskin :GUISkin;
var escape = 0;
var start : GameObject;


function Start () {

//GUI.skin=myskin;
start.SetActive(true);

}


function onStart()
{
      Application.LoadLevel("first");

}
function onfirst()
{
      Application.LoadLevel("first");

}

function onSecond()
{

      Application.LoadLevel("second");

}
function exit()
{
Application.Quit();

}

function Update () {
if(escape){

}}