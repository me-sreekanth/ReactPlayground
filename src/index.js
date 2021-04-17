import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import {data} from './books';
import Book from './Book';
import {greeting} from './testing/testing';

const title = 'I love you to the moon and back';
const author = 'William Shake';
const img = 'https://freepngimg.com/static/img/twitter.png';

function BookList () {
  console.log(greeting);
return(
  <section className="booklist">
    {data.map((book) => {
      
      return <Book key={book.id} {...book}></Book>;
    })}
  </section>
)
}




ReactDom.render(<BookList/>, document.getElementById('root'));