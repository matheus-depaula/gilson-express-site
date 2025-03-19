import { Section } from '@/components/section';
import { Button } from '@/components/button';

import './styles.scss';

export const Contact: React.FC = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Section id="contact" variant="secondary" className="contact">
      <div className="contact-info">
        <h1>Dúvidas?</h1>

        <p>Entre em contato conosco através de nossos canais de atendimento abaixo.</p>
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
  );
};
