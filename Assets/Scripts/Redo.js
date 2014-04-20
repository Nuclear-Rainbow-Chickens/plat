#pragma strict
var firstpos : Vector3;
var firstrot : Quaternion;
var restart = false;
var max_vel : float;
var playerobj : GameObject;
function Start () {
	firstpos = transform.position;
	firstrot = transform.rotation;
}

function Update () {
	if(transform.position.y < -20) {
		restarttrans();
	}
	if((rigidbody.velocity.y > -81) && (restart == true)) {
		restartvel();
	}
}
function OnCollisionEnter(bam : Collision) {
	if(bam.collider.gameObject.tag == "ground") {	
		restart = false;
		return;
	}
	else if(bam.collider.gameObject.tag == "enemy") {
		restarttrans();
	}
}
function restarttrans(){
	transform.position = Vector3(firstpos.x,100,firstpos.z);
	rigidbody.velocity = Vector3.zero;
	transform.rotation = firstrot;
	playerobj.GetComponent(PlayerHealth).lives -= 1;
	restart = true;
	return;
}
function restartvel() {
	rigidbody.velocity.y = max_vel * -1;
	rigidbody.velocity.x = 0;
	rigidbody.velocity.z = 0;
	return;
}