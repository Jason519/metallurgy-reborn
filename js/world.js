var enable_mod = false;

function newLevel(){
  var scripts = com.zhuoweizhang.mcpelauncher.mcpelauncher.ScriptManager.script();
  for(var i = 0; i < scripts.size(); i++){
    var script = scripts[i];
    if(script.name == "blocks" && script.name == "items"){
      enable_mod = true;
    }
  }
}
