const SELLER_WHATSAPP = "2348030000000"; // Real merchant profile phone line number

document.getElementById('merchant-phone').href = `tel:+${SELLER_WHATSAPP}`;
document.getElementById('merchant-chat').href = `https://wa.me{SELLER_WHATSAPP}?text=Hello,%20I%20want%20to%20place%20an%20order.`;

// Master navigation screen views routing
function activatePanel(panelChoice) {
    document.getElementById('panel-view-products').classList.remove('active');
    document.getElementById('panel-view-order').classList.remove('active');
    document.getElementById('master-products-btn').classList.remove('active');
    document.getElementById('master-order-btn').classList.remove('active');

    document.getElementById(`panel-view-${panelChoice}`).classList.add('active');
    document.getElementById(`master-${panelChoice}-btn`).classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Full explicit item parameters array
const marketCatalog = [
    { id: 1, cat: "grains", name: "Yellow Garri", measure: "1 Derika", price: 1200 },
    { id: 2, cat: "grains", name: "Yellow Garri", measure: "1 Meycup", price: 600 },
    { id: 3, cat: "grains", name: "Yellow Garri", measure: "Half Paint", price: 2300 },
    { id: 4, cat: "grains", name: "Yellow Garri", measure: "One Rubber", price: 4500 },
    { id: 5, cat: "grains", name: "Yellow Garri", measure: "Half Bag", price: 27000 },
    { id: 6, cat: "grains", name: "Yellow Garri", measure: "Full Bag", price: 54000 },

    { id: 7, cat: "grains", name: "White Garri", measure: "1 Derika", price: 1100 },
    { id: 8, cat: "grains", name: "White Garri", measure: "1 Meycup", price: 550 },
    { id: 9, cat: "grains", name: "White Garri", measure: "Half Paint", price: 2100 },
    { id: 10, cat: "grains", name: "White Garri", measure: "One Rubber", price: 4200 },
    { id: 11, cat: "grains", name: "White Garri", measure: "Half Bag", price: 25000 },
    { id: 12, cat: "grains", name: "White Garri", measure: "Full Bag", price: 50000 },

    { id: 13, cat: "grains", name: "Rice", measure: "1 Derika", price: 1800 },
    { id: 14, cat: "grains", name: "Rice", measure: "Half Paint", price: 3500 },
    { id: 15, cat: "grains", name: "Rice", measure: "One Rubber", price: 7000 },
    { id: 16, cat: "grains", name: "Rice", measure: "Half Bag", price: 43000 },
    { id: 17, cat: "grains", name: "Rice", measure: "Full Bag", price: 86000 },

    { id: 18, cat: "grains", name: "Groundnut", measure: "1 Derika", price: 2200 },
    { id: 19, cat: "grains", name: "Groundnut", measure: "1 Meycup", price: 1100 },
    { id: 20, cat: "grains", name: "Groundnut", measure: "One Rubber", price: 8500 },

    { id: 21, cat: "grains", name: "Beans (Olomowewe)", measure: "1 Derika", price: 2000 },
    { id: 22, cat: "grains", name: "Beans (Olomowewe)", measure: "One Rubber", price: 7500 },
    { id: 23, cat: "grains", name: "Beans (Olomowewe)", measure: "Full Bag", price: 95000 },

    { id: 24, cat: "grains", name: "Beans (Oloyin)", measure: "1 Derika", price: 2500 },
    { id: 25, cat: "grains", name: "Beans (Oloyin)", measure: "One Rubber", price: 9000 },
    { id: 26, cat: "grains", name: "Beans (Oloyin)", measure: "Full Bag", price: 115000 },

    { id: 27, cat: "grains", name: "Beans (Drum)", measure: "1 Derika", price: 2100 },
    { id: 28, cat: "grains", name: "Beans (Drum)", measure: "One Rubber", price: 8000 },
    { id: 29, cat: "grains", name: "Beans (Drum)", measure: "Full Bag", price: 100000 },

    { id: 30, cat: "grains", name: "White Beans", measure: "1 Derika", price: 1800 },
    { id: 31, cat: "grains", name: "White Beans", measure: "One Rubber", price: 6800 },
    { id: 32, cat: "grains", name: "White Beans", measure: "Full Bag", price: 85000 },

    { id: 33, cat: "grains", name: "Jero (Millet)", measure: "1 Derika", price: 1400 },
    { id: 34, cat: "grains", name: "Jero (Millet)", measure: "One Rubber", price: 5000 },

    { id: 35, cat: "grains", name: "Okababa (Guinea Corn)", measure: "1 Derika", price: 1500 },
    { id: 36, cat: "grains", name: "Okababa (Guinea Corn)", measure: "One Rubber", price: 5500 },

    { id: 37, cat: "oils", name: "Palm Oil", measure: "1 Bottle", price: 1500 },
    { id: 38, cat: "oils", name: "Palm Oil", measure: "2 Bottles", price: 3000 },
    { id: 39, cat: "oils", name: "Palm Oil", measure: "3 Bottles", price: 4500 },
    { id: 40, cat: "oils", name: "Palm Oil", measure: "4 Bottles", price: 6000 },
    { id: 41, cat: "oils", name: "Palm Oil", measure: "5 Bottles", price: 7500 },
    { id: 42, cat: "oils", name: "Palm Oil", measure: "2.5 Litre Keg", price: 6000 },
    { id: 43, cat: "oils", name: "Palm Oil", measure: "5 Litre Keg", price: 11500 },

    { id: 44, cat: "oils", name: "Groundnut Oil", measure: "1 Bottle", price: 1800 },
    { id: 45, cat: "oils", name: "Groundnut Oil", measure: "2 Bottles", price: 3600 },
    { id: 46, cat: "oils", name: "Groundnut Oil", measure: "3 Bottles", price: 5400 },
    { id: 47, cat: "oils", name: "Groundnut Oil", measure: "4 Bottles", price: 7200 },
    { id: 48, cat: "oils", name: "Groundnut Oil", measure: "5 Bottles", price: 9000 },
    { id: 49, cat: "oils", name: "Groundnut Oil", measure: "2.5 Litre Keg", price: 7000 },
    { id: 50, cat: "oils", name: "Groundnut Oil", measure: "5 Litre Keg", price: 13500 },

    { id: 51, cat: "provisions", name: "Tomato Paste [ Brand Space ]", measure: "1 Sachet", price: 350 },
    { id: 52, cat: "provisions", name: "Tomato Paste [ Brand Space ]", measure: "1 Carton", price: 16500 },
    { id: 53, cat: "provisions", name: "Pepper Paste [ Brand Space ]", measure: "1 Sachet", price: 400 },
    { id: 54, cat: "provisions", name: "Pepper Paste [ Brand Space ]", measure: "1 Carton", price: 18500 },
    { id: 55, cat: "provisions", name: "Onion", measure: "1 Sachet Bag", price: 1500 },
    { id: 56, cat: "provisions", name: "Onion", measure: "Full Big Bag", price: 65000 },
    { id: 57, cat: "provisions", name: "Salt", measure: "1 Sachet Pack", price: 250 },
    { id: 58, cat: "provisions", name: "Salt", measure: "Big Bag", price: 12000 },
    { id: 59, cat: "provisions", name: "Sugar", measure: "1 Sachet Pack", price: 1200 },
    { id: 60, cat: "provisions", name: "Sugar", measure: "Big Bag", price: 68000 },
    { id: 61, cat: "provisions", name: "Sardin / Geisha [ Brand Space ]", measure: "1 Tin", price: 1100 },
    { id: 62, cat: "provisions", name: "Sardin / Geisha [ Brand Space ]", measure: "1 Full Carton", price: 26000 },
    { id: 63, cat: "provisions", name: "Seasoning (Maggi)", measure: "1 Pack", price: 1100 },
    { id: 64, cat: "provisions", name: "Seasoning (Maggi)", measure: "1 Full Carton", price: 42000 }
];

// Object structure tracking active items count mappings (itemID -> quantity)
let basketQuantities = {};

function printStorefrontLists() {
    document.getElementById('grains-target-list').innerHTML = mapItemBlocks(marketCatalog.filter(p => p.cat === "grains"), 'products');
    document.getElementById('oils-target-list').innerHTML = mapItemBlocks(marketCatalog.filter(p => p.cat === "oils"), 'products');
    document.getElementById('provisions-target-list').innerHTML = mapItemBlocks(marketCatalog.filter(p => p.cat === "provisions"), 'products');
}

// Creates rows with a smart button selector that turns into a plus/minus counter when clicked!
function mapItemBlocks(filteredItems, prefix) {
    return filteredItems.map(item => {
        const qty = basketQuantities[item.id] || 0;
        
        let selectorHTML = `<button class="add-item-btn" onclick="changeItemQuantity(${item.id}, 1)">Add +</button>`;
        if (qty > 0) {
            selectorHTML = `
                <div class="counter-box-wrapper">
                    <button class="counter-control-btn" onclick="changeItemQuantity(${item.id}, -1)">-</button>
                    <span class="counter-current-value">${qty}</span>
                    <button class="counter-control-btn" onclick="changeItemQuantity(${item.id}, 1)">+</button>
                </div>
            `;
        }

        return `
            <div class="market-item-row">
                <div class="item-text-info">
                    <strong>${item.name}</strong>
                    <span>Unit: ${item.measure}</span>
                </div>
                <div class="item-price-tag">
                    ₦${item.price.toLocaleString()}
                </div>
                <div id="controls-container-${prefix}-${item.id}">
                    ${selectorHTML}
                </div>
            </div>
        `;
    }).join('');
}

// Logic tracks selection limits from 0 up to 5 items count max
function changeItemQuantity(id, changeValue) {
    let currentQuantity = basketQuantities[id] || 0;
    currentQuantity += changeValue;

    if (currentQuantity <= 0) {
        delete basketQuantities[id];
    } else {
        basketQuantities[id] = Math.min(5, currentQuantity); // Limit to maximum 5 items
    }

    // Sync selectors on the main products view list instantly
    refreshProductRowControls(id, 'products');
    
    // Re-render and refresh total summary screens
    renderCheckoutViewSheet();
}

function refreshProductRowControls(id, prefix) {
    const container = document.getElementById(`controls-container-${prefix}-${id}`);
    if (!container) return;

    const itemData = marketCatalog.find(p => p.id === id);
    const qty = basketQuantities[id] || 0;

    if (qty === 0) {
        container.innerHTML = `<button class="add-item-btn" onclick="changeItemQuantity(${id}, 1)">Add +</button>`;
    } else {
        container.innerHTML = `
            <div class="counter-box-wrapper">
                <button class="counter-control-btn" onclick="changeItemQuantity(${id}, -1)">-</button>
                <span class="counter-current-value">${qty}</span>
                <button class="counter-control-btn" onclick="changeItemQuantity(${id}, 1)">+</button>
            </div>
        `;
    }
}

