import React, {useEffect, useState} from "react";
import useprotectedPage from "../../hooks/useProtectedPage"
import { useGlobalStates } from "../../global/GlobalState"
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Typographya,Card,InputsContainer, SignUpFormContainer } from "./styledPostPage"
import { Container } from '@material-ui/core';
import { goToPost } from "../../routes/coordinator"
import CircularProgress from '@material-ui/core/CircularProgress'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls"
import { createComment } from "../../services/commentsRequests";

function PostPage() {
 useprotectedPage()
 const history = useHistory()
 const [comentarios, setComentarios] = useState([])
 const {data} = useGlobalStates()
 const [isLoading, setIsLoading] = useState(false)
 const params = useParams().id
 const commentary = useRequestData(`${BASE_URL}/posts/${params}/comments`, {headers: {Authorization: localStorage.getItem("token")}}).data
 useEffect(() => {
 setComentarios(commentary)
}, [commentary]);
 const [form, onChange, clear] = useForm({ body: ''})

 const onSubmitForm = (event) => {
  setIsLoading(true)
  event.preventDefault()
  createComment(params, form, setIsLoading, clear, setComentarios)
}
  return (
<Container maxWidth="sm">
  <Typographya align="center" variant="h3">Post!</Typographya>
{data && data.map((post)=>{
  const {body, title, username, commentCount, id} = post
if(id===params){return(
<Card key={id} onClick={()=>goToPost(history, id)} >
  <p>{username}</p>
  <h3>{body}</h3>
</Card>)
}})}
    <form onSubmit={onSubmitForm}>
<SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.body}
            name={'body'}
            onChange={onChange}
            label={'Comentário'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Comentar</>}
        </Button>
      </SignUpFormContainer>
      </form>
  {comentarios && comentarios.map((comment)=>{
    return( <Typographya align="center" variant="h6">{comment.body}</Typographya>)
  })}
</Container>
  );
}

export default PostPage;
