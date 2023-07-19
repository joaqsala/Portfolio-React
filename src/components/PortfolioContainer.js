// import React, { useState }  from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Portfolio from '../pages/Portfolio';
// import Contact from '../pages/Contact';
// import Resume from '../pages/Resume';
// import NotFound from '../pages/NotFound';

// export default function PortfolioContainer() {
//     const [currentPage, setCurrentPage] = useState('Home');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'Home':
//         return <Home />;
//       case 'About':
//         return <About />;
//       case 'Contact':
//         return <Contact />;
//       case 'Portfolio':
//         return <Portfolio />;
//       case 'Resume':
//         return <Resume />;
//       default:
//         return <NotFound />;
//     }
//   };
  
//   const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <div>
//         {/* Passing the currentPage from state and the function to update it */}
//         <Header currentPage={currentPage} handlePageChange={handlePageChange} />
//         {/* Calling the renderPage method which will return a component  */}
//           {renderPage()}
//           <Footer />
//         </div>
//       );
// };