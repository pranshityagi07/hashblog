import React from "react";

const sections = [
  {
    title: "1. Information We Collect",
    content: `When you visit Hashblog, we may collect certain information automatically, including your browser type, operating system, referring URLs, and pages visited. This information is collected through standard web server logs and is used solely for improving the website experience.

If you leave a comment on a blog post, we collect the name you provide and the content of your comment. We do not require account registration or email addresses to read content or post comments on Hashblog.

We do not collect sensitive personal information such as payment details, government IDs, or health-related data.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `The information we collect is used for the following purposes:

• To display your name alongside any approved comments you post.
• To moderate comments and prevent spam or abusive content.
• To understand how visitors use the website so we can improve its performance and content.
• To maintain the security and integrity of the platform.

We do not use your information for advertising, profiling, or selling to third parties.`,
  },
  {
    title: "3. Comments & Moderation",
    content: `Hashblog allows users to leave comments on blog posts. All comments are reviewed by an administrator before being publicly displayed. This moderation process helps ensure a respectful and constructive community environment.

By submitting a comment, you agree that your name and comment content may be publicly visible on the website once approved. Please do not include personal information such as your phone number, address, or email in your comment.

We reserve the right to reject or delete any comment that is spam, offensive, irrelevant, or violates our community guidelines.`,
  },
  {
    title: "4. Cookies",
    content: `Hashblog may use basic cookies to improve your browsing experience. Cookies are small text files stored on your device that help the website remember your preferences or session state.

At this time, Hashblog does not use third-party tracking cookies or advertising cookies. If this changes in the future, this policy will be updated accordingly.

You can disable cookies through your browser settings, though some features of the website may not function as expected if you do so.`,
  },
  {
    title: "5. Third-Party Services",
    content: `Hashblog uses a limited set of third-party services to operate the platform, including cloud-based image hosting (Imagekit) and a hosted database service (MongoDB Atlas). These services may process certain data as part of normal operations.

We do not integrate third-party analytics, advertising networks, or social media tracking on this platform. Any third-party tools used are chosen with user privacy in mind.`,
  },
  {
    title: "6. Data Security",
    content: `We take reasonable precautions to protect the information stored on our platform. However, no method of transmission over the internet or method of electronic storage is 100% secure.

Since Hashblog is a student learning project, it may not implement enterprise-level security measures. We strongly recommend that you do not submit sensitive personal information through this platform.`,
  },
  {
    title: "7. Children's Privacy",
    content: `Hashblog is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe that a child has submitted personal information to us, please contact us and we will take steps to remove that information.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time as the platform grows or as legal requirements change. Any updates will be posted on this page with a revised effective date. Continued use of Hashblog after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: "9. Contact",
    content: `If you have any questions or concerns about this Privacy Policy, please reach out to us via our Contact page. We will do our best to respond promptly.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0e7db5] to-[#1ab3c4] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-white/80 text-base">
            Last updated: <strong>March 2026</strong>
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-4">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-800 leading-relaxed">
          <strong>Your privacy matters to us.</strong> This Privacy Policy explains what information
          Hashblog collects, how it is used, and your rights regarding that information. Please read
          this carefully before using the platform.
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-10 text-gray-700 leading-relaxed">
        {sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#0e7db5] rounded-full inline-block"></span>
              {section.title}
            </h2>
            <p className="whitespace-pre-line text-sm text-gray-600">{section.content}</p>
          </section>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 border-t py-6 px-6 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto">
          ⚠️ <strong>Disclaimer:</strong> Hashblog is a student learning project built for educational
          purposes only. This Privacy Policy is a sample document and does not constitute legal advice.
          It is not a commercial product.
        </p>
      </div>

    </div>
  );
};

export default PrivacyPolicy;