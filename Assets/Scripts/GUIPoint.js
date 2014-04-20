#pragma strict
var player : GameObject;
function Start () {

}

function Update () {
	guiText.text = "Score: " +player.GetComponent(Points).score.ToString();
}