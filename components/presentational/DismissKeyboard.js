
import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

const dismiss = () => {
  Keyboard.dismiss();
  console.log('clicked!');
};

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={dismiss}>
    {children}
  </TouchableWithoutFeedback>
);

DismissKeyboard.Proptypes = {
  children: PropTypes.node.isRequired,
};


export default DismissKeyboard;
