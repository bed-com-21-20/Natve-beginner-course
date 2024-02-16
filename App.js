import React from 'react';
import {Text , TextInput , View} from 'react-native';


const App =() =>{  // this is a component in react just like any orter function 
return (
    <View>
<Text> React Native is awsome</Text>
<TextInput

    style ={{
        height: 40,
        borderColor:'gray',
        borderWidth:1,
       alignContent: 'center',
    }}
    />
</View>
)
};

//its possible to reuse the component multiple times by rendering it in other components
export default App;