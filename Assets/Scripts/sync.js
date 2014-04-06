#pragma strict
var sync = false;
var playerobj : GameObject;
var playertrans : Transform;
var playervel : Vector3;
var stationary = true;
function Start () {
}

function Update () {
	if(playervel != rigidbody.velocity) {
		sync = true;
		if((Mathf.Abs(playervel.x) > 0.06) || (Mathf.Abs(playervel.y) > 0.06)) {
			rigidbody.velocity.x = playerobj.rigidbody.velocity.x;
			rigidbody.velocity.z = playerobj.rigidbody.velocity.z;
			stationary = false;
		}
		else {
			rigidbody.velocity = Vector3.zero;
			stationary = true;
		}
		
	}
	else if(playerobj.rigidbody.velocity == rigidbody.velocity) {
		sync = false;
	}
	if(Vector3.Distance(playertrans.position,transform.position) < 2) {
		sync = true;
	}
	playervel = playerobj.rigidbody.velocity;
	transform.RotateAround(playertrans.position,Vector3.up,Input.GetAxis("Horizontal"));
}