import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import moment from "moment"

import useStyle from './styles'


import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import { useHistory } from "react-router-dom";


//-------------- Redux imports start -------

import { useDispatch } from "react-redux";
import { deleteArticle, likeArticle } from "../../../actions/posts";

//-------------- Redux imports end ---------

export default function MediaCard({ article }) {
  const dispatch = useDispatch();
  const classes = useStyle();
  // const history = useHistory();

  // const navigateMe = () => {
  //   history.push("/article");
  // };

  return (
    <div>
      <div className={classes.center}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              // image={article.image}
              title="devops lover"
            />
            <CardContent style={{paddingBottom: "0"}}>
              <div className={classes.row}>
                <Avatar size="small" />
                <Typography
                  style={{ marginLeft: "5px", marginTop: "0px" }}
                  gutterBottom
                  // variant="h5"
                  // component="h5"
                >
                Name
                </Typography>
              </div>
              
              <Typography variant="body2"> {moment(article.createdAt).fromNow()}  </Typography>
                  
              <Typography variant="h5" color="#121212" component="h5" >
               
                {article.title}
                {/* {article.description.slice(0, 100)}

                
                
                {(article.description.length === 100) ? 
                
                  <Button
                  style={{padding: "0", marginLeft: "3px"}}
                  onClick={navigateMe}
                >
                 Read More
                </Button> : null
                } */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
              
              <FavoriteIcon onclick={() => dispatch(likeArticle(article.slug))} /> 
              {article.favoritesCount} Like
            </Button> */}
            <Button size="small" color="primary" onClick={() => dispatch(likeArticle(article.slug))}><FavoriteIcon fontSize="small" /> Like {article.favoritesCount} </Button>
            <div className={classes.right}>
              <Button size="small" color="primary">
               
                <DeleteIcon onClick={() => dispatch(deleteArticle(article.slug))} style={{ textAlign: "right" }} />
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
