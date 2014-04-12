#pragma strict
var playerobj : GameObject;
var playertrans : Transform;
var moveup = false;
var ground = true;
var height : float;
function Start () {
	height = transform.position.y -= playertrans.position.y;
	
}

function FixedUpdate () {
	if((playertrans.position.y > (transform.position.y - height)) && (playerobj.GetComponent(Player).touchingground == 0)) {
		transform.position.y += 0.5;
		moveup = true;
	}
	else if(((playertrans.position.y < (transform.position.y - (height + 1))) && (playertrans.position.y != 0)) && (playerobj.GetComponent(Player).touchingground == 0)) {
		transform.position.y -= 0.5;
		moveup = false;
	}
}