import React from 'react';
import {FiX} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js'

const CategoryNavMobile = ({setCatNavMobile}) => {
  const {data} = useFetch('/categories');

  return <div className='w-full h-full bg-primary p-8'>
    {/* close icon */}
    <div 
    onClick={() => setCatNavMobile(false)}
    className='flex justify-end cursor-pointer'>
      <FiX className='text-3xl'/>
    </div>
    <div className='flex flex-col gap-y-8'>
      {data?.map(category => (
        <Link to={`products/${category.id}`} key={category.id} className='uppercase font-medium '>
          {category.attributes.title}
        </Link>
      ))}
    </div>
  </div>;
};

export default CategoryNavMobile;
