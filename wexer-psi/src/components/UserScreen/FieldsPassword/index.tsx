import ButtonSave from "../../../reusable/Buttons/ButtonSave";

const FieldsPassword = () => {
  return (
    <>
      <div id="inputsGeneral">
        <div className="inputsLine">
            
            <div className="inputSolo">
              <label>Senha</label>
              <input type="text" />
            </div>

            <div className="inputSolo">
              <label>Confirmar</label>
              <input type="text" />
            </div>
              <ButtonSave />
          </div>
        </div>
    </>
  );
};

export default FieldsPassword;