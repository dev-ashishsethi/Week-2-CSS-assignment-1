const liveBtn=document.querySelector('.liveDemo-btn');
const snackbar=document.querySelector('#snackbar-working');
const dismissBtn=document.querySelector('#dismissBtn-snackbar');

const tab_color= document.querySelector('.tab-color');
const tab1_btn= document.querySelector('#tab1');
const tab2_btn= document.querySelector('#tab2');
const tab_txt1= document.querySelector('#first-para');
const tab_txt2= document.querySelector('#second-para');

liveBtn.addEventListener("click",showSnackbar);

function showSnackbar(){
    snackbar.style.display='inline-block';
}

dismissBtn.addEventListener("click",()=>snackbar.style.display='none');



const tab1= ()=>{
        tab_txt1.style.display='inline-block';
        tab_txt2.style.display='none';
        tab1_btn.style.borderBottom='1px solid #e50914';
        tab2_btn.style.borderBottom='none';
    }
    

tab1_btn.addEventListener('click', tab1);


tab2_btn.addEventListener('click', ()=>{
    tab_txt2.style.display='inline-block';
    tab_txt1.style.display='none';
    tab2_btn.style.borderBottom='1px solid #e50914';
    tab1_btn.style.borderBottom='none';
}
);


