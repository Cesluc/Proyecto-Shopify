const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click',toogleCartAside);

function toggleDesktopMenu(){
    // console.log('click');
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

// console.log('Js Working');

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toogleCartAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Gixxer 250',
    price: 3000,
    image: 'https://rodaticarros.com.co/images/listings/2022-06/4d5031a6-1656067758-813.jpg'
});
productList.push({
    name: 'Dr 650',
    price: 4000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn53xoRKuKUsxnkIqB6jCuZCFNZQrN-DytGA&usqp=CAU'
});
productList.push({
    name: 'MT03',
    price: 5000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIPCY9AcRVTZcnO83gkv1Xlowee02hY0D7Q&usqp=CAU'
});
productList.push({
    name: 'Gixxer 250',
    price: 3000,
    image: 'https://rodaticarros.com.co/images/listings/2022-06/4d5031a6-1656067758-813.jpg'
});
productList.push({
    name: 'Dr 650',
    price: 4000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn53xoRKuKUsxnkIqB6jCuZCFNZQrN-DytGA&usqp=CAU'
});
productList.push({
    name: 'MT03',
    price: 5000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIPCY9AcRVTZcnO83gkv1Xlowee02hY0D7Q&usqp=CAU'
});

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/1191109/pexels-photo-1191109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <div class="product-info">
        <div>
            <p>$3000,00</p>
            <p>Motor Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div
</div>  */

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // produc = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo =  document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');   
    
        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);