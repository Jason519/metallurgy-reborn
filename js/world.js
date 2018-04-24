var enable_mod;
var block_data = [];
var item_data = [];

var mod_directory = "/games/com.mojang/minecraftpe/mods/metallurgy/";

Level.saveWorldFile = function(filename, content){try {java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/").mkdirs();var newFile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/", filename);newFile.createNewFile();var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));outWrite.append(content);outWrite.close();} catch (err) {print(err);}};
Level.loadFile = function(filename){var content = "";if (java.io.File( android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/" + filename).exists()) {var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/" + filename),fos = new java.io.FileInputStream(file),str = new java.lang.StringBuilder(),ch;while ((ch = fos.read()) != -1) {str.append(java.lang.Character(ch));}content = String(str.toString());fos.close();}return content;};
ModPE.readFile = function(directory){var content = "";if (java.io.File( android.os.Environment.getExternalStorageDirectory().getPath() + directory).exists()) {var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + directory),fos = new java.io.FileInputStream(file),str = new java.lang.StringBuilder(),ch;while ((ch = fos.read()) != -1) {str.append(java.lang.Character(ch));}content = String(str.toString());fos.close();}return content;};

function newLevel(){
	var scripts = com.zhuoweizhang.mcpelauncher.ScriptManager.script();
	if(java.io.File(android.is.Environment.getExternalStorageDirectory().getPath(mod_directory + "items.json").exists()) && java.io.File(android.is.Environment.getExternalStorageDirectory().getPath(mod_directory + "blocks.json").exists())){
		for(var i = 0; i < scripts.size(); i++){
			var script = scripts[i];
			if(script.name == "blocks" && script.name == "items"){
      				enable_mod = true;
				let json_block_data = JSON.parse(ModPE.readFile(mod_directory + "blocks.json"));
				block_data.push(json_block_data);
				let json_item_data = JSON.parse(ModPE.readFile(mod_directory + "items.json"));
				item_data.push(json_item_data);
    			}
  		}
	}
}
function modTick(){
  	for(var i in OreArray){
		OreArray[i].generate();
	}
};



var OreArray = new function([blockId], isNether, isEnder, [generation]){
	this.overworld_ID = blockId[0];
	this.nether_ID = blockId[1];
	this.ender_ID = blockId[2];
	this.isNether = isNether;
	this.isEnder = isEnder;
	this.minY = generation[2];
	this.maxY = generation[1];
	this.rarity = generation[0];
	this.generate = function(){
		let ChunkSize_X = function(){
			if(Math.random() < .5){
				return Player.getX() + (Math.random() * 15);
			} else {
				return Player.getX() - (Math.random() * 15);
			}
		}
		let ChunkSize_Y = function(){
			if(Math.random() < .5){
				return Player.getY() + (Math.random() * 128);
			} else {
				return Player.getY() - (Math.random() * 128);
			}
		}
		let ChunkSize_Z = function(){
			if(Math.random() < .5){
				return Player.getZ() + (Math.random() * 15);
			} else {
				return Player.getZ() - (Math.random() * 15);
			}
		}
		switch(Player.getDimension()){
			case DimensionId.NORMAL:
				if(Level.getTile(chunkSize_X(), chunkSize_Y(), chunkSize_Z()) == 1){
					this.generateVein(chunkSize_X(), chunkSize_Y(), chunkSize_Z());
				}
				break;
		}
	}
	this.generateVein = function(x, y, z){
		//rusty ore gen but it might work
	}
}
