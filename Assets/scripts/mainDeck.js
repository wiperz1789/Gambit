#pragma strict
import System.Collections.Generic;
import UnityEngine;
import System.Collections;
import UnityEngine.UI;

var uicard : GameObject;
var message:Text;
var p1score:Text;
var p2score:Text;
var hitbut : GameObject;

var original : GameObject;
var Deck : List.<GameObject>;
var score1 : List.<int>;
var score2 : List.<int>;
var Cards : List.<GameObject>;
var Cards1 : List.<GameObject> = new List.<GameObject>();
var Player : List.<GameObject> ;
var FirstPlayer : List.<GameObject> = new List.<GameObject>();
var SecondPlayer : List.<GameObject> = new List.<GameObject>();
var display : List.<GameObject>;
var temp : List.<GameObject> ;
var dPos1 : Transform;
var pPos1 : Transform;
var pPos2 : Transform;
var pPos3 : Transform;
var pPos4 : Transform;
var dPos5 : Transform;
var dPos6 : Transform;
var ppPos1 : Transform;
var ppPos2 : Transform;
var poPos1 : Transform;
var poPos2 : Transform;
var p1s:int= 0;
var p2s:int =0;
var reset  = 0;
var dealerFirstCard : GameObject;
var playerFirstCard : GameObject;
var new1:int;
var new2:int;
var waitTime: float = 1;
var win1= 1;
var win2= 0;
var clicked =0;
var hit = 0;
var myskin :GUISkin;
var cardtracker:List.<GameObject> = new List.<GameObject>();
var cardtracker1:List.<GameObject> = new List.<GameObject>();


function Start () {

uicard.SetActive(false);
message.text = "Click the Hit.";
//GUI.skin=myskin;
 ResetDeck();

}

/**function OnGUI()
{
	if (GUI.Button (Rect (350,50,60,60), "HIT"))
	{
	 
		}
	if (GUI.Button (Rect (350,290,60,60),"P1")&&hit)
		{
		 
}
*/
function hits()
{
message.text = "";

hit=1;
		if(Cards.Count==0&&Player.Count==0){
			Cards.AddRange(Deck);
			Player.AddRange(Cards);}
			if (Player.Count == 30)
			{
				StartDealing1();
			}
	hitbut.SetActive(false);

}
function StartPutting1()
{
	for(var i:int=0; i < cardtracker1.Count; i++)
	{
		var go = cardtracker1[i];
		if (go)
		{
			GameObject.DestroyObject(go);
		}
	}
	cardtracker1.Clear();
	var newCard1 : GameObject = BuyCard();
	//newCard1.transform.position = dPos6.transform.position;
		cardtracker1.Add(newCard1);


	var pPos2_card= newCard1.GetComponent(cardScript).cardDefence;
	//pPos2_card[1] = newCard1.GetComponent(cardScript).cardDefence;

	print("I am Defence" +pPos2_card);
	//print("I am defence" +pPos2_card[1]);

	return pPos2_card;
}
function StartPutting()
{
	for(var i:int=0; i < cardtracker1.Count; i++)
	{
		var go = cardtracker1[i];
		if (go)
		{
			GameObject.DestroyObject(go);
		}
	}
	cardtracker1.Clear();

	var newCard1 : GameObject = BuyCard();
	//newCard1.transform.position = dPos5.transform.position;
	cardtracker1.Add(newCard1);

	var pPos1_card = newCard1.GetComponent(cardScript).cardAttack;
	//var pPos1_card[1] = newCard1.GetComponent(cardScript).cardDefence;

	print("I am attack" +pPos1_card);
	//print("I am defence" +pPos1_card[1]);

	return pPos1_card;
}


function attack(){

var new1 = Cards1[0].GetComponent(cardScript).cardAttack;
print("I am attack" +new1);
	//print("I am defence" +pPos1_card[1]);
			clicked=1;
			if(win1)
			{
			print("P1 ");
			new2 = StartPutting1();
		    StartDealing1();
			if(new1>new2)
					{
					    message.text="You won";
					    print("P1 winner");
						pp();
						p1s=p1s+new1;
						p1s=p1s+new2;
						score1.Add(new1);
						score1.Add(new2);
						p1score.text = p1s.ToString();
						win1=1;
						win2=0;
						//fscore1=fscore1+new1+new2;
						//print (score1);
					}
					else
					{
						message.text="Computer won";
					    print("P2 winner");
						po();
						p2s=p2s+new1;
						p2s=p2s+new2;
						score2.Add(new1);
						score2.Add(new2);
						p2score.text = p2s.ToString();

						win2 = 1;
						win1 = 0;
						clicked=0;
						//fscore2=fscore2+new1+new2;
						//print( score2);
					}
			}

			if (win2&&clicked){
					print("P2 ");

				new2 = StartPutting1();
				StartDealing1();
				if(new1>new2)
					{
											message.text="You won";

					    print("P1 winner");
						pp();
						p1s=p1s+new1;
						p1s=p1s+new2;
						score1.Add(new1);
						score1.Add(new2);
						p1score.text = p1s.ToString();

						win1=1;
						win2=0;
						//fscore1=fscore1+new1+new2;
						//print (score1);
					}
					else
					{			
											message.text="Computer won";

							    		    print("P2 winner");

						po();
						p2s=p2s+new1;
						p2s=p2s+new2;
						score2.Add(new1);
						score2.Add(new2);
						p2score.text = p2s.ToString();

						win2 = 1;
						win1 = 0;
						clicked=0;

						//fscore2=fscore2+new1+new2;
						//print( score2);
					}

				}
 uicard.SetActive(false);

}

function defence(){

var new1 = Cards1[0].GetComponent(cardScript).cardDefence;
print("I am defence" +new1);
	//print("I am defence" +pPos1_card[1]);

	//return pPos1_card;

            clicked=1;
			if(win1)
			{
			print("P1 ");
			new2 = StartPutting();
		    StartDealing1();
			if(new1>new2)
					{
						message.text="You won";

					    print("P1 winner");
						pp();
						p1s=p1s+new1;
						p1s=p1s+new2;
						score1.Add(new1);
						score1.Add(new2);
						p1score.text = p1s.ToString();

						win1=1;
						win2=0;
						//fscore1=fscore1+new1+new2;
						//print (score1);
					}
					else
					{
											message.text="Computer won";

					    print("P2 winner");
						po();
						p2s=p2s+new1;
						p2s=p2s+new2;
						score2.Add(new1);
						score2.Add(new2);
						p2score.text = p2s.ToString();

						win2 = 1;
						win1 = 0;
						clicked=0;
						//fscore2=fscore2+new1+new2;
						//print( score2);
					}
			}
 
			if (win2&&clicked){
					print("P2 ");

				new2 = StartPutting();
				StartDealing1();
				if(new1>new2)
					{
						message.text="You won";

					    print("P1 winner");
						pp();
						p1s=p1s+new1;
						p1s=p1s+new2;
						score1.Add(new1);
						score1.Add(new2);
						p1score.text = p1s.ToString();

						win1=1;
						win2=0;
						//fscore1=fscore1+new1+new2;
						//print (score1);
					}
					else
					{	message.text="Computer won";
			 		   print("P2 winner");

						po();
						p2s=p2s+new1;
						p2s=p2s+new2;
						score2.Add(new1);
						score2.Add(new2);
						p2score.text = p2s.ToString();

						win2 = 1;
						win1 = 0;
						clicked=0;

						//fscore2=fscore2+new1+new2;
						//print( score2);
					}

				}
 uicard.SetActive(false);

}



function StartDealing1()
{
     if(display.Count>0)
    {
    
    Player.AddRange(display);
    print("dispaly added to player");
    Debug.Log(display);
    
    Cards.AddRange(display);
    print("dispaly added to cards1");
    Debug.Log(display);
    
    
    display.Clear();
    }
	for(var i:int=0; i < cardtracker.Count; i++)
	{
		var go = cardtracker[i];
		if (go)
		{
			GameObject.DestroyObject(go);
		}
	}
	cardtracker.Clear();
	if(Player.Count>4){
	//yield WaitForSeconds(waitTime);

		var newCard1 : GameObject = DealCards();
		newCard1.transform.position = dPos1.transform.position;
		cardtracker.Add(newCard1);
		
		//yield WaitForSeconds(waitTime);

		newCard1 = DealCards();
		newCard1.transform.position = pPos1.transform.position;
		cardtracker.Add(newCard1);

		//yield WaitForSeconds(waitTime);

		newCard1 = DealCards();
		newCard1.transform.position = pPos2.transform.position;
		cardtracker.Add(newCard1);

		//yield WaitForSeconds(waitTime);

		newCard1 = DealCards();
		newCard1.transform.position = pPos3.transform.position;
		cardtracker.Add(newCard1);

		//yield WaitForSeconds(waitTime);

		newCard1 = DealCards();
		newCard1.transform.position = pPos4.transform.position;
		cardtracker.Add(newCard1);
	}
	if(Player.Count<5&&Player.Count>3){
		var newCard2 : GameObject = DealCards();
		newCard2.transform.position = dPos1.transform.position;
		cardtracker.Add(newCard2);

		//yield WaitForSeconds(waitTime);

		newCard2 = DealCards();
		newCard2.transform.position = pPos1.transform.position;
		cardtracker.Add(newCard2);

		//yield WaitForSeconds(waitTime);

		newCard2 = DealCards();
		newCard2.transform.position = pPos2.transform.position;
		cardtracker.Add(newCard2);

		//yield WaitForSeconds(waitTime);

		newCard2 = DealCards();
		newCard2.transform.position = pPos3.transform.position;
		cardtracker.Add(newCard2);
		
		newCard2= cardback();
		newCard2.transform.position = pPos4.transform.position;
		cardtracker.Add(newCard2);

	}
	if(Player.Count<4&&Player.Count>2){
		var newCard3 : GameObject = DealCards();
		newCard3.transform.position = dPos1.transform.position;
		cardtracker.Add(newCard3);

		//yield WaitForSeconds(waitTime);

		newCard3 = DealCards();
		newCard3.transform.position = pPos1.transform.position;
		cardtracker.Add(newCard3);

		//yield WaitForSeconds(waitTime);

		newCard3 = DealCards();
		newCard3.transform.position = pPos2.transform.position;
		cardtracker.Add(newCard3);
		
		newCard3 = cardback();
		newCard3.transform.position = pPos3.transform.position;
		cardtracker.Add(newCard3);
		
		
		newCard3 = cardback();
		newCard3.transform.position = pPos4.transform.position;
		cardtracker.Add(newCard3);

		//yield WaitForSeconds(waitTime);



	}

	if(Player.Count<3&&Player.Count>1){

		//yield WaitForSeconds(waitTime);

		var newCard4 : GameObject = DealCards();
		newCard4.transform.position = dPos1.transform.position;
		cardtracker.Add(newCard4);

		//yield WaitForSeconds(waitTime);

		newCard4 = DealCards();
		newCard4.transform.position = pPos1.transform.position;
		cardtracker.Add(newCard4);
		
		 newCard4 =cardback();
		newCard4.transform.position = pPos2.transform.position;
		cardtracker.Add(newCard4);
		
		
		 newCard4 =cardback();
		newCard4.transform.position = pPos3.transform.position;
		cardtracker.Add(newCard4);
		
		
		newCard4 = cardback();
		newCard4.transform.position = pPos4.transform.position;
		cardtracker.Add(newCard4);
		

	}
	if(Player.Count==1){
		var newCard5 : GameObject = DealCards();
		newCard5.transform.position = dPos1.transform.position;
		cardtracker.Add(newCard5);
		
	    newCard5  = cardback();
		newCard5.transform.position = pPos1.transform.position;
		cardtracker.Add(newCard5);
		
		
		newCard5  = cardback();
		newCard5.transform.position = pPos2.transform.position;
		cardtracker.Add(newCard5);
		
		newCard5  = cardback();
		newCard5.transform.position = pPos3.transform.position;
		cardtracker.Add(newCard5);
		
		
		newCard5  = cardback();
		newCard5.transform.position = pPos4.transform.position;
		cardtracker.Add(newCard5);
		
		

	}

}


function DealCards() : GameObject
{
	if(Cards.Count == 0&&Cards1.Count==0)
    {
    
     // winner();
    }
   	var card : int = Random.Range(0, Player.Count);
   	var go : GameObject = GameObject.Instantiate(Player[card]) as GameObject;
	var go1 =Player[card] ;
	display.Add(go1);
	Player.RemoveAt(card);
	Cards.RemoveAt(card);

	//Player.Add(go);
    //Cards.RemoveAt(card);
    return go;
    
    }

function cardback() : GameObject
{
	var go : GameObject = GameObject.Instantiate(temp[0]) as GameObject;
	
	//Player.Add(go);
    //Cards.RemoveAt(card);
    return go;
    
    }

function ResetDeck()
{
  if(reset){
	//Cards.Clear();
	//Cards.AddRange(Deck);
	//Player.AddRange(Cards);
	score1.Clear();
	score2.Clear();
	FirstPlayer.Clear();
	print("1st deck reset");
	SecondPlayer.Clear();
		print("2ndt deck reset");

	}
}

function winner(){
 var p1r = int.Parse(p1score.ToString());
 var p2r = int.Parse(p2score.ToString());
	if(p1r<p2r){
		message.text = "Second player won game";

	print("Second player won");
	
		}else{print("First player won");
				message.text = "First player won game";

	}
}

function BuyCard()
{
	if(Player.Count == 0)
	    {
	    //ResetDeck();
	    }

	var player_card : int = Random.Range(0, display.Count);
	var go1 : GameObject = GameObject.Instantiate(display[player_card]) as GameObject;
	Cards1.Add(go1);
	display.RemoveAt(player_card);
	//Player.RemoveAt(player_card);
	//Cards.RemoveAt(player_card);


	return go1;	
	    
}



function getCard()
{
	if(hit){
	var player_card : int = Random.Range(0, display.Count);
	var go1 : GameObject = GameObject.Instantiate(display[player_card]) as GameObject;
	Cards1.Add(go1);
	display.RemoveAt(player_card);

	//Player.RemoveAt(player_card);
	//Cards.RemoveAt(player_card);
	 
	var card = uicard.GetComponent(uicardJS);
	card.atk = go1.GetComponent(cardScript).cardAttack;
	card.def = go1.GetComponent(cardScript).cardDefence;
	card.pow = go1.GetComponent(cardScript).cardPower;
    uicard.SetActive(true);
    //uicard.transform.position = go1.transform.position;
	//uicard.transform.position = dPos5.transform.position;
	//return go1;	
	    }
}

function pp()
{
	//FirstPlayer.Add(n1);
	//FirstPlayer.Add(n2);
	if(Player.Count==0&&Cards1.Count==2&&display.Count==0){

		var go : GameObject = GameObject.Instantiate(Cards1[0]) as GameObject;
		FirstPlayer.Add(go);
		//Cards1.RemoveAt(0);
		//Cards1.(FirstPlayer);
		//Cards1.Clear();
		var go1 : GameObject = GameObject.Instantiate(Cards1[1]) as GameObject;
		FirstPlayer.Add(go1);
		Cards1.Clear();
		winner();
		reset = 1;

	message.text = "Game Over";
	yield WaitForSeconds(waitTime);
      Application.LoadLevel("gameover");
	}
	if(Cards1.Count>0){

		var p1Card1 : GameObject = DealCard1();
		p1Card1.transform.position = ppPos1.transform.position;
		var p1Card2 : GameObject = DealCard1();
		p1Card2.transform.position = ppPos2.transform.position;
		//update();
	}

	
}

function po()
{
	if(Player.Count==0&&Cards1.Count==2&&display.Count==0){

		var go : GameObject = GameObject.Instantiate(Cards1[0]) as GameObject;
		SecondPlayer.Add(go);
		//Cards1.RemoveAt(0);
		//Cards1.(FirstPlayer);
		//Cards1.Clear();
		var go1 : GameObject = GameObject.Instantiate(Cards1[1]) as GameObject;
		SecondPlayer.Add(go1);
		Cards1.Clear();
		winner();
		reset = 1;
message.text = "Game Over";
yield WaitForSeconds(waitTime);
yield WaitForSeconds(waitTime);

yield WaitForSeconds(waitTime);

yield WaitForSeconds(waitTime);

yield WaitForSeconds(waitTime);
yield WaitForSeconds(waitTime);

yield WaitForSeconds(waitTime);


      Application.LoadLevel("gameover2");
	}
	
	if(Cards1.Count>0){

		var p2Card1 : GameObject = DealCard2();
		p2Card1.transform.position = poPos1.transform.position;


		var p2Card2 : GameObject = DealCard2();
		p2Card2.transform.position = poPos2.transform.position;

		//update();

	}
}

 function DealCard1()
{
    if(Cards1.Count>0){
		var card : int = Random.Range(0, Cards1.Count);

		var go : GameObject = GameObject.Instantiate(Cards1[card]) as GameObject;
		
		
		//Player.Add(card);
	    FirstPlayer.Add(go);
		Cards1.RemoveAt(card);
	return go;

    }
    Debug.Log(go);
 }


function DealCard2() 
{
    if(Cards1.Count>0){

		var card : int = Random.Range(0, Cards1.Count);

		var go : GameObject = GameObject.Instantiate(Cards1[card]) as GameObject;
		
		//Player.Add(card);
		SecondPlayer.Add(go);
		Cards1.RemoveAt(card);
	    return go;
    }
 }
 
function onMain()
{
      Application.LoadLevel("main");

}



function exit()
{
Application.Quit();

}

