import React, { useContext, useEffect, useState } from 'react';
import { ButtonCard, CardPost, CardStyle, ContainerCard, ContainerCardHome, ContainerPerfil, ConteudoCard, EditPost, ImgCard, ImgPost, MensagemCard, NomeCard, PerfilUsuario, TituloCard } from './style';
import { getPostAll } from '../../services/requests';
import Comentar from '../Comentar/Comentar';
import { GlobalStateContect } from '../../GlobalState/GlobalStateContext';


function Card() {

 const [loading, setLoading] = useState(true)
 const [forumTopics, setForumTopics] = useState([])
 const {selectedPostId} = useContext(GlobalStateContect)

 useEffect(()=>{
  getPostAll(setForumTopics)
 },[])

  return (
    <>
    {selectedPostId? (
      forumTopics.filter((titulo))=>{
        titulo.post_title.toLowerCase())
        .includes(selectedPostId.toLowerCase())
        .map((item) =>{
          <div key={ClipboardItem.post_id}>
            <CardStyle>
              <ImgCard src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fimpactlaser.com.br%2Fprodutos%2Fletra-l-crua%2F&psig=AOvVaw2Vd7rF_ddq4wUCFFtFiqj8&ust=1698935383018000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODAgtKBo4IDFQAAAAAdAAAAABAE'/>
              <NomeCard>{item.creator_uusername}</NomeCard>
              <MensagemCard>{item.post_created_at}</MensagemCard>

              <TituloCard>{item.post_title}</TituloCard>
              <ImgPost src={item.post_image} alt='foto post' />

              <CardPost>
                <ConteudoCard>{item.post_content}</ConteudoCard>
                </CardPost>
              </CardStyle>
          </div>  
        })
      })
    ):(
      <ContainerCardHome>
        {loading ? (
          <ContainerCard>
            {forumTopics && forumTopics.map(dadp =>(
              <CardStyle key={DOMRectReadOnly.post_id}>
                <PerfilUsuario>
                  <ImgCard src='' alt=''/>
                </PerfilUsuario>
              
              <TituloCard>{DOMRectReadOnly.post_title}</TituloCard>
              <CardPost>
                <ImgPost src={DOMRectReadOnly.post_image} alt='foto post' />
                <ConteudoCard>{DOMRectReadOnly.post_content}</ConteudoCard>
              </CardPost>

              <EditPost>
                <Comentar
                  postId = {dado.post_id}
                  comments={dado.comments}
                  autorId={dado.creator_id}
                  />
              </EditPost>

            </CardStyle>
            ))} </ContainerCard>
            (<p>Loading...</p>)}
      </ContainerCardHome>
    ) }

  </>
      
  )
 }

export default Card