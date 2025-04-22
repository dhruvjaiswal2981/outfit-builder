'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ITEMS = [
  { id: 1, type: 'top', label: 'T-Shirt', src: '/icons/tshirt.png' },
  { id: 2, type: 'bottom', label: 'Pants', src: '/icons/pants.png' },
  { id: 3, type: 'jacket', label: 'Jacket', src: '/icons/jacket.png' },
  { id: 4, type: 'dress', label: 'Dress', src: '/icons/dress.png' },
  { id: 5, type: 'hat', label: 'Hat', src: '/icons/hat.png' },
  { id: 6, type: 'shoes', label: 'Shoes', src: '/icons/shoes.png' },
  { id: 7, type: 'shirt', label: 'Shirt', src: '/icons/shirt.png' },
  { id: 8, type: 'watch', label: 'Watch', src: '/icons/watch.png' },
];

const ItemTypes = {
  CLOTHING: 'clothing',
};

const DraggableItem = ({ item }) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.CLOTHING,
    item,
  }));

  return (
    <div
      ref={drag}
      className="flex flex-col items-center justify-center p-2 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 bg-white rounded-xl"
    >
      <Image src={item.src} alt={item.label} width={120} height={120} />
      <p className="text-sm mt-1 text-gray-700 font-medium">{item.label}</p>
    </div>
  );
};

const CanvasArea = ({ outfit, setOutfit }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CLOTHING,
    drop: (item) => handleDrop(item),
  }));

  const handleDrop = (item) => {
    setOutfit((prev) => ({ ...prev, [item.type]: item }));
  };

  return (
    <div
      ref={drop}
      className="w-full min-h-[500px] border-4 border-dashed border-blue-400 rounded-2xl flex flex-wrap justify-center items-center gap-4 p-6 bg-white shadow-xl transition-all"
    >
      {['hat', 'top', 'jacket', 'dress', 'bottom', 'shoes', 'shirt', 'watch'].map((type) =>
        outfit[type] ? (
          <div
            key={type}
            className="animate-fadeIn transform hover:scale-105 transition-transform duration-300"
          >
            <Image src={outfit[type].src} alt={outfit[type].label} width={160} height={160} />
          </div>
        ) : null
      )}
      {Object.keys(outfit).length === 0 && (
        <p className="text-gray-400 text-lg font-medium">Drag items here to build your outfit</p>
      )}
    </div>
  );
};

export default function Home() {
  const [outfit, setOutfit] = useState({});
  const [cart, setCart] = useState([]);
  const [savedOutfits, setSavedOutfits] = useState([]);

  const handleReset = () => setOutfit({});
  const handleSaveOutfit = () => {
    if (Object.keys(outfit).length === 0) return alert('Build an outfit before saving.');
    setSavedOutfits((prev) => [...prev, outfit]);
    alert('Outfit saved successfully.');
  };
  const handleAddToCart = () => {
    setCart([...cart, outfit]);
    alert('Outfit added to cart.');
    handleReset();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Head>
        <title>Outfit Builder</title>
      </Head>
      <main className="min-h-screen px-4 py-10 md:px-12 bg-gradient-to-br from-blue-50 via-white to-pink-100 font-sans">
        <h1 className="text-5xl font-bold text-center text-blue-800 mb-12 drop-shadow-sm">
          🧥 Outfit Builder
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Available Items</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 gap-4">
              {ITEMS.map((item) => (
                <DraggableItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Canvas + Buttons + Saved */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">Canvas Area</h2>
              <CanvasArea outfit={outfit} setOutfit={setOutfit} />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <button
                onClick={handleReset}
                className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg font-semibold text-gray-800 transition"
              >
                Reset
              </button>
              <button
                onClick={handleSaveOutfit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                Save Outfit
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2"
              >
                Add to Cart <span>🛒</span>
              </button>
            </div>

            {/* Saved Outfits */}
            {savedOutfits.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-5 text-blue-700">Saved Outfits</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {savedOutfits.map((outfit, index) => (
                    <div
                      key={index}
                      className="border p-4 rounded-xl bg-white shadow-lg transition-all hover:shadow-xl"
                    >
                      <h4 className="text-center font-medium mb-2 text-gray-600">
                        Outfit {index + 1}
                      </h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {['hat', 'top', 'jacket', 'dress', 'bottom', 'shoes', 'shirt', 'watch'].map(
                          (type) =>
                            outfit[type] && (
                              <Image
                                key={type}
                                src={outfit[type].src}
                                alt={outfit[type].label}
                                width={60}
                                height={60}
                              />
                            )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </DndProvider>
  );
}
