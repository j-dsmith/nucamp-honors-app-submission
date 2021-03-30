import React from "react";
import { connect } from "react-redux";
import { PageContainer } from "./ProjectPage.styles";
import InfoToast from "../Toast/InfoToast";

const mapStateToProps = (state) => ({
  deleted: state.projects.deleted,
  projectSelectedId: state.contentSelected.projectSelectedId,
});

const ProjectPageContainer = ({ deleted, projectSelectedId }) => {
  return (
    <PageContainer>
      {!deleted.deleteActive ? (
        <InfoToast
          heading="This is the Projects tray."
          content="Here you can access or delete your existing projects, or create new ones."
          positionX={515}
        />
      ) : null}

      {deleted.deleteActive ? (
        <InfoToast
          heading="Delete Items"
          content="Click the delete icon to remove projects or notes. Removed content can be viewed by selecting TRASH from the sidebar."
          positionX={515}
        />
      ) : null}
    </PageContainer>
  );
};

export default connect(mapStateToProps)(ProjectPageContainer);
