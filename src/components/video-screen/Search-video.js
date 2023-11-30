import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import {useAuth0} from 'react-native-auth0'
import { useState } from 'react'
import {Education, News, Sports} from '../../assets/index'
import Categories from './Categories'

const Search = () => {

    const {user} = useAuth0();
    const [type, setType] = useState("categories");

  return (
    <View>
        <View className="bg-sky-200">
        {user && <TextInput placeholder="Search..." />}
        </View>
        <ScrollView>
            <View className="flex-row items-center justify-center px-8 mt-8">
            {user &&
                <Categories 
                    key={"education"}
                    title="Education"
                    ImageSrc = {Education}
                    type={type}
                    setType={setType}
                />
            }
             {user &&
                <Categories 
                    key={"sports"}
                    title="Sports"
                    ImageSrc = {Sports}
                    type={type}
                    setType={setType}
                />
            }
             {user &&
                <Categories 
                        key={"news"}
                        title="News"
                        ImageSrc = {News}
                        type={type}
                        setType={setType}
                />
            } 
            </View>
        </ScrollView>
    </View>
  )
}

export default Search