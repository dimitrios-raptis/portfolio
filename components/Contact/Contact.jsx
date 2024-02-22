import Layout from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import { faLinkedinIn } from '@/node_modules/@fortawesome/free-brands-svg-icons/index';
import ContactForm from './ContactForm';

const Contact = ({ scrollToContact }) => {
  return (
    <section ref={scrollToContact} className="bg-white xl:px-40">
      <Layout>
        <div className='flex flex-col w-full gap-5'>
          <h2 className='text-3xl text-center sm:text-5xl lg:text-6xl font-bold mb-10'>Contact me</h2>
          <div className='flex justify-between gap-20 flex-col lg:flex-row'>
            <div className='bg-grey p-16 basis-2/3'>
              <div className='flex mb-4'>
                <p className='flex items-start mr-5 text-lg'>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" color="grey-dark" />
                </p>
                <div className='flex flex-col'>
                  <p className='text-3xl font-bold mb-3'>Email</p>
                  <a href='mailto:raptdimitris@gmail.com' target="_blank" className='text-lg [overflow-wrap:anywhere]'>raptdimitris@gmail.com</a>
                </div>
              </div>
              <div className='flex mb-4'>
                <p className='flex items-start mr-5 text-lg'>
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="grey-dark" />
                </p>
                <div className='flex flex-col'>
                  <p className='text-3xl font-bold mb-3'>LinkedIn</p>
                  <a href='https://www.linkedin.com/in/dimraptis/' target="_blank" className='text-lg [overflow-wrap:anywhere]'>https://www.linkedin.com/in/dimraptis/</a>
                </div>
              </div>
            </div>

            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>


      </Layout>
    </section>
  )
}

export default Contact