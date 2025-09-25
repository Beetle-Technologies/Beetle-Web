import { BodyLayout, Line, TextLayout } from "../components/shared.tsx";

const PrivacyPolicy = () => {
  return (
    <BodyLayout>
      <div className={"py-5"}>
        <h1 className={"text-3xl xl:text-4xl text-[#101010] font-bold"}>
          Privacy Policy
        </h1>
        <Line />
        <p className="max-w-[800px] text-sm xl:text-base">
          This Privacy Policy describes how Beetle Limited ("Bloom," "we," "us,"
          or "our") collects, uses, and shares your personal information when
          you use our mobile application ("App"). By using the App, you agree to
          the terms of this Privacy Policy.
        </p>
      </div>
      <div id="main-content" className="max-w-[800px]">
        <TextLayout num="1" title="Personal Information">
          Bloom collects your personal data, including but not limited to your
          email, name, and telephone number when you sign up for an account.
          Users may also provide additional personal information when creating
          their account. Please note that the amount of information you provide
          is voluntary, but providing less information might limit your access
          to certain features of the App. Users are responsible for protecting
          the personal information they submit on the App, including their
          passwords, to prevent unauthorized access to their accounts or
          identity theft. Only information that users are comfortable sharing
          with others should be uploaded to the App.
        </TextLayout>
        <TextLayout num="2" title="Data Usage and Analytics">
          Bloom uses the data collected to analyze how users access and utilize
          the App for internal purposes, including troubleshooting and improving
          the functionality of the App. Information such as your operating
          system, IP address, web browser, and location may be collected for
          these purposes.
        </TextLayout>
        <TextLayout num="3" title="Notifications">
          Bloom may use personal information to send periodic announcements to
          users, including notifications, updates about the company or the App,
          and marketing communications. Users can unsubscribe from these
          notifications at any time.
        </TextLayout>
        <TextLayout num="4" title="Third-Party Service Providers">
          Bloom may use personal user data for website maintenance, upgrades,
          new releases, or analytics data review or compilation. We may share
          user information with third-party service providers engaged to assist
          in these efforts. Bloom ensures that these service providers employ
          adequate security measures to protect user data.
          <br />
          BLOOM WILL ALWAYS ATTEMPT TO SHARE YOUR DATA with{" "}
          <a href="https://myspotlight.me">Spotlight</a> which enables your
          customers and the world in general to view and interact with your
          brand and products. This is optional but mandatory. You will not be
          able to use any one of Bloom’s features except you explicitly allow
          Spotlight access to your data. Everything you do on Bloom
          automatically reflects on Spotlight. It’s that easy! We built
          Spotlight to complement Bloom in order to deliver to you an experience
          of a lifetime.
        </TextLayout>
        <TextLayout num="5" title="Data Sharing">
          We use personal information for internal purposes only and do not sell
          or rent information about you. We may share user data with our
          affiliated entities, including parent companies and subsidiaries.
          Additionally, if Bloom participates in a merger, stock purchase, asset
          purchase, or other acquisition, user information may be shared with
          the purchaser or surviving entity. Bloom cooperates with government
          and law enforcement officials to enforce and comply with the law and
          may disclose personal information if necessary to satisfy any
          applicable law, regulation, legal process, or enforceable governmental
          request.
        </TextLayout>
        <TextLayout num="6" title="Security">
          Bloom employs necessary measures to secure user data; however, we
          cannot guarantee that user data will be immune from malicious attack
          or compromise. Users should understand that their transmission of
          personal data is always at their own risk.
        </TextLayout>
        <TextLayout num="7" title="Future Changes">
          Please note that Bloom may make changes to this privacy policy from
          time to time, and users should periodically review the policy for
          updates. Users who continue to use the App following a revision of the
          privacy policy will automatically be subject to the new terms.
          <div className="flex flex-col space-y-5 pt-5">
            <span>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at hello@beetleltd.
            </span>
            <span>This Privacy Policy is effective as of 1st June 2024.</span>
          </div>
        </TextLayout>
      </div>
    </BodyLayout>
  );
};

export default PrivacyPolicy;
