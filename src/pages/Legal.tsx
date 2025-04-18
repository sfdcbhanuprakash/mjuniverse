
import React from 'react';
import PageBanner from '@/components/PageBanner';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LEGAL_DISCLAIMER } from '@/lib/constants';

const Legal = () => {
  return (
    <div>
      <PageBanner 
        title="Legal Information" 
        subtitle="Copyright Disclaimer, Privacy Policy, and Terms of Use"
      />
      
      <section className="py-16 bg-mjblack">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="copyright">
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="copyright" className="text-lg px-8">Copyright Disclaimer</TabsTrigger>
              <TabsTrigger value="privacy" className="text-lg px-8">Privacy Policy</TabsTrigger>
              <TabsTrigger value="terms" className="text-lg px-8">Terms of Use</TabsTrigger>
            </TabsList>
            
            <TabsContent value="copyright" className="animate-fade-in">
              <div className="max-w-3xl mx-auto bg-mjblack-light border border-gold-dark rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gold">Copyright Disclaimer</h2>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    {LEGAL_DISCLAIMER}
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Fair Use Statement</h3>
                  <p>
                    MJ Universe is a non-commercial, fan-created website dedicated to celebrating the artistic and cultural legacy of Michael Jackson. Content on this site is provided under the fair use doctrine of copyright law, for purposes such as criticism, comment, news reporting, teaching, scholarship, and research.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Content Policies</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Videos:</strong> All videos are embedded from official YouTube channels and are not hosted on our servers. We do not provide download options for any video content.
                    </li>
                    <li>
                      <strong>Images:</strong> Images used on MJ Universe are either in the public domain, licensed under Creative Commons, properly attributed to their creators, or used under fair use guidelines for commentary and critique.
                    </li>
                    <li>
                      <strong>Music:</strong> No music files are hosted on or distributed through this website. Any music playback is provided through embedded players from licensed services like YouTube.
                    </li>
                    <li>
                      <strong>Text Content:</strong> Written content on MJ Universe is either original, properly attributed, or used under fair use guidelines for commentary, critique, and educational purposes.
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Copyright Concerns</h3>
                  <p>
                    If you believe any content on MJ Universe infringes upon your copyright, please contact us immediately with specific details about the content in question. We take copyright concerns seriously and will promptly address any valid claims.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Non-Affiliation Statement</h3>
                  <p>
                    MJ Universe is not affiliated with, endorsed by, or in any way officially connected with the Michael Jackson Estate, Sony Music, or any official Michael Jackson entities. This is a fan-created tribute website dedicated to celebrating Michael Jackson's legacy.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="animate-fade-in">
              <div className="max-w-3xl mx-auto bg-mjblack-light border border-gold-dark rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gold">Privacy Policy</h2>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    MJ Universe is committed to protecting the privacy of our visitors. This Privacy Policy outlines the types of information we collect and how we use it.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Information We Collect</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Personal Information:</strong> When you submit content or contact us, we may collect your name, email address, and any other information you voluntarily provide.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> We collect non-personal information about how visitors interact with our website, including browser type, referring site, date/time of visit, and pages viewed.
                    </li>
                    <li>
                      <strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">How We Use Your Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To improve our website and user experience</li>
                    <li>To respond to your inquiries and communication</li>
                    <li>To publish user-submitted content (with your consent)</li>
                    <li>To send updates or newsletters (if you opt in)</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Third-Party Services</h3>
                  <p>
                    Our website integrates with third-party services including YouTube and social media platforms. These services have their own privacy policies, and we encourage you to review them.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Your Rights</h3>
                  <p>
                    You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us through our submission form.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Changes to This Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="terms" className="animate-fade-in">
              <div className="max-w-3xl mx-auto bg-mjblack-light border border-gold-dark rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gold">Terms of Use</h2>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    By accessing and using MJ Universe, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">User Conduct</h3>
                  <p>
                    When using MJ Universe, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Submit content that is unlawful, harmful, threatening, abusive, or otherwise objectionable</li>
                    <li>Attempt to gain unauthorized access to any portion of the website</li>
                    <li>Use the website to distribute unsolicited commercial content</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">User Submissions</h3>
                  <p>
                    By submitting content to MJ Universe, you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Grant us a non-exclusive, royalty-free license to use, display, and distribute your submission</li>
                    <li>Represent that you own or have the necessary rights to the content you submit</li>
                    <li>Understand that your submission may be edited for length, clarity, or to comply with our content policies</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Intellectual Property</h3>
                  <p>
                    The design, layout, and original content of MJ Universe are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit permission.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Limitation of Liability</h3>
                  <p>
                    MJ Universe and its operators shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the website or any content therein.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 text-gold-light">Changes to Terms</h3>
                  <p>
                    We reserve the right to modify these Terms of Use at any time. Your continued use of the website following any changes constitutes your acceptance of the revised terms.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Legal;
