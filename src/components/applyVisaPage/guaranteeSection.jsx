import React from 'react';
import PropTypes from 'prop-types';
import AppointmentDetails from './appoinmentDetails';

const GuranteeSection = ({ appointmentDate, onApplyNowClick }) => {
  return (
    <section className="mx-4 border-b-[0.5px] border-[#b8b8b8] border-opacity-75 py-10">
      <div className="mb-6 md:hidden">
        <AppointmentDetails />
      </div>
      <div className="flex flex-col items-center text-center text-xl md:items-start md:text-2xl">
        <p className="text-lg font-medium md:text-2xl">We guarantee a visa appointment before<br /></p>
        <div className="mt-1 flex w-full flex-col md:flex-row md:items-center md:gap-4">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <p className="text-primary text-lg font-bold md:text-2xl">
              <span className="font-bold">{appointmentDate}</span>
            </p>
            <svg className="text-primary h-6 w-6 md:h-8 md:w-8" fill="none" height="24" viewBox="0 0 24 24" width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 8.11937C3 6.99026 3 6.42571 3.17756 5.93283C3.33451 5.49715 3.59019 5.10373 3.92457 4.78336C4.30286 4.42093 4.81875 4.19164 5.85055 3.73307L9.40073 2.15522C10.3579 1.72982 10.8365 1.51711 11.334 1.43311C11.7749 1.35865 12.2251 1.35865 12.666 1.43311C13.1635 1.51711 13.6421 1.72982 14.5993 2.15522L18.1495 3.73307C19.1812 4.19164 19.6971 4.42093 20.0754 4.78336C20.4098 5.10373 20.6655 5.49715 20.8224 5.93283C21 6.42571 21 6.99026 21 8.11937V13.5748C21 14.8271 21 15.4532 20.8274 16.0216C20.6746 16.5247 20.4241 16.9928 20.0902 17.3991C19.713 17.858 19.192 18.2053 18.1501 18.8999L14.6626 21.2249C13.7003 21.8664 13.2192 22.1872 12.6991 22.3118C12.2395 22.422 11.7605 22.422 11.3009 22.3118C10.7808 22.1872 10.2997 21.8664 9.33744 21.2249L5.84992 18.8999C4.80796 18.2053 4.28697 17.858 3.90982 17.3991C3.57592 16.9928 3.32541 16.5247 3.1726 16.0216C3 15.4532 3 14.8271 3 13.5748V8.11937Z"
                fill="currentColor" opacity="0.12"></path>
              <path
                d="M9 12L11 14L15.5 9.5M9.40073 2.15522L5.85055 3.73307C4.81875 4.19164 4.30286 4.42093 3.92457 4.78336C3.59019 5.10373 3.33451 5.49715 3.17756 5.93283C3 6.42571 3 6.99026 3 8.11937V13.5748C3 14.8271 3 15.4532 3.1726 16.0216C3.32541 16.5247 3.57592 16.9928 3.90982 17.3991C4.28697 17.858 4.80796 18.2053 5.84992 18.8999L9.33744 21.2249C10.2997 21.8664 10.7808 22.1872 11.3009 22.3118C11.7605 22.422 12.2395 22.422 12.6991 22.3118C13.2192 22.1872 13.7003 21.8664 14.6626 21.2249L18.1501 18.8999C19.192 18.2053 19.713 17.858 20.0902 17.3991C20.4241 16.9928 20.6746 16.5247 20.8274 16.0216C21 15.4532 21 14.8271 21 13.5748V8.11937C21 6.99026 21 6.42571 20.8224 5.93283C20.6655 5.49715 20.4098 5.10373 20.0754 4.78336C19.6971 4.42093 19.1812 4.19164 18.1495 3.73307L14.5993 2.15522C13.6421 1.72982 13.1635 1.51711 12.666 1.43311C12.2251 1.35865 11.7749 1.35865 11.334 1.43311C10.8365 1.51711 10.3579 1.72982 9.40073 2.15522Z"
                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

GuranteeSection.propTypes = {
  appointmentDate: PropTypes.string.isRequired,
  onApplyNowClick: PropTypes.func,
};

GuranteeSection.defaultProps = {
  appointmentDate: "Feb 5, 2024, 9:00 AM",
  onApplyNowClick: () => {
    // Default click handler (can be customized)
  }
}

export default GuranteeSection;
