#pragma strict
var playertrans : Transform;
var restartpos : Vector3;
function Start () {
	restartpos = playertrans.position;
}

function Update () {
	if(playertrans.position.y < -20) {
		transform.position = restartpos;
	}
}