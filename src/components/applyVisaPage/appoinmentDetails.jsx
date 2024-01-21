const AppointmentDetails = (props) => {

  const {
    appointmentDate = "Feb 5, 2024, 9:00 AM",
    visaType = "Tourist",
    validityPeriod = "180 days",
    lengthOfStay = "90 days",
    travelersCount = 1,
    totalAmount = '₹4,999'
  } = props;

  return (
    <div className="relative w-full">
      <div className="absolute block h-16 w-16 transform"
        style={{ left: '6px', top: '61px', transform: 'rotate(-39deg)', backgroundColor: 'rgb(40, 46, 177)' }}>
      </div>
      <div className="absolute block h-16 w-16 transform"
        style={{ right: '6px', top: '61px', transform: 'rotate(-52deg)', background: 'rgb(121, 3, 239)' }}>
      </div>
      <div
        className="absolute -inset-2 z-20 -mt-1 block flex flex-row place-items-center justify-center bg-[#202939] font-normal md:text-xs lg:text-base"
        style={{ top: '20px', transform: 'perspective(200px) rotateX(3deg)', borderRadius: '10px', zIndex: 60, height: '75px' }}        >
        <div className="flex items-center justify-center md:relative md:gap-0 lg:gap-4">
          <svg className="md:h-[35px] lg:h-[57px]" fill="none" height="57" viewBox="0 0 56 57" width="56"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.96289 19.3469C6.96289 16.7261 6.96289 15.4157 7.37502 14.2717C7.73931 13.2605 8.33275 12.3473 9.10888 11.6037C9.98691 10.7625 11.1843 10.2303 13.5792 9.16592L21.8194 5.50363C24.0411 4.51622 25.1519 4.02252 26.3066 3.82754C27.33 3.65472 28.3751 3.65472 29.3985 3.82754C30.5531 4.02252 31.664 4.51622 33.8856 5.50362L42.1259 9.16592C44.5207 10.2303 45.7182 10.7625 46.5962 11.6037C47.3723 12.3473 47.9658 13.2605 48.3301 14.2717C48.7422 15.4157 48.7422 16.7261 48.7422 19.3468V32.0093C48.7422 34.9159 48.7422 36.3692 48.3416 37.6884C47.9869 38.8563 47.4054 39.9428 46.6304 40.8857C45.755 41.9508 44.5458 42.757 42.1273 44.3693L34.0325 49.7658C31.799 51.2548 30.6823 51.9993 29.4752 52.2886C28.4085 52.5442 27.2965 52.5442 26.2298 52.2886C25.0228 51.9993 23.906 51.2548 21.6725 49.7658L13.5778 44.3693C11.1593 42.757 9.95005 41.9508 9.07464 40.8857C8.29965 39.9428 7.71819 38.8563 7.36352 37.6884C6.96289 36.3692 6.96289 34.9159 6.96289 32.0093V19.3469Z"
              fill="white" opacity="0.12"></path>
            <path
              d="M20.8893 28.3541L25.5315 32.9962L35.9763 22.5514M21.8194 5.50363L13.5792 9.16592C11.1843 10.2303 9.98691 10.7625 9.10888 11.6037C8.33275 12.3473 7.73931 13.2605 7.37502 14.2717C6.96289 15.4157 6.96289 16.7261 6.96289 19.3469V32.0093C6.96289 34.9159 6.96289 36.3692 7.36352 37.6884C7.71819 38.8563 8.29965 39.9428 9.07464 40.8857C9.95005 41.9508 11.1593 42.757 13.5778 44.3693L21.6725 49.7658C23.906 51.2548 25.0228 51.9993 26.2298 52.2886C27.2965 52.5442 28.4085 52.5442 29.4752 52.2886C30.6823 51.9993 31.799 51.2548 34.0325 49.7658L42.1273 44.3693C44.5458 42.757 45.755 41.9508 46.6304 40.8857C47.4054 39.9428 47.9869 38.8563 48.3416 37.6884C48.7422 36.3692 48.7422 34.9159 48.7422 32.0093V19.3468C48.7422 16.7261 48.7422 15.4157 48.3301 14.2717C47.9658 13.2605 47.3723 12.3473 46.5962 11.6037C45.7182 10.7625 44.5207 10.2303 42.1259 9.16592L33.8856 5.50362C31.664 4.51622 30.5531 4.02252 29.3985 3.82754C28.3751 3.65472 27.33 3.65472 26.3066 3.82754C25.1519 4.02252 24.0411 4.51622 21.8194 5.50363Z"
              stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.48161"></path>
          </svg>
          <p className="ml-1 text-zinc-300">
            Visa appointment guaranteed by<br />
            <span className="font-bold">{appointmentDate}</span>
          </p>
        </div>
      </div>
      <div
        className="pt-28 rounded-brand relative z-10 flex h-full w-full flex-col place-items-center justify-center gap-4 border border-white/20 bg-[#1A1B1C] py-5 shadow-2xl">
        <div className="flex w-full flex-col gap-4 px-5">
          <div className="flex flex-row items-center gap-2 border-b-[0.5px] border-[#b8b8b8] border-opacity-75 pb-2">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 2V3.8C21 4.92011 21 5.48016 20.782 5.90798C20.5903 6.28431 20.2843 6.59027 19.908 6.78201C19.4802 7 18.9201 7 17.8 7H6.2C5.07989 7 4.51984 7 4.09202 6.78201C3.71569 6.59027 3.40973 6.28431 3.21799 5.90798C3 5.48016 3 4.92011 3 3.8V2M21 22V20.2C21 19.0799 21 18.5198 20.782 18.092C20.5903 17.7157 20.2843 17.4097 19.908 17.218C19.4802 17 18.9201 17 17.8 17H6.2C5.07989 17 4.51984 17 4.09202 17.218C3.71569 17.4097 3.40973 17.7157 3.21799 18.092C3 18.5198 3 19.0799 3 20.2V22M4.5 12H3.5M8.5 12H7.5M12.5 12H11.5M16.5 12H15.5M20.5 12H19.5"
                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
            <p className="flex-1 text-base text-zinc-300">Visa Type</p>
            <p className="text-base font-medium text-zinc-300">{visaType}</p>
          </div>
          <div className="flex flex-row items-center gap-2 border-b-[0.5px] border-[#b8b8b8] border-opacity-75 pb-2">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_38_117)">
                <path
                  d="M2.00012 16H7.00012M4.00012 19H10.0001M3.00012 13C3.00012 8.02947 7.02956 4.00003 12.0001 4.00003C16.9707 4.00003 21.0001 8.02947 21.0001 13C21.0001 17.9706 16.9707 22 12.0001 22H7.00012M14.0001 1.00003H10.0001M12.0001 10V14"
                  stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </g>
              <defs>
                <clipPath id="clip0_38_117">
                  <rect fill="#F5F5F5" height="24" width="24"></rect>
                </clipPath>
              </defs>
            </svg>
            <p className="flex-1 text-base text-zinc-300">Validity Period</p>
            <p className="text-base font-medium text-zinc-300">{validityPeriod}</p>
          </div>
          <div className="flex flex-row items-center gap-2 border-b-[0.5px] border-[#b8b8b8] border-opacity-75 pb-2">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 1V4M16 1V4M17.5 8H6.5M8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5M8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5M8 12.5H7M8 16.5C8 16.7761 7.77614 17 7.5 17C7.22386 17 7 16.7761 7 16.5M8 16.5C8 16.2239 7.77614 16 7.5 16C7.22386 16 7 16.2239 7 16.5M8 16.5H7M12.5 12.5C12.5 12.7761 12.2761 13 12 13C11.7239 13 11.5 12.7761 11.5 12.5M12.5 12.5C12.5 12.2239 12.2761 12 12 12C11.7239 12 11.5 12.2239 11.5 12.5M12.5 12.5H11.5M12.5 16.5C12.5 16.7761 12.2761 17 12 17C11.7239 17 11.5 16.7761 11.5 16.5M12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5M12.5 16.5H11.5M17 12.5C17 12.7761 16.7761 13 16.5 13C16.2239 13 16 12.7761 16 12.5M17 12.5C17 12.2239 16.7761 12 16.5 12C16.2239 12 16 12.2239 16 12.5M17 12.5H16M17 16.5C17 16.7761 16.7761 17 16.5 17C16.2239 17 16 16.7761 16 16.5M17 16.5C17 16.2239 16.7761 16 16.5 16C16.2239 16 16 16.2239 16 16.5M17 16.5H16M11.6 22H12.4C15.7603 22 17.4405 22 18.7239 21.346C19.8529 20.7708 20.7708 19.8529 21.346 18.7239C22 17.4405 22 15.7603 22 12.4V11.6C22 8.23968 22 6.55952 21.346 5.27605C20.7708 4.14708 19.8529 3.2292 18.7239 2.65396C17.4405 2 15.7603 2 12.4 2H11.6C8.23968 2 6.55952 2 5.27605 2.65396C4.14708 3.2292 3.2292 4.14708 2.65396 5.27605C2 6.55952 2 8.23968 2 11.6V12.4C2 15.7603 2 17.4405 2.65396 18.7239C3.2292 19.8529 4.14708 20.7708 5.27605 21.346C6.55952 22 8.23968 22 11.6 22Z"
                stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
            <p className="flex-1 text-base text-zinc-300">Length of stay</p>
            <p className="text-base font-medium text-zinc-300">{lengthOfStay}</p>
          </div>
          <div className="flex flex-row items-center gap-2 border-b-[0.5px] border-[#b8b8b8] border-opacity-75 pb-2">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 10C17.2091 10 19 8.20914 19 6C19 3.79086 17.2091 2 15 2M17 22H19.8C21.5673 22 23 20.5673 23 18.8V18.8C23 16.149 20.851 14 18.2 14H17M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6ZM4.2 22H11.8C13.5673 22 15 20.5673 15 18.8V18.8C15 16.149 12.851 14 10.2 14H5.8C3.14903 14 1 16.149 1 18.8V18.8C1 20.5673 2.43269 22 4.2 22Z"
                stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
            <p className="flex-1 text-base">Travellers</p>
            <div className="font-mediu flex gap-2 text-base">
              <div className="flex gap-2">
                <button aria-label="Decrease travelers count"
                  className="active:border-primary active:bg-primary flex h-5 w-5 items-center justify-center rounded-full border transition-colors active:text-white">
                  <svg className="h-4 w-4" fill="none" height="24" viewBox="0 0 24 24" width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H12H19" stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2"></path>
                  </svg>
                </button>
                <span className="w-6 select-none text-center">{travelersCount}</span>
                <button aria-label="Increase travelers count"
                  className="active:border-primary active:bg-primary flex h-5 w-5 items-center justify-center rounded-full border transition-colors active:text-white">
                  <svg className="h-4 w-4" fill="none" height="24" viewBox="0 0 24 24" width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H12M19 12H12M12 12V5M12 12V19" stroke="#F5F5F5" strokeLinecap="round"
                      strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center gap-2 px-5">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 11C22 10.0707 22 9.60603 21.9231 9.21964C21.6075 7.63288 20.3671 6.39249 18.7804 6.07686C18.394 6 17.9293 6 17 6H2V15.6C2 17.8402 2 18.9603 2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C5.03968 22 6.15979 22 8.4 22H17C17.9293 22 18.394 22 18.7804 21.9231C20.3671 21.6075 21.6075 20.3671 21.9231 18.7804C22 18.394 22 17.9293 22 17V17H21C19.3431 17 18 15.6569 18 14C18 12.3431 19.3431 11 21 11H22V11Z"
              fill="#F5F5F5" opacity="0.12"></path>
            <path
              d="M2 4V17.2C2 18.8802 2 19.7202 2.32698 20.362C2.6146 20.9265 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H17.2C18.8802 22 19.7202 22 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C22 19.7202 22 18.8802 22 17.2V10.8C22 9.11984 22 8.27976 21.673 7.63803C21.3854 7.07354 20.9265 6.6146 20.362 6.32698C19.7202 6 18.8802 6 17.2 6H12M22 11H21.5C19.8431 11 18.5 12.3431 18.5 14V14C18.5 15.6569 19.8431 17 21.5 17H22M17 6L15.92 4.56C15.216 3.62134 14.864 3.15201 14.4179 2.8135C14.0228 2.5137 13.5754 2.28999 13.0985 2.15378C12.56 2 11.9733 2 10.8 2H4C2.89543 2 2 2.89543 2 4V4C2 5.10457 2.89543 6 4 6H17Z"
              stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
          </svg>
          <p className="flex-1 text-lg font-bold text-zinc-300">Total</p>
          <div className="flex flex-col items-end text-zinc-300"><span
            className="flex flex-col items-end font-medium">{totalAmount}</span></div>
        </div>
        <div className="mt-2 flex w-full px-4">
          <button className="w-full rounded-xl bg-white/90 font-medium shadow-md"><span
            className="mx-8 my-2 flex flex-row place-items-center justify-center gap-1 text-base font-medium text-gray-950">Apply
            now</span></button>
        </div>
      </div>
    </div>
  )
}

export default AppointmentDetails;