import "./style.css";
import FieldsData from "./FieldsData";
import FieldsClinic from "./FieldsClinic";

const UserScreen = () => {
    return (
      <>
      <div id="divHeader">
        <p>Dados da conta</p>
      </div>
        <section>
          <div id="sectionHeader">
            <div className="dFlexRow">
                <span><h5>Meus Dados</h5></span>
                <span><h5>Meu faturamento</h5></span>              
            </div>
            <div>
              <button type="submit">Salvar</button>
              <button type="submit">Retornar á listagem</button>
            </div>
          </div>
          <div id="sectionBody">
            <div className="bannerBody">
                <p>Dados</p>
            </div>
                <FieldsData />
            <div className="bannerBody">
                <p>Dados da clínica</p>
            </div>
                <FieldsClinic />
            <div className="bannerBody">
                <p>Alterar senha</p>
            </div>
                <button>Salvar</button>
                <button>Retornar á listagem</button>
            </div>
        </section>
      </>
    );
  };
  
  export default UserScreen;
  