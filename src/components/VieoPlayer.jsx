import React from 'react';

function VieoPlayer ({videoId}) {
  return (
      <>
    <iframe type="text/html" width="100%" height="100%"
    src={`https://www.youtube.com/embed/${videoId}`}  title="임시" allowFullScreen>
    </iframe>
    </>
  );
}

export default React.memo(VieoPlayer);