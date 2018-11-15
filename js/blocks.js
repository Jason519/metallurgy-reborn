//[0] ore, [1] block, [2] brick, [3] liquid
var Metal = {}
Metal.Alloy =  function([blockID], alloy_name){
	this.BlockIDArray = blockID;
	this.alloy_name = alloy_name;
	Block.defineBlock(this.BlockIDArray[0], this.alloy_name + " Ore", [/*texture array*/]);
    Block.defineBlock(this.BlockIDArray[1], this.alloy_name + " Block", [/*texture array*/]);
    Block.defineBlock(this.BlockIDArray[2], this.alloy_name + " Brick", [/*texture array*/]);
    Block.defineLiquidBlock(this.BlockIDArray[3], "Molten " + this.alloy_name, [/*texture array*/]);
};

var alloy = Metal.Alloy;

alloy.prototype.setDestroyTime = function(time){
	for(i in this.BlockIDArray){
		Block.setDestroyTime(this.BlockIDArray[i], time);
	}
}
