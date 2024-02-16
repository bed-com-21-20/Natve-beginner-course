import React, {useState} from 'react';
import {Text , TextInput , View, Button} from 'react-native';
/*[
Take Note that this app is for demostration purposes only, however some componets will be commented out 
for the sake of stressing other points clear. 
]*/


// const App =() =>{  // this is a component in react just like any orter function 
// return (
//     <View>
// <Text> React Native is awsome</Text>
// <TextInput

//     style ={{
//         height: 40,
//         borderColor:'gray',
//         borderWidth:1,
//        alignContent: 'center',
//     }}
//     />
// </View>
// )
// };

const App = props => {
    const [isPressed,setIsPress ] = useState(true);

    return (
        <View >
            <Text>
                This Button {props.name}, and has also {isPressed ? 'pressed' : 'Not-pressed'}!
                </Text>
                <Button
                onPress={() => {setIsPress(false);
                }}
                disabled={!isPressed}
                title={isPressed ? 'can you touch here, please' : 'Thank you'} 
                />
        </View>
    );
};

//its possible to reuse the component multiple times by rendering it in other components

const Applet = () =>{
return (
    <>
    <App name =" Wabla" />
    <App name =" Trapper" />
    </>
);
};

export default Applet;