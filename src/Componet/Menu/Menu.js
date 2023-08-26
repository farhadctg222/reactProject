import React from 'react';
import Header from '../Header/Header';
import { Link, useParams } from 'react-router-dom';

const Menu = () => {
    const {id} = useParams()
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veritatis minus dicta excepturi nostrum, nam ratione praesentium ipsum vero explicabo eos accusantium labore provident consequuntur et beatae qui necessitatibus numquam ut reprehenderit. Doloribus fugit minus velit esse. Maiores sapiente minus rerum praesentium, delectus eaque eos tenetur officia! Nemo esse dolorem rerum voluptatem in! Blanditiis repellat veritatis dicta ipsa officiis et accusamus fugit? Quae corrupti reprehenderit doloremque impedit laudantium, in voluptate, omnis deserunt suscipit aut mollitia eveniet eius ex modi autem maiores eaque sint magnam tempora beatae nobis eos? Animi asperiores commodi enim corrupti nisi hic, veritatis voluptatem placeat ipsa quos.</p>
             <Link to="/product">clike here</Link>
             <h1>{id}</h1>

             
        </div>
    );
};

export default Menu;