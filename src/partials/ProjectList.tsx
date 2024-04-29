import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Meus <GradientText>Hobbies</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Jogos"
        description="Pessoalmente, meu favorito, principalmente quando estou com amigos! 
        Os jogos que mais costumamos jogar são: Lethal Company, Rocket League, Cuphead e de vez enquando Valorant."
        link="/"
        img={{
          src: '/public/assets/images/controle.png.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Terror</Tags>
            <Tags color={ColorTags.LIME}>Engraçados</Tags>
            <Tags color={ColorTags.SKY}>Competitivo</Tags>
          </>
        }
      />
      <Project
        name="Filmes"
        description="Gosto bastante de assistir filmes também! Entre os meus gêneros preferidos estão
        suspense(principalmente os que tem aquele plotzinho no final), ação, ficção e dependendo do tipo
        terror. Da minha lista de preferidos posso citar: Tudo em Todo Lugar Ao Mesmo Tempo, Knifes Out,
        Clube da Luta e os filmes da saga de Harry Potter"
        link="/"
        img={{ src: '/public/assets/images/claquete.png.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Ação</Tags>
            <Tags color={ColorTags.EMERALD}>Terror</Tags>
            <Tags color={ColorTags.ROSE}>Ficção</Tags>
          </>
        }
      />
      <Project
        name="Séries"
        description="Na parte de séries eu curto uns estilos bem semelhantes aos da seção anterior, e 
        entre as minhas preferidas posso citar Stranger Things, You, Desventuras em Série, Teen Wolf
        (por favor não me julgue) e Brooklyn Nine-Nine."
        link="/"
        img={{ src: '/public/assets/images/tvzinha.png.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Suspense</Tags>
            <Tags color={ColorTags.INDIGO}>Comédia</Tags>
            <Tags color={ColorTags.ROSE}>Ficção</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
