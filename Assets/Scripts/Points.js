#pragma strict
var score = 0;
function Start () {

}

function Update () {

}
function OnTriggerEnter(coin : Collider) {
	if(coin.collider.gameObject.tag == "coin") {	
		score += 50;
		Destroy(coin.collider.gameObject);
		return;
	}
}