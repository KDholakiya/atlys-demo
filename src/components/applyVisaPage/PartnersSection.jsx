import React from 'react';
import PropTypes from 'prop-types';

const PartnersSection = ({ title = 'Partners we work with', partnerImages = [] }) => {
  return (
    <section className="mx-4 border-b-[0.5px] border-gray-800 py-12">
      <div className="flex flex-col gap-8" data-slice-type="black_clp_partners" data-slice-variation="default">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="scrollbar-track-transparent scrollbar-thumb-transparent no-scrollbar flex w-full flex-row gap-4 overflow-x-auto md:flex-wrap">
          {partnerImages.map((imageUrl, index) => (
            <div key={index} className="rounded-brand flex min-h-[130px] flex-shrink-0 place-items-center justify-center bg-[#1A1B1C] p-4">
              <img alt="" className="w-24 object-contain" src={imageUrl} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

PartnersSection.propTypes = {
  title: PropTypes.string,
  partnerImages: PropTypes.arrayOf(PropTypes.string),
};

PartnersSection.defaultProps = {
  title: 'Partners we work with',
  partnerImages: [
    'https://images.prismic.io/atlys/9c2f8735-9353-4af2-8046-c43cdaed9ff2_2560px-IATAlogo.png?auto=compress,format',
    'https://images.prismic.io/atlys/b0a61f4c-cf5a-4b3c-a1ab-b2405df6b4ec_Swiss-International-Air-Lines-logo.png?auto=compress,format',
    'https://images.prismic.io/atlys/e42e2df5-1f1c-431a-979e-607b22cce5ad_Lufthansa_Logo_2018.png?auto=compress,format',
  ],
};

export default PartnersSection;
