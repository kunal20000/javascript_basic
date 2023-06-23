window.onload = function(){
    var savedData = localStorage.getItem('autosave-data');
    var textArea = document.getElementById("textarea");

    if(savedData){
        textArea.value = savedData;
    }
    var saveNotes = document.getElementById("feature-flag");
    saveNotes.onchange = function(){
        if(saveNotes.checked){
            startAutoSave();
        }else{
            stopAutoSave();
        }
    };

    var autoSaveTimer;
    function startAutoSave(){
        autoSaveTimer= setInterval(()=>{
            saveDataToLocalStorage();
        }, 1000);
    }
    function stopAutoSave(){
        clearInterval(autoSaveTimer);

    }
    function saveDataToLocalStorage(){
        var data = textArea.value;
        localStorage.setItem('autosave-data', data);
    }
};

window.onbeforeunload = function(){
    localStorage.removeItem('autosave-data');
};