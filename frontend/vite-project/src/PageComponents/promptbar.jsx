import React, { useState } from "react";
import { Box, TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const PromptBar = () => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    console.log("User input:", input);
    setInput("");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20, // a little above the edge
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 600, // 👈 restrict max width
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          p: 1,
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <TextField
          fullWidth
          placeholder="Ask anything"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          size="small"
        />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default PromptBar;
