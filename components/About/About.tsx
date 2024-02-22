import Layout from '../Layout';
import { faCoffee, faDesktop, faMobileScreen, faEye, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import Blurb from './Blurb';




const About = () => {
  return (
    <section className="bg-white">
      <Layout>
        <div className='flex flex-col items-center justify-center w-full gap-5'>
          <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold mb-10'>About Me</h2>
          <p className='text-center text-xl sm:text-2xl lg:leading-8 xl:px-40'>An experienced and competent front-end developer specializing in creating clean, functional user interfaces (UI), using technologies like HTML5, CSS3 (SASS, LESS) and JavaScript (React, jQuery), CSS frameworks (Bootstrap, Foundation, Inuit) and JS frameworks (Gatsby, Next) and templating engines (Nunjucks), for Microsites, Campaign Landing Pages, Advertorials, Email Marketing Campaigns, Websites and always focused on a responsive design across all devices and screen sizes.
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
  )
}

export default About