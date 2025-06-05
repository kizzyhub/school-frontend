import { useContext, useEffect, useState } from "react";
import { Box, Button, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../../environment";
import NoData from "../../../basic utility components/NoData";
import { NoticeContext } from "../../../context/NoticeContext";

const NoticeTeacher = () => {
  const { notices, addNotice } = useContext(NoticeContext);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSendNotice = () => {
    if (title && message) {
      addNotice({
        _id: Date.now(),
        title,
        message,
        date: new Date().toISOString(),
        audience: "students",
      });
      setTitle("");
      setMessage("");
    }
  };

  return (
    <Box>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        Notice Board
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", my: 2 }}>
        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button variant="contained" onClick={handleSendNotice}>
          Send Notice
        </Button>
      </Box>
      {notices.length < 1 ? (
        <NoData text={"There is no Notice."} />
      ) : (
        <Box sx={{ mt: 2 }}>
          {notices.map((notice) => (
            <Paper key={notice._id} sx={{ p: 2, m: 2, display: "inline-block", background: "lightgreen" }}>
              <Typography variant="h5">{notice.title}</Typography>
              <Typography variant="p">{notice.message}</Typography>
              <Typography variant="body2" sx={{ mt: 1, display: "block" }}>
                Posted On: {new Date(notice.date).toLocaleDateString()}
              </Typography>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NoticeTeacher;
