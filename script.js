const name_item = document.querySelectorAll('.name_item'); // class name-item  , tên của nó (Cartoon Astronaut T-Shirts)
const search_item = document.getElementById('search-item'); // class search-item , search
const section_p1 = document.querySelectorAll('.pro'); // class pro bọc tất cả cái bên trong , tức là 1 cái item
const filter_button = document.querySelectorAll('#filter_button .btn');// lấy tất cả filter_button có class có đuôi .btn 
// để khi click vô từng cái chọn cái thuộc tính có data-filter all, cakes, cupcakes,....
const h4_price = document.querySelectorAll('h4.price'); //<h4 class="price">$78</h4>

// filter
Array.from(filter_button).forEach(function(button){
    button.addEventListener('click',function(event){

        for(let i=0;i<filter_button.length;i++){
            filter_button[i].classList.remove('actives');
        }
        this.classList.add('actives');

        let buttonAttr = event.target.dataset.filter;
        // let buttonAttr = button.getAttribute('data-filter');
        Array.from(pro).forEach(function(element){
            let elementAttr = element.dataset.item; // lấy giá trị data-* dùng getAttribute hoặc dataset
            if(buttonAttr===elementAttr  || buttonAttr === 'all'){
                element.style.display = 'block';
            }   
            else {
                element.style.display = 'none';
            }
        })
    })
})