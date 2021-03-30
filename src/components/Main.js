import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import HomeInfo from "./Home/HomeInfo";
import EditorContainer from "./Editor/EditorContainer";
import Trash from "./Trash/Trash";
import SignUpPage from "./Profile/SignUpPage";
import AuthRoute from "../AuthRoute";
import InfoToast from "./Toast/InfoToast";
import ProjectPageContainer from "./ProjectPage/ProjectPageContainer";

const mapStateToProps = (state) => ({
  projects: state.projects,
  contentSelected: state.contentSelected,
  isAuthUser: state.user.isAuthUser,
});

class Main extends Component {
  render() {
    const { isAuthUser } = this.props;

    return (
      <div className={"grid-container"}>
        {/* create routes here, home - projects, notes (note id for custom param routes), trash */}
        {isAuthUser ? <Sidebar /> : null}

        <Switch>
          <AuthRoute path="/home" render={() => <HomeInfo />} type="private" />
          <AuthRoute
            exact
            path="/projects"
            type="private"
            render={() => <ProjectPageContainer />}
          />
          <AuthRoute
            exact
            path="/projects/:projectId"
            type="private"
            render={() => (
              <InfoToast
                heading="This is the Notes tray."
                content="From this tray you can view and delete existing notes, or add new notes to your project. Try clicking a note to bring up the Editor."
                positionX={515}
              />
            )}
          />
          <AuthRoute
            exact
            path="/projects/:projectId/:noteId"
            render={() => <EditorContainer />}
            type="private"
          />
          <AuthRoute
            path="/trash"
            exact
            render={() => <Trash />}
            type="private"
          />
          <Route path="/" component={SignUpPage} type="guest" />
          <Route path="/signup" component={SignUpPage} type="guest" />
          {/* <AuthRoute path="login" component={LoginPage} type="guest" /> */}
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
