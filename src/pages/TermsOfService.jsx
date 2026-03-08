import React from "react";

const terms = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using Hashblog ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.

These terms apply to all visitors, readers, and anyone who interacts with content or features on the platform, including posting comments. We reserve the right to update these terms at any time, and continued use of the platform after any changes constitutes your acceptance.`,
  },
  {
    title: "2. About the Platform",
    content: `Hashblog is a personal blogging platform created for educational and learning purposes. It allows an administrator to publish blog posts that visitors can read and comment on. The platform is a student project and is not intended for commercial use.

Features on the platform include reading published blog articles, browsing by category, and submitting comments. All features are provided free of charge and without any guarantee of uptime or availability.`,
  },
  {
    title: "3. User Conduct",
    content: `When using Hashblog, you agree to behave respectfully and lawfully. You must not:

• Post comments that are offensive, hateful, abusive, or discriminatory.
• Submit spam, promotional content, or irrelevant links in comments.
• Attempt to hack, disrupt, or damage the platform or its infrastructure.
• Impersonate another person or entity when submitting comments.
• Post content that infringes on any third-party intellectual property rights.
• Use the platform for any illegal or unauthorized purpose.

Violation of these rules may result in your comments being removed and your access to the platform being restricted.`,
  },
  {
    title: "4. Comments & User Submissions",
    content: `By submitting a comment on Hashblog, you grant us a non-exclusive, royalty-free right to display that comment on the platform. You are solely responsible for the content of your submissions.

All comments are subject to moderation and may be approved or rejected at the administrator's discretion. We reserve the right to remove any comment at any time without prior notice.

Please do not include personal information such as phone numbers, addresses, or passwords in your comments. Hashblog is not responsible for any information you choose to share publicly.`,
  },
  {
    title: "5. Intellectual Property",
    content: `All blog content published on Hashblog, including text, images, and formatting, is the property of the platform's administrator unless otherwise stated. You may not copy, reproduce, distribute, or publish any content from Hashblog without explicit written permission.

You are welcome to share links to blog posts on social media or other platforms, giving appropriate credit to Hashblog.`,
  },
  {
    title: "6. Disclaimers",
    content: `Hashblog is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of any content published on the platform.

Blog content is for informational and educational purposes only and should not be relied upon as professional advice (legal, medical, financial, etc.). Always consult a qualified professional for specific advice.

As a student project, the platform may experience downtime, bugs, or incomplete features. We are not responsible for any loss or inconvenience caused by the unavailability of the platform.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `To the fullest extent permitted by law, Hashblog and its developer shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform, including but not limited to data loss, service interruptions, or reliance on published content.`,
  },
  {
    title: "8. Third-Party Links",
    content: `Blog posts on Hashblog may contain links to external websites. These links are provided for convenience and informational purposes only. Hashblog does not endorse or take responsibility for the content, privacy practices, or terms of any third-party websites.`,
  },
  {
    title: "9. Termination",
    content: `We reserve the right to restrict or terminate access to the platform at any time, for any reason, without prior notice. This includes removing content or blocking users who violate these terms.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from the use of this platform shall be handled informally in good faith before any formal proceedings are pursued.`,
  },
  {
    title: "11. Contact",
    content: `If you have any questions about these Terms of Service, please contact us through our Contact page. We'll do our best to respond in a timely manner.`,
  },
];

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0e7db5] to-[#1ab3c4] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-white/80 text-base">
            Last updated: <strong>March 2026</strong>
          </p>
        </div>
      </div>

      {/* Intro Banner */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-4">
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 text-sm text-amber-800 leading-relaxed">
          <strong>Please read these terms carefully.</strong> By using Hashblog, you agree to the
          following terms and conditions. These terms are designed to keep the platform safe,
          respectful, and functional for everyone.
        </div>
      </div>

      {/* Terms Sections */}
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-10 text-gray-700 leading-relaxed">
        {terms.map((term, i) => (
          <section key={i}>
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#0e7db5] rounded-full inline-block"></span>
              {term.title}
            </h2>
            <p className="whitespace-pre-line text-sm text-gray-600">{term.content}</p>
          </section>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 border-t py-6 px-6 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto">
          ⚠️ <strong>Disclaimer:</strong> Hashblog is a student learning project built for educational
          purposes only. These Terms of Service are a sample document and do not constitute legal advice.
          This is not a commercial product.
        </p>
      </div>

    </div>
  );
};

export default TermsOfService;