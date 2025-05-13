import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-[90%] mx-auto py-16 px-4 text-black">
      <h1 className="text-3xl font-bold mb-8 text-center">Terms and Conditions</h1>
      <div className="space-y-6 text-sm md:text-base">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Almas Intl. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">2. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">3. Limitation of Liability</h2>
          <p>
            Almas Intl is not liable for any damages arising from the use of our services, including but not limited to direct, indirect, incidental, or consequential damages.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">4. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Your continued use constitutes acceptance of the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;