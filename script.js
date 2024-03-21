function validateEmail(inputEmail)
{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputEmail.value.match(validRegex))
    {
        return true;
    }
    else{
        alert(' Invalid Email format');
        
        return false;
    }

}

function leadDate(){
    //event.preventDefault();
    let outputdate=document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log(inputdate.value);

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value =formattedDate;

    console.log(outputdate.value);



}