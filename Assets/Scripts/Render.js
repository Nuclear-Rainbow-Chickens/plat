#pragma strict
var speed : float;
var jumpheight : float;
function Start () {

}

function Update () {
	transform.position += Vector3(0,0,Input.GetAxis("Vertical") / speed);
	if(Input.GetKeyDown(KeyCode.Space)) {
		if(transform.position.y < 2.5) {
			transform.position.y += jumpheight;
		}
	}
}