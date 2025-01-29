import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import styles from './style';
import { ForwardIcon, SearchIcon } from '../../constants/svgs';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface CustomDropdownProps {
    value: string;
    onChangeText: (value: string) => void;
    dropdownList: string[];
    placeholder?: string;
    title?: string;
    footerText?: string;
    showFooter?: boolean;
    inputRef?:any
    onDropdownChange: (value: string) => void;
    isLoading:boolean
    setText:any
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
    value,
    onChangeText,
    dropdownList,
    placeholder = 'Search...',
    title = 'Select an item',
    footerText = 'Refine your search for more results',
    showFooter = true,
    inputRef,
    onDropdownChange,
    isLoading=false,
    setText
}) => {
    const [activeItem, setActiveItem] = useState<any>(null);
    const handlePressIn = (item: any) => setActiveItem(item);
    const handlePressOut = () => setActiveItem(null);

    const handleSearch = (text: string) => {
        onChangeText(text);
    };

    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            <View style={styles.inputContainer}>
                <View style={styles.icon}>{<SearchIcon />}</View>
                <TextInput
                    ref={inputRef}
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={handleSearch}
                />
                {value && <View style={styles.suffixIcon}> <TouchableOpacity onPress={() => { setText('') }}>{isLoading ? <FontAwesomeIcon name="spinner" size={20} color="#000" /> : <Icon name="close" size={20} color="#000" />}</TouchableOpacity></View>}
            </View>
            <FlatList
                data={dropdownList}
                keyExtractor={(item, index) => index?.toString()}
                contentContainerStyle={styles.listContentContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.item, activeItem === item && styles.itemActive]}
                            onPress={() => onDropdownChange(item)}
                        onPressIn={() => handlePressIn(item)}  
                        onPressOut={handlePressOut}
                        activeOpacity={1}
                        
                    >
                        {highlightText(item, value)}
                    </TouchableOpacity>
                )}
                ListFooterComponent={
                    showFooter && value.length > 0 && dropdownList.length === 0 ? (
                        <Text style={styles.footerText}>{footerText}</Text>
                    ) : null
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};
const highlightText = (text: string, search: string) => {
    if (!search) {
        return (
            <>
                <Text style={styles.itemText}>{text}</Text>
                <ForwardIcon color="#7E8183" />
            </>
        );
    }

    const regex = new RegExp(`(${search})`, 'gi'); // Match search term case-insensitively
    const parts = text.split(regex); // Split text into matching and non-matching parts

    return (
        <>
            <Text style={[styles.filteredItem, { flex: 1 }]}>
                {parts.map((part, index) =>
                    part.toLowerCase() === search.toLowerCase() ? (
                        <Text key={`bold-${index}`} style={styles.boldText}>
                            {part}
                        </Text>
                    ) : (
                        <Text key={`normal-${index}`} style={styles.itemText}>
                            {part}
                        </Text>
                    )
                )}
            </Text>
            <ForwardIcon color="#7E8183" />
        </>
    );
};


export default CustomDropdown;
