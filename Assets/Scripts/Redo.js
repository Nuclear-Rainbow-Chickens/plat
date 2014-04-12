#pragma strict
var firstpos : Vector3;
var restart = false;
var max_vel : float;
function Start () {
	firstpos = transform.position;
}

function Update () {
	if(transform.position.y < -20) {
		transform.position = Vector3(firstpos.x,100,firstpos.z);
		rigidbody.velocity = Vector3.zero;
		restart = true;
	}
	if((rigidbody.velocity.y > -81) && (restart == true)) {
		rigidbody.velocity.y = max_vel * -1;
	}
}
function OnCollisionEnter(floor : Collision) {
	if(floor.collider.gameObject.tag == "ground") {	
		restart = false;
		return;
	}
}