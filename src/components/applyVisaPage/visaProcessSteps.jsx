const VisaProcessSteps = () => {
  return (
    <section className="mx-4 border-b-[0.5px] border-gray-800 py-12">
      <div className="px-2">
        <h2 className="text-xl font-medium text-zinc-300 md:text-2xl">Once you submit on Atlys</h2>
        <div className="mt-6 flex flex-col text-zinc-300">
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="border-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border">
                <span className="text-xs font-semibold text-zinc-300">1</span>
              </div>
              <div className="h-full w-[1px] bg-gray-800"></div>
            </div>
            <div className="-mt-1 pb-9 md:pb-12">
              <p className="text-lg font-medium text-zinc-200">We connect you to a concierge</p>
              <span className="mt-1 text-sm font-normal text-zinc-300">
                Our concierges are ex-consulate officers, Visa experts, and immigration officers.
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="border-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border">
                <span className="text-xs font-semibold">2</span>
              </div>
              <div className="h-full w-[1px] bg-gray-800"></div>
            </div>
            <div className="-mt-1 pb-9 md:pb-12">
              <p className="text-lg font-medium text-zinc-200">Concierge works with you to gather your documents</p>
              <span className="mt-1 text-sm font-normal text-zinc-300">
                Our concierge is perpetually available for any service or question relating to your visa.
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="border-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border">
                <span className="text-xs font-semibold">3</span>
              </div>
              <div className="h-full w-[1px] bg-gray-800"></div>
            </div>
            <div className="-mt-1 pb-9 md:pb-12">
              <p className="text-lg font-medium text-zinc-200">Documents are verified and submitted</p>
              <span className="mt-1 text-sm font-normal text-zinc-300">
                Our experienced visa officers ensure that all documents are in order.
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="border-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full border">
              <svg fill="none" height="10" viewBox="0 0 11 10" width="11" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.03402 0.270693C5.12382 -0.00569993 5.51485 -0.00569981 5.60465 0.270693L6.60762 3.3575C6.64778 3.4811 6.76297 3.56479 6.89293 3.56479H10.1386C10.4292 3.56479 10.55 3.93668 10.3149 4.1075L7.68913 6.01525C7.58399 6.09164 7.53999 6.22705 7.58015 6.35066L8.58312 9.43746C8.67292 9.71386 8.35658 9.94369 8.12146 9.77287L5.49567 7.86512C5.39052 7.78873 5.24815 7.78873 5.143 7.86512L2.51721 9.77287C2.28209 9.94369 1.96575 9.71386 2.05556 9.43746L3.05852 6.35066C3.09868 6.22705 3.05468 6.09164 2.94954 6.01525L0.323744 4.1075C0.0886304 3.93668 0.209463 3.56479 0.50008 3.56479H3.74574C3.87571 3.56479 3.99089 3.4811 4.03106 3.3575L5.03402 0.270693Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="-mt-1">
              <p className="text-lg font-medium text-zinc-200">Appointment scheduled on time. Guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

VisaProcessSteps.propTypes = {};

VisaProcessSteps.defaultProps = {};

export default VisaProcessSteps;
