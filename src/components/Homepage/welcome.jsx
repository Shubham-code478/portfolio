import React from 'react';
import Css from '../../components/Homepage/home.css';

function Welcomebanner() {
 const myCome = {
    textAlign: "center"
 };
    return(
        <section className='welcome'>
            <div className='containers'>
                <div className='main'style={myCome}>
            <p className='come'>Welcome to Almaris</p>
<h2 className='headinge'>In the Heart of the Mountain</h2>
<h4 className='headinged'>4.9 out of 5</h4>
<p className='comes'>Based on 25000+ reviews</p>
            </div>
            </div>
        </section>

    );
    
}

export default Welcomebanner;