'use ctrict'

const inputName = document.querySelector('#name')
const inputFamily = document.querySelector('#family')
const checkAge = document.querySelector('#age')
const selectPay = document.querySelector('#pay')

const divPhone = document.querySelector('#divPhone')
const divCard = document.querySelector('#divCard')
const divCripto = document.querySelector('#divCripto')

const tPhone = document.querySelector('#tphone')
const tCard = document.querySelector('#tcard')
const tCripto = document.querySelector('#tcripto')

const iPhone = document.querySelector('#phone')
const iCard = document.querySelector('#card')
const iData = document.querySelector('#data')
const iCVC = document.querySelector('#cvc')
const iCripto = document.querySelector('#cripto')
const iUnique = document.querySelector('#unique')

const btnSave = document.querySelector('#save')

const mainTable1 = document.querySelector('.main-table1')
const mainTable2 = document.querySelector('.main-table2')
const mainTable3 = document.querySelector('.main-table3')

let id = 0 
let iName
let family
let age 
let sPay
let phone 
let card 
let data 
let cvc 
let cripto 
let unique 
let password 
let tr
let arr = []
let obj = new Object()
let delID = 0
let getArr
let getObject
let delArr = 0

selectPay.addEventListener('change', function() {
    if (1 == selectPay.value) {
        divPhone.style.display = 'flex'
        divCripto.style.display = 'none'
        divCard.style.display = 'none'
    } else if (2 == selectPay.value) {
        divCard.style.display = 'flex'
        divCripto.style.display = 'none'
        divPhone.style.display = 'none'
    } else if (3 == selectPay.value) {
        divCripto.style.display = 'flex'
        divCard.style.display = 'none'
        divPhone.style.display = 'none'
    }
})

btnSave.addEventListener('click', function () {
    render()
})



const render = function () {
    age = checkAge.checked ? 'да' : 'нет'
    tr = document.createElement('tr')
    if (1 == selectPay.value) {
        id = arr.length + 1
        iName = inputName.value
        family = inputFamily.value
        phone = iPhone.value
        tr.innerHTML = `<td class="id">${id}</td><td>${iName}</td><td>${family}</td><td>${age}</td><td>Телефон</td><td>${phone}</td><td><button id="delete">Удалить</button></td>`
        mainTable1.append(tr)
        getObj()
        findBtnRemove()
    } else if (2 == selectPay.value) {
        id = arr.length + 1
        iName = inputName.value
        family = inputFamily.value
        card = iCard.value 
        data = iData.value
        cvc = iCVC.value
        tr.innerHTML = `<td class="id">${id}</td><td>${iName}</td><td>${family}</td><td>${age}</td><td>Банковская карта</td><td>${card}</td><td>${data}</td><td>${cvc}</td><td><button id="delete">Удалить</button></td>`
        mainTable2.append(tr)
        getObj()
        findBtnRemove()
    } else if (3 == selectPay.value) {
        id = arr.length + 1
        iName = inputName.value
        family = inputFamily.value
        cripto = iCripto.value 
        unique = iUnique.value
        tr.innerHTML = `<td class="id">${id}</td><td>${iName}</td><td>${family}</td><td>${age}</td><td>Крипто кошелёк</td><td>${cripto}</td><td>${unique}</td><td><button id="delete">Удалить</button></td>`
        mainTable3.append(tr)
        getObj()
        findBtnRemove()
    }
}

const getDelete = (event) => {
    delArr = event.target.closest('tr')
    delArr.remove()
    const targeTD = delArr.querySelector('.id')
    console.log(targeTD);
    arr.forEach((obj , index) => {
        if (+targeTD.textContent === obj.id) {
            arr.splice(index, 1)
        }
    });
    console.log(arr);
    pushLocal()
}

table.addEventListener('click', function (event) {
    if (event.target.closest('#delete')) {
        getDelete(event)
    }
})

table2.addEventListener('click', function (event) {
    if (event.target.closest('#delete')) {
        getDelete(event)
    }
})

table3.addEventListener('click', function (event) {
    if (event.target.closest('#delete')) {
        getDelete(event)
    }
})

const getObj = function () {
    if (1 == selectPay.value) {
        obj['id'] = id 
        obj['name'] = iName
        obj['family'] = family
        obj['age'] = age
        obj['phone'] = phone
        console.log(obj);
        getArray()
    } else if (2 == selectPay.value) {
        obj['id'] = id
        obj['name'] = iName
        obj['family'] = family
        obj['age'] = age
        obj['card'] = card
        obj['data'] = data
        obj['cvc'] = cvc
        console.log(obj);
        getArray()
    } else if (3 == selectPay.value) {
        obj['id'] = id
        obj['name'] = iName
        obj['family'] = family
        obj['age'] = age
        obj['cripto'] = cripto
        obj['unique'] = unique
        console.log(obj);
        getArray()
    }
}

const getArray = function () {
    arr.push(obj)
    console.log(arr)
    obj = {}
    pushLocal()
}

const pushLocal = function () {
    localStorage.setItem(1, JSON.stringify(arr))
}

const infoLocal = function() {
    arr = JSON.parse(localStorage.getItem(1)) == null ? [] : JSON.parse(localStorage.getItem(1))
    console.log(arr);
    for(let key in arr) {
        getObject = arr[key]
        console.log(getObject);
        if (getObject.phone) {
            id = getObject.id
            iName = getObject.name
            family = getObject.family
            age = getObject.age
            phone = getObject.phone
            tr = document.createElement('tr')
            tr.innerHTML = `<td class="id">${id}</td><td>${iName}</td><td>${family}</td><td>${age}</td><td>Телефон</td><td>${phone}</td><td><button id="delete">Удалить</button></td>`
            mainTable1.append(tr)
        } else if (getObject.card) {
            id = getObject.id
            iName = getObject.name
            family = getObject.family
            age = getObject.age
            card = getObject.card
            data = getObject.data
            cvc = getObject.cvc
            tr = document.createElement('tr')
            tr.innerHTML = `<td class="id">${id}</td><td>${iName}</td><td>${family}</td><td>${age}</td><td>Банковская карта</td><td>${card}</td><td>${data}</td><td>${cvc}</td><td><button id="delete">Удалить</button></td>`
            mainTable2.append(tr)
        } else if (getObject.unique) {
            id = getObject.id
            iName = getObject.name
            family = getObject.family
            age = getObject.age
            cripto = getObject.cripto
            unique = getObject.unique
            tr = document.createElement('tr')
            tr.innerHTML = `<td class="id">${id}</td><td>${iName}</td><td>${family}</td><td>${age}</td><td>Крипто кошелёк</td><td>${cripto}</td><td>${unique}</td><td><button id="delete">Удалить</button></td>`
            mainTable3.append(tr)
        }
    }
}
infoLocal()