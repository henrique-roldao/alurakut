import MainGrid from "../src/components/MainGrid/MainGrid";
import Box from "../src/components/Box/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AluraKutCommons";
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(propriedades) {
  return (
    <Box>
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = "henrique-roldao";
  const pessoasFavoritas = ["origamid", "maykbrito", "diego3g", "gugapadilha", "natanvalimcardoso", "LuanSouzaProg"];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" styled={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" styled={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          styled={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
