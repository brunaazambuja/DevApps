import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

export const CheckBox1 = (props) => {
    const [b1, setB1] = useState(false);

    const checkB1 = () => setB1(!b1);

    return(
        <View style = {styles.checkBoxStyle}>
            <View style = {styles.check1Style}>
                <Checkbox
                    status = {b1 ? 'checked' : 'unchecked'}
                    onPress = {checkB1}>
                </Checkbox>
                <View style = {styles.checkBoxTextStyle}>
                    <Text>{props.name}</Text>
                </View>
            </View>
        </View>
    )
}

export const CheckBox2 = (props) => {
    const [b1, setB1] = useState(false);
    const [b2, setB2] = useState(false);

    const checkB1 = () => setB1(!b1);
    const checkB2 = () => setB2(!b2);


    return(
        <View style = {styles.checkBoxStyle}>
            <View style = {styles.checkStyle}>
                <Checkbox
                    status = {b1 ? 'checked' : 'unchecked'}
                    onPress = {checkB1}>
                </Checkbox>
                <View style = {styles.checkBoxTextStyle}>
                    <Text>{props.name1}</Text>
                </View>
            </View>

            <View style = {styles.checkStyle}>
                <Checkbox
                    status = {b2 ? 'checked' : 'unchecked'}
                    onPress = {checkB2}>
                </Checkbox>
                <View style = {styles.checkBoxTextStyle}>
                    <Text>{props.name2}</Text>
                </View>
            </View>
        </View>
    )
}

export const CheckBox3 = (props) => {
    const [b1, setB1] = useState(false);
    const [b2, setB2] = useState(false);
    const [b3, setB3] = useState(false);

    const checkB1 = () => setB1(!b1);
    const checkB2 = () => setB2(!b2);
    const checkB3 = () => setB3(!b3);


    return(
        <View style = {styles.checkBoxStyle}>
            <View style = {styles.checkStyle}>
                <Checkbox
                    status = {b1 ? 'checked' : 'unchecked'}
                    onPress = {checkB1}>
                </Checkbox>
                <View style = {styles.checkBoxTextStyle}>
                    <Text>{props.name1}</Text>
                </View>
            </View>

            <View style = {styles.checkStyle}>
                <Checkbox
                    status = {b2 ? 'checked' : 'unchecked'}
                    onPress = {checkB2}>
                </Checkbox>
                <View style = {styles.checkBoxTextStyle}>
                    <Text>{props.name2}</Text>
                </View>
            </View>

            <View style = {styles.checkStyle}>
                <Checkbox
                    status = {b3 ? 'checked' : 'unchecked'}
                    onPress = {checkB3}>
                </Checkbox>
                <View style = {styles.checkBoxTextStyle}>
                    <Text>{props.name3}</Text>
                </View>
            </View>
        </View>
    )
}

export const CheckBox1_3_Choice = (props) => {
    const [b1, setB1] = useState(false);
    const [c1, setC1] = useState(false);
    const [c2, setC2] = useState(false);
    const [c3, setC3] = useState(false);

    const checkB1 = () => {
        setB1(!b1);
        setC1(false);
        setC2(false);
        setC3(false);
    }
    const checkC1 = () => {
        setC1(!c1);
        setC2(false);
        setC3(false);
    }
    const checkC2 = () => {
        setC2(!c2);
        setC1(false);
        setC3(false);
    }
    const checkC3 = () => {
        setC3(!c3);
        setC2(false);
        setC1(false);
    }

    return(
        <View>
            <View style = {styles.checkBoxStyle}>
                <View style = {styles.check1Style}>
                    <Checkbox
                        status = {b1 ? 'checked' : 'unchecked'}
                        onPress = {checkB1}>
                    </Checkbox>
                    <View style = {styles.checkBoxTextStyle}>
                        <Text>{props.name}</Text>
                    </View>
                </View>
            </View>

            <View style = {styles.checkBoxDependentStyle}>
                <View style = {styles.check1Style}>
                    <Checkbox
                        status = {c1 ? 'checked' : 'unchecked'}
                        onPress = {checkC1}
                        disabled = {!b1}>
                    </Checkbox>
                    <View style = {styles.checkBoxTextStyle}>
                        <Text
                            style = {{color : b1 ? '#757575' : '#bdbdbd'}}>
                            {props.name1}
                        </Text>
                    </View>
                </View>
            </View>

            <View style = {styles.checkBoxDependentStyle}>
                <View style = {styles.check1Style}>
                    <Checkbox
                        status = {c2 ? 'checked' : 'unchecked'}
                        onPress = {checkC2}
                        disabled = {!b1}>
                    </Checkbox>
                    <View style = {styles.checkBoxTextStyle}>
                        <Text
                            style = {{color : b1 ? '#757575' : '#bdbdbd'}}>
                            {props.name2}
                        </Text>
                    </View>
                </View>
            </View>

            <View style = {styles.checkBoxDependentStyle}>
                <View style = {styles.check1Style}>
                    <Checkbox
                        status = {c3 ? 'checked' : 'unchecked'}
                        onPress = {checkC3}
                        disabled = {!b1}>
                    </Checkbox>
                    <View style = {styles.checkBoxTextStyle}>
                        <Text
                            style = {{color : b1 ? '#757575' : '#bdbdbd'}}>
                            {props.name3}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export const CheckBox1_3 = (props) => {
    const [b1, setB1] = useState(false);
    const [c1, setC1] = useState(false);
    const [c2, setC2] = useState(false);
    const [c3, setC3] = useState(false);

    const checkB1 = () => {
        setB1(!b1);
        setC1(false);
        setC2(false);
        setC3(false);
    }
    const checkC1 = () => setC1(!c1);
    const checkC2 = () => setC2(!c2);
    const checkC3 = () => setC3(!c3);

    return(
        <View>
            <View style = {styles.checkBoxStyle}>
                <View style = {styles.check1Style}>
                    <Checkbox
                        status = {b1 ? 'checked' : 'unchecked'}
                        onPress = {checkB1}>
                    </Checkbox>
                    <View style = {styles.checkBoxTextStyle}>
                        <Text>{props.name}</Text>
                    </View>
                </View>
            </View>

            <View style = {styles.checkBoxDependentStyle}>
                <View style = {styles.check1Style}>
                    <Checkbox
                        status = {c1 ? 'checked' : 'unchecked'}
                        onPress = {checkC1}
                        disabled = {!b1}>
                    </Checkbox>
                    <View style = {styles.checkBoxTextStyle}>
                        <Text
                            style = {{color : b1 ? '#757575' : '#bdbdbd'}}>
                            {props.name1}
                        </Text>
                    </View>
                </View>
            </View>

            <View style = {styles.checkBoxDependentStyle}>
                <View style = {styles.check1Style}>
                    <Checkbox
                        status = {c2 ? 'checked' : 'unchecked'}
                        onPress = {checkC2}
                        disabled = {!b1}>
                    </Checkbox>
                    <View style = {styles.checkBoxTextStyle}>
                        <Text
                            style = {{color : b1 ? '#757575' : '#bdbdbd'}}>
                            {props.name2}
                        </Text>
                    </View>
                </View>
            </View>

            <View style = {styles.checkBoxDependentStyle}>
                <View style = {styles.check1Style}>
                    <Checkbox
                        status = {c3 ? 'checked' : 'unchecked'}
                        onPress = {checkC3}
                        disabled = {!b1}>
                    </Checkbox>
                    <View style = {styles.checkBoxTextStyle}>
                        <Text
                            style = {{color : b1 ? '#757575' : '#bdbdbd'}}>
                            {props.name3}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBoxStyle : {
        alignSelf : 'baseline',
        flexDirection : 'row'
    },
    checkBoxDependentStyle :{
        alignSelf : 'auto',
        paddingLeft : 30,
        flexDirection : 'row'
    },
    checkStyle : {
        width : 130,
        flexDirection : 'row'
    },
    check1Style : {
        width : 200,
        flexDirection : 'row'
    },
    checkBoxTextStyle : {
        paddingTop : 8
    }
})