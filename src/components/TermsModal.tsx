import { useState, useRef, useEffect } from "react";

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
  onAccept?: () => void;
}

export default function TermsModal({ open, onClose, onAccept }: TermsModalProps) {
  const [canAccept, setCanAccept] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Reset accept state & scroll when modal opens
  useEffect(() => {
    if (open) {
      setCanAccept(false);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    }
  }, [open]);

  if (!open) return null;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

    // Enable accept button when scrolled to bottom
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setCanAccept(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // click outside closes modal
    >
      <div
        className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
      >
        <h2 className="text-lg font-semibold mb-4">
          Terms & Conditions for Instalment Payment Option with Zedvance
        </h2>

        {/* Scrollable terms content */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="space-y-6 text-sm text-gray-700 leading-relaxed overflow-y-auto max-h-[60vh] pr-3"
        >
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

        {/* Scroll notice */}
        {!canAccept && (
          <p className="text-xs text-gray-500 mt-3 italic">
            Please scroll to the bottom to enable the Accept button.
          </p>
        )}

        {/* Footer buttons */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-white ${
              canAccept ? "bg-primary" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={() => {
              if (canAccept) {
                onAccept?.();
                onClose();
              }
            }}
            disabled={!canAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
