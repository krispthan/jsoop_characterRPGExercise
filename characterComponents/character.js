

class Character{
	constructor(name, charClass){
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
		debugger;
		var total = 0;
		for (var i = 0; i < valueDice.count; i++){
			var roll =Math.floor(Math.random() * 6) + 1;
			total += roll;

		}
		this.stats.[statName] = total;
		return total;
	}
	equipWeapon( weapon ){
		this.weapon=weapon;
		this.itemWeight=this.weapon[itemWeight];
	
	}
	wearItem( wearable ){
		this.wearable = wearable;
		this.wearable = this.wearable[wearable];


	}
	attack( target ){
		this.target = target;
		var damage = this.weapon.use();
		var message = this.weapon.
	}
}