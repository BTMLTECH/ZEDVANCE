interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TermsModal({ open, onClose }: TermsModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[80vh]">
        <h2 className="text-lg font-semibold mb-4">
          Terms & Conditions for Instalment Payment Option with Zedvance
        </h2>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            These Terms & Conditions (“T&Cs”) govern the use of the instalment
            payment option made available through BTM’s partnership with
            Zedvance Finance Limited (“Zedvance”). By opting to pay for travel
            services via instalment, you (“the You”) agree to the following:
          </p>

          <section>
            <h3 className="font-semibold">1. Eligibility</h3>
            <ul className="list-disc pl-5">
              <li>The instalment option is available only to you as approved by Zedvance.</li>
              <li>Zedvance reserves the right to approve or decline any application at its sole discretion.</li>
              <li>BTM is not responsible for the outcome of your loan application.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold">2. Booking & Payment</h3>
            <ul className="list-disc pl-5">
              <li>Bookings will be processed only upon confirmation of Zedvance’s approval and receipt of the initial disbursement.</li>
              <li>All loan repayments must be made directly to Zedvance, in accordance with their repayment schedule.</li>
              <li>Payments must not be made to personal or unofficial bank accounts.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold">3. Service Delivery</h3>
            <ul className="list-disc pl-5">
              <li>Travel services (flights, accommodation, tours, etc.) are subject to availability at the time of booking.</li>
              <li>Prices may be subject to change due to currency fluctuations, airline or supplier policies. Any additional costs will be borne by You.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold">4. Cancellations & Refunds</h3>
            <ul className="list-disc pl-5">
              <li>Standard cancellation and refund policies of airlines, hotels, and other suppliers will apply.</li>
              <li>Any refunds due will first be applied towards settlement of outstanding loan obligations with Zedvance before being remitted to You.</li>
              <li>BTM shall not be responsible for penalties or losses arising from loan repayment obligations.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold">5. Liability</h3>
            <ul className="list-disc pl-5">
              <li>Our role is limited to the provision of travel services. Zedvance is solely responsible for financing, loan approval, and repayment collection.</li>
              <li>We shall not be liable for loan-related issues including, but not limited to, declined applications, repayment defaults, or disputes with Zedvance.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold">6. Data Protection</h3>
            <ul className="list-disc pl-5">
              <li>Your information provided to us will be handled in accordance with applicable data protection laws, including the Nigeria Data Protection Regulation (NDPR).</li>
              <li>Financial and loan information remains strictly with Zedvance and is subject to their Privacy Policy.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold">7. Dispute Resolution</h3>
            <ul className="list-disc pl-5">
              <li>Service-related complaints (e.g., ticketing errors, hotel reservations) will be addressed by BTM under our standard complaint resolution process.</li>
              <li>Loan-related complaints must be directed to Zedvance via their official customer service channels.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold">8. Acceptance</h3>
            <p>
              By choosing the instalment payment option, you acknowledge that you
              have read, understood, and agreed to these Terms & Conditions, in
              addition to Zedvance’s loan agreement and policies.
            </p>
            <p className="mt-2">
              BTM recommends that you carefully review Zedvance’s loan terms before
              committing to this payment option.
            </p>
          </section>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
