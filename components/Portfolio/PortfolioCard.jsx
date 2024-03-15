import Link from 'next/link';
import Image from "next/image";

const PortfolioCard = ({ item }) => {
  const { title, text, icon, tags, image, url } = item;

  return (
    <div
      className="mx-3 mt-6 self-start sm:shrink-0 sm:grow sm:basis-0 group h-[360px] rounded-[15px] p-[1rem] sm:p-[1.5rem] bg-white	relative flex items-end	duration-[0.4s] ease-out overflow-hidden hover:translate-y-[7px] hover:before:opacity-100 before:content-[''] before:absolute before:top-0	before:left-0 before:block before:w-full before:h-full before:rounded-[15px] before:bg-black before:bg-opacity-90 before:z-[2] before:duration-[0.5s] before:opacity-0 cursor-default shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      <Image
        className="rounded-t-lg w-full h-full object-cover absolute top-0	left-0 rounded-[15px]"
        width={367} height={360}
        src={image?.src}
        alt={image?.alt}
      />
      <div className="relative z-[3] text-white	opacity-0	translate-y-[30px] duration-[0.5s] group-hover:opacity-100 group-hover:translate-y-[0px]">
        {url && (
          <Link href={url} target="_blank">
            <h5
              className="mb-3 text-xl font-medium leading-tight text-white underline italic">
              {title}
            </h5>
          </Link>
        )}
        {!url && (
          <h5
            className="mb-3 text-xl font-medium leading-tight text-white underline italic">
            {title}
          </h5>
        )}
        <p className="mb-4 text-sm text-white">
          {text}
        </p>
        {tags && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span key={index} className="text-[10px] py-1 px-2 rounded-full text-white bg-sky-600 hover:bg-sky-700 transition-all ease-in">
                {tag}
              </span>
            ))}
          </div>
        )}
        {url && (
          <Link href={url} target="_blank" className="float-right text-xs hover:bg-sky-600	 text-white py-1 px-2 border border-gray-400 hover:border-orange-100 rounded shadow ease duration-200 mt-4">Have a look!</Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;