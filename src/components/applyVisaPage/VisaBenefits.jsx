const Benefit = () => {
  return (
    <div className="min-w-[80%] p-1.5 md:min-w-[33.333%]">
      <div className="group w-full overflow-hidden rounded-2xl">
        <div className="flex w-[200%] bg-[#1A1B1C] bg-gradient-to-br py-6 transition-transform group-hover:-translate-x-1/2 group-hover:from-[#1A1B1C] group-hover:to-[#1C243E]">
          <div className="flex w-1/2 shrink-0 flex-col items-center gap-3 px-3">
            <span>
              <svg
                fill="none"
                height="103"
                viewBox="0 0 87 88"
                width="102"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-45 scale-90"
              >
                <g filter="url(#filter0_d_11853_660)">
                  <rect
                    fill="url(#paint0_linear_11853_660)"
                    height="41.7512"
                    rx="10"
                    width="41.4486"
                    x="22.7422"
                    y="23.0308"
                  ></rect>
                </g>
                <rect height="54.4008" rx="13.5" stroke="#747AEE" width="53.9993" x="16.4619" y="16.7051"></rect>
                <rect height="71.4092" rx="19.5" stroke="#3138CD" width="70.8844" x="8.02051" y="8.20166"></rect>
                <rect height="85.8933" rx="23.5" stroke="#2026A6" width="85.2636" x="0.829102" y="0.958984"></rect>
                <path
                  d="M35.7721 46.129C34.4594 43.905 33.5909 41.3168 33.2376 38.4354C33.1414 37.6508 33.0933 37.2585 33.2209 36.8479C33.3783 36.3418 33.8256 35.8363 34.3088 35.6185C34.7008 35.4418 35.1536 35.4418 36.0593 35.4418V35.4418C36.8034 35.4418 37.1754 35.4418 37.4919 35.5508C37.9133 35.6959 38.2742 35.9777 38.5172 36.3513C38.6997 36.6319 38.79 36.9929 38.9704 37.7147L39.0667 38.0998C39.3572 39.2616 39.5024 39.8425 39.4805 40.4126C39.4611 40.9175 39.3463 41.4141 39.1421 41.8762C38.9114 42.398 38.5259 42.8562 37.7549 43.7725L35.7721 46.129ZM35.7721 46.129C37.1858 48.5241 39.1148 50.4968 41.4703 51.9584M41.4703 51.9584C43.7673 53.3837 46.47 54.323 49.4961 54.6941C50.2809 54.7903 50.6732 54.8384 51.0838 54.7108C51.5899 54.5534 52.0954 54.1061 52.3132 53.6229C52.4899 53.2309 52.4899 52.7683 52.4899 51.8429V51.8429C52.4899 51.1185 52.4899 50.7563 52.3809 50.4398C52.2357 50.0183 51.954 49.6575 51.5804 49.4145C51.2997 49.232 50.9388 49.1417 50.217 48.9613L49.6128 48.8102C48.5282 48.5391 47.9859 48.4035 47.4502 48.4149C46.9756 48.425 46.5067 48.5195 46.0652 48.694C45.5669 48.891 45.1195 49.226 44.2246 49.8961L41.4703 51.9584ZM47.2965 40.6352L50.8251 40.4159L50.9096 33.8599"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="49.751"
                    id="filter0_d_11853_660"
                    width="49.4482"
                    x="18.7422"
                    y="21.0308"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11853_660"></feBlend>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_11853_660" mode="normal" result="shape"></feBlend>
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_11853_660"
                    x1="43.4665"
                    x2="43.4665"
                    y1="23.0308"
                    y2="64.782"
                  >
                    <stop stopColor="#5057EA"></stop>
                    <stop offset="1" stopColor="#747AEE"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div className="text-center text-base text-zinc-300">
              <h4 className="font-bold">Personal Concierge</h4>
              <span className="font-normal">1:1 assistance</span>
            </div>
            <button className="rounded-2xl border border-gray-400 px-2.5 py-1 align-text-top text-sm font-normal">expand</button>
          </div>
          <div className="flex w-1/2 shrink-0 flex-col items-center justify-center gap-3 px-5 py-4 transition-all">
            <h4>Personal Concierge</h4>
            <p className="text-center text-sm text-white/80">After checkout, you will be assigned a dedicated visa specialist who will assist you and address any questions in preparing your visa application.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const VisaBenefits = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col">
        <div className="mx-4 flex flex-col items-start">
          <span className="mb-4 inline-flex items-center gap-1 rounded-xl bg-blue-500 px-2.5 py-1.5 text-sm font-normal md:hidden">
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M2.45549" fill="#BDC0F7" fillRule="evenodd"></path>
            </svg>
            Atlys Assured
          </span>
          <h2 className="inline-flex items-center gap-1 text-lg font-semibold md:text-2xl">
            Benefits of AtlysBlack over other services
            <span className="ml-3 hidden items-center gap-1 rounded-xl bg-blue-500 px-2.5 py-1.5 text-sm font-normal md:inline-flex">
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M2.45549" fill="#BDC0F7" fillRule="evenodd"></path>
              </svg>
              Atlys Assured
            </span>
          </h2>
          <p className="mt-1 text-sm text-gray-400 md:text-base">Discover unimaginable visa benefits we provide!</p>
        </div>
        <div className="scrollbar-track-transparent scrollbar-thumb-transparent no-scrollbar -m-1.5 mt-8 flex flex-row overflow-x-auto px-4">
          {
            new Array(3).fill(0).map((i) => <Benefit key={i}/>)
          }
        </div>
      </div>
    </section>
  );
};


export default VisaBenefits;
