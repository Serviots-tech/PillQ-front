import React from 'react';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';

export const BackIcon = () => (
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <G clipPath="url(#clip0)">
            <Path d="M32 23H19.83L25.42 17.41L24 16L16 24L24 32L25.41 30.59L19.83 25H32V23Z" fill="#3F4946" />
        </G>
        <Defs>
            <ClipPath id="clip0">
                <Rect x="4" y="4" width="40" height="40" rx="20" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
