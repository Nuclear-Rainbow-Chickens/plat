#pragma strict
var player : GameObject;
function Start () {

}

function Update () {
	guiText.text = "Lives: " +player.GetComponent(PlayerHealth).lives.ToString();
}