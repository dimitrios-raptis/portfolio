import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  icon: any;
  title: string;
}

const Blurb = ({ icon, title }: Props) => {
  return (
    <div className='border-solid sm:basis-2/5 md:basis-1/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-10 py-10 min-w-60 w-full md:w-min flex items-center flex-col gap-y-4 hover:shadow-[0_8px_40px_rgb(0,0,0,0.20)] ease-in duration-300'>
      <FontAwesomeIcon icon={icon} size="2x" color="grey-dark" />
      <p>{title}</p>
    </div>
  )
}

export default Blurb
