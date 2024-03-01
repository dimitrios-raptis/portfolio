import Layout from '../Layout';
import { faDesktop, faMobileScreen, faEye, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Blurb from './Blurb';


const About = () => {
  return (
    <section className="bg-white">
      <Layout>
        <div className='flex flex-col items-center justify-center w-full gap-5'>
          <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold mb-10'>About Me</h2>
          <p className='text-center text-xl sm:text-2xl lg:leading-8 xl:px-40'>An experienced and competent front-end developer with a passion for crafting clean and functional user interfaces. Specializing in HTML5, CSS and JavaScript (particularly React), I bring expertise in utilizing JS frameworks like Gatsby and Next, along with CSS frameworks such as Tailwind and Bootstrap. I&#39;m specialized in the development of web applications and websites, consistently prioritizing responsive design to ensure optimal user experience across various devices and screen sizes.
          </p>

          <div className='flex gap-4 mt-10 flex-col sm:flex-row w-full items-center flex-wrap justify-center'>
            <Blurb icon={faDesktop} title='Desktop Design' />
            <Blurb icon={faMobileScreen} title='Mobile Design' />
            <Blurb icon={faEye} title='Attention to Detail' />
            <Blurb icon={faUserGroup} title='Team Player' />
          </div>
        </div>


      </Layout>
    </section>
  );
};

export default About;