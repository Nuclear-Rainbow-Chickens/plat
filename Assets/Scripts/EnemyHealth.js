#pragma strict
var player : GameObject;
function Start () {

}

function Update () {

}
function OnCollisionEnter(bullet : Collision) {
	if(bullet.collider.gameObject.tag == "bullet") {	
		Destroy(gameObject);
		player.GetComponent(Points).score += 100;
		return;
	}
}