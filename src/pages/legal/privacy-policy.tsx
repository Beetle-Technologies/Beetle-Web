import { BodyLayout, Line, TextLayout } from "../../components/shared";

// PRIVACY POLICY FOR BLOOM FOR RESELLERS
export const PrivacyPolicyResellers = () => {
  return (
    <BodyLayout>
      <div className={"py-5"}>
        <h1 className={"text-3xl xl:text-4xl text-[#101010] font-bold"}>
          Privacy Policy for Bloom for Resellers
        </h1>
        <Line />
        <p className="max-w-[800px] text-sm xl:text-base">
          Last Updated: 15th November, 2024
          <br />
          This Privacy Policy explains how Bloom for Resellers (“Bloom,” “we,”
          “us,” or “our”) collects, uses, discloses, and protects your
          information when you access or use our platform. By using Bloom for
          Resellers, you agree to the collection and use of information in
          accordance with this policy.
        </p>
      </div>
      <div id="main-content" className="max-w-[800px]">
        <TextLayout num="1" title="Information We Collect">
          <p>
            <b>1.1 Personal Information:</b> We may collect certain personal
            information, including:
          </p>
          <ul className="list-disc ml-5">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Payment and banking details</li>
            <li>Shipping address</li>
          </ul>
          <p>
            <b>1.2 Usage Data:</b> We may collect data about your interactions
            with the platform, including:
          </p>
          <ul className="list-disc ml-5">
            <li>Login and activity details</li>
            <li>Sales transactions and commission records</li>
            <li>
              Device information (IP address, browser type, device identifiers)
            </li>
          </ul>
          <p>
            <b>1.3 Cookies and Tracking Technologies:</b> Cookies are used to
            monitor site activity, personalize experiences, and gather
            analytics. You may disable cookies, but some features might be
            limited.
          </p>
        </TextLayout>

        <TextLayout num="2" title="How We Use Your Information">
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc ml-5">
            <li>
              <b>2.1 Account Setup and Management:</b> Creating and managing
              accounts, providing support, and communicating with users.
            </li>
            <li>
              <b>2.2 Platform Operations:</b> Facilitating reselling activities,
              processing sales, and managing customer orders.
            </li>
            <li>
              <b>2.3 Improving Services:</b> Analyzing usage trends and
              enhancing platform performance.
            </li>
            <li>
              <b>2.4 Marketing and Communication:</b> Sending promotional
              updates and offers. Users can opt out anytime.
            </li>
            <li>
              <b>2.5 Legal Compliance:</b> Complying with laws, protecting
              rights, and enforcing policies.
            </li>
          </ul>
        </TextLayout>

        <TextLayout num="3" title="How We Share Your Information">
          <p>
            We do not sell your personal information. However, we may share it
            in the following circumstances:
          </p>
          <ul className="list-disc ml-5">
            <li>
              <b>3.1 With Third-Party Service Providers:</b> Vendors assisting
              with payments, shipping, support, analytics, and marketing.
            </li>
            <li>
              <b>3.2 With Product Suppliers:</b> Sharing order and shipping
              details for order fulfillment.
            </li>
            <li>
              <b>3.3 For Legal Reasons:</b> Disclosing information as required
              by law or to protect rights.
            </li>
            <li>
              <b>3.4 Business Transfers:</b> Sharing information during mergers,
              acquisitions, or sales, subject to privacy protections.
            </li>
          </ul>
        </TextLayout>

        <TextLayout num="4" title="Your Rights and Choices">
          <p>Users have the following rights:</p>
          <ul className="list-disc ml-5">
            <li>
              <b>4.1 Access and Correction:</b> Modify personal information
              through account settings or by contacting us.
            </li>
            <li>
              <b>4.2 Data Portability:</b> Request a copy of your personal data.
            </li>
            <li>
              <b>4.3 Account Deactivation:</b> Deactivate accounts, though some
              data may be retained for legal purposes.
            </li>
            <li>
              <b>4.4 Opt-Out of Marketing:</b> Unsubscribe from emails using the
              provided link or account settings.
            </li>
          </ul>
        </TextLayout>

        <TextLayout num="5" title="Data Security">
          <p>
            We implement security measures like encryption and access controls
            to protect your data. However, no system is completely secure, and
            we cannot guarantee absolute security.
          </p>
        </TextLayout>

        <TextLayout num="6" title="Data Retention">
          <p>
            Data is retained only as necessary for outlined purposes, legal
            compliance, dispute resolution, or policy enforcement. Once no
            longer needed, data is securely deleted or anonymized.
          </p>
        </TextLayout>

        <TextLayout num="7" title="International Data Transfers">
          <p>
            Your data may be stored on servers outside your country, where data
            protection laws might differ. We ensure secure handling in line with
            this policy.
          </p>
        </TextLayout>

        <TextLayout num="8" title="Children’s Privacy">
          <p>
            Bloom is not intended for individuals under 18. If minor data is
            collected unintentionally, we will delete it promptly.
          </p>
        </TextLayout>

        <TextLayout num="9" title="Changes to This Privacy Policy">
          <p>
            Updates to this policy will be posted on this page. Continued
            platform use after changes implies acceptance.
          </p>
        </TextLayout>

        <TextLayout num="10" title="Contact Us">
          <p>
            If you have questions or concerns about this policy, please contact
            us at: bloom@beetleltd.org
          </p>
        </TextLayout>
      </div>
    </BodyLayout>
  );
};

// PRIVACY POLICY FOR BLOOM FOR BUSINESSES
export const PrivacyPolicyBusinesses = () => {
  return (
    <BodyLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          Bloom for Businesses Privacy Policy
        </h1>
        <Line />
        <p className="text-gray-700 mb-6">Effective Date: 15 November, 2024</p>
        <p className="text-gray-700 mb-6">
          Bloom: For Businesses (“Beele,” "Bloom," "we," "us," or "our") is
          committed to protecting the privacy and data of our users. This
          Privacy Policy describes how we collect, use, store, and protect your
          personal and business information when you use Bloom for Businesses.
          Please review this policy carefully to understand how we handle your
          information.
        </p>

        <TextLayout num="1" title="Information We Collect">
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Personal Information:</strong> Your name, email address,
              phone number, and business details provided during registration.
            </li>
            <li>
              <strong>Business Information:</strong> Details about your company,
              such as name, type, products, inventory, and sales data.
            </li>
            <li>
              <strong>Payment Information:</strong> Billing and payment details
              for any paid services.
            </li>
            <li>
              <strong>Usage Data:</strong> Information on how you interact with
              Bloom, including login details, IP address, device information,
              and page visit history.
            </li>
            <li>
              <strong>Customer Information:</strong> Transaction-related data,
              including customer contact information, purchase history, and
              payment preferences.
            </li>
            <li>
              <strong>Reseller Information:</strong> Data on interactions with
              resellers, such as products resold and performance metrics.
            </li>
          </ul>
        </TextLayout>

        <TextLayout num="2" title="How We Use Your Information">
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>To Provide Services:</strong> Create accounts, connect
              businesses with resellers, and facilitate online store management.
            </li>
            <li>
              <strong>To Improve User Experience:</strong> Analyze usage data to
              optimize platform performance and provide tailored
              recommendations.
            </li>
            <li>
              <strong>To Send Notifications:</strong> Notify users about
              updates, features, or policy changes.
            </li>
            <li>
              <strong>To Support Marketing:</strong> Send marketing materials
              (with consent) and provide relevant business information.
            </li>
            <li>
              <strong>To Ensure Security:</strong> Protect accounts and prevent
              unauthorized access.
            </li>
            <li>
              <strong>To Comply with Legal Obligations:</strong> Fulfill legal
              requirements and safeguard Bloom’s rights.
            </li>
          </ul>
        </TextLayout>

        <TextLayout num="3" title="How We Share Your Information">
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>With Service Providers:</strong> Trusted third parties for
              payment processing, data analysis, and customer support.
            </li>
            <li>
              <strong>With Resellers:</strong> Relevant business data to
              facilitate product resales.
            </li>
            <li>
              <strong>With Customers:</strong> Limited business data displayed
              through your storefront.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> Disclosure as required by law
              or to protect users and Bloom’s rights.
            </li>
            <li>
              <strong>In Case of Business Transfers:</strong> Data transfer
              during mergers or acquisitions.
            </li>
          </ul>
        </TextLayout>

        <TextLayout num="4" title="Cookies and Tracking Technologies">
          <p>
            Bloom uses cookies and third-party analytics tools to track user
            behavior and enhance the platform experience. You can manage cookie
            preferences through your browser settings.
          </p>
        </TextLayout>

        <TextLayout num="5" title="Data Security">
          <p>
            We employ physical, technical, and administrative safeguards to
            protect your information. While we use secure protocols for data
            transmission, no method is entirely secure.
          </p>
        </TextLayout>

        <TextLayout num="6" title="Data Retention">
          <p>
            Personal and business data is retained as necessary to provide
            services or as required by law. Once no longer needed, data is
            deleted or anonymized securely.
          </p>
        </TextLayout>

        <TextLayout num="7" title="Your Privacy Rights">
          <p>
            You may have rights under applicable laws, including access,
            correction, deletion, portability, objection, and restriction.
            Contact us at{" "}
            <a
              href="mailto:hello@beetleltd.org"
              className="text-blue-600 hover:underline"
            >
              hello@beetleltd.org
            </a>{" "}
            to exercise your rights.
          </p>
        </TextLayout>

        <TextLayout num="8" title="Children’s Privacy">
          <p>
            Users under 13 are not allowed. Misrepresentation of age may result
            in account suspension and data deletion.
          </p>
        </TextLayout>

        <TextLayout num="9" title="Changes to Terms of Use">
          <p>
            Bloom may update this policy, and significant changes will be
            communicated via the platform or email.
          </p>
        </TextLayout>

        <TextLayout num="10" title="Third-Party Links">
          <p>
            Bloom is not responsible for third-party sites linked through the
            platform. Review their privacy policies before use.
          </p>
        </TextLayout>

        <TextLayout num="11" title="International Data Transfers">
          <p>
            Bloom processes data globally, adhering to applicable data
            protection laws. By using Bloom, you consent to such transfers.
          </p>
        </TextLayout>

        <TextLayout num="12" title="Contact Us">
          <p>
            If you have questions or feedback about this Privacy Policy, contact
            us at{" "}
            <a
              href="mailto:bloom@beetleltd.org"
              className="text-blue-600 hover:underline"
            >
              bloom@beetleltd.org
            </a>
            .
          </p>
        </TextLayout>

        <p className="text-gray-700 text-center mt-8">
          By using Bloom for Businesses, you confirm that you have read,
          understood, and agreed to this Privacy Policy. Please review it
          regularly to stay informed about data protection practices.
        </p>
      </div>
    </BodyLayout>
  );
};
