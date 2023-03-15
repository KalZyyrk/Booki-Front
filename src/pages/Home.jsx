import React from 'react';
import Activities from '../components/Activities/Activities';
import Info from '../components/Info';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Lodging from '../components/LodgingsSection/Lodging';


const Home = () => {
    return (
        <>
            <Header />
            <main className="body wrapper">
                <Info />
                <Lodging />
                <Activities />
                <Footer />
            </main>

        </>
    );
}

export default Home;
