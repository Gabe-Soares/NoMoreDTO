function setPackageChangeStatus(checkboxElem){
    if(checkboxElem.checked){
        document.querySelector("#package_name").disabled = false;
    }
    else{
        document.querySelector("#package_name").disabled = true;
        document.querySelector("#package_name").value = "";
    }
}

function changeOutputRadio(radioElem) {
    if(radioElem.value==="file"){
        document.querySelector("#file_directory").disabled = false;
    }
    else{
        document.querySelector("#file_directory").disabled = true;
        document.querySelector("#file_directory").value = "";
    }
}

function validatePayload(){
    let json = document.querySelector("#json").value;;

    if(IsJsonString(json)){
        return true;
    }
    else{
        alert("Insert a valid JSON.");
        return false;
    }
}

function getfolder(e) {
    var files = e.target.files;
    var path = files[0].webkitRelativePath;
    var Folder = path.split("/");
    alert(Folder[0]);
}