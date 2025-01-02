import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
 
const dimensions = { width: SCREEN_WIDTH / 375, height: SCREEN_HEIGHT / 720 };

function normalize(size: number, dimension: keyof typeof dimensions = 'width') {
    const newSize = size * dimensions[dimension];
    console.log("🚀 ~ normalize ~ newSize:", newSize)
    return Math.round(PixelRatio.roundToNearestPixel(newSize));

}

const SCALE = {
    dimensions,
    normalize,
};

export default SCALE;



const { width, height } = Dimensions.get('window');
console.log("🚀 ~ width:", width)
console.log("🚀 ~ height:", height)

// Check for small devices using both width and height
export const isSmallDevice = width < 360 || height < 670;