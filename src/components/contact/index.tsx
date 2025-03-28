/* eslint-disable @typescript-eslint/no-unused-vars */
import emailJs from '@emailjs/browser';
import { Section } from '@/components/section';
import { Button } from '@/components/button';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { Bounce, toast, ToastContainer, ToastOptions } from 'react-toastify';

import './styles.scss';

export const Contact: React.FC = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = 'default_service';
    const templateId = '';

    const toastOptions: ToastOptions = {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    };

    emailJs.sendForm(serviceId, templateId, event.currentTarget).then(
      _response => {
        toast.success('Email enviado com sucesso!', toastOptions);
      },
      _error => {
        toast.error('Falha ao enviar o email!', toastOptions);
      }
    );
  };

  return (
    <>
      <Section id="contact" variant="secondary" className="contact">
        <div className="contact-info">
          <h1>Dúvidas?</h1>

          <p>Entre em contato conosco através de nossos canais de atendimento abaixo.</p>

          <div className="contact-info-items">
            <a href="https://wa.me/5512974042398">
              <FaWhatsapp /> 12 97404-2398
            </a>

            <a href="tel:1239537998">
              <FaPhone /> 12 3953-7998
            </a>

            <a href="mailto:expressogilson1@gmail.com">
              <FaEnvelope /> expressogilson1@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h1>Nos envie um email</h1>

          <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Nome" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Assunto" required />
            <textarea name="message" placeholder="Mensagem" required></textarea>

            <Button variant="primary" size="large" fullWidth type="submit">
              Enviar
            </Button>
          </form>
        </div>
      </Section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};
