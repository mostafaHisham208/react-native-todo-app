import { TextInput, View, Button, StyleSheet, FlatList, Text, Pressable } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Todo() {
    const [inputtext, setinputtext] = useState('')
    const [data, setdata] = useState([])
    const [error, seterror] = useState('')
    const [completetodo, setcompletetodo] = useState([])

    const handleadd = () => {
        console.log(inputtext);
        if (inputtext.length >= 3) {
            seterror('')
            const newtodo = {
                id: Math.random(),
                task: inputtext,
                complete: false
            };
            setdata([...data, newtodo])
            setinputtext('')
        } else {
            seterror("please enter at least three characters")
        }
    }
    const deletetodo = (todoId) => {
        const newtodos = data.filter((todo) => todo.id != todoId);
        const newcomp = completetodo.filter((todo) => todo.id != todoId);
        setdata(newtodos);
        setcompletetodo(newcomp)

    }
    const completed = (todoId) => {
        const newtodos = data.map((todo) => {
            if (todo.id == todoId) {
                if (todo.complete != true) {
                    setcompletetodo([...completetodo, todo]);
                    return { ...todo, complete: true };

                }

            }

            return todo;

        })
        setdata(newtodos);
    }

    return (
        <View>

            <View >
                <TextInput
                    style={styles.input}
                    placeholder="todo"
                    clearButtonMode='always'
                    value={inputtext}
                    onChangeText={text => setinputtext(text)}
                    autoCapitalize='none'
                    autoCorrect={false}

                />
                <Text>{error}</Text>
                <View style={{ width: "30%", justifyContent: "center", alignSelf: "center" }}>
                    <Button title='add' onPress={handleadd}></Button>

                </View>
            </View>
            <Text style={{ alignSelf: "center" }}>completed {completetodo.length} from {data.length} </Text>
            <FlatList data={data}
                ListHeaderComponent={
                    <View style={styles.todoheader}>
                        <Text>todo name</Text> 
                        <View style={{flexDirection:"row-reverse"}}>
                            <Text style={{marginLeft:5}}>complete |</Text>
                            <Text style={{marginLeft:5}}> delete</Text>
                        </View>
                    </View>
                } renderItem={({ item }) => <View style={styles.todocard}>
                    <Text
                        style={{ textDecorationLine: item.complete ? 'line-through' : 'none',fontSize:20 }}
                    >{item.task}</Text>
                    <View style={{ flexDirection: "row-reverse" }}>
                        <Pressable onPress={() => completed(item.id)} style={styles.btnContainer} >
                            {item.complete ? <Icon name="done" size={25} color="green" /> : ''}

                        </Pressable>
                        <Pressable onPress={() => deletetodo(item.id)} style={styles.btnContainer}>
                            <Icon name="delete" size={25} color="red" />

                        </Pressable>
                    </View>
                </View>
                }

                ListEmptyComponent={<Text style={styles.emptymassege}>No todo found</Text>}

            ></FlatList>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        margin: 10,
        borderColor: "gray",
        width: "90%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignSelf:"center",
        justifyContent:"center"
    },
    todoheader:{
        flexDirection: "row-reverse",
        margin: 10,
        padding: 20,
        borderRadius: 3,
        justifyContent: "space-between"

    },
    todocard: {
        flexDirection: "row-reverse",
        margin: 10,
        padding: 20,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 3,
        justifyContent: "space-between"
    },
    emptymassege:{
        alignSelf:"center",
        color:"gray",
        fontSize:20,
        marginTop:25},
    btnContainer: {
        marginLeft:10,
        backgroundColor: "#8fcae7",
        width: 40,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 10,
        alignItems: "center",
    },
})