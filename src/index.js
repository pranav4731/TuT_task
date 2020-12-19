import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css'

//setup vars
const author = 'Brandon Sanderson';
const title = 'Rhythm of War';
const img = "https://m.media-amazon.com/images/I/61ukjVCWTfL._AC_UY545_FMwebp_QL65_.jpg"
const a ="";
function Booklist(){
    return( 
        <section className='booklist'>
        <Book job='developer'/>
        <Book title='random title' number={22}/>      
        </section>
    );
}

const Book = (props) => {
    
    return( 
    <article className = 'book'>
     <img src = {img} alt='' />
     <h1>{title}</h1>
     <h4>{author}</h4>
     <p>{props.job}</p>
     <p>{props.title}</p>
     <p>{props.number}</p>

    </article>    
    );
};




ReactDom.render(<Booklist />, document.getElementById('root')
);