import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Obrigado por me conhecer! <GradientText>Tchauu</GradientText>
        </>
      }
      description=""
    />
  </Section>
);

export { CTA };
