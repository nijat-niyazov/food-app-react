import { order_food } from "@/assets/images";

const questions = [
  { id: 1, question: "How does Order.UK work?" },
  { id: 2, question: "What payment methods are accepted??" },
  { id: 3, question: "Can I track my order in real-time?" },
  { id: 4, question: "Are there any special discounts or promotions available?" },
  
];

const FAQ = () => {
  return (
    // px-[140px] py-[125px]
    <div>
      <div className="flex items-center justify-between border-1 md:mb-16 mb-5">
        <h3 className="text-text text-3xl font-bold">Know more about us!</h3>

        <div className="hidden  text-base text-text md:flex items-center justify-between">
          <button className="rounded-full border-primary py-4 px-8 font-bold border-1">
            Frequent Questions
          </button>
          <button className="rounded-full border-primary py-4 px-8 ">
            Who we are?
          </button>
          <button className="rounded-full border-primary py-4 px-8 ">
            Partner Program
          </button>
          <button className="rounded-full border-primary py-4 px-8 ">
            Help & Support
          </button>
        </div>
      </div>

      <div className="flex items-start bg-text flex-col md:flex-row bg-red-500 justify-between">
        <div className="md:px-20 grid gap-5 mb-5">
          {questions.map((question) => (
            <button
              key={question.id}
              className="w-full bg-primary p-5 font-bold text-lg rounded-full"
            >
              {question.question}
            </button>
          ))}
        </div>

        <ul className="px-12 py-10 bg-text rounded-xl text-text grid gap-6 md:flex ">
          <li className=" flex flex-col items-center justify-center rounded-xl bg-faq p-6 gap-3">
            <h3 className="font-bold text-lg">Place an Order!</h3>
            <img src={order_food} alt="" className="w-32 h-32 object-cover" />
            <span className="text-base font-medium text-center">
              Place order through our website or Mobile app
            </span>
          </li>
          <li className=" flex flex-col items-center justify-center rounded-xl bg-faq p-6 gap-3">
            <h3 className="font-bold text-lg">Place an Order!</h3>
            <img src={order_food} alt="" className="w-32 h-32 object-cover" />
            <span className="text-base font-medium text-center">
              Place order through our website or Mobile app
            </span>
          </li>
          <li className=" flex flex-col items-center justify-center rounded-xl bg-faq p-6 gap-3">
            <h3 className="font-bold text-lg">Place an Order!</h3>
            <img src={order_food} alt="" className="w-32 h-32 object-cover" />
            <span className="text-base font-medium text-center">
              Place order through our website or Mobile app
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
