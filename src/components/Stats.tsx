const stats = [
  { id: 1, name: 'US Public Safety Answering Points', value: '5,293' },
  // https://www.911.gov/assets/2021-911-Profile-Database-Report_FINAL.pdf
  { id: 2, name: 'US EOCs', value: '>6,000' },
  //https://chatgpt.com/c/54be4896-ab4c-45ec-8c9f-afa75cf26734
  {
    id: 3,
    name: 'Annual hours training for a mid-sized EOC',
    value: '500-1000',
  },
];

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
