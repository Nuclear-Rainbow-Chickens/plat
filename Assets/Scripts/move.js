#pragma strict
var speed : float;
var playerobj : GameObject;
var playertrans : Transform;
function Start () {

}

function FixedUpdate () {
	rigidbody.AddForce(playertrans.transform.forward * Input.GetAxis("Vertical") * speed);
	transform.RotateAround(playertrans.position,Vector3.up,Input.GetAxis("Horizontal"));
}