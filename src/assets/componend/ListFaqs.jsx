// import { Disclosure } from '@headlessui/react'
// import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

// const faqs = [
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   // More questions...
// ]

// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
//         <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
//           <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
//           <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
//             {faqs.map((faq) => (
//               <Disclosure as="div" key={faq.question} className="pt-6">
//                 {({ open }) => (
//                   <>
//                     <dt>
//                       <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
//                         <span className="text-base font-semibold leading-7">{faq.question}</span>
//                         <span className="ml-6 flex h-7 items-center">
//                           {open ? (
//                             <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
//                           ) : (
//                             <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
//                           )}
//                         </span>
//                       </Disclosure.Button>
//                     </dt>
//                     <Disclosure.Panel as="dd" className="mt-2 pr-12">
//                       <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   )
// }



const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Fags() {
  return (
    <div className="bg-[#e2e8f0]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Pertanyaan yang sering ditanyakan (FAQ)</h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
          Memiliki pertanyaan lain dan tidak dapat menemukan jawaban yang Anda cari? Hubungi tim dukungan kami dengan {' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Mengirimkan Email
            </a>{' '}
            dan kami akan kembali kepada Anda secepat mungkin
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
