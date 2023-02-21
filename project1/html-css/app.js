const menuEmail=document.querySelector('.navbar-email');
const desktopmenu=document.querySelector('.desktop-menu');
const menuburger=document.querySelector('.menu');
const menumobile=document.querySelector('.mobile-menu');
const menucarrito=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('#ShoppingCartContainer');
const CardsContainer=document.querySelector('.cards-container-main');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuburger.addEventListener('click',toggleMobileMenu);
menucarrito.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    desktopmenu.classList.toggle('inactive');
    }
    function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }
    
    menumobile.classList.toggle('inactive');
    }

    function toggleCarritoAside() {
    const isMobileMenuClosed = menumobile.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        menumobile.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
    }

    const productList =[];
    productList.push({
        name: 'VirusT',
        price:'450',
        image: '../imgs/icon/virusT.jpeg',
    });

    productList.push({
        name: 'VirusG',
        price:'350',
        image: '../imgs/icon/virusT.jpeg',
    });

    productList.push({
        name: 'Virus Progenitor',
        price:'1000',
        image: '../imgs/icon/virusT.jpeg',
    });

    
    function RenderProducts(arr){
    //Recorrido de array y obtener el elemento
    for(product of arr){
    const productCard= document.createElement('div');
    productCard.classList.add('product-card-main');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info-main');

    const productInfoDiv= document.createElement('div');

    const productPrice= document.createElement('p');
        productPrice.innerHTML='$'+product.price;

    const productName= document.createElement('p');
    productName.innerHTML=product.name;

    productInfoDiv.append(productPrice,productName);

    const productinfoFigure= document.createElement('figure');
    const productIMGCart = document.createElement('img');
    productIMGCart.setAttribute('src','../imgs/curso-frontend-developer-practico/icons/bt_add_to_cart.svg');
    
    productinfoFigure.appendChild(productIMGCart);

    productInfo.append(productInfoDiv,productinfoFigure);

    productCard.append(productImg,productInfo);

    CardsContainer.appendChild(productCard);
}
}

RenderProducts(productList);