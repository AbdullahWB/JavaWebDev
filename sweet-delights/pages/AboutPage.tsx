import React, { useState } from 'react';

const AboutPage: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
    };

  return (
    <div className="bg-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary">Our Story</h1>
            <p className="mt-4 text-lg text-text-main">
              From a humble kitchen to the heart of the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=500&h=600&auto=format&fit=crop" alt="Our bakery interior" className="rounded-lg shadow-xl" />
            <div>
              <h2 className="text-3xl font-serif text-secondary mb-4">Passion in Every Bake</h2>
              <p className="text-text-main mb-4">
                Sweet Delights was born from a lifelong love for baking. We believe that a cake is more than just a dessert; it’s a centerpiece for celebration, a symbol of joy, and a memory in the making. Our mission is to craft exquisite cakes that not only look stunning but taste divine.
              </p>
              <p className="text-text-main">
                We use only the finest, locally-sourced ingredients whenever possible, ensuring every bite is fresh and flavorful. Each cake is a work of art, meticulously designed and handcrafted with passion and precision.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-secondary text-center mb-8">Get in Touch</h2>
            {isSubmitted ? (
                <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
                    <h3 className="text-xl font-semibold">Thank you!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-text-main font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-text-main font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-text-main font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-full bg-accent hover:bg-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;