"use client"
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';


const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        const newId = Date.now().toString();
        const itemWithId = { ...newItem, id: newId };
        setItems([...items, itemWithId]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.split(',')[0].trim().replace(/[^a-zA-Z0-9 ]/g, '');
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-black text-center mb-4">Meal ideas</h1>
            <div className="flex">
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
};

export default Page;