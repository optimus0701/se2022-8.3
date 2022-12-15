function addToCart(id, pro_name, price) {
    event.preventDefault()
    
    fetch('/api/add-cart', {
        method: 'post',
        body: JSON.stringify({
            'id': id,
            'pro_name': pro_name,
            'price': price
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(res) {
        console.info(res)
        return res.json()
    }).then(function(data) {
        console.info(data)
        let counter = document.getElementsByClassName('cart-counter')
        for (let i=0; i<counter.length;i++)
            counter.innerText = data.total_quantity
    }).catch(function(err) {
        console.error(err)
    })
}


function pay() {
    if (confirm('Bạn chắc chắn muốn thanh toán không?') == true) {
        fetch('/api/pay', {
            method: 'post'
        }).then(res => res.json()).then(data => {
            if(data.code == 200)
                location.reload()
        }).catch(err => console.error(err))
    }
}

function updateCart(id, obj) {
    fetch('/api/update-cart', {
        method: 'put',
        body: JSON.stringify({
            'id': id,
            'quantity': parseInt(obj.value)
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        let counter = document.getElementsByClassName('cart-counter')
        for (let i=0; i<counter.length;i++)
            counter.innerText = data.total_quantity

        let amount = document.getElementById('total_amount')
        amount.innerText = new Intl.NumberFormat().format(data.total_amount)
    })
}
