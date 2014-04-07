#pragma strict
var jumpheight : float;
var touchingground = 2;
var direction = 0;
var gravity : float;
var playervelocity : Vector3;
function Start () {
	Physics.gravity = Vector3(0,-gravity * 100,0);
}

function FixedUpdate () {
	if((Input.GetKeyDown(KeyCode.Space)) && (touchingground <= 1)) {
		 rigidbody.AddForce(Vector3.up * jumpheight * 2000);
		 touchingground += 1;
	}
	playervelocity = rigidbody.velocity;
}
function OnCollisionEnter(floor : Collision) {
	if(floor.collider.gameObject.tag == "ground") {	
		touchingground = 0;
		return;
	}
}