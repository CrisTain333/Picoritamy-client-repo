import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from '../../hooks/useTitle';

const MainGallery = () => {
    useTitle('Gallery')
    
    
    return (
        <div>
        <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-center">
			<h2 className="text-center text-primary text-3xl tracking-tighter font-bold">Gallery
				
			</h2>
			
		</div>
	</div>
</div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://source.unsplash.com/random/301x301/" alt="" className=" h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"   />
		<img alt="" className="w-full h-auto rounded shadow-sm  dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0"    />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1"   />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2"   />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3"   />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4"   />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5"   />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6"   />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7"   />
		<img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
        </div>
    );
};

export default MainGallery;