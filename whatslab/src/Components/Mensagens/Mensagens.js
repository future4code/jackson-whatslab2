import React from 'react'
import {Container, Formulario} from '../../GlobalStyles'



class Mensagens extends  React.Component  {
    state = {
        mensagensEnviadas:[],    
        valorInputNome: "",
        valorInputMensagem: "",
    }

    adicionaMensagem = (e) => {
        //Previnir o comportamento padrão do formulário
        e.preventDefault()        
        const novaMensagem = { 
          id: Date.now,       
          nome: this.state.valorInputNome,          
          mensagem: this.state.valorInputMensagem,
        };
       
        const novasMensagens = [...this.state.mensagensEnviadas, novaMensagem];
        this.setState({ mensagensEnviadas: novasMensagens, valorInputMensagem: "", valorInputNome: "" });
      };



    //Inputs controlados
    onChangeInputNome = (e) => {
        this.setState({valorInputNome: e.target.value})        
    }

    onChangeInputMensagem = (e) => {
        this.setState({valorInputMensagem : e.target.value})
    }
    

    render(){
     
        const listaDeMensagens = this.state.mensagensEnviadas.map(mensagem => {
            return(
            <p>{mensagem.nome} {mensagem.mensagem}</p>
            )
        })

        return (

         <Container>

        <Formulario>
           <input placeholder = {"Usuário"}
           value ={this.state.valorInputNome}
           onChange={this.onChangeInputNome}                        
           />
           
          <input placeholder = {"Mensagem"}
          value ={this.state.valorInputMensagem}
           onChange={this.onChangeInputMensagem}                
         />

        <button onClick={this.adicionaMensagem}>Enviar</button>
        {listaDeMensagens}
        </Formulario>

        </Container>
        )
    }
    

}

export default Mensagens;


