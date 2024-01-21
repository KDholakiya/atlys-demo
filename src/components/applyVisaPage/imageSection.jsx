import PropTypes from 'prop-types';

const ImageSection = ({ imageUrl, conciergeName, conciergeAvatarUrl, conciergeVisasDone, title, logoUrl }) => {
  return (
    <section>
      <div className="relative h-56 overflow-hidden md:h-80 md:max-w-2xl md:rounded-2xl">
        <img
          alt=""
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="absolute inset-0 object-cover h-full"
          sizes="100vw"
          width={"100%"}
          src={imageUrl}
        />
        <span
          className="absolute inset-x-0 bottom-0 hidden bg-black/40 backdrop-blur md:block"
          style={{ height: '72px' }}
        ></span>
        <div className="absolute bottom-5 left-4 cursor-pointer rounded-2xl bg-black/40 px-4 py-2.5 backdrop-blur md:bottom-24">
          <h3 className="text-xs text-zinc-300">Meet your concierge</h3>
          <div className="mt-1 flex items-center gap-3 text-sm">
            <div className="h-8 w-8 rounded-full border-[1.5px] border-white/40 p-1">
              <img alt="avatar" className="h-full w-full rounded-full" src={conciergeAvatarUrl} />
            </div>
            <div>
              <span className="font-medium text-zinc-200">{conciergeName}</span>
              <p className="mt-0.5 max-w-[240px] text-xs">{conciergeVisasDone}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 border-b-[0.5px] border-[#b8b8b8] border-opacity-75">
        <h1 className="font-basier relative mt-5 text-2xl font-semibold md:-mt-14 md:ml-6 md:text-3xl md:text-zinc-300">
          {title}
        </h1>
        <div className="mt-4 flex w-full flex-row items-center gap-4 pb-10 md:mt-8">
          <img alt="" className="h-8 object-contain md:h-10" src={logoUrl} />
          <a className="flex cursor-pointer items-center text-sm md:text-base md:font-semibold">
            <span>Hear from recent travellers</span>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

ImageSection.defaultProps = {
  imageUrl:
    'https://images.prismic.io/atlys/85a9d1fe-859e-4d68-95d2-49b7ae5dcbd6_earth-DXuxHw3S5ak-unsplash.jpg?auto=compress%2Cformat&amp;rect=0%2C200%2C1600%2C1600&amp;w=3840&amp;fit=max',
  conciergeName: 'Rupali Singh',
  conciergeAvatarUrl:
    'https://firebasestorage.googleapis.com/v0/b/vdcapp-54939.appspot.com/o/frontend_config%2Fatlys_black_images%2Fconcierge%2Fconcierge_6.png?alt=media&amp;token=69ce55f4-6b5a-4e7b-834c-e76e0c1e5d7a',
  conciergeVisasDone: '1000+ visas done',
  title: 'Schengen Visa Appointment & Guidance',
  logoUrl: 'https://atlys.cdn.prismic.io/atlys/9a502fa5-d28e-40fe-b5a0-9e53026d1d4a_Group+7.svg',
};

ImageSection.propTypes = {
  imageUrl: PropTypes.string,
  conciergeName: PropTypes.string,
  conciergeAvatarUrl: PropTypes.string,
  conciergeVisasDone: PropTypes.string,
  title: PropTypes.string,
  logoUrl: PropTypes.string,
};

export default ImageSection;