#pragma strict
var firstpos : Vector3;
var firstrot : Quaternion;
var restart = false;
var max_vel : float;
function Start () {
	firstpos = transform.position;
	firstrot = transform.rotation;
}

function Update () {
	if(transform.position.y < -20) {
		transform.position = Vector3(firstpos.x,100,firstpos.z);
		rigidbody.velocity = Vector3.zero;
		transform.rotation = firstrot;
		restart = true;
	}
	if((rigidbody.velocity.y > -81) && (restart == true)) {
		rigidbody.velocity.y = max_vel * -1;
		rigidbody.velocity.x = 0;
		rigidbody.velocity.z = 0;
	}
}
function OnCollisionEnter(floor : Collision) {
	if(floor.collider.gameObject.tag == "ground") {	
		restart = false;
		return;
	}
}