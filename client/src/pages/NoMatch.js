import React from "react";
import "../styles/NoMatch.css";

const styles = {
    pageNotFound: {
        color: "white"
    }
}

function NoMatch() {
  return (
    
        <div size="md-12" className="noMatch">
            <h1 id="pageNoFound" style={styles.pageNotFound}>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
        </div>
 
  );
}

export default NoMatch;
