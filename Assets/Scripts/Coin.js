#pragma strict
var cash : int;
var rotspeed : float;
function Start () {

}

function Update () {
	transform.Rotate(Vector3.forward * Time.deltaTime * rotspeed);
}