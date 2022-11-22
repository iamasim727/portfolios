
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
// if(confirm())




const call=()=>{
    if(confirm("Do you want to view the code"))
    {
       alert("Sorry for the inconvinence\nWork under progress\nWebsite is not yet linked with code"); 
    }
};


const code1=document.querySelector('#btt');
const code2=document.querySelector('#btto');
const code3=document.querySelector('#btton');
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// const code = document.getElementsByClassName('btn');
// code.addEventListener('click',(e)=>{
//     if(confirm("Do you want to view the code"))
//     {
//        alert("Sorry for the inconvinence\nWork is under progress\nWebsite is note yet linked with code"); 
//     }
// });
 code1.addEventListener('click',call);
 code2.addEventListener('click',call);
 code3.addEventListener('click',call);
