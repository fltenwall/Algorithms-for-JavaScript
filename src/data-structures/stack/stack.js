class Stack {
	constructor(){
		this.items = [];
	}

	push(e){
		this.items.push(e);
	}

	pop(){
		return this.items.pop();
	}

	peek(){
		return this.items[this.items.length-1];
	}

	isEmpty(){
		return Object.is(this.items.length,0);
	}

	size(){
		return this.items.length;
	}
	
	clear(){
		this.items = [];
	}
}