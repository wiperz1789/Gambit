#pragma strict

import UnityEngine;
import System.Collections;
import UnityEngine.UI;

var atk:int;
var def:int;
var pow:int;
var attack:Text;
var defance:Text;
var cardpower:Text;
function OnEnable  () {
		attack.text = "Atk:"+atk;
		defance.text = "Def:"+def;
		cardpower.text = "Pow:"+pow;
}

function Update () {

}