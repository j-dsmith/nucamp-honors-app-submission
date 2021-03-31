import React from "react";
import { connect } from "react-redux";
import {
  Card,
  Avatar,
  Username,
  ContentInfo,
  ItemGroup,
  Label,
  NumLabel,
} from "./Profile.styles";

const mapStateToProps = (state) => ({
  projects: state.projects,
  user: state.user,
});

const ProfileCard = ({ projects, user }) => {
  const { name } = user;

  const numProjects = projects.projects.length;
  const numNotes = { count: 0 };
  //get total number of notes from the projects in state
  projects.projects.map((project) => {
    numNotes.count += project.notes.length;
    return numNotes;
  });

  return (
    <Card>
      <Avatar />
      <Username>{name}</Username>
      <ContentInfo>
        <ItemGroup>
          <Label>PROJECTS</Label>
          <NumLabel>{numProjects}</NumLabel>
        </ItemGroup>
        <ItemGroup>
          <Label>NOTES</Label>
          <NumLabel>{numNotes.count}</NumLabel>
        </ItemGroup>
      </ContentInfo>
    </Card>
  );
};

export default connect(mapStateToProps)(ProfileCard);
