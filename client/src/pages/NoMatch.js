import React from "react";

const styles = {
    pageNotFound: {
        color: "white"
    }
}

function NoMatch() {
  return (
    
        <div size="md-12" className="noMatch">
            <h1 id="pageNoFound" style={styles.pageNotFound}>404 Page Not Found</h1>
        </div>
 
  );
}

export default NoMatch;
