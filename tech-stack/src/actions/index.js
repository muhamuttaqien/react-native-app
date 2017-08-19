export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};

// function right here is what we call as action creator
// this function only export plain JavaScript
// this should be inserted in component needing this .selectLibrary function and it will becomes the component's props
// <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)} >
// it should be more function here for further
