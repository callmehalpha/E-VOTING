import React from 'react';
import { SafeAreaView,TouchableWithoutFeedback,View,StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Input, Icon, Text } from '@ui-kitten/components';

//Handle Vote count state
// const useInputState = (initialValue = 0) => {
//     const [value, setValue] = React.useState(initialValue);
//     return { value, onChangeText: setValue };
// };
const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
);

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

    //This holds the agent id for each party
    // const agentId = useInputState();

    const [value, setValue] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
    );

    const renderCaption = () => {
        return (
            <View style={styles.captionContainer}>
                {AlertIcon(styles.captionIcon)}
                <Text style={styles.captionText}>Should contain at least 8 characters</Text>
            </View>
        )
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='E-UNIT' alignment='center'/>
      <Divider/>

      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#D0F0C0'}}>
 {/*The input box*/}
          <Input
              value={value}
              label='Unique ID'
              placeholder='Enter your unique id'
              caption={renderCaption}
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              onChangeText={nextValue => setValue(nextValue)}
          />

          <Button onPress={navigateDetails}>AUTHORIZE</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5
    },
    captionText: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: "opensans-regular",
        color: "#8F9BB3",
    }
});