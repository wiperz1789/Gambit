#pragma strict
import System.Collections.Generic;
var original : GameObject;
var Deck : List.<GameObject>;
var score1 : List.<int>;
var score2 : List.<int>;
var Cards : List.<GameObject> = new List.<GameObject>();
var Cards1 : List.<GameObject> = new List.<GameObject>();
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
var reset  = 0;
var dealerFirstCard : GameObject;
var playerFirstCard : GameObject;
var new1:int;
var new2:int;
var waitTime: float = 0;
var win1= 1;
var win2= 0;
var clicked =0;
var hit = 0;
var myskin :GUISkin;

function Start () {

//GUI.skin=myskin;
 ResetDeck();
 
}

function OnGUI()
{
	if (GUI.Button (Rect (350,50,60,60), "HIT"))
	{
	 hit=1;
		if(Cards.Count==0&&Player.Count==0){
			Cards.AddRange(Deck);
			Player.AddRange(Cards);}
			if (Player.Count == 30)
			{
				StartDealing1();
			}
		}
	if (GUI.Button (Rect (350,290,60,60),"P1")&&hit)
		{
		  clicked=1;
			if(win1)
			{
			print("P1 ");
			new1 = StartPutting();
			StartDealing1();
			new2 = StartPutting1();
		    StartDealing1();
			if(new1>new2)
					{
					    print("P1 winner");
						pp();
						score1.Add(new1);
						score1.Add(new2);
						win1=1;
						win2=0;
						//fscore1=fscore1+new1+new2;
						//print (score1);
					}
					else
					{
					    print("P2 winner");
						po();
						score2.Add(new1);
						score2.Add(new2);
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
				new1 = StartPutting();
				StartDealing1();	
				if(new1>new2)
					{
					    print("P1 winner");
						pp();
						score1.Add(new1);
						score1.Add(new2);
						win1=1;
						win2=0;
						//fscore1=fscore1+new1+new2;
						//print (score1);
					}
					else
					{					    print("P2 winner");

						po();
						score2.Add(new1);
						score2.Add(new2);
						win2 = 1;
						win1 = 0;
						clicked=0;

						//fscore2=fscore2+new1+new2;
						//print( score2);
					}

				}
			}	
}
function StartPutting()
{
	var newCard1 : GameObject = BuyCard();
	newCard1.transform.position = dPos5.transform.position;


	var pPos1_card = newCard1.GetComponent(cardScript).cardAttack;
	//var pPos1_card[1] = newCard1.GetComponent(cardScript).cardDefence;

	print("I am attack" +pPos1_card);
	//print("I am defence" +pPos1_card[1]);

	return pPos1_card;
}

function StartPutting1()
{
	var newCard1 : GameObject = BuyCard();
	newCard1.transform.position = dPos6.transform.position;

	var pPos2_card= newCard1.GetComponent(cardScript).cardAttack;
	//pPos2_card[1] = newCard1.GetComponent(cardScript).cardDefence;

	print("I am attack" +pPos2_card);
	//print("I am defence" +pPos2_card[1]);

	return pPos2_card;
}
function StartDealing()
{
	//yield WaitForSeconds(waitTime);

	var newCard1 : GameObject = DealCard();
	newCard1.transform.position = dPos1.transform.position;

	//yield WaitForSeconds(waitTime);

	var newCard2 : GameObject = DealCard();
	newCard2.transform.position = pPos1.transform.position;

	//yield WaitForSeconds(waitTime);

	var newCard3 : GameObject = DealCard();
	newCard3.transform.position = pPos2.transform.position;

	//yield WaitForSeconds(waitTime);

	var newCard4 : GameObject = DealCard();
	newCard4.transform.position = pPos3.transform.position;

	//yield WaitForSeconds(waitTime);

	var newCard5 : GameObject = DealCard();
	newCard5.transform.position = pPos4.transform.position;

}
function StartDealing1()
{
	if(Player.Count>4){
	//yield WaitForSeconds(waitTime);

		var newCard1 : GameObject = DealCards();
		newCard1.transform.position = dPos1.transform.position;

		//yield WaitForSeconds(waitTime);

		var newCard2 : GameObject = DealCards();
		newCard2.transform.position = pPos1.transform.position;

		//yield WaitForSeconds(waitTime);

		var newCard3 : GameObject = DealCards();
		newCard3.transform.position = pPos2.transform.position;

		//yield WaitForSeconds(waitTime);

		var newCard4 : GameObject = DealCards();
		newCard4.transform.position = pPos3.transform.position;

		//yield WaitForSeconds(waitTime);

		var newCard5 : GameObject = DealCards();
		newCard5.transform.position = pPos4.transform.position;
	}
	if(Player.Count<5&&Player.Count>3){
		var newCard6 : GameObject = DealCards();
		newCard6.transform.position = dPos1.transform.position;

		//yield WaitForSeconds(waitTime);

		var newCard7 : GameObject = DealCards();
		newCard7.transform.position = pPos1.transform.position;

		//yield WaitForSeconds(waitTime);

		var newCard8 : GameObject = DealCards();
		newCard8.transform.position = pPos2.transform.position;

		//yield WaitForSeconds(waitTime);

		var newCard9 : GameObject = DealCards();
		newCard9.transform.position = pPos3.transform.position;
		
		var newCard16 : GameObject = cardback();
		newCard16.transform.position = pPos4.transform.position;

	}
	if(Player.Count<4&&Player.Count>2){
		var newCard10 : GameObject = DealCards();
		newCard10.transform.position = dPos1.transform.position;

		//yield WaitForSeconds(waitTime);

		var newCard11 : GameObject = DealCards();
		newCard11.transform.position = pPos1.transform.position;

		//yield WaitForSeconds(waitTime);

		var newCard12 : GameObject = DealCards();
		newCard12.transform.position = pPos2.transform.position;
		
		var newCard17 : GameObject = cardback();
		newCard17.transform.position = pPos3.transform.position;
		
		
		var newCard18 : GameObject = cardback();
		newCard18.transform.position = pPos4.transform.position;

		//yield WaitForSeconds(waitTime);



	}

	if(Player.Count<3&&Player.Count>1){

		//yield WaitForSeconds(waitTime);

		var newCard13 : GameObject = DealCards();
		newCard13.transform.position = dPos1.transform.position;

		//yield WaitForSeconds(waitTime);

		var newCard14 : GameObject = DealCards();
		newCard14.transform.position = pPos1.transform.position;
		
		var newCard25 : GameObject = cardback();
		newCard25.transform.position = pPos2.transform.position;
		
		
		var newCard19 : GameObject = cardback();
		newCard19.transform.position = pPos3.transform.position;
		
		
		var newCard20 : GameObject = cardback();
		newCard20.transform.position = pPos4.transform.position;
		

	}
	if(Player.Count==1){
		var newCard15 : GameObject = DealCards();
		newCard15.transform.position = dPos1.transform.position;
		
		var newCard21 : GameObject = cardback();
		newCard21.transform.position = pPos1.transform.position;
		
		
		var newCard22 : GameObject = cardback();
		newCard22.transform.position = pPos2.transform.position;
		
		var newCard23 : GameObject = cardback();
		newCard23.transform.position = pPos3.transform.position;
		
		
		var newCard24 : GameObject = cardback();
		newCard24.transform.position = pPos4.transform.position;
		
		

	}
}


function DealCard() : GameObject
{
   	var card : int = Random.Range(0, Cards.Count);
	var go : GameObject = GameObject.Instantiate(Cards[card]) as GameObject;
	
	//Player.Add(go);
    //Cards.RemoveAt(card);
    return go;
    
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
		print("2ndt deck reset");

	}
}

function winner(){

	if(score1.Count<score2.Count){
	print("Second player won");
	}else{print("First player won");
	}
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


function pp()
{
	//FirstPlayer.Add(n1);
	//FirstPlayer.Add(n2);
	if(Player.Count==0&&Cards1.Count==2){

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
	if(Player.Count==0&&Cards1.Count==2){

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
      Application.LoadLevel("gameover");

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
 


