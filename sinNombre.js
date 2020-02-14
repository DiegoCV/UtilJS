class Component {

	constructor(tagName = null){
  		if(tagName != null){
  			if(this.isElement(tagName)){
  				this.myComponent = tagName;
  			}else{
  				this.myComponent = document.createElement(tagName);
  			}
  		}  	
  	}

  	isElement(o){
  		return (o instanceof Element);
  	}

  setClass(clase) {
    this.myComponent.setAttribute('class', clase);
  }

  setText(text){
  	var newContent = document.createTextNode(text); 
  	this.myComponent.appendChild(newContent);
  }

  getVal(){
  	return this.myComponent.getValue()  
  }

  setElemnent(elemento){
  	this.myComponent = elemento;
  }

  getElemnent(){
  	return this.myComponent;
  }

  getTr(){
  	//var c = document.getElementById("myDIV").childNodes;
  }


  function td_icono(id_factura, onclick, icono, disabled = false) {
    var td = document.createElement("td");
    td.setAttribute("class", "footable-visible");
    td.setAttribute("style", "font-size: 15px; text-align: center;");
    var a = document.createElement("a");
    aux = onclick + "(" + id_factura + ")";
    if (!disabled) {
        a.setAttribute("onclick", aux);
    } else {
        a.setAttribute("style", "color: currentColor; cursor: not-allowed; opacity: 0.5;");
    }
    var i = document.createElement("i");
    var clase = "fa fa-" + icono;
    i.setAttribute("class", clase);
    a.appendChild(i);
    td.appendChild(a);
    return td;
}

  //////////////////////////////////////////////////

  /*
  *	Utiliza la funcion appenchild para insertar uno o varios objetos de tipo Component hijos de forma horizontal
  * diccionario/ forma horizontal: todos los componentes estan bajo un mismo nivel.
  */
  concatComponents(componentes){
  	for(let i in componentes){
  		this.concatComponent(componentes[i]);
  	}
  }


  concatComponent(componente){
  	this.componentChilds.push(componente);
  }


  /*
  *	Utiliza la funcion appenchild para insertar uno o varios elements hijos de forma horizontal
  * diccionario/ forma horizontal: todos los componentes estan bajo un mismo nivel.
  */
  concatElements(elementos){
  	for(let i in elementos){
  		this.concatElement(elementos[i]);
  	}
  }

  concatElement(elemento){
  	this.myComponent.appenchild(elemento);
  }

  setObjectStyle(myStyle){
  	var keys = myStyle.getKeys();
  	for(let i in keys){
  		this.myComponent.setAttribute(keys[i], myStyle.getAtributo(keys[i]));
  	}
  }

  /*
  *	Utilizando el metodo setAttribute de javaScritp, se encarga de insertar los atributos
  */
  setAttributes(myAttributes){
  	if (myAttributes instanceof Attribute){
  		var keys = myAttributes.getKeys();
  		for(let i in keys){
  			this.setAttribute(keys[i], myAttributes.getAttribute(keys[i]);
  		}
  	}else if(Array.isArray(myAttributes)){
  		var keys = Object.keys(myAttributes);
  		for(let i in keys){
  			this.setAttribute(keys[i], myAttributes[keys[i]]);
  		}
  	}
  	
  }

  /*
  *	Utilizando el metodo setAttribute de javaScritp, se encarga de insertar el atributo dentro del myComponent
  */
  setAttribute(myAttribute, myVal){
  	this.myComponent.setAttribute(myAttribute, myVal);
  }


///////////////////////////////////////////////////
  /*
  *	Metodos constructores
  */
  static div(){
  	return document.createElement("div");
  }

  static label(){
  	return document.createElement("label");
  }

  static createComponentByElementId(id){
  	this.myComponent = document.getElementById(id);
  	return myComponent;
  }

  //////////////////////////////////////////////////









}