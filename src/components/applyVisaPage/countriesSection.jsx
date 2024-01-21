import React from 'react';
import PropTypes from 'prop-types';

const CountriesSection = ({ countries }) => {
  return (
    <section className="mx-4 border-b-[0.5px] border-gray-800 py-10">
      <p className="text-xl font-medium text-zinc-300">The Schengen visa allows you to visit all 27 countries</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {countries.map((country, index) => (
          <span key={index} className="rounded-lg bg-[#232531] px-2.5 py-0.5 text-sm text-white/80">
            {country}
          </span>
        ))}
      </div>
    </section>
  );
};

CountriesSection.defaultProps = {
  countries: [
    'France', 'Spain', 'Switzerland', 'Greece', 'Belgium', 'Czechia',
    'Netherlands', 'Iceland', 'Norway', 'Hungary', 'Malta', 'Austria',
    'Croatia', 'Estonia', 'Liechtenstein', 'Denmark', 'Finland', 'Latvia',
    'Lithuania', 'Luxembourg', 'Slovakia', 'Slovenia', 'Sweden'
  ],
};

CountriesSection.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string),
};

export default CountriesSection;
