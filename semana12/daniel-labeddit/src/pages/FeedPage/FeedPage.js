import React, { useState } from "react";
import useprotectedPage from "../../hooks/useProtectedPage";
import { useGlobalStates, useGlobalSetters } from "../../global/GlobalState";
import { Container } from "@material-ui/core";
import {
  Typographya,
  Card,
  InputsContainer,
  SignUpFormContainer,
  Barrinha,
  ClickSpan,
} from "./styledFeedPage";
import { useHistory } from "react-router-dom";
import { goToPost } from "../../routes/coordinator";
import {
  changePostVote,
  createPost,
  createPostVote,
  deletePostVote,
} from "../../services/postRequests";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

function FeedPage() {
  const history = useHistory();
  useprotectedPage();
  const { setData } = useGlobalSetters();
  const { data } = useGlobalStates();
  const [isLoading, setIsLoading] = useState(false);
  const [form, onChange, clear] = useForm({ title: "", body: "" });

  const onSubmitForm = (event) => {
    setIsLoading(true);
    event.preventDefault();
    createPost(form, setIsLoading, clear, setData);
  };
  const voteUp = (id, userVote) => {
    const body = { direction: 1 };
    if (userVote) {
      if (userVote === 1) {
        deletePostVote(id, setData);
      } else {
        deletePostVote(id, setData);
        changePostVote(id, body, setData);
      }
    } else {
      createPostVote(id, body, setData);
    }
  };
  const voteDown = (id, userVote) => {
    const body = { direction: -1 };
    if (userVote) {
      if (userVote === -1) {
        deletePostVote(id, setData);
      } else {
        deletePostVote(id, setData);
        changePostVote(id, body, setData);
      }
    } else {
      createPostVote(id, body, setData);
    }
  };
  return (
    <Container maxWidth="sm">
      <Typographya align="center" variant="h3">
        Faça seu Post!
      </Typographya>
      <br />
      <form onSubmit={onSubmitForm}>
        <SignUpFormContainer>
          <InputsContainer>
            <TextField
              value={form.title}
              name={"title"}
              onChange={onChange}
              label={"Título"}
              variant={"outlined"}
              fullWidth
              required
              autoFocus
              margin={"normal"}
            />
            <TextField
              value={form.body}
              name={"body"}
              onChange={onChange}
              label={"Postagem"}
              variant={"outlined"}
              fullWidth
              required
              autoFocus
              margin={"normal"}
            />
          </InputsContainer>
          <Button
            color={"primary"}
            variant={"contained"}
            type={"submit"}
            fullWidth
          >
            {isLoading ? (
              <CircularProgress color={"inherit"} size={24} />
            ) : (
              <>Comentar</>
            )}
          </Button>
        </SignUpFormContainer>
      </form>
      <br />
      {data &&
        data.map((post) => {
          const { body, voteSum, username, commentCount, id, userVote } = post;
          return (
            <>
              <Card key={id} onClick={() => goToPost(history, id)}>
                <p>{username}</p>
                <h3>{body}</h3>
              </Card>
              <Barrinha>
                <p>
                  <ClickSpan
                    votou={userVote === 1 ? true : false}
                    onClick={() => voteUp(id, userVote)}
                  >
                    UpVote{" "}
                  </ClickSpan>
                  <span>{voteSum ? voteSum : 0}</span>
                  <ClickSpan
                    votou={userVote === -1 ? true : false}
                    onClick={() => voteDown(id, userVote)}
                  >
                    {" "}
                    DownVote
                  </ClickSpan>
                </p>
                <p>{commentCount ? commentCount : 0} Comentários</p>
              </Barrinha>
            </>
          );
        })}
    </Container>
  );
}

export default FeedPage;
