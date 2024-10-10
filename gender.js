const inputName = document.querySelector('input');
const btn = document.querySelector('button');
const ans = document.querySelector('p');

let gender = {
    getData: function(genderName){
        const url = "https://api.genderize.io?name=" + genderName;
        fetch(url)
        .then(res=>res.json())
        .then(x=>this.displayData(x))
    },
    displayData: (x)=>{
        const {name, gender} = x;
        ans.innerHTML = "<b>" + gender +"</b>";
        console.log(x)
    }};
   
btn.addEventListener('click', ()=>{
    genderName = inputName.value;
    gender.getData(user)
});


//Enter key validation
inputName.addEventListener('keyup', (e) =>{
    e.preventDefault();
    genderName = inputName.value
    if(e.key === 'Enter') {
        gender.getData(genderName)
    }
});


