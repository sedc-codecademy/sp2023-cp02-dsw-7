let buttons = document.getElementsByClassName("btn");
let ProteinBtn = buttons[0];
let CreatineBtn = buttons[1];
let MassGainerBtn = buttons[2];
let PreWorkoutBtn = buttons[3];
let AminoAcidsBtn = buttons[4];
let Title = document.getElementById("Title");
let Products = document.getElementById("Products")

let AllProductsArr = allProducts;
let ProteinsArr = Proteins
let CreatinesArr = Creatines
let AminoAcidsArr = AminoAcids
let PreWorkoutArr = PreWorkout
let MassGainerArr = MassGainer
// Functions


function allProductsfunc(){
AllProductsArr.forEach(product => {


    Products.innerHTML+=`<div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="${product.thumbnail}" style="height:240px;" class="card-img-top" alt="...">
      <div class="product-info">
        <h5 class="product-title">${product.title}</h5>
        <p class="cart-price">${product.price} Mkd</p>
      </div>
      <a style="display:flex-end" class="btn btn-primary add-cart">Add to cart</a>
    </div>
  </div>

  
    `
    
});
Title.innerText = "All Products"}
allProductsfunc();

function DisplayTitle(btn){
    Title.innerText = btn.innerText;
}
function DisplayProducts(a,b){
  let card= document.getElementsByClassName("card")
  for(i=0;i<card.length;i++){
    card[i].classList.remove("display-none")
    card[i].classList.add("display-none")

  }
  for(i=a; i<b; i++){
    card[i].classList.remove("display-none")
  }
  
}



// EventListeners
ProteinBtn.addEventListener('click',(event)=>{
    
    event.preventDefault();
    DisplayTitle(ProteinBtn);
    DisplayProducts(17,22);
} )
CreatineBtn.addEventListener('click',(event)=>{
    
    event.preventDefault();
    DisplayTitle(CreatineBtn);
    DisplayProducts(6,13);
} )
PreWorkoutBtn.addEventListener('click',(event)=>{
    
    event.preventDefault();
    DisplayTitle(PreWorkoutBtn);
    DisplayProducts(13,17);
} )
AminoAcidsBtn.addEventListener('click',(event)=>{
    
    event.preventDefault();
    DisplayTitle(AminoAcidsBtn);
    DisplayProducts(0,6);
} )
MassGainerBtn.addEventListener('click',(event)=>{
    
    event.preventDefault();
    DisplayTitle(MassGainerBtn);
    DisplayProducts(22,27);
} )

let me = AllProductsArr.filter(function(item){
  return !ProteinsArr.includes(item)
})



