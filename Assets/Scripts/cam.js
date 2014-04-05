#pragma strict
var sync = false;
var playerobj : GameObject;
var playertrans : Transform;
function Start () {
}

function Update () {
if(playerobj.rigidbody.velocity != rigidbody.velocity) {
		rigidbody.velocity = playerobj.rigidbody.velocity;
		sync = true;
	}
	else if(playerobj.rigidbody.velocity == rigidbody.velocity) {
		sync = false;
	}
if(Vector3.Distance(playertrans.position,transform.position) < 2) {
	rigidbody.velocity = Vector3.zero;
	sync = true;
}
}