

const itemsData = [
    // BASIC CRAFTINGS
    { id: "crafting_table", name: "Crafting Table", cat: "Basic Craftings", img: "https://minecraft.wiki/images/Crafting_Table_JE4_BE3.png", recipe: ["plank","plank",null,"plank","plank",null,null,null,null] },
    { id: "furnace", name: "Furnace", cat: "Basic Craftings", img: "https://minecraft.wiki/images/Furnace_%28S%29_JE4.png", recipe: ["cobble","cobble","cobble","cobble",null,"cobble","cobble","cobble","cobble"] },
    
    // TOOLS
    { id: "dia_pick", name: "Diamond Pickaxe", cat: "Tools & Utilities", img: "https://minecraft.wiki/images/Diamond_Pickaxe_JE3_BE3.png", recipe: ["dia","dia","dia",null,"stick",null,null,"stick",null] },
    
    // COMBAT
    { id: "dia_sword", name: "Diamond Sword", cat: "Combat Craftings", img: "https://minecraft.wiki/images/Diamond_Sword_JE2_BE2.png", recipe: [null,"dia",null,null,"dia",null,null,"stick",null] },
    
    // REDSTONE
    { id: "piston", name: "Piston", cat: "Redstone & Mechanism", img: "https://minecraft.wiki/images/Piston_JE4_BE3.png", recipe: ["plank","plank","plank","cobble","iron","cobble","cobble","redstone","cobble"] }
];

// Ingredient Images Map
const icons = {
    "plank": "https://minecraft.wiki/images/Oak_Planks.png",
    "cobble": "https://minecraft.wiki/images/Cobblestone_JE4_BE2.png",
    "dia": "https://minecraft.wiki/images/Diamond_JE2_BE2.png",
    "stick": "https://minecraft.wiki/images/Stick_JE1_BE1.png",
    "iron": "https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png",
    "redstone": "https://minecraft.wiki/images/Redstone_Dust_JE2_BE2.png"
};

const library = document.getElementById('items-library');

// Render Categories and Items
const cats = [...new Set(itemsData.map(i => i.cat))];
cats.forEach(c => {
    const wrap = document.createElement('div');
    wrap.innerHTML = `<h3 class="category-title">${c}</h3>`;
    const grid = document.createElement('div');
    grid.className = 'items-grid';

    itemsData.filter(i => i.cat === c).forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `<img src="${item.img}" title="${item.name}">`;
        card.onclick = () => {
            document.getElementById('recipe-name').innerText = "Recipe: " + item.name;
            document.getElementById('result-slot').innerHTML = `<img src="${item.img}">`;
            const slots = document.querySelectorAll('.slot');
            item.recipe.forEach((ing, index) => {
                slots[index].innerHTML = ing ? `<img src="${icons[ing] || ing}">` : '';
            });
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
        grid.appendChild(card);
    });
    wrap.appendChild(grid);
    library.appendChild(wrap);
});
