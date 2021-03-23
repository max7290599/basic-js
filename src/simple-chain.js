const CustomError = require("../extensions/custom-error");

const chainMaker = {
	arr: [],

	getLength() {
		return this.arr.length;
	},

	addLink(value) {
		if (!arguments.length) {
			this.arr.push('(  )');
		} else {
			this.arr.push(`( ${value} )`);
		}
		return this;
	},

	removeLink(position) {
		if (
			Number.isNaN(position) ||
			position.toString().includes('.') ||
			this.arr[position] === undefined
		) {
      this.arr = [];
			throw new Error();
      
		} else {
			this.arr.splice(position - 1, 1);
		}

		return this;
	},

	reverseChain() {
		this.arr.reverse();

		return this;
	},

	finishChain() {
		const str = this.arr.join('~~');
		this.arr = [];

		return str;
	},
};

module.exports = chainMaker;
