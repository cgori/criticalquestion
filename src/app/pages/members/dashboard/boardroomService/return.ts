export interface BoardroomSingle {
  boardroom: {
    boardroomID: Number;
    usersIDs: [{ id: Number }];
    pollsIDs: [{ id: Number }];
  };
  message: boolean;
}
