import Layout from '../Layout';
import PortfolioCard from './PortfolioCard';
import portfolioList from './portfolioList.js';

const Portfolio = () => {
  return (
    <section className="bg-white py-20 p-10 w-full">
      <div className='flex flex-col w-full gap-3'>
        <h2 className='text-3xl text-center sm:text-5xl lg:text-6xl font-bold mb-5'>Portfolio</h2>
        <div className="grid-cols-1 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
          {portfolioList.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Portfolio;