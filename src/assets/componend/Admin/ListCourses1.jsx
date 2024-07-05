// eslint-disable-next-line no-unused-vars
import * as React from 'react';

export default function MyComponent() {
  return (
    <div className="flex flex-col pb-10 bg-slate-100">
      <div className="flex flex-col justify-center px-10 py-4 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col whitespace-nowrap">
            <div className="text-2xl font-bold text-rose-700">List Soal</div>
            <div className="text-xs leading-5 text-cyan-950">View list data Soal</div>
          </div>
          <div className="flex gap-2 my-auto text-base font-bold tracking-wide text-white max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-1 justify-center items-center text-sm tracking-normal text-zinc-500">
              <div className="flex overflow-hidden relative flex-col gap-5 justify-between p-2 w-full aspect-[8] fill-white stroke-[1px] stroke-neutral-200">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9089bc06b8be45f91737628b2be8db01dd549676021d274c5c04dd60e4868008?" className="object-cover absolute inset-0 size-full" />
                <div className="relative self-start mt-2">Search Soal</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bec9b4c13b3df8f36b6c5bdab5526e4ee8761a7c186c03b2ca893727190d400d?" className="w-6 aspect-square" />
              </div>
            </div>
            <div className="flex gap-2 justify-between px-4 py-2 text-center capitalize whitespace-nowrap bg-primary rounded">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05f63ec00195a0547681719d03642a72864334f41b7ee482013ca605f29eb66?" className="w-6 aspect-square" />
              <div className="grow">Import</div>
            </div>
            <div className="flex gap-2 justify-between p-2 text-center capitalize whitespace-nowrap bg-rose-700 rounded">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/014cb3d645970e9fbe9b39b5e8f07533fabaf6edf9e745f8be64f2f2db5e78ac?" className="w-6 aspect-square" />
              <div className="grow">Create Soal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-neutral-200 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-col px-10 mt-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-x-auto flex-col max-md:max-w-full">
          <div className="flex gap-5 justify-between px-4 py-2.5 text-sm font-bold bg-white rounded border border-solid border-[color:var(--Grayscale-Gray-4,#E0E0E0)] text-cyan-950 max-md:flex-wrap max-md:max-w-full">
            <div className="grow whitespace-nowrap">Soal</div>
            <div className="flex-auto">Pilihan Jawaban</div>
            <div className="flex-auto">Jawaban</div>
            <div className="flex-auto">Action</div>
          </div>
          <div className="flex gap-4 justify-between items-center pr-20 pl-4 bg-white border-r border-l border-solid border-l-[color:var(--Grayscale-Gray-4,#E0E0E0)] border-r-[color:var(--Grayscale-Gray-4,#E0E0E0)] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="grow self-stretch my-auto text-sm font-medium tracking-normal leading-8 text-cyan-950">ID/W01</div>
            <div className="flex-auto self-stretch my-auto text-sm font-medium tracking-normal leading-8 text-cyan-950">Jakarta</div>
            <div className="flex-auto self-stretch my-auto text-sm font-medium tracking-normal leading-8 text-cyan-950">ACL</div>
            <div className="flex gap-4 self-stretch py-2 pr-20 pl-4 max-md:pr-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3554b45e46dd5745b68ebacfec67536341404c1a3649a96150bbd8912b160342?" className="w-6 aspect-square" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06f466e0897eeaff85d59946f18878dc57febb694f82e4e3b7fc4d8770603c94?" className="w-6 aspect-square" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a601eacf5f6381c790a206599f0c04b329400bdbebd2bbcf557653e4b2dfa3f?" className="w-6 aspect-square" />
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between pr-20 mt-6 w-full whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full" />
      </div>
    </div>
  );
}
