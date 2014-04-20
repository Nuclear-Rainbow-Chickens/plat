#pragma strict
var bounces = 0;
function Start () {

}

function Update () {
	if(bounces > 4) {
		Destroy(gameObject);
	}
	if(transform.position.y < -20) {
		Destroy(gameObject);
	}
}
function OnCollisionEnter(floor : Collision) {
	if(floor.collider.gameObject.tag == "ground") {	
		bounces += 1;
		return;
	}
}