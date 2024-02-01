import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import Banner from '../../Component/Banner/Banner'
// import Row from '../../Component/Rows/Row/Row'
import Rowlist from '../../Component/Rows/Rowslist/Rowlist'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </div>
  );
}

export default Home