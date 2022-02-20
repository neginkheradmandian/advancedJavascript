let user = {
    firstName:"negin"
}

function func() {
    document.getElementById('demo').innerHTML=this.firstName;
}

let funcUser = func.bind(user);
funcUser();