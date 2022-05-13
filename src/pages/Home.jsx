import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Request';

const Home = () => {
  return (
    <>
        <Main />
        <Row rowId={1} 
             title='Upcoming' 
             fetchURL={requests.requestUpcoming}
        />
        <Row rowId={2}
             title='Popular'
             fetchURL={requests.requestPopular}
        />
        <Row rowId={3} 
             title='Trending'
             fetchURL={requests.requestTrending}
        />
        <Row rowId={4} 
             title='Top rated' 
             fetchURL={requests.requestTopRated}
        />
        <Row rowId={5} 
             title='Horor'
             fetchURL={requests.requestHorror}
        />
    </>
  )
}

export default Home;