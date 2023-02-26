import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import {palettes} from "./palettes";
import {Palette} from "./components/Palette";

const App = () => {
    return (
        <div className="container">
            <header>
                <h1>Barevné palety</h1>
            </header>
            <main>
                <div>
                    {
                        palettes.map(({name, image, attribution, colors, direction, description}) =>
                            <Palette
                                key={name}
                                name={name}
                                image={image}
                                attribution={attribution}
                                colors={colors}
                                direction={direction}
                                description={description}/>
                        )}
                </div>
            </main>
            <footer>
                <p>Martina, úkol, Czechitas, React</p>
            </footer>
        </div>
    );
};

createRoot(
    document.querySelector('#app'),
).render(<App/>);
