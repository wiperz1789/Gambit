#pragma strict
import System.Collections.Generic;
import UnityEngine;
import System.Collections;
import UnityEngine.UI;

var uicard : GameObject;
var uicard1 : GameObject;
var hitbut : GameObject;
var message:Text;
var p1score:Text;
var p2score:Text;
var p1s:int= 0;
var p2s:int =0;
var original : GameObject;
var Deck : List.<GameObject>;
var score1 : List.<int>;
var score2 : List.<int>;
var Cards : List.<GameObject> = new List.<GameObject>();
var Cards1 : List.<GameObject> = new List.<GameObject>();
var Cards2 : List.<GameObject> = new List.<GameObject>();

var Player : List.<GameObject> = new List.<GameObject>();
var FirstPlayer : List.<GameObject> = new List.<GameObject>();
var SecondPlayer : List.<GameObject> = new List.<GameObject>();
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
var fixpos : Transform;
var reset  = 0;
var dealerFirstCard : GameObject;
var playerFirstCard : GameObject;
var new1:int;
var new2:int;
var waitTime: float = 0;
var win1= 1;
var win2= 0;
var hit = 0;
var clicked1 = 0;
var clicked2 =0;
var cardtracker:List.<GameObject> = new List.<GameObject>();
var cardtracker1:List.<GameObject> = new List.<GameObject>();

//var windowRect0 : Rect = Rect (20, 20, 120, 50);
//var windowRect1 : Rect = Rect (20, 100, 120, 50);

function Start () {
uicard.SetActive(false);
 uicard1.SetActive(false);

message.text = "Click the Hit.";
//GUI.skin=myskin;
 ResetDeck();
}

/*function OnGUI()
{
	if (GUI.Button (Rect (350,50,60,60), "HIT"))
	{
	   
		}
	if (GUI.Button (Rect (350,290,60,60),"P1")&&hit)
		{
				
			
			}
 
		if (GUI.Button (Rect (350,350,60,60),"P2")&&hit)
		{	
				}
			
	
		
}
*/
			
function hits()
{
 		hit=1;
		if(Cards.Count==0&&Player.Count==0){
			Cards.AddRange(Deck);
			Player.AddRange(Cards);}
			if (Player.Count == 30)
			{
				StartDealing1();
			}
 message.text = "";
  hitbut.SetActive(false);
}

function attack()
{
			if(win1)
			{
			print("P1 ");	
			//DoMyWindow(1);		
			new1 = Cards1[0].GetComponent(cardScript).cardAttack;
			print("I am attack" +new1);
			StartDealing1();
			win1=0;
			win2=0;
			clicked2=1;
			clicked1=0;
			message.text = "player 2 turn";
			}
		else if(clicked1){	
		print("P1 ");
			//DoMyWindow(1);		
			new2= Cards2[0].GetComponent(cardScript).cardAttack;;

			new1 = Cards1[0].GetComponent(cardScript).cardAttack;			
			StartDealing1();
					if(new1>new2)
					{
						message.text = "player 1 won";
						//yield WaitForSeconds(waitTime);

						 message.text = "";

					    print("P1 winner");
						pp();
						p1s=p1s+new1;
						p1s=p1s+new2;
						score1.Add(new1);
						score1.Add(new2);
						p1score.text = p1s.ToString();
						win1=1;
						win2=0;
						clicked2 = 0;
						clicked1 = 0;
						//fscore1=fscore1+new1+new2;
						//print (score1);
					}
					else
					{
						message.text = "player 2 won";
						//yield WaitForSeconds(waitTime);

						 message.text = "";


					    print("P2 winner");
						po();
						p2s=p2s+new1;
						p2s=p2s+new2;
						score2.Add(new1);
						score2.Add(new2);
						p2score.text = p2s.ToString();
						win2 = 1;
						win1 = 0;
						clicked2 = 0;
						clicked1=0;
						//fscore2=fscore2+new1+new2;
						//print( score2);
					}
			}		
			 uicard.SetActive(false);


}

function defence()
{
		if(win1)
			{
			print("P1 ");	
			//DoMyWindow(1);		
			new1 = Cards1[0].GetComponent(cardScript).cardDefence;
						print("I am defence" +new1);

			StartDealing1();
			win1=0;
			win2=0;
			clicked2=1;
			clicked1=0;
			message.text = "player 2 turn";
			}
		else if(clicked1){	
		print("P1 ");
			//DoMyWindow(1);		
			new2 = Cards2[0].GetComponent(cardScript).cardDefence;

			new1 = Cards1[0].GetComponent(cardScript).cardDefence;			
			StartDealing1();
					if(new1>new2)
					{
						message.text = "player 1 won";
					//	yield WaitForSeconds(waitTime);

						 message.text = "";


					    print("P1 winner");
						pp();
						p1s=p1s+new1;
						p1s=p1s+new2;
						score1.Add(new1);
						score1.Add(new2);
						p1score.text = p1s.ToString();
						win1=1;
						win2=0;
						clicked2 = 0;
						clicked1 = 0;
						//fscore1=fscore1+new1+new2;
						//print (score1);
					}
					else
					{
						message.text = "player 2 won";
					//	yield WaitForSeconds(waitTime);

						 message.text = "";


					    print("P2 winner");
						po();
						p2s=p2s+new1;
						p2s=p2s+new2;
						score2.Add(new1);
						score2.Add(new2);
						p2score.text = p2s.ToString();
						win2 = 1;
						win1 = 0;
						clicked2 = 0;
						clicked1=0;
						//fscore2=fscore2+new1+new2;
						//print( score2);
					}
			}		
			
 uicard.SetActive(false);

             
}

function attack1()
{
			if (win2){
				print("P2 ");
				//			DoMyWindow(1);		

				new2 = Cards2[0].GetComponent(cardScript).cardAttack;
				print("I am attack" +new2);

				StartDealing1();
				win2=0;
				win1=0;
				clicked1=1;
				clicked2=0;
				message.text = "player 1 turn";
				}
			else if(clicked2){	
			    print("P2 ");
			    //DoMyWindow(1);		

				new2= Cards2[0].GetComponent(cardScript).cardAttack;;
				new1 = Cards1[0].GetComponent(cardScript).cardAttack;			
				
				StartDealing1();
				if(new1>new2)
					{
						message.text = "player 1 won";
						//yield WaitForSeconds(waitTime);

						 message.text = "";


					    print("P1 winner");
						pp();
						p1s=p1s+new1;
						p1s=p1s+new2;
						score1.Add(new1);
						score1.Add(new2);
						p1score.text = p1s.ToString();
						win1=1;
						win2=0;
						clicked2 = 0;
						clicked1 = 0;
						//fscore1=fscore1+new1+new2;
						//print (score1);
					}
					else
					{	print("P2 winner");
						message.text = "player 2 won";
						///yield WaitForSeconds(waitTime);

						 message.text = "";


						po();
						p2s=p2s+new1;
						p2s=p2s+new2;
						score2.Add(new1);
						score2.Add(new2);
						p2score.text = p2s.ToString();
						win2 = 1;
						win1 = 0;
						clicked2 = 0;
						clicked1=0;
						

						//fscore2=fscore2+new1+new2;
						//print( score2);
					}

				
				}		

 uicard1.SetActive(false);

}

function defence1()
{

			 if (win2){
				print("P2 ");
				//			DoMyWindow(1);		

				new2 = Cards2[0].GetComponent(cardScript).cardDefence;
				print("I am defence" +new2);

				StartDealing1();
				win2=0;
				win1=0;
				clicked1=1;
				clicked2=0;
				message.text = "player 1 turn";

				}
			else if(clicked2){	
			    print("P2 ");
			    //DoMyWindow(1);		

				new2= Cards2[0].GetComponent(cardScript).cardDefence;;
			 	new1 = Cards1[0].GetComponent(cardScript).cardDefence;			

				StartDealing1();
				if(new1>new2)
					{
						message.text = "player 1 won";

					    print("P1 winner");
						pp();
						p1s=p1s+new1;
						p1s=p1s+new2;
						score1.Add(new1);
						score1.Add(new2);
						p1score.text = p1s.ToString();
						win1=1;
						win2=0;
						clicked2 = 0;
						clicked1 = 0;
						//fscore1=fscore1+new1+new2;
						//print (score1);
					}
					else
					{	print("P2 winner");
						message.text = "player 2 won";

						po();
						p2s=p2s+new1;
						p2s=p2s+new2;
						score2.Add(new1);
						score2.Add(new2);
						p2score.text = p2s.ToString();
						win2 = 1;
						win1 = 0;
						clicked2 = 0;
						clicked1=0;
						

						//fscore2=fscore2+new1+new2;
						//print( score2);
					}

				
				}		
 uicard1.SetActive(false);


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
	newCard1.transform.position = dPos6.transform.position;
		cardtracker1.Add(newCard1);


	var pPos2_card= newCard1.GetComponent(cardScript).cardAttack;
	//pPos2_card[1] = newCard1.GetComponent(cardScript).cardDefence;

	print("I am attack" +pPos2_card);
	//print("I am defence" +pPos2_card[1]);

	return pPos2_card;
}

function BuyCard()
{
	if(Player.Count == 0)
	    {
	    //ResetDeck();
	    }

	var player_card : int = Random.Range(0, Player.Count);
	var go1 : GameObject = GameObject.Instantiate(Player[player_card]) as GameObject;
	Cards1.Add(go1);
	Player.RemoveAt(player_card);
	Cards.RemoveAt(player_card);


	return go1;	
	    
}

function getCard()
{
	if(win1||clicked1){
	var player_card : int = Random.Range(0, Player.Count);
	var go1 : GameObject = GameObject.Instantiate(Player[player_card]) as GameObject;
	Cards1.Add(go1);
	Player.RemoveAt(player_card);
	Cards.RemoveAt(player_card);
	 
	var card = uicard.GetComponent(uicardJS);
	card.atk = go1.GetComponent(cardScript).cardAttack;
	card.def = go1.GetComponent(cardScript).cardDefence;
	card.pow = go1.GetComponent(cardScript).cardPower;
	//uicard.transform.position = go1.transform.position;
	//uicard.transform.position = dPos5.transform.position;
    uicard.SetActive(true);
    
	    }
}
function getCard1()
{
	if(win2||clicked2){
	var player_card : int = Random.Range(0, Player.Count);
	var go1 : GameObject = GameObject.Instantiate(Player[player_card]) as GameObject;
	Cards2.Add(go1);
	Player.RemoveAt(player_card);
	Cards.RemoveAt(player_card);


	var card = uicard1.GetComponent(uicardJS1);
	card.atk = go1.GetComponent(cardScript).cardAttack;
	card.def = go1.GetComponent(cardScript).cardDefence;
	card.pow = go1.GetComponent(cardScript).cardPower;
	//uicard1.transform.position = go1.transform.position;
	//uicard1.transform.position = dPos5.transform.position;
    uicard1.SetActive(true);
    
	//return go1;	
	    
}}


function pp()
{
	//FirstPlayer.Add(n1);
	//FirstPlayer.Add(n2);
	if(Player.Count==0){

		var go : GameObject = GameObject.Instantiate(Cards1[0]) as GameObject;
		FirstPlayer.Add(go);
		//Cards1.RemoveAt(0);
		//Cards1.(FirstPlayer);
		//Cards1.Clear();
		var go1 : GameObject = GameObject.Instantiate(Cards2[0]) as GameObject;
		FirstPlayer.Add(go1);
		Cards1.Clear();
		Cards2.Clear();
        uicard.SetActive(false);
        uicard1.SetActive(false);
		winner();
		reset = 1;
	message.text += "Game Over";
yield WaitForSeconds(waitTime);
      Application.LoadLevel("gameover2");

	}
	else{
	
	var go2 : GameObject = GameObject.Instantiate(Cards1[0]) as GameObject;
		SecondPlayer.Add(go2);
		//Cards1.RemoveAt(0);
		//Cards1.(FirstPlayer);
		//Cards1.Clear();
		var go3 : GameObject = GameObject.Instantiate(Cards2[0]) as GameObject;
		SecondPlayer.Add(go3);
		Cards1.Clear();
		Cards2.Clear();
	}
	
}

function po()
{
	if(Player.Count==0){

		var go : GameObject = GameObject.Instantiate(Cards1[0]) as GameObject;
		SecondPlayer.Add(go);
		//Cards1.RemoveAt(0);
		//Cards1.(FirstPlayer);
		//Cards1.Clear();
		var go1 : GameObject = GameObject.Instantiate(Cards2[0]) as GameObject;
		SecondPlayer.Add(go1);
		Cards1.Clear();
		Cards2.Clear();
		uicard.SetActive(false);
        uicard1.SetActive(false);
		winner();
		reset = 1;
			message.text += "Game Over";
		yield WaitForSeconds(waitTime);
     	 Application.LoadLevel("gameover2");

	}
	else{
	var go2 : GameObject = GameObject.Instantiate(Cards1[0]) as GameObject;
		SecondPlayer.Add(go2);
		//Cards1.RemoveAt(0);
		//Cards1.(FirstPlayer);
		//Cards1.Clear();
		var go3 : GameObject = GameObject.Instantiate(Cards2[0]) as GameObject;
		SecondPlayer.Add(go3);
		Cards1.Clear();
		Cards2.Clear();
	
	
	}
	
	}

function StartDealing1()
{
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
		print("2nd deck reset");

	}
}

function winner(){

	 var p1r = int.Parse(p1score.ToString());
 var p2r = int.Parse(p2score.ToString());
	if(p1r<p2r){
		message.text = "Second player won game";
yield WaitForSeconds(waitTime);

	print("Second player won");
		}else{
		message.text = "First player won game";
		yield WaitForSeconds(waitTime);
		print("First player won");
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

