import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Oii, meu nome é <GradientText>Caio</GradientText> 👋
        </>
      }
      description={
        <>
          Este site vai funcionar como um blog pessoal, aonde eu cito e descrevo meus hobbies {' '}
          <a className="text-cyan-400 hover:underline" href="/">
            :D
          </a>{' '}
          Meu nome é Caio Vinícius Maciel Delgado, tenho 19 anos recém completados, {' '}
          <a className="text-cyan-400 hover:underline" href="/">
            
          </a>{' '}
          e gosto muito de jogar, assistir filmes, séries e conversar!
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
