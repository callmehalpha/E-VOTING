import React from 'react';
import { SafeAreaView, StyleSheet,ScrollView } from 'react-native';
import { Divider, Icon, Layout, TopNavigation, TopNavigationAction, IndexPath, Select, SelectItem,Input} from '@ui-kitten/components';

//LogOut Icon
const LogOutIcon = (props) => (
  <Icon {...props} name='log-out-outline' />
);

//Handle Vote count state
const useInputState = (initialValue = 0) => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export const DetailsScreen = ({ navigation }) => {
//This navigate the screen back to the homepage
  const navigateBack = () => {
    navigation.goBack();
  };

  //This handles the party being selected in the dropbox
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

//This holds the vote count for each party
      const voteCounts = useInputState();

  const BackAction = () => (
    <TopNavigationAction icon={LogOutIcon} onPress={navigateBack}/>
  );

  return (
      <ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='LogOut' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={styles.container}>
         <Select style={{width: 220}}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
           <Input
        style={{width: 100, marginRight:20}}
        size='large'
        placeholder='Large'
        {...voteCounts}
      />
      </Layout>
      <Layout style={styles.container}>
         <Select style={{width: 220}}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
           <Input
        style={{width: 100, marginRight:20}}
        size='large'
        placeholder='Large'
        {...voteCounts}
      />
      </Layout>
      <Layout style={styles.container}>
         <Select style={{width: 220}}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
           <Input
        style={{width: 100, marginRight:20}}
        size='large'
        placeholder='Large'
        {...voteCounts}
      />
      </Layout>
      <Layout style={styles.container}>
         <Select style={{width: 220}}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
           <Input
        style={{width: 100, marginRight:20}}
        size='large'
        placeholder='Large'
        {...voteCounts}
      />
      </Layout>
   <Layout style={styles.container}>
         <Select style={{width: 220}}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
           <Input
        style={{width: 100, marginRight:20}}
        size='large'
        placeholder='Large'
        {...voteCounts}
      />
      </Layout>
      <Layout style={styles.container}>
         <Select style={{width: 220}}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
           <Input
        style={{width: 100, marginRight:20}}
        size='large'
        placeholder='Large'
        {...voteCounts}
      />
      </Layout>
      <Layout style={styles.container}>
         <Select style={{width: 220}}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
           <Input
        style={{width: 100, marginRight:20}}
        size='large'
        placeholder='Large'
        {...voteCounts}
      />
      </Layout>
      <Layout style={styles.container}>
         <Select style={{width: 220}}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
           <Input
        style={{width: 100, marginRight:20}}
        size='large'
        placeholder='Large'
        {...voteCounts}
      />
      </Layout>
    </SafeAreaView>
      </ScrollView>
  );
};
//Stylesheet
const styles = StyleSheet.create({
  container: {
    minHeight: 200,
      flexDirection: "row",
      alignItems: "center",
          justifyContent: 'space-between',


  },
});