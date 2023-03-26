var arr= [
    {
        prodnam: "Nokia",
        prodprice: 25000,
        image: 'https://www.pngitem.com/pimgs/m/520-5200268_xiaomi-redmi-note-8-hd-png-download.png'
    },
    {
        prodnam: "Xiaomi",
        prodprice: 30000,
        image: 'https://www.pngitem.com/pimgs/m/520-5200268_xiaomi-redmi-note-8-hd-png-download.png'
    },
    {
        prodnam: "Realme",
        prodprice: 20000,
        image: 'https://www.pngitem.com/pimgs/m/520-5200268_xiaomi-redmi-note-8-hd-png-download.png'
    },
    {
        prodnam: "Tecno",
        prodprice: 35000,
        image: 'https://www.pngitem.com/pimgs/m/520-5200268_xiaomi-redmi-note-8-hd-png-download.png'
    }
];

var parentId = document.getElementById("parentId");

arr.forEach(function(el){
    parentId.innerHTML += `<div class="col-md-6">
    <div class="card" style="width: 100%">
    <img src="${el.image}" class="card-img-top" alt="Card image" />
    <div class="card-body">
        <h5 class="card-title">${el.prodnam}</h5>
        <p class="card-text">${el.prodprice}</p>
        <a href="https://www.google.com" target="_blank" class="btn btn-primary">Buy Now</a>
    </div>
</div>`;
});