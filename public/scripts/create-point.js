function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then( states => {
        for(state of states) {
            ufSelect.innerHTML += `<option value=${state.id}>${state.nome}</option>`;
        }
    });
}

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");
    const ufValue = event.target.value;
    const indexOfSelectedState = event.target.selectedIndex;

    stateInput.value = event.target.options[indexOfSelectedState].text;
    citySelect.innerHTML = "<option value>Selecione a cidade</option>";
    citySelect.disabled = true;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
    
    fetch(url)
    .then(res => res.json())
    .then(cities => {

        for(const city of cities) {
            citySelect.innerHTML += `<option value=${city.nome}>${city.nome}</option>`;
        }

        citySelect.disabled = false;
    });
}

function handleSelectedItem(event) {
    const itemLi = event.target;
    const itemID = event.target.dataset.id;
    itemLi.classList.toggle("selected");

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemID;
        return itemFound;
    });

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemID;
            return itemIsDifferent;
        });

        selectedItems = filteredItems;
    }
    else {
        selectedItems.push(itemID);
    }

    collectedItemsInput.value = selectedItems;
}

populateUFs();

document
    .querySelector('select[name=uf]')
    .addEventListener("change", getCities);

// itens de coleta

const itemsToColect = document.querySelectorAll(".items-grid li");
const collectedItemsInput = document.querySelector("input[name=items]");
let selectedItems = [];

for(const item of itemsToColect) {
    item.addEventListener("click", handleSelectedItem);
}