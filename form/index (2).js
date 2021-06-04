let firstName = document.getElementsByTagName("input")[0];
let lastName = document.getElementsByTagName("input")[1];
let email = document.getElementsByTagName("input")[2];
let company = document.getElementsByTagName("input")[3];
let address = document.getElementsByTagName("input")[4];
let birthDate = document.getElementsByClassName("birth")[0];
let arr =[];

let regBtn = document.getElementsByTagName("button")[0];

regBtn.addEventListener("click",()=>{

let chel = new Chel(firstName.value, lastName.value, email.value, company.value, address.value, birthDate.value)
chel.print();


})



class Chel{

    constructor(firstName, lastName, email, company, address, birthDate){
        this.number = counter();
        this.id = lastName + ""+ this.number;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.company = company;
        this.address = address;
        this.birthDate = birthDate;
        this.interface = `
        <p>User №${this.number}</p>
        <p>First name: ${this.firstName}</p>
        <p>Last name: ${this.lastName}</p>
        <p> Email: ${this.email}</p>
        <p> Company: ${this.company}</p>
        <p> Address: ${this.address}</p>
        <p>  Data of birht: ${this.birthDate}</p>
        <p></p>
                
                
               
               
               
               
            
`;
    }

    print(){
        let container = document.getElementsByClassName("reg")[0];
        let elem = document.createElement("div");
        elem.classList.add("chel");
        elem.innerHTML = this.interface;
        container.appendChild(elem);
       

    }

}

function count() {
    let i = 0;
    return function(){
        return ++i
    }
}

const counter = count();




