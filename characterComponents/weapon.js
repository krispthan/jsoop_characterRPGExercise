

class Weapon{
	constructor(name, type, attackSound, damageStats, weight){
		this.name= name;
		this.type= type;
		this.attackSound = attackSound;
		this.damageStats =this.getData(damageStats);
		this.weight = weight;
	}
	wield( bearer ){
		this.bearer= bearer;
	}
	use(){

	}
	remove(){
		
	}
	generateAttackMessage(){
		switch(this.type){
			case bludgeoning:
			attackMessage=(this.bearer + "swings" + this.name);
			break;
			case slashing:
			attackMessage=(this.bearer +"slashes" +this.name);
			break;
			case piercing:
			attackMessage=(this.bearer+ "stabs" + this.name);
		}
		//bludgeoning weapons swings
		//slashing weapons slashes
		//piercing weapons stabs
	}
	getData(obj){
		var count = obj.count;
		var total = 0;
		var dice = obj.dice;
		for(var i=0; i< count.length; i++);
		var roll = Math.floor(Math.random() * 3) +1;
		total += roll;
		return total;

	}
}