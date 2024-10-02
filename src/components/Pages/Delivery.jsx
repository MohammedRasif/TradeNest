import { useState } from "react";
import { CiSettings, CiShop } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Delivery = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="lg:mx-52">
        <div className="mx-3 my-3">
        <h1 className="text-2xl">Delivery & Return</h1>
        <button className="text-sm">
          <Link to="/">HOME</Link>
        </button>{" "}
        / <button className="text-sm">DELIVERY & RETURN</button>
      </div>
      <div className="flex flex-col lg:flex-row items-center bg-green-500 p-5 rounded-md my-3">
        <div className="text-black lg:w-1/2">
          <h1 className="text-3xl font-semibold">Delivery & Return</h1>
          <p className="mt-2 text-sm lg:text-base">
            Free delivery available on 1000s of products over $100. Choose a
            specific delivery date & time that suits you for an additional fee.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-24">
          <img
            src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727671377/i1g8aqaufquo8mhswnw6.png"
            className=" lg:w-72 h-64 w-full object-cover"
            alt="Store display"
          />
        </div>
      </div>

      <div className="space-y-2 bg-slate-200 p-3 rounded-md">
        <h1 className="text-lg sm:text-xl font-bold">
          Delivery Options Overview
        </h1>
        <p className="text-sm sm:text-base">
          WoodMart offers ideal shipping methods for any requirement. Be it low
          priced through DHL/Standard Parcel Post, more quickly via DHL Express
          (Germany only) or UPS, or especially reliable and secure by a
          specifically trained freight forwarder. And in addition you can also
          pick up your order yourself at our Shop if you prefer. On this page
          you´ll find an overview of all available shipping.
        </p>
        <p className="text-sm sm:text-base">
          In 2019, we presented a new border policy strategy that covers all
          aspects of the company’s activities – corporate style, delivery, and
          consultant work.
        </p>

        <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-2 bg-white text-center rounded-md ">
            <h6 className="text-[13px] px-5">
              1. Order the Product and Specify the Delivery Method
            </h6>
            <img
              src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727672300/dzqjbpnqsblqvqbh4ior.png"
              className="pl-24  items-center"
              alt=""
            />
          </div>
          <div className="p-2 bg-white text-center rounded-md ">
            <h6 className="text-[13px] px-5">
              2. You Will Receive an Order Confirmation Message
            </h6>
            <img
              src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727672293/i0osjk8z24cxjkhcu4bm.png"
              className="pl-20 h-[130px] items-center"
              alt=""
            />
          </div>
          <div className="p-2 bg-white text-center rounded-md ">
            <h6 className="text-[13px] px-5">
              3. Wait for Your Order to Arrive
            </h6>
            <img
              src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727672287/uu6nidbnm25c9s0pa0bg.png"
              className="pl-20 h-[130px] items-center"
              alt=""
            />
          </div>
          <div className="p-2 bg-white text-center rounded-md ">
            <h6 className="text-[13px] px-5">
              4. Pick up Your Order at The Checkout Area
            </h6>
            <img
              src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727672282/o5sqyvk5jupwxdgdiokl.png"
              className="pl-20 h-[130px]  items-center"
              alt=""
            />
          </div>
        </div>

        <h6 className="text-sm sm:text-base font-bold mt-4">
          Exchange or Return of Goods
        </h6>
        <p className="text-sm sm:text-base">
          In order for the right to terminate the agreement to be preserved, the
          consumer needs to monitor the preservation of the products in their
          original state. If the device is destroyed, damaged or damaged through
          no fault of the customer, the customer is not deprived of the
          opportunity to terminate the contract. If the value has decreased due
          to unpacking the product or checking its functionality, this does not
          mean that the consumer cannot write a request for a refund.
        </p>

        <h1 className="text-2xl  font-bold mt-4">FAQs</h1>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-semibold">
            My oder hasn't arrived. yet where is it?
          </div>
          <div className="collapse-content space-y-3">
            <p>
              A client that’s unhappy for a reason is a problem, a client that’s
              unhappy though he or her can’t quite put a finger on it is worse.
              Chances are there wasn’t collaboration, communication, and
              checkpoints, there wasn’t a process agreed upon or specified with
              the granularity required.
            </p>
            <p>
              It’s content strategy gone awry right from the start. Forswearing
              the use of Lorem Ipsum wouldn’t have helped, won’t help now. It’s
              like saying you’re a bad designer, use less bold text, don’t use
              italics in every other paragraph. True enough, but that’s not all
              that it takes to get things back on track.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Do you deliver on public holidays.?
          </div>
          <div className="collapse-content">
            <p>
              If that’s what you think how bout the other way around? How can
              you evaluate content without design? No typography, no colors, no
              layout, no styles, all those things that convey the important
              signals that go beyond the mere textual, hierarchies of
              information, weight, emphasis, oblique stresses, priorities, all
              those subtle cues that also have visual and emotional appeal to
              the reader. Rigid proponents of content strategy may shun the use
              of dummy copy but then designers might want to ask them to provide
              style sheets with the copy decks they supply that are in tune with
              the design direction they require.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className=" space-y-3 collapse-content">
            <p>
              A client that’s unhappy for a reason is a problem, a client that’s
              unhappy though he or her can’t quite put a finger on it is worse.
              Chances are there wasn’t collaboration, communication, and
              checkpoints, there wasn’t a process agreed upon or specified with
              the granularity required.
            </p>
            <p>
              It’s content strategy gone awry right from the start. Forswearing
              the use of Lorem Ipsum wouldn’t have helped, won’t help now. It’s
              like saying you’re a bad designer, use less bold text, don’t use
              italics in every other paragraph. True enough, but that’s not all
              that it takes to get things back on track.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-2 bg-slate-200 p-3 rounded-md mb-5">
        <h2 className="text-[15px]  font-bold">
        Online store of household appliances and electronics

        </h2>
        <p>
          {showMore ? (
            <>
              Then the question arises: where’s the content? Not there yet?
              That’s not so bad, there’s dummy copy to the rescue. But worse,
              what if the fish doesn’t fit in the can, the foot’s too big for
              the boot? Or too small? Too short sentences, too many headings,
              images too large for the proposed design, or too small, or they
              fit in but it looks iffy for reasons. A client that’s unhappy for
              a reason is a problem, a client that’s unhappy though he or she
              can’t quite put a finger on it is worse. Chances are there wasn’t
              collaboration, communication, and...
            </>
          ) : (
            "Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue..."
          )}
        </p>
        <button
          onClick={handleReadMore}
          className="mt-3 px-3 py-2 bg-white rounded hover:bg-gray-100"
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Delivery;
