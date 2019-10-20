import React, { Component } from 'react'
import { Tabs, Tab, Button } from 'native-base'
import RecordList from './RecordList'
import * as DocumentPicker from 'expo-document-picker'

 test = () => {
    const res = DocumentPicker.getDocumentAsync().then( result => console.log(result.uri));
}
export default class TabSection extends Component {
    
    render() {
        return (

            <Tabs>
                <Tab heading='Tab1'>
                    <RecordList>
                    </RecordList>
                </Tab>
                <Tab heading='Tab2'>
                    <Button onPress={test}></Button>
                </Tab>
            </Tabs>
        )
    }
}

