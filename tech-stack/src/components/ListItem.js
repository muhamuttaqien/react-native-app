import React, { Component } from 'react';
// import data from ../reducers/LibraryList.json
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; // * as components from 'react-native', action is an object that tells the reducer how to change its data

class ListItem extends Component {
  componentWillUpdate() { // each component has several "lifecycle methods" that you can override to run code at particular times in the process (https://facebook.github.io/react/docs/react-component.html)
    LayoutAnimation.spring();
  }

  renderDescription() {
    // model 1
    // const { library, selectedLibraryId } = this.props;
    // if (library.id === selectedLibraryId) { // it is quite critical logic since it is using states
    //   return (
    //       <Text>library.description</Text>
    //   );
    // }

    // model 2
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => { // ownProps is pros that we pass to the ListItem component, it is exactly equal to this.props in the component
  const expanded = state.selectedLibraryId === ownProps.library.id; // (true, false) state manipulation (in this case is pre-calculation, pre-determination) it can be extremely helpful

  return { expanded }; // as a flag, it can be written { expanded: expanded }
};

export default connect(mapStateToProps, actions)(ListItem);
