#pragma strict
var jumpheight : float;
var touchingground = 2;
var direction = 0;
var gravity : float;
var speed : float;
function Start () {
	Physics.gravity = Vector3(0,-gravity * 100,0);
}

function FixedUpdate () {
	if((Input.GetKeyDown(KeyCode.Space)) && (touchingground <= 1)) {
		 rigidbody.AddForce(Vector3.up * jumpheight * 2000);
		 touchingground += 1;
	}
	rigidbody.AddForce(transform.forward * Input.GetAxis("Vertical") * speed / 10);
	transform.RotateAround(transform.position,Vector3.up,Input.GetAxis("Horizontal"));
}
function OnCollisionEnter(floor : Collision) {
	if(floor.collider.gameObject.tag == "ground") {	
		touchingground = 0;
		return;
	}
}