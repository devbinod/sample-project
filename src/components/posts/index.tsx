import React, { Component, ChangeEvent } from "react";
import {
  withStyles,
  WithStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  CardActionArea,
  CardContent,
  CardActions,
  Switch,
  FormControlLabel,
  DialogContent,
  DialogActions,
  Card,
  DialogTitle,
  Dialog
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import container, { MapStateToProps, MapDispatchToProps } from "./container";
import { Post, PostType } from "../../reducers/types/post";
import moment from "moment";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrod: 1,
      margin: 30
    },
    post: {
      margin: 10
    },
    addButton: {
      float: "right"
    },
    textField: {
      margin: 10
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    modelMinimumHeight: {
      minHeight: 300,
      minwidth: 300
    }
  });

export type Props = MapStateToProps & MapDispatchToProps & WithStyles;

export type PostState = {
  title: string;
  description: string;
  videoUrl: string;
  postType: PostType;
  _id: string;
};

export type State = {
  loading: boolean;
  isAddPost: boolean;
  post: PostState;
  isVideoPost: boolean;
};

export class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      isAddPost: false,
      post: {
        _id: "",
        title: "",
        description: "",
        postType: "Text Post",
        videoUrl: ""
      },
      isVideoPost: false
    };
  }

  componentDidMount() {
    this.props.getAllPost();
  }

  addPost = () => {
    this.setState({
      ...this.state,
      isAddPost: true
    });
  };

  handleClose = async (isCreate: boolean) => {
    if (isCreate) {
      let { post, isVideoPost } = this.state;
      post.postType = isVideoPost ? "Video Post" : "Text Post";
      post._id = String(Math.random() * 10);
      await this.props.createPost(post);
      await this.props.getAllPost();
    }

    this.setState({
      ...this.state,
      isAddPost: false
    });
  };

  handlePost = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        [name]: value
      }
    });
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      isVideoPost: e.target.checked
    });
  };

  renderAllPost = () => {
    const {
      post: { posts },
      classes
    } = this.props;
    return posts.map((post: Post) => {
      return (
        <Grid item lg={8} key={post._id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {moment(post.createdAt).fromNow()}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };

  render() {
    const {
      classes,
      post: { posts, post }
    } = this.props;
    return (
      <div className={classes.root}>
        <Grid item lg={12} container>
          <Button onClick={this.addPost} variant="contained" color="primary">
            Add Post
          </Button>
        </Grid>

        {posts.length > 0 ? this.renderAllPost() : <div>loading...</div>}

        {this.state.isAddPost && (
          <div>
            <Dialog
              onClose={this.handleClose}
              aria-labelledby="customized-dialog-title"
              open={this.state.isAddPost}
            >
              <DialogTitle id="customized-dialog-title">Add Post</DialogTitle>
              <DialogContent dividers className={classes.modelMinimumHeight}>
                <form noValidate>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.isVideoPost}
                        onChange={this.handleChange}
                        name="isTextPost"
                      />
                    }
                    label={this.state.isVideoPost ? "Video Post" : "Text Post"}
                  />

                  {this.state.isVideoPost && (
                    <Grid item lg={12} className={classes.textField}>
                      <LinkIcon />
                      <TextField
                        id="url"
                        label="Video Url"
                        variant="outlined"
                        name="videoUrl"
                        onChange={this.handlePost}
                      ></TextField>
                    </Grid>
                  )}

                  <Grid item lg={12} className={classes.textField}>
                    <TextField
                      id="title"
                      label="Title"
                      variant="outlined"
                      name="title"
                      onChange={this.handlePost}
                    />
                  </Grid>
                  <Grid item lg={12} className={classes.textField}>
                    <TextField
                      id="description"
                      label="Description"
                      name="description"
                      multiline
                      rows="4"
                      defaultValue={post.description}
                      variant="outlined"
                      onChange={this.handlePost}
                    />
                  </Grid>
                </form>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  onClick={() => this.handleClose(false)}
                  color="primary"
                  variant="contained"
                >
                  Cancel
                </Button>
                <Button
                  autoFocus
                  onClick={() => this.handleClose(true)}
                  color="secondary"
                  variant="contained"
                >
                  Submit Post
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        )}
      </div>
    );
  }
}

export default container(withStyles(styles)(Home));
