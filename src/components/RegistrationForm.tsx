import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const RegistrationForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [serverMessage, setServerMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{7,16}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setServerMessage('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          workshop: 'AI & Robotics Summer Workshop',
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setServerMessage(data.message || 'Registration successful!');
        setForm({ name: '', email: '', phone: '' });
      } else {
        setStatus('error');
        setServerMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerMessage('Unable to connect to the server. Please try again later.');
    }
  };

  const inputClasses = (field: keyof FormErrors) =>
    `w-full px-5 py-4 rounded-xl bg-white/[0.04] border text-white placeholder-gray-500 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-0 text-center ${
      errors[field]
        ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500'
        : 'border-white/10 focus:ring-primary-500/30 focus:border-primary-500/50 hover:border-white/20'
    }`;

  return (
    <section id="register" className="relative py-32 md:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />
      <div className="absolute right-1/4 top-1/4 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[130px]" />
      <div className="absolute left-1/4 bottom-1/4 w-[300px] h-[300px] bg-accent-500/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center py-[7px] my-[7px]">
          <span className="inline-block px-4 py-[7px] rounded-full bg-accent-500/10 text-accent-400 text-sm font-semibold tracking-wider uppercase mb-4 my-[7px]">
            Limited Seats
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-6 py-[7px] my-[7px]">
            Register <span className="gradient-text">Today</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto py-[7px] my-[7px]">
            Secure your child's spot in the AI & Robotics Summer Workshop.
            Fill in the form and our team will reach out with enrollment details.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto py-[7px] my-[7px]">
            {[
              'Live interactive sessions with expert mentors',
              'Recorded classes for flexible learning',
              'Certificate of Completion',
              'Small batch size (max 20 students)',
              'Doubt-clearing support throughout the course',
            ].map((perk, i) => (
              <div key={i} className="flex items-center gap-3 py-[7px] my-[7px]">
                <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 py-[7px] my-[7px]">
                  <svg className="w-3.5 h-3.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm font-medium py-[7px] my-[7px]">{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="relative max-w-xl mx-auto w-full py-[7px] my-[7px]">
          <div className="rounded-3xl glass p-10 sm:p-12 gradient-border py-[7px] my-[7px]">
              {status === 'success' ? (
                /* Success State */
                <div className="text-center py-12 animate-fade-in py-[7px] my-[7px]" id="form-success-message">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 py-[7px] my-[7px]">
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-3 py-[7px] my-[7px]">
                    You're In! 🎉
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-sm mx-auto text-center py-[7px] my-[7px]">
                    {serverMessage}
                    <br />
                    We'll send you the workshop details at your email address shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors py-[7px] my-[7px]"
                    id="form-register-another"
                  >
                    Register Another Student
                  </button>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} noValidate id="registration-form" className="py-[7px] my-[7px]">
                  <h3 className="text-2xl font-bold font-heading text-white mb-2 text-center py-[7px] my-[7px]">
                    Enquiry Form
                  </h3>
                  <p className="text-gray-400 text-sm mb-8 text-center py-[7px] my-[7px]">
                    Fill in your details and we'll get back to you within 24 hours.
                  </p>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm animate-fade-in py-[7px] my-[7px]" id="form-error-message">
                      <div className="flex items-center justify-center gap-2 py-[7px] my-[7px]">
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {serverMessage}
                      </div>
                    </div>
                  )}

                  {/* Name */}
                  <div className="mb-7 py-[7px] my-[7px]">
                    <label htmlFor="reg-name" className="block text-sm font-medium text-gray-300 mb-2 text-center py-[7px] my-[7px]">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="reg-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Aarav Sharma"
                      className={`${inputClasses('name')} py-[7px] my-[7px]`}
                      disabled={status === 'loading'}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 animate-fade-in text-center py-[7px] my-[7px]">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-7 py-[7px] my-[7px]">
                    <label htmlFor="reg-email" className="block text-sm font-medium text-gray-300 mb-2 text-center py-[7px] my-[7px]">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="reg-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      className={`${inputClasses('email')} py-[7px] my-[7px]`}
                      disabled={status === 'loading'}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 animate-fade-in text-center py-[7px] my-[7px]">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="mb-10 py-[7px] my-[7px]">
                    <label htmlFor="reg-phone" className="block text-sm font-medium text-gray-300 mb-2 text-center py-[7px] my-[7px]">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="reg-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`${inputClasses('phone')} py-[7px] my-[7px]`}
                      disabled={status === 'loading'}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400 animate-fade-in text-center py-[7px] my-[7px]">{errors.phone}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="form-submit-btn"
                    disabled={status === 'loading'}
                    className="w-full rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-lg shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 py-[7px] my-[7px]"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-4 py-[7px] my-[7px]">
                    By submitting, you agree to our Privacy Policy. We'll never spam you.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
  );
};

export default RegistrationForm;
