

class Weapon{
	constructor(name, type, attackSound, damageStats, weight){
		this.name= name;
		this.type= type;
		this.attackSound = attackSound,
		this.damageStats = weight;
	}
	wield( bearer ){
		this.bearer= bearer;
	
	}
	use(){
	
		var roll = Math.floor(Math.random() *this.damageStats.dice) +1;
		total+= roll;
		return roll;

	}
	remove(){
		
	}
	generateAttackMessage(){
		switch(this.type){
			case bludgeoning:
			console.log(this.bearer + "swings" + this.name);
			break;
			case slashing:
			console.log(this.bearer +"slashes" +this.name);
			break;
			case piercing:
			console.log(this.bearer+ "stabs" + this.name);
		}
		//bludgeoning weapons swings
		//slashing weapons slashes
		//piercing weapons stabs
	}
	getData(){

	}
}