#pragma strict
var jumpheight : float;
var touchingground = false;
var direction = 0;
var gravity : float;
var playervelocity : Vector3;
function Start () {
	Physics.gravity = Vector3(0,-gravity * 100,0);
}

function Update () {
	if((Input.GetKeyDown(KeyCode.Space)) && (touchingground == true)) {
		 rigidbody.AddForce(Vector3.up * jumpheight * 2000);
		 touchingground = false;
	}
	playervelocity = rigidbody.velocity;
}
function OnCollisionEnter(floor : Collision) {
	if(floor.collider.gameObject.tag == "ground") {	
		touchingground = true;
		return;
	}
}