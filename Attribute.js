class Attribute {

	constructor(atributos){
		this.my_keys = Object.keys(atributos);
		for(let i in this.my_keys){
			setAtributo(this.my_keys[i], atributos[this.my_keys[i]]);
		}
	}

	setAtributo(atributo, valor){
		switch(atributo){
			case "class":
				this.myClass = valor;
			break;
			case "colspan":
				this.myColspan = valor;
			break;
			case "style":
				this.myStyle = valor;
			break;

		}
	}

	getAttribute(atributo){
		switch(atributo){
			case "class":
				return this.myClass
			break;
			case "colspan":
				return this.myColspan = valor;
			break;
			case "style":
				return this.myStyle = valor;
			break;

	}

	getKeys(){
		return this.my_keys;
	}
}


	
}