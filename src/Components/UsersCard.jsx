import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const UsersCard = ({ user }) => {
  return (
    <Card
      style={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        sx={{ height: 100, width: 50 }}
        image={user.avatar}
        title="avatar"
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {user.email}
          <br />
          Gender:{user.gender} <br />
          Domain: {user.domain}
        </Typography>
      </CardContent>
      <CardActions>
        {user.available && <Button size="small">Add to Team</Button>}
        <Button>Update User </Button>
        <Button>Delete User</Button>
      </CardActions>
    </Card>
  );
};
