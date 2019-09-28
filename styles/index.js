import Colors from './Colors';
import FontSizes from './FontSizes';
import Paddings from './Paddings';
import Fonts from './Fonts';
import {
  cardWidth, popUpView, cardHeight, moderateScale,
} from './scale';

const R = {
  ...Colors,
  ...FontSizes,
  ...Paddings,
  ...Fonts,
  sBorder: moderateScale(1),
  sBorderRadius: moderateScale(10),
  roundBorderRadius: moderateScale(50),
  iconSize: moderateScale(20),
  iconSizeSmall: moderateScale(16),
  iconContainerWidth: moderateScale(60),
  cardWidth,
  cardHeight,
  popUpView,
};

export default R;
