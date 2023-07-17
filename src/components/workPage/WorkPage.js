import React, { useEffect, useState } from 'react';
import styles from './work.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import PastClientCaraousel from '../SharedComp/pastClientCaraousel/PastClientCaraousel';
import Link from 'next/link';
import WorkPageLayout from './WorkPageLayout/WorkPageLayout';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.init';

const WorkPage = () => {
  const ITEMS_PER_PAGE = 6; // Number of items to display per page

  // GET DATA HERE
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  const databaseRef = collection(db, 'projects');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setLoading(false);
      setData(response.docs.map((data) => {
        return { ...data.data(), id: data.id };
      }));
    });
  };

  // Calculate the index of the first and last item of the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  // Get the current items to display based on the current page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.MainContainer}>
      <div className='lg:ml-0 ml-8'>
        <h1
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='2800'
          className='mt-24 mb-5 font-bold text-7xl text-black'
        >
          Selected Project
        </h1>

        <div className='mt-16'>
          <div className='grid md:grid-cols-2 gap-5'>
            {currentItems.map((d, index) => (
              <WorkPageLayout key={d.id} d={d} index={index} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-5">
          {/* Generate pagination links */}
          {Array.from(Array(Math.ceil(data.length / ITEMS_PER_PAGE)), (_, index) => (
            <button
              key={index}
              className={`mx-1 px-2  rounded ${
                index + 1 === currentPage ? 'bg-gray-700 text-orange-600' : 'bg-gray-300 text-gray-700'
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <PastClientCaraousel />
    </div>
  );
};

export default WorkPage;
