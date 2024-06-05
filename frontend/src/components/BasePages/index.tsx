import {
  Content,
  Header,
  Icon,
  Main,
  MainContent,
  Title,
  TitleContainer,
} from './styles';

type PropsType = {
  children: React.ReactElement;
};

export const BasePages = ({ children }: PropsType) => {
  return (
    <>
      <Header></Header>
      <Main>
        <MainContent>
          <TitleContainer>
            <Icon src="./user-icon.svg" />
            <Title>Painel de Clientes</Title>
          </TitleContainer>
          <Content>{children}</Content>
        </MainContent>
      </Main>
    </>
  );
};
