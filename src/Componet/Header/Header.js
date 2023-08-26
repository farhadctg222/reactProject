import React from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';


const Header = () => {
    const student =[{
        name: 'farhad',
        age: 20,
        school: 'satkania school'
    },
    {
        name: 'emdad',
        age: 30,
        school: 'bakolia collage'
    }
]
    return (
        <div>
         {
            student.map(student=><Card name={student}key={student.name}></Card>)
         }
        </div>
    );
};

export default Header;