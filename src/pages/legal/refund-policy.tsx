import { BodyLayout, Line, TextLayout } from "../../components/shared";

const RefundPolicy = () => {
  return (
    <BodyLayout>
      <h1 className="text-3xl font-bold mb-4">Refund Policy and Guidelines</h1>
      <Line />
      <p className="text-gray-700 mb-6">
        At Bloom, we prioritize ensuring that every business transaction is
        seamless and meets your expectations. Our refund policy reflects our
        commitment to quality control and transparency while acknowledging our
        current operational capabilities.
      </p>

      <TextLayout num="1" title="Quality Control Guarantee">
        <p>
          Before delivering any product to you, our team conducts a rigorous
          quality control process. We ensure that the item received from the
          vendor matches your order specifications.
        </p>
      </TextLayout>
      <TextLayout num="2" title="Refund Eligibility">
        <p>
          If we determine during our quality control process that the item does
          not meet your order specifications, we will decline to pick it up from
          the vendor and immediately process your refund. Refunds will be
          processed within 72 hours, and you will receive an email notification
          detailing the issue and confirming the refund.
        </p>
      </TextLayout>
      <TextLayout num="3" title="No Refund After Delivery">
        <p>
          Once a product passes our quality control process and is delivered to
          you, refunds are not currently available. If you discover
          post-delivery that the product is not as expected or does not meet
          your needs, we encourage you to leave a review of the vendor or
          product for accountability and improvement.
        </p>
      </TextLayout>
      <TextLayout num="4" title="Future Improvements">
        <p>
          We are actively working on expanding our refund processes to
          accommodate post-delivery issues in the future.
        </p>
      </TextLayout>
      <TextLayout num="5" title="Your Trust in Our Process">
        <p>
          We ask for your trust in our meticulous quality control process, as it
          is designed to minimize the likelihood of receiving subpar products.
          By working closely with vendors and prioritizing your satisfaction, we
          aim to create a smooth and reliable experience for every business
          transaction.
        </p>
      </TextLayout>
      <TextLayout num="6" title="Contact Us">
        <p>
          If you have any questions or require assistance, please contact our
          support team at{" "}
          <a
            href="mailto:bloom@beetleltd.com"
            className="text-blue-600 hover:underline"
          >
            bloom@beetleltd.com
          </a>
          .
        </p>
      </TextLayout>
      <p className="text-gray-700 text-center mt-8">
        Thank you for choosing Bloom for Businesses!
      </p>
    </BodyLayout>
  );
};

export default RefundPolicy;
