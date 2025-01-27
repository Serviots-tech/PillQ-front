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

interface CustomDropdownProps {
    value: string;
    onChange: (value: string) => void;
    dropdownList: string[];
    placeholder?: string;
    title?: string;
    footerText?: string;
    showFooter?: boolean;
    inputRef?:any
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
    value,
    onChange,
    dropdownList,
    placeholder = 'Search...',
    title = 'Select an item',
    footerText = 'Refine your search for more results',
    showFooter = true,
    inputRef
}) => {
    const [filteredData, setFilteredData] = React.useState<string[]>(dropdownList || []);
    const [activeItem, setActiveItem] = useState<any>(null);
    const handlePressIn = (item: any) => setActiveItem(item);
    const handlePressOut = () => setActiveItem(null);

    const handleSearch = (text: string) => {
        onChange(text);
        const results = dropdownList.filter((item) =>
            item.toLowerCase().startsWith(text.toLowerCase())
        );
        setFilteredData(results);
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
            </View>
            <FlatList
                data={filteredData}
                keyExtractor={(item, index) => index?.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.item, activeItem === item && styles.itemActive]}
                        onPress={() => onChange(item)}
                        onPressIn={() => handlePressIn(item)}  // Pass the item directly here
                        onPressOut={handlePressOut}
                        activeOpacity={1}
                    >
                        {/* <Text style={styles.itemText}>{item}</Text>
                        <ForwardIcon color='#7E8183' /> */}
                        {highlightText(item, value)}
                    </TouchableOpacity>
                )}
                ListFooterComponent={
                    showFooter && value.length > 0 && filteredData.length === 0 ? (
                        <Text style={styles.footerText}>{footerText}</Text>
                    ) : null
                }
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
