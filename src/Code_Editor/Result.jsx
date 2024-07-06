import { Box, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";

import { EditorContext } from "../components/PracticeJS";

function Result() {
  const [src, setSrc] = useState("");
  const { html, css, js, head } = useContext(EditorContext);
  console.log(head);
  // <body>${html}</body>
  const srcCode = `
        <html>
        <head>${head}</head>
            <style>${css}</style>
            <script>${js}</script>
        </html>

    `;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [html, css, js, head]);

  return (
    <Box className="flex-1">
      <Button
        onClick={() => {
          const newTab = window.open();
          newTab.document.open();
          newTab.document.write(srcCode);
          newTab.document.close;
        }}
      >
        View in new tab
      </Button>
      <iframe
        srcDoc={src}
        title="Output"
        // sandbox='allow-scripts'
        width="100%"
        height="100%"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Box>
  );
}

export default Result;
