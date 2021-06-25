import React from "react";
import useprotectedPage from "../../hooks/useProtectedPage"
import { useGlobalStates } from "../../global/GlobalState"
import { Container } from '@material-ui/core';
import { Typographya,Card, InputsContainer, SignUpFormContainer } from "./styledFeedPage"
import { useHistory } from "react-router-dom";
import { goToPost } from "../../routes/coordinator"

function FeedPage() {
  const history = useHistory()
  useprotectedPage()
  const {data} = useGlobalStates()
  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, clear] = useForm({ title: '', body: ''})

  const onSubmitForm = (event) => {
    setIsLoading(true)
    event.preventDefault()
    createComment(form, setIsLoading, clear)
  }

  return (
<Container maxWidth="sm">
  <Typographya align="center" variant="h3">Feed do dia!</Typographya>
  <form onSubmit={onSubmitForm}>
  <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.title}
            name={'title'}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.body}
            name={'body'}
            onChange={onChange}
            label={'Postagem'}
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
{data && data.map((post)=>{
  const {body, title, username, commentCount, id} = post
return(
<Card key={id} onClick={()=>goToPost(history, id)} >
  <p>{username}</p>
  <h3>{body}</h3>
</Card>)
})}
</Container>
  );
}

export default FeedPage;

