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
const iPassword = document.querySelector('#password')

const btnSave = document.querySelector('#save')
const btnDelete = document.querySelector('#delete')
const selectDelete = document.querySelector('#selectDelete')

const mainTable1 = document.querySelector('.main-table1')
const mainTable2 = document.querySelector('.main-table2')

const tdId = document.querySelectorAll('td')[0]
const tdName = document.querySelectorAll('td')[1]
const tdFamily = document.querySelectorAll('td')[2]
const tdAge = document.querySelectorAll('td')[3]
const tdPay = document.querySelectorAll('td')[4]
const tdPhone = document.querySelectorAll('td')[5]
const tdCard = document.querySelectorAll('td')[6]
const tdData = document.querySelectorAll('td')[7]
const tdCVC = document.querySelectorAll('td')[8]
const tdCripto = document.querySelectorAll('td')[9]
const tdUnique = document.querySelectorAll('td')[10]
const tdPassword = document.querySelectorAll('td')[11]

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
let tr1
let tr2
let arr = []
let obj = new Object()
let localID = 0

selectPay.addEventListener('change', function() {
    if (1 == selectPay.value) {
        divPhone.style.display = 'flex'
        divCripto.style.display = 'none'
        divCard.style.display = 'none'
        tPhone.style.display = ''
        tCard.style.display = 'none'
        tCripto.style.display = 'none'
    } else if (2 == selectPay.value) {
        divCard.style.display = 'flex'
        divCripto.style.display = 'none'
        divPhone.style.display = 'none'
        tPhone.style.display = 'none'
        tCard.style.display = ''
        tCripto.style.display = 'none'
    } else if (3 == selectPay.value) {
        divCripto.style.display = 'flex'
        divCard.style.display = 'none'
        divPhone.style.display = 'none'
        tPhone.style.display = 'none'
        tCard.style.display = 'none'
        tCripto.style.display = ''
    }
})

btnSave.addEventListener('click', function () {
    if (1 == selectPay.value) {
        id++
        iName = inputName.value
        family = inputFamily.value
        phone = iPhone.value 
        tr1 = document.createElement('tr')
        tr2 = document.createElement('tr')
        tr1.innerHTML = `<td>${id}</td><td>${iName}</td><td>${family}</td><td>да</td><td>Банковская карта</td>`
        tr2.innerHTML = `<td>${phone}</td>`
        mainTable1.append(tr1)
        mainTable2.append(tr2)
        getObj()
    } else if (2 == selectPay.value) {
        id++
        iName = inputName.value
        family = inputFamily.value
        card = iCard.value 
        data = iData.value
        cvc = iCVC.value
        tr1 = document.createElement('tr')
        tr2 = document.createElement('tr')
        tr1.innerHTML = `<td>${id}</td><td>${iName}</td><td>${family}</td><td>да</td><td>Банковская карта</td>`
        tr2.innerHTML = `<td>${card}</td><td>${data}</td><td>${cvc}</td>`
        mainTable1.append(tr1)
        mainTable2.append(tr2)
        getObj()
    } else if (3 == selectPay.value) {
        id++
        iName = inputName.value
        family = inputFamily.value
        cripto = iCripto.value 
        unique = iUnique.value
        password = iPassword.value
        tr1 = document.createElement('tr')
        tr2 = document.createElement('tr')
        tr1.innerHTML = `<td>${id}</td><td>${iName}</td><td>${family}</td><td>да</td><td>Банковская карта</td>`
        tr2.innerHTML = `<td>${cripto}</td><td>${unique}</td><td>${password}</td>`
        mainTable1.append(tr1)
        mainTable2.append(tr2)
        getObj()
    }
})

const getObj = function () {
    if (1 == selectPay.value) {
        obj['id'] = id
        obj['name'] = iName
        obj['family'] = family
        obj['phone'] = phone
        console.log(obj);
        getArray()
    } else if (2 == selectPay.value) {
        obj['id'] = id
        obj['name'] = iName
        obj['family'] = family
        obj['card'] = card
        obj['data'] = data
        obj['cvc'] = cvc
        console.log(obj);
        getArray()
    } else if (3 == selectPay.value) {
        obj['id'] = id
        obj['name'] = iName
        obj['family'] = family
        obj['cripto'] = cripto
        obj['unique'] = unique
        obj['password'] = password
        console.log(obj);
        getArray()
    }
}

const getArray = function () {
    arr.push(obj)
    console.log(arr);
    obj = {}
    localStorage.setItem(1, JSON.stringify(arr))
}

const test = function() {
    console.log(tr1);
    console.log(tr2);
}