let myObj ={
    nameInput: "document.getElementById('name')",
    email: "document.getElementById('email')",
    phone: "document.getElementById('phone')",
    date: "document.getElementById('date')",
    time: "document.getElementById('time')"
}

let myObjString = JSON.stringify(myObj);
    
        const btn = document.querySelector('.btn')
        
        btn.addEventListener('click', (e) =>{
            e.preventDefault();
            localStorage.setItem('name', nameInput.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('date', date.value);
            localStorage.setItem('phone', phone.value);
            localStorage.setItem('time', time.value);
        });
