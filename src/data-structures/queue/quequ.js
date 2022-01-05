class queue {
	constructor(){
		this.items = {};
		this.firstIndex = 0;
		this.count = 0;
	}

	enqueue(e){
		this.items[this.count] = e;
		this.count++;
	}

	dequeue(){
		if(isEmpty()) return undefined;
		const res = this.items[this.firstIndex];
		delete this.items[this.firstIndex];
		this.firstIndex++;
		return res;
	}

	peek() {
		if(isEmpty()) return undefined;
		return this.items[this.firstIndex];
	}

	isEmpty(){
		return Object.is(this.size(),0);
	}

	size(){
		return this.count - this.firstIndex;
	}

	clear(){
		this.items = {};
		this.firstIndex = 0;
		this.count = 0;
	}
}