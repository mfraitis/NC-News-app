// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import ThumbDownIcon from "@material-ui/icons/ThumbDown";
// import ShareIcon from "@material-ui/icons/Share";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { render } from "@testing-library/react";

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 345
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%" // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest
//     })
//   },
//   expandOpen: {
//     transform: "rotate(180deg)"
//   },
//   avatar: {
//     backgroundColor: red[500]
//   }
// }));

// const classes = useStyles();

// {
//   article_id, title, body, votes, topic, author, created_at, comment_count;
// }
// class ArticleBody extends React.Component {
//   state = {};

//   article = this.props.article;

//   render() {
//     console.log(this.props.article);
//     return (
//       <Card className={"root"}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="recipe" className={"avatar"}>
//               {this.props.article.author.charAt(0).toUpperCase()}
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={this.props.article.title}
//           subheader={this.props.article.created_at}
//         />
//         <CardMedia className={"media"} title={this.props.article.title} />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {this.props.article.body}
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="like">
//             <ThumbUpAltIcon />
//           </IconButton>
//           <IconButton aria-label="dislike">
//             <ThumbDownIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//         </CardActions>
//       </Card>
//     );
//   }
// }

// export default ArticleBody;
