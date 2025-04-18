import emailJs from '@emailjs/browser';
import { Button } from '@/components/button';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { Bounce, toast, ToastContainer, ToastOptions } from 'react-toastify';
import { MainContent } from '@/components/main-content';

import './styles.scss';

export const Contact: React.FC = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { currentTarget: form } = event;

    const publicKey = 'bWsRYLQr6rBS_5lzR';
    const serviceId = 'service_nvr17qb';
    const templateId = 'template_g9pzbkn';

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

    emailJs.sendForm(serviceId, templateId, form, { publicKey }).then(
      _ => toast.success('Email enviado com sucesso!', toastOptions),
      failure => {
        console.error(failure);
        toast.error('Falha ao enviar o email!', toastOptions);
      }
    );
  };

  return (
    <div id="contact" className="contact">
      <MainContent className="doubts-section" title="Dúvidas?" sectionVariant="secondary">
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
      </MainContent>

      <MainContent className="contact-section" title="Nos envie um email" sectionVariant="secondary">
        <form onSubmit={handleFormSubmit} id="contact-form">
          <input type="text" name="name" placeholder="Nome" required />
          <input type="email" name="email" placeholder="Email" required />
          <select name="subject" id="subject">
            <option value="" disabled selected>
              Selecione um assunto
            </option>
            <option value="Cotação dedicado">Cotação dedicado</option>
            <option value="Cotação fracionado">Cotação fracionado</option>
            <option value="Outro">Outro</option>
          </select>
          <textarea name="message" placeholder="Mensagem" required></textarea>

          <Button variant="primary" size="large" fullWidth type="submit">
            Enviar
          </Button>
        </form>
      </MainContent>

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
    </div>
  );
};
