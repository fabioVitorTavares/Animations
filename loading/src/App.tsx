import Loading from "./Loading";
import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppStyled>
      <Loading />
    </AppStyled>
  );
}

export default App;
