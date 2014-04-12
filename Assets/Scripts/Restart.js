#pragma strict
var firstpos : Vector3;
function Start () {
	firstpos = transform.position;
}

function Update () {
	if(transform.position.y < -20) {
		transform.position = Vector3(firstpos.x,100,firstpos.z);
		rigidbody.velocity = Vector3.zero;
	}
}