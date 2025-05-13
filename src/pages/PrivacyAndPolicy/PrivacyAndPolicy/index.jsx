import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-[90%] mx-auto py-16 px-4 text-black">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="space-y-6 text-sm md:text-base">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
          <p>
            We collect personal information such as your name, email address, and phone number when you contact us or use our services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>
            Your information is used to provide and improve our services, respond to inquiries, and send promotional materials with your consent.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">4. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us at movers@almasintl.com to exercise these rights.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;