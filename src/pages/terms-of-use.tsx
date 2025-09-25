import { BodyLayout, Line, TextLayout } from "../components/shared";

const TermsOfUse = () => {
  return (
    <BodyLayout>
      <div className={"py-5"}>
        <h1 className={"text-3xl xl:text-4xl text-[#101010] font-bold"}>
          Terms of Use
        </h1>
        <Line />
      </div>
      <div id="main-content" className="max-w-[800px]">
        <TextLayout num="1" title="Acceptance of Terms">
          By accessing or using the Bloom App, you agree to be bound by these
          Terms. If you do not agree to these Terms, please do not use the App.
        </TextLayout>
        <TextLayout num="2" title="Use of the App">
          <div className="flex flex-col space-y-3">
            <p>
              <span className="font-semibold">2.1 Eligibility:</span>
              You must be at least 13 years of age in your jurisdiction to use
              the Bloom App. By using the App, you represent and warrant that
              you meet these eligibility requirements.
            </p>
            <p>
              <span className="font-semibold">2.2 Account:</span>
              In order to access certain features of the App, you may be
              required to create an account. You are responsible for maintaining
              the confidentiality of your account credentials and for all
              activities that occur under your account.
            </p>
            <p>
              <span className="font-semibold">2.3 User Content:</span>
              You retain ownership of any content you upload, submit, or display
              on or through the App ("User Content"). By submitting User
              Content, you grant Snowball Limited a worldwide, non-exclusive,
              royalty-free license to use, reproduce, modify, adapt, publish,
              translate, distribute, and display such User Content.
            </p>
          </div>
        </TextLayout>
        <TextLayout num="3" title="User Prohibitions">
          <h2 className="text-[#101010] text-base xl:text-xl pb-3 font-normal">
            Users are strictly prohibited from:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Leasing, selling, copying, sublicensing, transferring, or
              assigning any information, intellectual property, goods, or
              services provided on the App.
            </li>
            <li>
              Gaining unauthorized access to Snowball Limited's data or the data
              of other users.
            </li>
            <li>
              Altering, modifying, adapting, reverse engineering, decompiling,
              disassembling, or hacking Snowball Limited's intellectual property.
            </li>
            <li>
              Altering or modifying another website to falsely imply that it is
              associated with the Bloom App.
            </li>
            <li>
              Violating anyone else's legal rights (e.g., privacy rights) or any
              laws (e.g., copyright laws) in the user's jurisdiction.
            </li>
            <li>
              Using the App to transmit content that could be deemed unlawful,
              threatening, harassing, abusive, libelous, pornographic, vulgar,
              defamatory, obscene, indecent, or otherwise inappropriate.
            </li>
            <li>
              Breaching, or attempting to breach, the App's security systems or
              enabling third parties to violate the Terms of Use.
            </li>
            <li>Using the App for any illegal purpose.</li>
          </ul>
        </TextLayout>
        <TextLayout num="4" title="Age Restriction">
          Users of the Bloom App can be of any age group.
        </TextLayout>
        <TextLayout num="5" title="Service Interruptions and Updates">
          The Bloom App may experience scheduled interruptions (for maintenance
          and upgrades purposes) or unintended shutdowns. In such cases:
          <ul className="list-disc pl-5 space-y-2 pt-3">
            <li>
              Users will be notified at least 72 hours prior to scheduled
              interruptions.
            </li>
            <li>
              In case of unforeseen shutdowns, Snowball Limited will strive to
              restore full operation within 14 days.
            </li>
            <li>
              Users can report any service issues by contacting us at
              hello@beetleltd.org at any time
            </li>
          </ul>
        </TextLayout>
        <TextLayout num="6" title="Survival">
          These Terms shall remain in effect for as long as the User uses or
          accesses any of the services provided by Snowball Limited. Certain
          provisions, including but not limited to Indemnification, Disclaimer,
          Limitation of Liability, Controlling Law and Severability, and
          Confidentiality, shall survive termination.
        </TextLayout>
        <TextLayout num="7" title="User Data and Legal Compliance">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Users must ensure that all information they submit or transmit
              fully complies with the law. Snowball Limited shall not be liable
              for the user's misuse of its data.
            </li>
            <li>
              Snowball Limited reserves the right to revoke or restrict a user's
              access to its services in the event of a violation of the Terms of
              Use or any applicable law.
            </li>
            <li>
              Any information provided by a user will be assumed as the user's
              own or that the user has sufficient authorization for the provided
              data. Thus, Snowball Limited will not be at risk of infringing any
              intellectual property rights of third parties.
            </li>
            <li>
              All information provided by the company through the Bloom App must
              be treated with strict confidentiality.
            </li>
          </ul>
        </TextLayout>
        <TextLayout num="8" title="Ammendments">
          Snowball Limited reserves the right to modify or revise these Terms at
          any time. Users are encouraged to periodically review the Terms for
          any updates. Continued use of the Bloom App after any such changes
          constitutes acceptance of those changes.
        </TextLayout>
      </div>
    </BodyLayout>
  );
};

export default TermsOfUse;
