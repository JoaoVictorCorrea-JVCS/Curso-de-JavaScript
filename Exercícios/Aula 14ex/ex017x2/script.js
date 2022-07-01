function gerar() {
    let txtn = document.querySelector('input#txtn')
    let tab = document.querySelector('select#tab')
    if (txtn.value.length == 0) {
        alert('[ERRO] Insira os dados [ERRO]')
    } else {
        num = Number(txtn.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.innerHTML = `${num} X ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
}