let gridContainerEl = document.getElementById("gridContainer");
let ramContainerEl = document.getElementById("ramContainer");
let storageContainerEl = document.getElementById("storageContainer");
let brandContainerEl = document.getElementById("brandContainer");
let colorContainerEl = document.getElementById("colorContainer");



let ramDataArray = [];
let storageDataArray = [];
let brandDataArray = [];
let colorDataArray = [];


function filteringData(obj) {
    let { ram, storage, brand, color } = obj;

    let isvalueThere = ramDataArray.includes(ram[0]);
    let isStorageValueThere = storageDataArray.includes(storage[0])
    let isBrandValueThere = brandDataArray.includes(brand);
    let isColorValueThere = colorDataArray.includes(color);
    if (!isvalueThere) {
        ramDataArray.push(ram[0])
    }
    if (!isStorageValueThere) {
        storageDataArray.push(storage[0])
    }
    if (!isBrandValueThere) {
        brandDataArray.push(brand);
    }
    if (!isColorValueThere) {
        colorDataArray.push(color);
    }
}

function createCard(product) {
    let { title, camera, ram, image, price, storage } = product;


    let cardItem = document.createElement("li");
    cardItem.classList.add("card-details", "bg-white", "d-flex", "flex-column");
    let heartImg = document.createElement("i");
    heartImg.classList.add("fa-regular", "fa-heart", "heart-icon", "align-self-end", "pe-2", "pt-2");

    let mobileImage = document.createElement("img");
    mobileImage.setAttribute("src", image);

    let heading = document.createElement("h3");
    heading.classList.add("mobile-name");
    heading.textContent = title;

    let priceData = document.createElement("p");
    priceData.classList.add("mobile-details", "para-price")
    priceData.textContent = `Price:Rs. ${price}`;
    let cameraData = document.createElement("p");
    cameraData.classList.add("mobile-details", "para-camera")
    cameraData.textContent = `Camera: ${camera[0]} ${camera[1]} | Ram: ${ram[0]}${ram[1]}`;

    let storageData = document.createElement("p");
    storageData.classList.add("mobile-details", "para-storage")
    storageData.textContent = `Storage: ${storage[0]}${storage[1]}`;

    let viewDetailsButton = document.createElement("button");
    viewDetailsButton.textContent = "View Details";
    viewDetailsButton.classList.add("details-button", "w-100");

    cardItem.append(heartImg, mobileImage, heading, priceData, cameraData, storageData, viewDetailsButton);
    gridContainerEl.appendChild(cardItem);
}

function displayResults(products) {
    let stringifiedData = JSON.stringify(products);
    localStorage.setItem("productsData", stringifiedData);

    for (let product of products) {
        filteringData(product);
        createCard(product);

    }
}

let url = "http://localhost:3000/mobiledata";

const getData = async () => {
    try {
        const api = await fetch(url);
        const data = await api.json();
        displayResults(data);
    } catch (err) {
        console.log(err);
    }
    //console.log(ramDataArray);
    createRamData(ramDataArray);
    createStorageData(storageDataArray);
    createBrandData(brandDataArray);
    createColorData(colorDataArray);
}
getData();


function createRamData(ramDataArray) {
    //console.log(ramDataArray);
    let ascRamDataArray = ramDataArray.sort();


    //console.log(ascRamDataArray);
    for (i = 0; i < ascRamDataArray.length; i++) {
        let checkboxId = "ramCheckbox" + i;
        //console.log(ascRamDataArray[i])
        let ramItem = document.createElement("li");
        ramItem.classList.add("d-flex", "align-items-center", "me-3", "mb-2");

        let checkboxEl = document.createElement("input");
        checkboxEl.setAttribute("type", "checkbox");
        checkboxEl.classList.add("checkbox");
        checkboxEl.setAttribute("data-value", ascRamDataArray[i]);
        checkboxEl.id = checkboxId;
        ramItem.appendChild(checkboxEl);


        let ramLabelEl = document.createElement("label");
        ramLabelEl.classList.add("label-text");
        ramLabelEl.setAttribute("for", checkboxId)
        ramLabelEl.textContent = `${ascRamDataArray[i]}GB`;
        ramItem.appendChild(ramLabelEl);

        ramContainerEl.appendChild(ramItem);
    }


}

function createStorageData(storageArray) {
    //console.log(storageArray);
    let increasedStorageArray = storageDataArray.sort();
    //console.log(increasedStorageArray)
    for (i = 0; i < increasedStorageArray.length; i++) {
        let checkboxId = "storageCheckbox" + i;
        //console.log(increasedStorageArray[i])
        let storageItem = document.createElement("li");
        storageItem.classList.add("d-flex", "align-items-center", "me-3", "mb-2");

        let checkboxEl = document.createElement("input");
        checkboxEl.setAttribute("type", "checkbox");
        checkboxEl.setAttribute("data-value", increasedStorageArray[i])
        checkboxEl.classList.add("checkbox");
        checkboxEl.id = checkboxId;
        storageItem.appendChild(checkboxEl);

        let storageLabelEl = document.createElement("label");
        storageLabelEl.setAttribute("for", checkboxId)
        storageLabelEl.textContent = `${increasedStorageArray[i]}GB`
        storageItem.appendChild(storageLabelEl);

        storageContainerEl.appendChild(storageItem);
    }
}

function createBrandData(brandDataArray) {
    //console.log(brandDataArray);

    for (i = 0; i < brandDataArray.length; i++) {
        let checkboxId = "brandCheckbox" + i;

        let brandItem = document.createElement("li");
        brandItem.classList.add("d-flex", "align-items-center", "me-3", "mb-2");

        let checkboxEl = document.createElement("input");
        checkboxEl.setAttribute("type", "checkbox");
        checkboxEl.classList.add("checkbox");
        checkboxEl.setAttribute("data-value", brandDataArray[i]);
        checkboxEl.id = checkboxId;
        brandItem.appendChild(checkboxEl);


        let brandLabelEl = document.createElement("label");
        brandLabelEl.setAttribute("for", checkboxId);
        brandLabelEl.textContent = brandDataArray[i];
        brandItem.appendChild(brandLabelEl);

        brandContainerEl.appendChild(brandItem);
    }

}

function createColorData(colorDataArray) {
    //console.log(colorDataArray);

    for (i = 0; i < colorDataArray.length; i++) {
        let checkboxId = "colorCheckbox" + i;

        let colorItem = document.createElement("li");
        colorItem.classList.add("d-flex", "align-items-center", "me-3", "mb-2");

        let checkboxEl = document.createElement("input");
        checkboxEl.setAttribute("type", "checkbox");
        checkboxEl.classList.add("checkbox");
        checkboxEl.setAttribute("data-value", colorDataArray[i]);
        checkboxEl.id = checkboxId;
        colorItem.appendChild(checkboxEl);


        let colorLabelEl = document.createElement("label");
        colorLabelEl.setAttribute("for", checkboxId);
        colorLabelEl.textContent = colorDataArray[i];
        colorItem.appendChild(colorLabelEl);

        colorContainerEl.appendChild(colorItem);
    }
}

//filtering data using apply button
let applyButtonEl = document.getElementById("applyButton");
let clearButtonEl = document.getElementById("clearButton");

let filteredData = {};

applyButtonEl.addEventListener("click", () => {

    let productsdata = localStorage.getItem("productsData");
    gridContainerEl.innerHTML = "";


    //console.log("apply button clicked");
    let priceInputEl = document.querySelectorAll(".price-input input");
    let priceRange = [parseInt(priceInputEl[0].value), parseInt(priceInputEl[1].value)]
    filteredData.price = priceRange;

    let colorGrid = colorContainerEl.querySelectorAll("input");
    //console.log(colorGrid);
    let selectedColors = [];
    for (i = 0; i < colorGrid.length; i++) {
        if (colorGrid[i].checked) {
            //console.log(colorGrid[i])
            let color = colorGrid[i].dataset.value;
            //console.log(color);
            selectedColors.push(color);
        }
    }
    if (selectedColors.length == 0) {
        selectedColors.push("NA");
    }
    filteredData.color = selectedColors;
    //console.log(filteredData);

    let brandGrid = brandContainerEl.querySelectorAll("input");
    let selectedBrands = [];
    for (i = 0; i < brandGrid.length; i++) {
        if (brandGrid[i].checked) {
            //console.log(brandGrid[i])
            let brand = brandGrid[i].dataset.value;
            //console.log(color);
            selectedBrands.push(brand);
        }
    }
    if (selectedBrands.length == 0) {
        selectedBrands.push("NA");
    }
    filteredData.brand = selectedBrands;
    //console.log(filteredData);

    let storageGrid = storageContainerEl.querySelectorAll("input");
    let selectedStorageData = [];
    for (i = 0; i < storageGrid.length; i++) {
        if (storageGrid[i].checked) {
            let storageGb = storageGrid[i].dataset.value;
            selectedStorageData.push(parseInt(storageGb));
        }
    }
    if (selectedStorageData.length == 0) {
        selectedStorageData.push("NA");
    }
    filteredData.storage = selectedStorageData;
    //console.log(filteredData);

    let ramGrid = ramContainerEl.querySelectorAll("input");
    let selectedRamData = [];
    for (i = 0; i < ramGrid.length; i++) {
        if (ramGrid[i].checked) {
            let ramGb = ramGrid[i].dataset.value;
            selectedRamData.push(parseInt(ramGb));
        }
    }
    if (selectedRamData.length == 0) {
        selectedRamData.push("NA");
    }
    filteredData.ram = selectedRamData;
    //console.log(filteredData);

    //cards data
    let globalData = JSON.parse(productsdata);
    //console.log(globalData);


    let strigifiedObj = JSON.stringify(filteredData);
    //console.log(strigifiedObj);
    localStorage.setItem("mobileData", strigifiedObj);

    let stringifiedFilteredData = localStorage.getItem("mobileData");

    let filteredDynamicData = JSON.parse(stringifiedFilteredData);
    //console.log(filteredDynamicData);


    let finalFilteredData = globalData.filter((eachCard) => {
        if ((eachCard.price >= filteredDynamicData.price[0]) && (eachCard.price <= filteredDynamicData.price[1])) {
            return true;
        }
    })
    //console.log(finalFilteredData);


    finalFilteredData = finalFilteredData.filter((eachCard) => {

        if (filteredDynamicData.color[0] !== "NA") {
            if (filteredDynamicData.color.includes(eachCard.color)) {
                return true;
            }

        } else {
            return true
        }

    })
    //console.log(finalFilteredData);

    finalFilteredData = finalFilteredData.filter((eachCard) => {
        if (filteredDynamicData.brand[0] !== "NA") {
            if (filteredDynamicData.brand.includes(eachCard.brand)) {
                return true;
            }

        } else {
            return true
        }

    })
    //console.log(finalFilteredData);

    finalFilteredData = finalFilteredData.filter((eachCard) => {
        if (filteredDynamicData.storage[0] !== "NA") {
            if (filteredDynamicData.storage.includes(eachCard.storage[0])) {
                return true;
            }

        } else {
            return true
        }

    })
    //console.log(finalFilteredData);

    finalFilteredData = finalFilteredData.filter((eachCard) => {
        if (filteredDynamicData.ram[0] !== "NA") {
            if (filteredDynamicData.ram.includes(eachCard.ram[0])) {
                return true;
            }

        } else {
            return true
        }

    })
    //console.log(finalFilteredData);

    for (let product of finalFilteredData) {
        createCard(product);
    }


});

clearButtonEl.addEventListener("click", () => {
    let priceInput = document.querySelectorAll(".price-input input");
    let rangeInput = document.querySelectorAll(".range-input input");

    let inputs = document.querySelectorAll("input.checkbox");
    // let minVal = priceInput[0].value;
    // let maxVal = priceInput[1].value;
    priceInput[0].value = 10000;
    console.log(priceInput[0].value);
    priceInput[1].value = 100000;
    console.log(priceInput[1].value);
    rangeInput[0].value = 10000;
    rangeInput[1].value = 100000;
    
    progress.style.left = (priceInput[0].value / rangeInput[0].max) * 100 + "%";
    progress.style.right = 100 - (priceInput[1].value / rangeInput[1].max) * 100 + "%";

    console.log(priceInput);
    
    inputs.forEach((input) => input.checked = false);
    gridContainerEl.innerHTML = "";
   let mobileCardsData = localStorage.getItem("productsData");
   let parsedMobileCardsData = JSON.parse(mobileCardsData);
    displayResults(parsedMobileCardsData);

})


//filter product using title of the mobile
let searchEl = document.getElementById("searchInput");

function filterProduct() {
    let searchValue = searchEl.value.toUpperCase();
    console.log(searchValue);
    let item = gridContainerEl.querySelectorAll(".card-details");
    for (let i = 0; i < item.length; i++) {
        let span = item[i].querySelector(".mobile-name");

        if (span.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
            item[i].classList.remove("d-none");

        } else {
            item[i].classList.add("d-none");
        }
    }
}
searchEl.addEventListener("keyup", filterProduct)