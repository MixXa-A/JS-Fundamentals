function passwordValidator (password){


    function lengthChecker (pass){
        if (pass.length>=6 && pass.length<=10){
            return true;
        }else {
            console.log("Password must be between 6 and 10 characters")
            return false;
        }
        
    }

    function charsChecker (pass){
        const  pattern = /^[A-Za-z0-9]+$/
        if (pattern.test(pass)){
            return true;
        }else{
            console.log("Password must consist only of letters and digits");
        }

    }

    function digitCountChecker (pass){
        const pattern = /[0-9]{2,}/;
        if (pattern.test(pass)){
            return true;
        }else {
            console.log("Password must have at least 2 digits")
        }
    }

    const lengthTest = lengthChecker(password);
    const charsTest = charsChecker(password);
    const digitTest = digitCountChecker(password);

    if (lengthTest&&charsTest&&digitTest){
   console.log("Password is valid")
  }




}
passwordValidator('Pa$s$s')