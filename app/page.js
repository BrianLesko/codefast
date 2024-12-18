import ButtonLogin from "./components/ButtonLogin";
import FAQListItem from "./components/FAQListItem";

export default function Home() {
  const isLoggedIn = true;
  const name = "Brian";

  return (
    <main>
      {/* Header */}
      <section className="bg-gray-100" id="header">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">Simplify My ERP</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#products">Products</a>
            <a className="link link-hover" href="#pricing">Pricing</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* Hero */}
      <section className="text-center px-8 py-32 max-w-3xl mx-auto" id="hero">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Collect Customer Feedback to Build Better Products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
      {/* Pricing*/}
      <section className="bg-base-200" id="pricing">
        <div className="px-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs.
          </h2>

          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-2">
              {[
                "Up to 100 Employees",
                "PTO requests",
                "PTO Calendar",
                "Admin Dashboard",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-green-600 size-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-200" id='faq'>
        <div className="px-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <ul className="max-w-lg mx-auto ">
            {
              // FAQ items
              [
                {
                  question: "What do I get exaclty?",
                  answer:
                    "You get an admin dashboard to add employees, track PTO, and approve supply requests, with the ability to assign roles and permissions to your team.",
                },
                {
                  question: "Can I get a refund?",
                  answer:
                    "Yes, you can get a refund anytime if you are not satisfied with the product.",
                },
                {
                  question: "Is your software mobile friendly?",
                  answer:
                    "Yes, PTO and Supply requests and approvals are mobile friendly. For assigning and adding employees youll want to use a desktop.",
                },
              ].map((qa) => (
                <FAQListItem key={qa.question} qa={qa} />
              ))
            }
          </ul>
        </div>
      </section>
    </main>
  );
}