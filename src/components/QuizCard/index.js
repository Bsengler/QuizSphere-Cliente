import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import UserActionsContext from '../../contexts/userActions';
import QuizOptions from '../QuizOptions';



export default function QuizCard({ data, onPlayQuizHandler, }) {
    const [showOptions, setShowOptions] = useState(false);
    
    function openOptionsHandler() {
        setShowOptions(true);
    }

    function closeOptionsHandler() {
        setShowOptions(false);
    }


    return(
        <Touchable
            foreground={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => onPlayQuizHandler(data._id)} 
            onLongPress={openOptionsHandler}
            style={{borderRadius: 20,}}
        > 
        
        <LinearGradient colors={['#364F6B', '#3E7B9D']} style={styles.container}>
            <Text style={styles.title}>{data.quizTitle}</Text>
            <Touchable foreground={Touchable.SelectableBackgroundBorderless()} style={styles.moreIcon} onPress={openOptionsHandler}>
                <Icon name="more-vert" size={30} color="white" />
            </Touchable>
            <Text style={styles.questions}>{data.questionsLength} questões</Text>
            <Text style={styles.author}>por {data.author.userName}</Text>

            <QuizOptions show={showOptions} closeOptions={closeOptionsHandler} quizId={data._id} />
        </LinearGradient>
        </Touchable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 315,
        width: 250,
        marginHorizontal: 5,
        marginBottom: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        // backgroundColor : "#0000" // invisible color
    },
    title: {
        position: 'absolute',
        top: 10,
        width: '85%',
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        paddingBottom: 5,
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderColor: 'white',
    },
    moreIcon: {
        position: 'absolute',
        top: 14,
        right: 10,
    },
    questions: {
        color: 'white',
        fontSize: 18,
    },
    author: {
        color: 'white',
        fontSize: 18,
    }
});