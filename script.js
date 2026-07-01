function generatePassword(){

    let length=document.getElementById("length").value;

    let chars="";

    if(document.getElementById("uppercase").checked)
        chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(document.getElementById("lowercase").checked)
        chars+="abcdefghijklmnopqrstuvwxyz";

    if(document.getElementById("numbers").checked)
        chars+="0123456789";

    if(document.getElementById("symbols").checked)
        chars+="!@#$%^&*()_+";

    if(chars==""){
        alert("Please select at least one option.");
        return;
    }

    let password="";

    for(let i=0;i<length;i++){
        password+=chars.charAt(Math.floor(Math.random()*chars.length));
    }

    document.getElementById("password").value=password;

    if(length<8)
        document.getElementById("strength").innerHTML="🔴 Weak Password";
    else if(length<12)
        document.getElementById("strength").innerHTML="🟡 Medium Password";
    else
        document.getElementById("strength").innerHTML="🟢 Strong Password";

}

function copyPassword(){

    let copy=document.getElementById("password");

    copy.select();

    navigator.clipboard.writeText(copy.value);

    alert("Password Copied Successfully!");
}