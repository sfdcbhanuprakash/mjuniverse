
import React from 'react';
import PageBanner from '@/components/PageBanner';
import { Send, MessageSquare, ImagePlus } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Submission Received",
      description: "Thank you for your contribution to the MJ Universe!",
      duration: 5000,
    });
  };

  return (
    <div>
      <PageBanner 
        title="Contact & Submissions" 
        subtitle="Share your Michael Jackson memories, tributes, and artwork"
        backgroundImage="/images/contact-banner.jpg"
      />
      
      <section className="py-16 bg-mjblack">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h2 className="section-heading">Submit Your Tribute</h2>
              <p className="text-gray-300 mb-6">
                MJ Universe is a community-driven tribute site. We welcome your stories, 
                memories, and fan creations to celebrate Michael's legacy together.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gold mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="mj-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="mj-input"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gold mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required 
                    className="mj-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gold mb-2">Your Message/Story</label>
                  <textarea 
                    id="message" 
                    required 
                    className="mj-textarea"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="file" className="block text-gold mb-2">Upload Image (Optional)</label>
                  <div className="border border-dashed border-gold-dark rounded-md p-4 text-center cursor-pointer hover:bg-mjblack-light transition-colors">
                    <input 
                      type="file" 
                      id="file" 
                      className="hidden"
                      accept="image/*"
                    />
                    <label htmlFor="file" className="cursor-pointer flex flex-col items-center">
                      <ImagePlus className="text-gold mb-2" size={32} />
                      <span className="text-gray-300">Click to upload an image</span>
                      <span className="text-gray-500 text-sm">(Max size: 5MB)</span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    required 
                    className="mr-2 h-4 w-4 text-gold border-gold"
                  />
                  <label htmlFor="consent" className="text-gray-300">
                    I confirm that any content I submit is my own or properly credited, 
                    and grant MJ Universe permission to display it.
                  </label>
                </div>
                
                <button type="submit" className="glow-button flex items-center justify-center gap-2">
                  <Send size={16} />
                  Submit Tribute
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="section-heading">Connect With Us</h2>
              <p className="text-gray-300 mb-6">
                Have questions, suggestions, or copyright concerns? We're here to help.
              </p>
              
              <div className="bg-mjblack-light border border-gold-dark rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gold">About MJ Universe</h3>
                <p className="text-gray-300 mb-4">
                  MJ Universe is a fan-created tribute website dedicated to honoring the 
                  legacy of Michael Jackson. We are not affiliated with the Michael Jackson 
                  Estate or any official entities.
                </p>
                <p className="text-gray-300">
                  Our site features content that falls under fair use guidelines, including 
                  public domain images, embedded YouTube videos, and fan-created tributes.
                </p>
              </div>
              
              <div className="bg-mjblack-light border border-gold-dark rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gold flex items-center">
                  <MessageSquare className="mr-2" size={20} />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white">How can I submit my MJ artwork?</h4>
                    <p className="text-gray-300">Use the form on this page to upload your images and provide details about your work.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Do you accept blog post submissions?</h4>
                    <p className="text-gray-300">Yes! We welcome well-written tributes, analyses, and personal stories about Michael's impact.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">How do I report copyright concerns?</h4>
                    <p className="text-gray-300">Please contact us immediately with details of the content in question, and we'll address it promptly.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Can I share your content?</h4>
                    <p className="text-gray-300">Yes, you may share our original content with proper attribution to MJ Universe.</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gold text-black rounded-lg">
                <h3 className="text-xl font-bold mb-2">Join the MJ Universe Community</h3>
                <p className="mb-4">Connect with other Michael Jackson fans and stay updated on new content</p>
                <div className="flex justify-center space-x-4">
                  {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map(platform => (
                    <a 
                      key={platform} 
                      href="#" 
                      className="bg-black text-gold px-4 py-2 rounded-full hover:bg-mjblack-dark transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
