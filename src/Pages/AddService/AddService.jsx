import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    const [error, setError] = useState("");
    useTitle('Add Services')

const handleSubmit= (e) =>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.photoUrl.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.Rateing.value;
    const Features = form.features.value
    const service = {
        title,
        img,
        description,
        price,
        rating,
    }
    if(rating > 5){
        return setError("Rating Must be <= 5 ")
    }

    fetch(`http://localhost:5000/add/service`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body : JSON.stringify(service)
    })
    .then(res=>res.json())
    .then(data => {
        if(data.acknowledged){
            toast.success('Service Added')
        }
    })

    
    
}

    return (
        <div>
<Toaster position="top-left" reverseOrder={false} />
            <div>
      <div className="max-w-xl mx-auto mb-6">
        <div className="flex items-center ">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-xl uppercase font-bold mb-4 text-center">
              Add Service
            </span>
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Title
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="title"
                  id="name"
                  placeholder="Service Title"
                  required
                />
              </div>
              <div className="mb-4 md:w-full">
                <label htmlFor="photo" className="block text-xs mb-1">
                  Photo Url
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="photoUrl"
                  id="photoUrl"
                  placeholder="Photo Url"
                  required
                />
              </div>
              <div className="mb-4 md:w-full">
                <label htmlFor="price" className="block text-xs mb-1">
                  price
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="number"
                  name="price"
                  placeholder="Service Price"
                  required
                />
              </div>
              <div className="relative mb-4">
          <label htmlFor="description" className="leading-7 text-sm text-gray-600">
          Description
          </label>
          <textarea
            required
            name="description"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
              <div className="mb-6 md:w-full">
                <label htmlFor="password" className="block text-xs mb-1">
                  Rateing
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="number"
                  name="Rateing"
                  id="password"
                  required
                />
              </div>
              <div className="mb-6 md:w-full">
                <label htmlFor="password" className="block text-xs mb-1">
                features
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="Text"
                  name="features"
                  required
                />
              </div>
              <input
                type="submit"
                className="bg-primary hover:bg-red-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
                value="Add"
              />
            </form>
            <p className='text-red-500'>{error}</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AddService;