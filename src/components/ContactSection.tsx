import React from 'react';
import { Phone, Mail, AlertTriangle } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <h2 className="section-title animate-fade-in text-center">
          <span className="title-kanji">連絡先</span>
          連絡先 (Contact Details)
        </h2>

        <div className="single-contact-card glass-panel animate-fade-in delay-100">
          <div className="contact-row">
            <div className="contact-group">
              <div className="contact-icon bg-gold">
                <Phone size={20} />
              </div>
              <div className="contact-info">
                <h3>電話 (Phone)</h3>
                <a href="tel:+918668944955">+91 8668944955 (Primary)</a>
                <a href="tel:+918149900728">+91 8149900728 (Secondary)</a>
              </div>
            </div>

            <div className="contact-group">
              <div className="contact-icon bg-gold">
                <Mail size={20} />
              </div>
              <div className="contact-info">
                <h3>Eメール (Email)</h3>
                <a href="mailto:b24199@students.iitmandi.ac.in">b24199@students.iitmandi.ac.in</a>
                <a href="mailto:kartavyasuryawanshi7@gmail.com">kartavyasuryawanshi7@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="contact-row divider">
            <div className="contact-group">
              <div className="contact-icon bg-indigo">
                <LinkedinIcon size={20} />
              </div>
              <div className="contact-info">
                <h3>プロフェッショナル (Professional)</h3>
                <div className="social-links-inline">
                  <a href="https://www.linkedin.com/in/kartavya-suryawanshi-918753320/" target="_blank" rel="noreferrer" className="social-text-link">LinkedIn</a>
                  <span className="separator">•</span>
                  <a href="https://github.com/Kaartavya728" target="_blank" rel="noreferrer" className="social-text-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="contact-group">
              <div className="contact-icon bg-crimson">
                <AlertTriangle size={20} />
              </div>
              <div className="contact-info">
                <h3>緊急連絡先 (Emergency)</h3>
                <p>Mother: Baysa Nanabhau Sakore</p>
                <a href="tel:+918149244074" className="text-crimson font-medium">+91 8149244074</a>
              </div>
            </div>
          </div>
        </div>

        {/* Lost and Found Message */}
        <div className="lost-found-card glass-panel animate-fade-in delay-200">
          <div className="lost-found-icon">
            <AlertTriangle size={32} />
          </div>
          <div className="lost-found-content">
            <h3 className="lost-found-title">遺失物 (Lost & Found)</h3>
            <p className="lost-found-text english">
              "If this luggage is found, please contact me using the information above or hand it over to the nearest airline staff. Thank you very much."
            </p>
            <p className="lost-found-text japanese">
              「この荷物を見つけた場合は、上記の連絡先までご連絡いただくか、最寄りの航空会社スタッフにお渡しください。ご協力ありがとうございます。」
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
