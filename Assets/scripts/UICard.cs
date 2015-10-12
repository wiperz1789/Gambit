using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class UICard : MonoBehaviour 
{
	public int atk,def,pow;
	public Text attack,defance,cardpower;

	// Use this for initialization
	void Start () 
	{
		attack.text = "Atk:100";
		defance.text = "Def:100";
		cardpower.text = "Pow:100";
	}
	
	// Update is called once per frame
	void Update () 
	{
	
	}
}
