var enable_mod = false;

Level.saveWorldFile = function(filename, content){try {java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/").mkdirs();var newFile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/", filename);newFile.createNewFile();var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));outWrite.append(content);outWrite.close();} catch (err) {print(err);}};
Level.loadFile = function(filename){var content = "";if (java.io.File( android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/" + filename).exists()) {var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/" + filename),fos = new java.io.FileInputStream(file),str = new java.lang.StringBuilder(),ch;while ((ch = fos.read()) != -1) {str.append(java.lang.Character(ch));}content = String(str.toString());fos.close();}return content;};
ModPE.readFile = function(directory){var content = "";if (java.io.File( android.os.Environment.getExternalStorageDirectory().getPath() + directory).exists()) {var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + directory),fos = new java.io.FileInputStream(file),str = new java.lang.StringBuilder(),ch;while ((ch = fos.read()) != -1) {str.append(java.lang.Character(ch));}content = String(str.toString());fos.close();}return content;};

function newLevel(){
	var scripts = com.zhuoweizhang.mcpelauncher.ScriptManager.script();
	for(var i = 0; i < scripts.size(); i++){
		var script = scripts[i];
		if(script.name == "blocks" && script.name == "items"){
      		enable_mod = true;
    	}
  	}
	if(ModPE.readFile("/games/")//can't use my phone in class so this is gonna be left unfinished for now
}

function modTick(){
  	for(var i in OreArray){
		OreArray[i].generate();
	}
};

var OreArray = new function(){
	
}
