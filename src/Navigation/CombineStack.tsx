import { RootStackParamList as AuthStackParamList } from './AuthStack';
import { RootStackParamList as MainStackParamList } from './MainStack';

// Combine AuthStack and MainStack types
export type CombinedStackParamList = AuthStackParamList & MainStackParamList;