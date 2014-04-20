#pragma strict
var direction = Vector3.zero;
var speed : float;
function Start () {

}

function Update () {
	rigidbody.velocity = (direction * speed);
}
function OnTriggerEnter(block : Collider) {
	if(block.collider.gameObject.tag == "forward") {	
		direction.x = 0;
		direction.z = 1;
		return;
	}
	if(block.collider.gameObject.tag == "back") {	
		direction.x = 0;
		direction.z = -1;
		return;
	}
	if(block.collider.gameObject.tag == "left") {	
		direction.z = 0;
		direction.x = -1;
		return;
	}
	if(block.collider.gameObject.tag == "right") {	
		direction.z = 0;
		direction.x = 1;
		return;
	}
}