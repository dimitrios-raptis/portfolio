import ScrollLink from '../ScrollLink/ScrollLink';

const CallToAction = () => {
  return (
    <section className="bg-grey-dark p-16  w-full">
      <div className="flex flex-col items-center">
        <h1 className='text-white uppercase text-3xl text-center sm:text-2xl lg:text-3xl font-bold mb-10'>Let&#39;s get started</h1>

        <ScrollLink href='#contact' className="text-xl hover:bg-gray-100 text-white hover:text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-block">
          Get in touch &#8594;
        </ScrollLink>
      </div>
    </section>
  );
};

export default CallToAction;
