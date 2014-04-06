#pragma strict
var playerobj : GameObject;
var playertrans : Transform;
var selfvelocity : Vector3;
var othervelocity : Vector3;
function Start () {
	
}

function Update () {
	if((playertrans.position.y > (transform.position.y - 2.5)) && (playerobj.GetComponent(Player).touchingground == true)) {
		transform.position.y += 0.5;
	}
	selfvelocity = rigidbody.velocity;
	othervelocity = playerobj.GetComponent(Player).playervelocity;
}