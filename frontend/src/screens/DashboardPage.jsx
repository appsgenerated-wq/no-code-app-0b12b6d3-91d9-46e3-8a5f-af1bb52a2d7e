import React, { useEffect, useState } from 'react';
import config from '../constants.js';
import { ArrowRightOnRectangleIcon, PlusCircleIcon, BuildingStorefrontIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const DashboardPage = ({ user, restaurants, onLogout, onLoadRestaurants, onCreateRestaurant }) => {
  const [newRestaurant, setNewRestaurant] = useState({ name: '', description: '', cuisine: 'American' });

  useEffect(() => {
    onLoadRestaurants();
  }, [onLoadRestaurants]);

  const handleCreateRestaurant = async (e) => {
    e.preventDefault();
    if (!newRestaurant.name.trim()) {
        alert('Restaurant name is required.');
        return;
    }
    await onCreateRestaurant(newRestaurant);
    setNewRestaurant({ name: '', description: '', cuisine: 'American' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <BuildingStorefrontIcon className="h-8 w-8 text-indigo-600"/>
            <h1 className="text-2xl font-bold text-gray-900">FoodApp Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
             <div className="text-right">
                <p className="font-semibold text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
             </div>
            <button
              onClick={onLogout}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
              title="Logout"
            >
              <ArrowRightOnRectangleIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Create New Restaurant Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <PlusCircleIcon className="h-6 w-6 mr-2 text-indigo-500" />
            Create New Restaurant
          </h2>
          <form onSubmit={handleCreateRestaurant} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                placeholder="My Awesome Restaurant"
                value={newRestaurant.name}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">Cuisine</label>
              <select
                id="cuisine"
                value={newRestaurant.cuisine}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, cuisine: e.target.value })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option>Italian</option>
                <option>Mexican</option>
                <option>Japanese</option>
                <option>Indian</option>
                <option>American</option>
              </select>
            </div>
            <div className="md:col-span-1">
                <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                    Add Restaurant
                </button>
            </div>
          </form>
        </div>

        {/* Restaurants List */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Available Restaurants</h2>
          {restaurants.length === 0 ? (
            <div className="text-center bg-white p-12 rounded-lg shadow text-gray-500">
                <p>No restaurants found.</p>
                <p className="text-sm mt-2">Why not create the first one above?</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map(restaurant => (
                <div key={restaurant.id} className="bg-white rounded-lg shadow overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="p-5">
                        <p className="text-sm text-indigo-500 font-semibold">{restaurant.cuisine}</p>
                        <h3 className="text-lg font-bold text-gray-900 mt-1 truncate">{restaurant.name}</h3>
                        <div className="flex items-center mt-3 text-sm text-gray-500">
                            <UserCircleIcon className="h-5 w-5 mr-2 text-gray-400" />
                            <span>Owner: {restaurant.owner?.name || 'N/A'}</span>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
