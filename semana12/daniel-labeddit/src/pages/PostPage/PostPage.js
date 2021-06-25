import React, { useEffect, useState } from "react";
import useprotectedPage from "../../hooks/useProtectedPage";
import { useGlobalStates, useGlobalSetters } from "../../global/GlobalState";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  Typographya,
  Card,
  InputsContainer,
  SignUpFormContainer,
  Barrinha,
  ClickSpan,
} from "./styledPostPage";
import { Container } from "@material-ui/core";
import { goToPost } from "../../routes/coordinator";
import CircularProgress from "@material-ui/core/CircularProgress";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import {
  changeCommentVote,
  createComment,
  createCommentVote,
  deleteCommentVote,
} from "../../services/commentsRequests";
import {
  changePostVote,
  createPostVote,
  deletePostVote,
} from "../../services/postRequests";

function PostPage() {
  useprotectedPage();
  const { setData } = useGlobalSetters();
  const history = useHistory();
  const [comentarios, setComentarios] = useState([]);
  const { data } = useGlobalStates();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams().id;
  const commentary = useRequestData(`${BASE_URL}/posts/${params}/comments`, {
    headers: { Authorization: localStorage.getItem("token") },
  }).data;
  useEffect(() => {
    setComentarios(commentary);
  }, [commentary]);
  const [form, onChange, clear] = useForm({ body: "" });
  const onSubmitForm = (event) => {
    setIsLoading(true);
    event.preventDefault();
    createComment(params, form, setIsLoading, clear, setComentarios);
  };
  const voteUp = async (id, userVote) => {
    const body = { direction: 1 };
    if (userVote) {
      if (userVote === 1) {
        deletePostVote(id, setData);
      } else {
        await deletePostVote(id, setData);
        changePostVote(id, body, setData);
      }
    } else {
      createPostVote(id, body, setData);
    }
  };
  const voteDown = async (id, userVote) => {
    const body = { direction: -1 };
    if (userVote) {
      if (userVote === -1) {
        deletePostVote(id, setData);
      } else {
        await deletePostVote(id, setData);
        changePostVote(id, body, setData);
      }
    } else {
      createPostVote(id, body, setData);
    }
  };
  const voteUpComment = async (id, userVote) => {
    const body = { direction: 1 };
    if (userVote) {
      if (userVote === 1) {
        deleteCommentVote(id, params, setComentarios);
      } else {
        await deleteCommentVote(id, params, setComentarios);
        changeCommentVote(id, body, params, setComentarios);
      }
    } else {
      createCommentVote(id, body, params, setComentarios);
    }
  };
  const voteDownComment = async (id, userVote) => {
    const body = { direction: -1 };
    if (userVote) {
      if (userVote === -1) {
        deleteCommentVote(id, params, setComentarios);
      } else {
        await deleteCommentVote(id, params, setComentarios);
        changeCommentVote(id, body, params, setComentarios);
      }
    } else {
      createCommentVote(id, body, params, setComentarios);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typographya align="center" variant="h3">
        Post Selecionado!
      </Typographya>
      {data &&
        data.map((post) => {
          const { body, voteSum, username, commentCount, id, userVote } = post;
          if (id === params) {
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
          } else {
            return false;
          }
        })}
      <form onSubmit={onSubmitForm}>
        <SignUpFormContainer>
          <InputsContainer>
            <TextField
              value={form.body}
              name={"body"}
              onChange={onChange}
              label={"Comentário"}
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
      {comentarios &&
        comentarios.map((comment) => {
          const { username, body, userVote, voteSum, id } = comment;
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
                    onClick={() => voteUpComment(id, userVote)}
                  >
                    UpVote{" "}
                  </ClickSpan>
                  <span>{voteSum ? voteSum : 0}</span>
                  <ClickSpan
                    votou={userVote === -1 ? true : false}
                    onClick={() => voteDownComment(id, userVote)}
                  >
                    {" "}
                    DownVote
                  </ClickSpan>
                </p>
              </Barrinha>
            </>
          );
        })}
    </Container>
  );
}

export default PostPage;
