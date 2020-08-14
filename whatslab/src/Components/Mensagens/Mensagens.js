import React from 'react'
import './Msg.css'
import styled from 'styled-components'


const Container = styled.div `
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr , 1fr 1fr;
  align-items: center;
 /*  position: center; */
  background-color: #E5DDD5;
`
const Message = styled.div`
  padding: 20px;
  position: bottom;
`

const Usuario = styled.input`
    display: grid ;
    grid-column-start: 3;
    width: 5% ;
    height: 100%;
    padding: 10px 15px;
    border-radius: 5px; 
    position: bottom;
`

const Box = styled.input `
  width: 50%;
  height: 100%;
  border-radius: 5px; 
  padding: 20px; 
  position: bottom;`



const Botao = styled.button`
    width: 10%;
    height: 100%;
    padding: 10px 15px;
    border-radius: 5px;  
`



     /*    ` const UsernameContainer = styled.div` 
        margin-bottom: 10px; font-weight: bold; `  */ 
        


class Mensagens extends  React.Component  {
    state = {
        mensagensEnviadas : [
        {
            id: "",
            nome: "",
            mensagem: ""

        }
    ],
        valorInputNome: "",
        valorInputMensagem: "",
    }

    adicionaMensagem = () => {        
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
        /* let position 
        let username 
        if(this.props.message.user === 'eu')
         { position = 'right' } else 
         { position = 'left' 
         username =  <UsernameContainer>{this.props.message.user} </UsernameContainer> } 
         
         return ( 
         <MessageContainer onDoubleClick={this.onDoubleClick}> 
         <MessageBox position={position}> 
         {username}
          {this.props.message.text} </MessageBox> </MessageContainer> ); 
          
    }   */
  

        const listaDeMensagens = this.state.mensagensEnviadas.map(mensagem => {
            return(
            <p>{mensagem.nome} : {mensagem.mensagem}</p>
            )
        })

        return <Container className = "container">

        <Message className="mensagens">
           <Usuario placeholder = {"Usuário"}
           value ={this.state.valorInputNome}
           onChange={this.onChangeInputNome}                        
           />

          <Box placeholder = {"Mensagem"}
          value ={this.state.valorInputMensagem}
           onChange={this.onChangeInputMensagem}                
         />

       </Message>
        
        <Botao onClick={this.adicionaMensagem}>Enviar</Botao>
        {listaDeMensagens}

        </Container>
    }
    

}

export default Mensagens;


