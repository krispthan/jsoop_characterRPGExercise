

class Character{
	constructor(name, charClass){
		this.name = name;
		this.stats = {
			strength: null,
			dexterity: null,
			constitution: null,
			willpower: null,
			intelligence: null,
			charisma: null
		}
		this.weapon = null;
		this.armor = null;
		this.itemWeight = 0;
		this.clothing = {
			head: null,
			neck: null,
			torso: null,
			hands: null,
			legs: null,
			feet: null
		}
	}
	generateStat( statName, valueDice){
		var total = 0;
		for (var i = 0; i < valueDice.count; i++){
			var roll =Math.floor(Math.random() * 6) + 1;
			total += roll;

		}
		this.stats[statName] = total;
		return total;
	}
	equipWeapon( weapon ){
		this.weapon=weapon;
		this.itemWeight=weapon.weight;
		var string = "wields " + weapon.name;
		return string;
	
	}
	wearItem( wearable ){
		this.wearable = wearable;
		this.wearable = this.wearable[wearable];


	}
	attack( target ){
		this.target = target;
		var damage = this.weapon.use();
		// var message = this.weapon.
	}
}