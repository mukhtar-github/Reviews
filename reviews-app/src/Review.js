import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

const [index, setIndex] = useState(0);
const { name, job, image, text } = people[index];

const checkNumber = (number) => {
  if (number > people.length - 1) {
    return 0;
  }
  if (number < 0) {
    return people.length - 1;
  }
  return number;
};

const nextPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
  });
};

  return <h2>review component</h2>;
};

export default Review;
