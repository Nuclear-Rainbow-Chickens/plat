#pragma strict
var speed : float;
var playerobj : GameObject;
var playertrans : Transform;
function Start () {

}

function FixedUpdate () {
	rigidbody.velocity += (playertrans.transform.forward * Input.GetAxis("Vertical") * speed / 10);
	transform.RotateAround(playertrans.position,Vector3.up,Input.GetAxis("Horizontal"));
}