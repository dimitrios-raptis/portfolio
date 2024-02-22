import Image from "next/image"
import Layout from '../Layout';

const Skills = () => {
  return (
    <section className="bg-grey-dark">
      <Layout>
        <div className="flex w-full flex-col ">
          <h2 className='text-white text-center text-3xl sm:text-5xl lg:text-6xl font-bold mb-10'>My Skills</h2>
          <div className="flex justify-center items-center flex-col md:flex-row gap-6">


            <ul className="list-disc text-xl text-white">
              <li>Javascript libraries: React, jQuery</li>
              <li>JS framework: Gatsby, Next</li>
              <li>JS templating engine: Nunjucks</li>
              <li>CSS Preprocessors: SASS, LESS</li>
              <li>CSS-Modules, CSS-in-JS, Emotion.js</li>
              <li>BEMIT methodology</li>
              <li>Frameworks: Tailwind, Bootstrap, Foundation, Inuit</li>
              <li>Content Management Systems (CMS): WordPress, Contentful</li>
              <li>Query language: GraphQL</li>
              <li>Task runners: Gulp, Grunt, Webpack</li>
              <li>Graphic design editor: Photoshop</li>
              <li>Version Control System: Git, Mercurial</li>
              <li>Responsive design across all devices</li>
              <li>Agile Experience, Scrum Methodolog</li>
              <li>Storybook</li>
            </ul>

            <Image src="/assets/images/ninja hacker.png" alt="Hacker ninja skills image" width={800} height={800} className="object-contain" />
          </div>
        </div>
      </Layout>
    </section>
  )
}



export default Skills