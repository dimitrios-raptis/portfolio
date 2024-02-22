import { useRef } from 'react';
import Image from "next/image"
import Layout from '../Layout';

type Props = {
  scrollTo: any;
}

const Intro = ({ scrollTo }: Props) => {
  return (
    <section className="bg-grey flex justify-between">
      <Layout>
        <div className="flex items-center justify-between">
          <div>
            <div>
              <p className="uppercase font-bold text-lg mb-4">Hello!</p>
              <h1 className="text-3xl sm:text-5xl lg:text-8xl mb-3">I’m Dimitrios Raptis</h1>
              <h2 className="text-xl sm:text-5xl lg:text-6xl mb-8">Front End Developer</h2>
            </div>

            <button onClick={scrollTo} className="text-xl hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Get in touch &#8594;</button>
          </div>

          <Image src="/assets/images/ninja.png" alt="Hacker ninja image" width={600} height={600} className="object-contain w-1/2 lg:w-1/3" />
        </div>
      </Layout>
    </section >
  )
}

export default Intro