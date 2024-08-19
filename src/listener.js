const languageChangeListenerCallback = function(previous, current)
{
    console.log("Language change callback " + previous + "->" + current);
}

function onsuccessPermission() {
    console.log('granted')
}
function onErrorPermission() {
    console.log('error')
}


export async function initializeVoiceControlClient(){
    /* console.log(tizen.systeminfo.getTotalMemory()) */
    /* await tizen.ppm.requestPermission('http://tizen.org/privilege/tv.audio', onsuccessPermission, onErrorPermission)
    const client = tizen.voicecontrol.getVoiceControlClient();
    console.log(client)
    client.release();
    client.addLanguageChangeListener(languageChangeListenerCallback); */
}

/* Listener */

/* Add */

/* Remove */
/* function removeCurrentLanguageChanged(){
    var client = tizen.voicecontrol.getVoiceControlClient();
    var id = client.addLanguageChangeListener(languageChangeListenerCallback);

    client.removeLanguageChangeListener(id);
} */

/* Listener */
/* var resultListenerCallback = function(event, list, result)
{
    console.log("Result callback - event: " + event + ", result: " + result);
} */

/* Add */
/* var addResultListener(){
    var client = tizen.voicecontrol.getVoiceControlClient();
    var id = client.addResultListener(resultListenerCallback);
} */

/* Remove */
/* var removeResultListener(){
    var client = tizen.voicecontrol.getVoiceControlClient();
    var id = client.addResultListener(resultListenerCallback);

    client.removeResultListener(id);
} */
/* 
/* var getCurrentLang(){
    var client = tizen.voicecontrol.getVoiceControlClient();
    var currentLanguage = client.getCurrentLanguage();
    console.log("Current language is: " + currentLanguage);

    
} */ 
/* 
var createCommandList(){
    var command1 = new tizen.VoiceControlCommand("alpha");
    var command2 = new tizen.VoiceControlCommand("bravo", "FOREGROUND");
    var command3 = new tizen.VoiceControlCommand("charlie")];
    var commands = [command1, command2, command3];
    client.setCommandList(commands, "FOREGROUND");
    if ("FOREGROUND" == type)
        client.unsetCommandList("FOREGROUND");
} */