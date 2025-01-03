import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
 
const dimensions = { width: SCREEN_WIDTH / 375, height: SCREEN_HEIGHT / 720 };

// Small device check
const { width, height } = Dimensions.get('window');
// Check for small devices using both width and height
export const isSmallDevice = width < 360 || height < 670;


// Normalize function
function normalize(size: number, dimension: keyof typeof dimensions = 'width') {
    const newSize = size * dimensions[dimension];
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const SCALE = {
    dimensions,
    normalize,
};

export default SCALE;






// Medium
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size:number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size:number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size:number, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };

// Function | Usage
// verticalScale | Used for height, marginTop, marginBottom, marginVertical, line-height, paddingTop, paddingBottom, paddingVertical, and similar vertical properties.
// horizontalScale | Used for width, marginLeft, marginRight, marginHorizontal, paddingLeft, paddingRight, paddingHorizontal, and similar horizontal properties.
// moderateScale | Used for font-size, borderRadius, and similar properties.