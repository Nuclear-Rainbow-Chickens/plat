#pragma strict
var firerate : float;
var bulletspeed : float;
var canfire = true;
var bullet : GameObject;
function Start () {

}

function Update () {
	if((Input.GetKey(KeyCode.LeftShift)) && (canfire != false)) {
		var clone : GameObject;
		clone = Instantiate(bullet,Vector3(transform.position.x,transform.position.y + 2,transform.position.z),transform.rotation);
		clone.rigidbody.velocity = transform.TransformDirection(Vector3.forward * bulletspeed);
		canfire = false;
		refire();
	}
}
function refire() {
	yield WaitForSeconds(firerate);
	canfire = true;
}