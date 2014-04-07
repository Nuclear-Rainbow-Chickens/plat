#pragma strict
var sync = false;
var playerobj : GameObject;
var playertrans : Transform;
var playervel : Vector3;
var stationary = true;
var stillrange : float;
var begin : float;
var fps : float;
function Start () {
	begin = Vector3.Distance(transform.position,playertrans.position);
}

function FixedUpdate () {
	if(playervel != rigidbody.velocity) {
		sync = true;
		if((Mathf.Abs(playervel.x) > stillrange) || (Mathf.Abs(playervel.z) > stillrange)) {
			rigidbody.velocity.x = playerobj.rigidbody.velocity.x;
			rigidbody.velocity.z = playerobj.rigidbody.velocity.z;
			stationary = false;
			sync = true;
		}
		else {
			stationary = true;
		}	
	}
	else if(playerobj.rigidbody.velocity == rigidbody.velocity) {
		sync = false;
	}
	
	if(stationary == true) {
		rigidbody.velocity = Vector3.zero;
	}
	playervel = playerobj.rigidbody.velocity;
	transform.RotateAround(playertrans.position,Vector3.up,Input.GetAxis("Horizontal"));
	rigidbody.velocity.y = 0;
	fps = 1.0/Time.deltaTime;
}